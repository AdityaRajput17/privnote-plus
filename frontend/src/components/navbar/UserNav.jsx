import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import LogoutButton from "../LogoutButton";

const UserNav = () => {
  const { user } = useContext(UserContext);

  if (user) {
    return (
      <>
        <span className="text-sm sm:text-base font-medium text-gray-700 px-3 py-1.5 bg-gray-50 rounded-md">
          {user.name}
        </span>
        <div className="hidden sm:block">
          <LogoutButton />
        </div>
      </>
    );
  }

  return (
    <div className="hidden sm:flex sm:space-x-4">
      <Link to="/login" className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">Log in</Link>
      <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Sign up
      </Link>
    </div>
  );
};

export default UserNav; 