
import React, { useEffect, useRef, useState } from 'react'
import PasswordPrompt from "../components/PasswordPrompt"
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

//TODO: Setup a useffect on allowed, whenever the allowed state is changed we can send a http request to destroy the note.

const Displaypage = () => {

    const [allowed,setAllowed]=useState(false);
    const [noteData,setNoteData]=useState("");
    const location=useLocation();
    const passwordProtected=location.state.passwordProtected.protect;
    console.log(passwordProtected)
    const note=location?.state?.passwordProtected?.note;
    const { id } = useParams();

    useEffect(() => {
      console.log('useffect ran!!')
      if (allowed) {
        const deleteNote= async()=>{
        await axios.delete(`/delete/${id}`);
        console.log('deleted')
      }
      
      deleteNote()
    }
  }, [allowed, id])
 

  return (
    <div>
      {!allowed && !note && <PasswordPrompt setAllowed={setAllowed} setNoteData={setNoteData}/>}
      {note && <h1>{note}</h1>}
      {allowed && <h1>{noteData}</h1>}
    </div>
  )
}

export default Displaypage
