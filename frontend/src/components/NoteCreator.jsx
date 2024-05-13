import React from 'react'
import { useState , useContext } from 'react'
import NoteCreatorOptions from './NoteCreatorOptions'
import { comparePass } from '../utils/comparePass'
import { UserContext } from '../context/userContext'
import axios from 'axios'
const NoteCreator = () => {

    const {user}=useContext(UserContext);

    const [showOptions,setShowOptions]=useState(false)
    const [noteData,setNoteData]=useState({
        note :"",
        optionData:{
        password: "",
        cpassword: "",
        expiry: "after",
        DontWarn: false,
    }
    })

    const setOptions=()=>{
        setShowOptions(!showOptions);
    }

    const getData=(optionData)=>{
        setNoteData({...noteData, optionData})
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      //checking passwords match
      if(comparePass(noteData.optionData.password,noteData.optionData.cpassword))
      {
        //! post request for note creation
        console.log("passwords match");
        {user ? axios.post("/note",{noteData,email:user.email})
        : axios.post("/note",{noteData,email:""})}
      }
    }
  return (
    <div className='flex flex-col w-[70%]'>
      <textarea className="w-[100%] border border-gray-400 rounded-md px-3 py-2"
        placeholder='Enter your text here...'
        onChange={(e)=>{setNoteData({...noteData ,note: e.target.value})}}
      />

      <div className='flex justify-between'>
        <button className='border border-black w-24 my-2' onClick={handleSubmit}>Submit</button>
        <button className='border border-black w-24 my-2'
        onClick={setOptions}
        >Options</button>
      </div>
      {showOptions && <NoteCreatorOptions getData={getData}/>}
    </div>
  )
}

export default NoteCreator
