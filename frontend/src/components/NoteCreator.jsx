import React from 'react'
import { useState, useContext } from 'react'
import NoteCreatorOptions from './NoteCreatorOptions'
import { comparePass } from '../utils/comparePass'
import { UserContext } from '../context/userContext'
import axios from 'axios'
import NoteLinkDisplay from './NoteLinkDisplay'

const NoteCreator = ({updateState, updateNoteId}) => {
    const {user} = useContext(UserContext);
    const [showOptions, setShowOptions] = useState(false)
    const [noteData, setNoteData] = useState({
        note: "",
        optionData: {
            password: "",
            cpassword: "",
            expiry: "after",
            DontWarn: false,
        }
    })

    const setOptions = () => {
        setShowOptions(!showOptions);
    }

    const getData = (optionData) => {
        setNoteData({...noteData, optionData})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(comparePass(noteData.optionData.password, noteData.optionData.cpassword)) {
            let email = user ? user.email : "";
            const res = await axios.post("/note", {noteData, email: email})
            const noteId = res.data;
            updateState(false);
            updateNoteId(noteId);
        }
    }

    return (
        <div className="max-w-3xl w-full mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea 
                    className="w-full h-48 sm:h-64 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Enter your text here..."
                    onChange={(e) => setNoteData({...noteData, note: e.target.value})}
                />

                <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
                    <button 
                        type="button"
                        onClick={setOptions}
                        className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Options
                    </button>
                    <button 
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Create Note
                    </button>
                </div>
            </form>
            
            {showOptions && (
                <div className="mt-4">
                    <NoteCreatorOptions getData={getData}/>
                </div>
            )}
        </div>
    )
}

export default NoteCreator
