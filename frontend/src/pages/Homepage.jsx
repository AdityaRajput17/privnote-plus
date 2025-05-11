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
    <div className="h-screen w-full flex flex-col px-6 box-border">

      { noteState ? 
      <NoteCreator updateState={setNoteState} updateNoteId={setNoteId}/> 
      :
      <>
      <NoteLinkDisplay link={"https://"+hostname+"/view/"+noteId}/>
      <div className="flex items-center max-w-3xl w-full mx-auto mt-6 gap-4 px-6">
        <h3 className="text-lg text-gray-700">Create another privNote?</h3>
        <button 
          onClick={()=>{setNoteState(true)}}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          New Note
        </button>
      </div>
      </>
      }
    </div> 
  )
}

export default Homepage
