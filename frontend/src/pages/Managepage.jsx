import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const Managepage = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(UserContext);
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setIsLogin(true);
            fetchNotes();
        }
    }, [user]);

    const fetchNotes = async () => {
        try {
            const response = await axios.post("/manage", { email: user.email });
            setNotes(response.data);
            setLoading(false);
        } catch (error) {
            setError("Failed to fetch notes");
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/delete/${id}`);
            setNotes(notes.filter(note => note.id !== id));
        } catch (error) {
            setError("Failed to delete note");
        }
    };

    if (!isLogin) return <div className="p-4 text-center">Please login to view notes</div>;
    if (loading) return <div className="p-4 text-center">Loading...</div>;
    if (error) return <div className="p-4 text-center text-red-500">{error}</div>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">My Notes</h1>
            {notes.length === 0 ? (
                <p>No notes found</p>
            ) : (
                <div className="space-y-4">
                    {notes.map((note) => (
                        <div key={note.id} className="border p-4 rounded flex justify-between items-center">
                            <div>
                                <p className="font-medium">ID: {note.id}</p>
                                <p className="text-gray-600">Created: {new Date(note.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div className="space-x-2">
                                <button 
                                    onClick={() => handleDelete(note.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Managepage;