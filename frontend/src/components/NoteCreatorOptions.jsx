import React,{useEffect, useState} from 'react'

const NoteCreatorOptions = ({getData}) => {
    const [optionData,setOptionData]=useState({
        password: "",
        cpassword: "",
        expiry: "after",
        DontWarn: false,
    })

    //sending data to NoteCreator component whenever there is change in optionData
    useEffect(()=>{
        getData(optionData)
    },[optionData])

  return (
      <div className='flex flex-col gap-5'>

        <div className='flex gap-5'>
          <input className="border border-gray-400 rounded-md px-2 py-1"
          placeholder='Password' value={optionData.password} onChange={(e)=>{setOptionData({...optionData ,password: e.target.value})}}></input>
          <input className="border border-gray-400 rounded-md px-2 py-1"
          placeholder='Confirm password' value={optionData.cpassword} onChange={(e)=>{setOptionData({...optionData ,cpassword: e.target.value})}}></input>
        </div>

        <div className='flex gap-5'>
          <label>Note self-destructs after:</label>
          <select onChange={(e)=>{setOptionData({...optionData ,expiry: e.target.value})}}>
            <option value="after">after reading it</option>
            <option value="1h">1 hour from now</option>
            <option value="24h">24 hour from now</option>
            <option value="7d">7 days from now</option>
            <option value="30d">30 days from now</option>
          </select>
        </div>

        <div className="flex gap-5">
            <input type="checkbox" onChange={(e)=>{setOptionData({...optionData ,DontWarn: e.target.checked})}}/>
            <p>Do not warn before showing and destroying the note</p>
        </div>

      </div>
  )
}

export default NoteCreatorOptions
