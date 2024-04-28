import { Link } from "react-router-dom";
const Navbar = () => {

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
      
      <div className="w-[10%] flex justify-between">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </nav>
  )
}

export default Navbar;
