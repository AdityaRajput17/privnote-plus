import { Link } from "react-router-dom";
import {UserContext} from "../context/userContext"
import { useContext, useState } from "react";
import LogoutButton from "./LogoutButton";

//TODO: set-up navbar for small resolutions (mobile)
//TODO: update the about link to manage

const Navbar = () => {
  const {user}=useContext(UserContext)
  // console.log(user)
  
  return (
    <nav className="bg-gray-400 h-16 flex justify-between items-center">
      <div>
      <p>PrivNotes</p>
      </div>
      
      <div className="w-[50%] flex justify-around">
        <Link to="/home">Home</Link>
        <Link to="/view">View</Link>
        <Link to="/about">About</Link>
        <Link to="/howtouse">How to use?</Link>
      </div>
      
      { user ? <div className="w-[10%] flex justify-between">
        <LogoutButton />
        </div>
        :
        <div className="w-[10%] flex justify-between">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div> 
       }
      
    </nav>
  )
}

export default Navbar;
