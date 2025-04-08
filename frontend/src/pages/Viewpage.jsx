import axios from 'axios';
import React, {useState} from 'react'
import {toast} from "react-toastify"
import WarningPage from './Warningpage';
import { useNavigate } from 'react-router-dom';
const Viewpage = () => {
    //TODO: find a way to make warning button toggle 
    const [id,setId]=useState(null);
    //const [warningPage,setWarningPage]=useState(false);
    const [expiry,setExpiry]=useState("after");
    const navigate=useNavigate();

    const navigateToNote=(res)=>{
      navigate(`/view/${id}`, { 
        state: { passwordProtected: res.data.passwordProtected } 
    })}

    const handleClick = async () => {
  try {
    const res = await axios.get(`/view/${id}`);
    
    
    if (res.data === "No Note") {
      return toast.error("Incorrect ID");
    }
    setExpiry(res.data.expiry)
    // if (res.data.warn === "true") {  //this opens warning page again n again
    //   setWarningPage(true);
    //   ;
    //   return; // Don't navigate yet
    // }
    
    // navigate(`/view/${id}`, { 
    //   state: { passwordProtected: res.data.passwordProtected } 
    navigateToNote(res)
    
    // if (expiry === 'after') {
    //   await axios.delete(`/delete/${id}`);
    // }
  }
   catch (error) {
    console.log(error);
  }
};


  return (
    <div>
      <h1>ViewPage</h1>
      <h1>Enter Note ID</h1>

      
      <div className='flex flex-col'>
      <input type="text" placeholder='e.g. xAms1As'
        className='border-2 px-4 py-1 w-[40%]'
        onChange={(e)=>{setId(e.target.value)}}
      />
      <button className='w-16' onClick={handleClick}> submit</button>
      </div>
    </div>
  )
}

export default Viewpage
