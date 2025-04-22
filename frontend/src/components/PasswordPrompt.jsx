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
        toast.error("Incorrect password")
      }
    if(res.data.message==="correct")
      {
        setAllowed(true);
        setNoteData(res.data.note)
      }
  };

  return (
    <div className=''>
      <h1>The Note is password protected!</h1>
      <h1>Enter the password:</h1>
      <div className='flex flex-col'>
        <input
        className='border w-[40%]'
        type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button className='w-14' onClick={handleSubmit}>
          submit
        </button>
      </div>
    </div>
  );
};

export default PasswordPrompt;