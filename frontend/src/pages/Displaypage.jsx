
import React, { useRef, useState } from 'react'
import PasswordPrompt from "../components/PasswordPrompt"
import { useLocation, useParams } from 'react-router-dom'

const Displaypage = () => {

    const [allowed,setAllowed]=useState(false);
    const [noteData,setNoteData]=useState("");
    const location=useLocation();
    const passwordProtected=location.state.passwordProtected.protect;
    const note=location.state.passwordProtected.note;

    console.log(allowed)


  return (
    <div>
      {!allowed && !note && <PasswordPrompt setAllowed={setAllowed} setNoteData={setNoteData}/>}
      {note && <h1>{note}</h1>}
      {allowed && <h1>{noteData}</h1>}

    </div>
  )
}

export default Displaypage
