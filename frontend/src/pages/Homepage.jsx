import { UserContext } from "../context/userContext"
import { useContext, useState } from "react"
import NoteCreator from "../components/NoteCreator"
import NoteLinkDisplay from "../components/NoteLinkDisplay"
const Homepage = () => {
  const {user} = useContext(UserContext)

  const {hostname}=window.location;
  const[noteState,setNoteState]=useState(true);
  const[noteId,setNoteId]=useState(null);
  return (  
    <div className="h-screen w-screen flex flex-col">

      <h1>HomePage</h1>
      {!!user && <h1>{user.name}</h1>}

      { noteState ? 
      <NoteCreator updateState={setNoteState} updateNoteId={setNoteId}/> 
      :
      <>
      <NoteLinkDisplay link={hostname+"/view/"+noteId}/>
      <div className="flex gap-3">
        <h3>Create another privNote?</h3>
        <button onClick={()=>{setNoteState(true)}}>New Note</button>
      </div>
      </>
      }
    </div> 
  )
}

export default Homepage
