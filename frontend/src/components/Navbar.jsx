import { Link } from "react-router-dom";
import {UserContext} from "../context/userContext"
import { useContext, useState } from "react";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const {user} = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Navbar */}
          <div className="flex items-center">
            <Link to="/home" className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors">
              PrivNotes
            </Link>
          </div>

          {/* Center Navbar - Desktop */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
            <Link to="/view" className="text-gray-600 hover:text-gray-900 transition-colors">View</Link>
            <Link to="/manage" className="text-gray-600 hover:text-gray-900 transition-colors">Manage</Link>
            <Link to="/howtouse" className="text-gray-600 hover:text-gray-900 transition-colors">How to use?</Link>
          </div>
          
          {/* Right Navbar */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm sm:text-base font-medium text-gray-700 px-3 py-1.5 bg-gray-50 rounded-md">
                  {user.name}
                </span>
                <div className="hidden sm:block">
                  <LogoutButton />
                </div>
              </>
            ) : (
              <div className="hidden sm:flex sm:space-x-4">
                <Link to="/login" className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">Log in</Link>
                <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Sign up
                </Link>
              </div>
            )}
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link 
            to="/home" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/view" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            View
          </Link>
          <Link 
            to="/manage" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Manage
          </Link>
          <Link 
            to="/howtouse" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            How to use?
          </Link>
          {user ? (
            <div className="px-3 py-2">
              <LogoutButton />
            </div>
          ) : (
            <>
              <Link 
                to="/login" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link 
                to="/signup" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
