
const Navbar = () => {

  return (
    <nav className="bg-gray-400 h-16 flex justify-between items-center">
      <div>
      <p>PrivNotes</p>
      </div>
      
      <div className="w-[50%] flex justify-around">
        <a href="#">Home</a>
        <a href="#">View</a>
        <a href="#">About</a>
        <a href="#">How to use?</a>
      </div>
      
      <div className="w-[10%] flex justify-between">
        <a href="#">Log in</a>
        <a href="#">Signup</a>
      </div>
    </nav>
  )
}

export default Navbar;
