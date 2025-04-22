import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {toast} from "react-toastify"

const PasswordPrompt = ({ setAllowed, setNoteData }) => {
  const [password, setPassword] = useState("");
  const {id}=useParams();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res=await axios.post(`/display/${id}/pass`,{password})
    
    if(res.data.message==="incorrect")
      {
        toast.error("Invalid password")
      }
    if(res.data.message==="correct")
      {
        setAllowed(true);
        setNoteData(res.data.note)
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-sm">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Password Protected Note</h1>
          <p className="mt-2 text-gray-600">Please enter the password to view this note</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordPrompt;