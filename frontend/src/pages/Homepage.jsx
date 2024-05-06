import { UserContext } from "../context/userContext"
import { useContext, useEffect, useState } from "react"
import NoteCreator from "../components/NoteCreator"
const Homepage = () => {
  const {user} = useContext(UserContext)
  
  return (  
    <div className="h-screen w-screen flex flex-col">
      <h1>HomePage</h1>
      {!!user && <h1>{user.name}</h1>}
      <NoteCreator/>
    </div> 
  )
}

export default Homepage
