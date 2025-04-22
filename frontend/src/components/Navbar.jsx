import { Link } from "react-router-dom";
import { useState } from "react";
import DesktopNavLinks from "./navbar/DesktopNavLinks";
import UserNav from "./navbar/UserNav";
import MobileMenu from "./navbar/MobileMenu";
import MobileMenuButton from "./navbar/MobileMenuButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Navbar */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors">
              PrivNotes
            </Link>
          </div>

          {/* Center Navbar - Desktop */}
          <DesktopNavLinks />
          
          {/* Right Navbar */}
          <div className="flex items-center space-x-4">
            <UserNav />
            <MobileMenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
}

export default Navbar;
