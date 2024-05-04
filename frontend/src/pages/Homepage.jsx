import { UserContext } from "../context/userContext"
import { useContext, useEffect, useState } from "react"

const Homepage = () => {
  const {user} =useContext(UserContext)
  
  return (  
    <>
      <h1>HomePage</h1>
      {!!user && <h1>{user.name}</h1>}
    </>
  )
}

export default Homepage
