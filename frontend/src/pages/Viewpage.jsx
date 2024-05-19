import axios from 'axios';
import React, {useState} from 'react'
import {toast} from "react-toastify"
import WarningPage from './Warningpage';
import { useNavigate } from 'react-router-dom';
const Viewpage = () => {

    const [id,setId]=useState(null);
    const [warningPage,setWarningPage]=useState(false);
    const [expiry,setExpiry]=useState("after");
    const navigate=useNavigate();

    const handleClick=async()=>{
      try {
        const res= await axios.get(`/view/${id}`)
        console.log(res)

        
        if(res.data==="No Note"){
          toast.error("Incorrect ID")
        }
        else if(res.data.warn==="true"){
          setExpiry(res.data.expiry)
          setWarningPage(true);
        }
        
          navigate(`/view/${id}`, { state: { passwordProtected: res.data.passwordProtected } })

      
      } catch (error) {
        console.log(error)
      }
        
        // console.log(res)
    }

  return (
    <div>
      {warningPage && <WarningPage onContinue={setWarningPage} expiry={expiry}/>}
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
