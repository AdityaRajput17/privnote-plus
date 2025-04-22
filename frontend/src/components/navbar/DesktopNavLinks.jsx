import { Link } from "react-router-dom";

const DesktopNavLinks = () => {
  return (
    <div className="hidden sm:flex sm:items-center sm:space-x-8">
      <Link to="/home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
      <Link to="/view" className="text-gray-600 hover:text-gray-900 transition-colors">View</Link>
      <Link to="/manage" className="text-gray-600 hover:text-gray-900 transition-colors">Manage</Link>
      <Link to="/howtouse" className="text-gray-600 hover:text-gray-900 transition-colors">How to use?</Link>
    </div>
  );
};

export default DesktopNavLinks; 