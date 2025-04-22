import { Link } from "react-router-dom";
import {UserContext} from "../context/userContext"
import { useContext } from "react";
import LogoutButton from "./LogoutButton";

//TODO: set-up navbar for small resolutions (mobile)
//TODO: update the about link to manage

const Navbar = () => {
  const {user} = useContext(UserContext)
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/home" className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors">
              PrivNotes
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
            <Link to="/view" className="text-gray-600 hover:text-gray-900 transition-colors">View</Link>
            <Link to="/manage" className="text-gray-600 hover:text-gray-900 transition-colors">Manage</Link>
            <Link to="/howtouse" className="text-gray-600 hover:text-gray-900 transition-colors">How to use?</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <LogoutButton />
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors">Log in</Link>
                <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
