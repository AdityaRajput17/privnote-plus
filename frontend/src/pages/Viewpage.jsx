import axios from 'axios';
import React, {useState} from 'react'
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';

const Viewpage = () => {
    const [id, setId] = useState("");
    const [expiry, setExpiry] = useState("after");
    //const [warningPage,setWarningPage]=useState(false);
    const navigate = useNavigate();

    const navigateToNote = (res) => {
        navigate(`/view/${id}`, { 
            state: { 
                data: res.data,
                passwordProtected: res.data.passwordProtected 
            }
        });
    }

    const handleClick = async () => {
        try {
            const res = await axios.get(`/view/${id}`);
            
            if (res.data === "No Note") {
                return toast.error("Incorrect ID");
            }
            
            setExpiry(res.data.expiry);
            // if (res.data.warn === "true") {  //this opens warning page again n again
            //   setWarningPage(true);
            //   ;
            //   return; // Don't navigate yet
            // }
            
            // navigate(`/view/${id}`, { 
            //   state: { passwordProtected: res.data.passwordProtected } 
            navigateToNote(res);
            
            // if (expiry === 'after') {
            //   await axios.delete(`/delete/${id}`);
            // }
        }
        catch (error) {
            console.log(error);
            navigate("/view");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-sm">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">
                        View Note
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Enter the note ID to view its contents
                    </p>
                </div>
                
                <div className="space-y-4">
                    <input 
                        type="text" 
                        placeholder="e.g. xAms1As"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        onChange={(e) => setId(e.target.value)}
                    />
                    <button 
                        onClick={handleClick}
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        View Note
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Viewpage;
