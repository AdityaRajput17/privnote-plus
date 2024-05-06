import React from 'react'
import { useState } from 'react'
import NoteCreatorOptions from './NoteCreatorOptions'
const NoteCreator = () => {

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

  return (
    <div className='flex flex-col w-[70%]'>
      <textarea className="w-[100%] border border-gray-400 rounded-md px-3 py-2"
        placeholder='Enter your text here...'
        onChange={(e)=>{setNoteData({...noteData ,note: e.target.value})}}
      />

      <div className='flex justify-between'>
        <button className='border border-black w-24 my-2'>Submit</button>
        <button className='border border-black w-24 my-2'
        onClick={setOptions}
        >Options</button>
      </div>
      {showOptions && <NoteCreatorOptions getData={getData}/>}
    </div>
  )
}

export default NoteCreator
