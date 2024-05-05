import React, { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'



function LogoutButton() {
    const {user,setUser}=useContext(UserContext);
    
    const navigate= useNavigate()
    const logout=async()=>{
        
        axios.get("/logout")
        .then((res)=>{
            if(res.data.message==="Logout success")
            {
            setUser(null);
            navigate("/home");
            }
        })
        .catch((err)=>{
            console.log("error while logging out:", err)
        })
        
        // console.log("User after logout is: ",user)
    }

  return (
    <button onClick={logout}>
        Logout
    </button>
  )
}

export default LogoutButton
