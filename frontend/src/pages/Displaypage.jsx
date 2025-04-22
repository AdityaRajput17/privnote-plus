import React, { useEffect, useState } from 'react'
import PasswordPrompt from "../components/PasswordPrompt"
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'


const Displaypage = () => {
    
    const location = useLocation();
    
    const { id } = useParams();
    const note = location?.state?.passwordProtected?.note;
    const [noteData, setNoteData] = useState(note);
    const isPasswordProtected = location?.state?.passwordProtected.protect;
    const [allowed, setAllowed] = useState(!isPasswordProtected);

    useEffect(() => {
        if (allowed) {
            const deleteNote = async() => {
                await axios.delete(`/delete/${id}`);
            }
            deleteNote();
        }
    }, [allowed, id]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-3xl w-full p-8 bg-white rounded-lg shadow-sm">
                {isPasswordProtected && !allowed ? (
                    <PasswordPrompt 
                        setAllowed={setAllowed} 
                        setNoteData={setNoteData}
                    />
                ) : (
                    <div className="prose max-w-none">
                        <pre className="whitespace-pre-wrap font-sans">
                            {allowed && noteData}
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Displaypage;
