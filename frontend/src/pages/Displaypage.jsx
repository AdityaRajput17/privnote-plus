import React, { useEffect, useState } from 'react'
import PasswordPrompt from "../components/PasswordPrompt"
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { handleNoteData } from '../utils/handleNoteData'

const Displaypage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const [noteData, setNoteData] = useState(null);
    const [isPasswordProtected, setIsPasswordProtected] = useState(false);
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const res = await axios.get(`/view/${id}`);
                
                if (res.data === "No Note") {
                    toast.error("Incorrect ID");
                    navigate("/view");
                    return;
                }

                handleNoteData(res.data, setIsPasswordProtected, setNoteData, setAllowed);
            } catch (error) {
                console.log(error);
                navigate("/view");
            }
        };

        if (location?.state?.data) {
            handleNoteData(location.state.data, setIsPasswordProtected, setNoteData, setAllowed);
        } else {
            fetchNote();
        }
    }, [id, location?.state?.data, navigate]);

    useEffect(() => {
        if (allowed) {
            const deleteNote = async() => {
                await axios.delete(`/delete/${id}`);
            }
            deleteNote();
        }
    }, [allowed, id]);

    return (
        <div className="min-h-screen flex items-start justify-center bg-gray-50">
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
