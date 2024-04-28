import { UserContext } from "../context/userContext"
import { useContext } from "react"

const Homepage = () => {
  const user =useContext(UserContext)
  console.log(user)
  return (  
    <>
      <h1>HomePage</h1>
      {<h1>{user.user.name}</h1>}
    </>
  )
}

export default Homepage
