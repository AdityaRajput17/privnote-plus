import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import LogoutButton from "../LogoutButton";

const MobileMenu = ({ isOpen, onClose }) => {
  const { user } = useContext(UserContext);

  if (!isOpen) return null;

  return (
    <div className="sm:hidden">
      <div className="pt-2 pb-3 space-y-1">
        <Link 
          to="/home" 
          className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          onClick={onClose}
        >
          Home
        </Link>
        <Link 
          to="/view" 
          className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          onClick={onClose}
        >
          View
        </Link>
        <Link 
          to="/manage" 
          className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          onClick={onClose}
        >
          Manage
        </Link>
        <Link 
          to="/howtouse" 
          className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          onClick={onClose}
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
              onClick={onClose}
            >
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={onClose}
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileMenu; 