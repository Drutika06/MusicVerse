import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Mock user data (in a real app, this would come from state or context)
  const [user, setUser] = useState({});

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">MusicVerse</Link>
        <div className="space-x-4 flex items-center">
          <Link to="/explore" className="hover:text-gray-400">Explore</Link>
          <Link to="/mood" className="hover:text-gray-400">Library</Link>
          <Link to="/games" className="hover:text-gray-400">Games</Link>
          <Link to="/tutorials" className="hover:text-gray-400">Tutorials</Link>
          

          {/* Hamburger Menu (Three Dashes) */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white font-semibold hover:text-gray-400 flex items-center"
            >
              <div className="space-y-2">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg">
                <Link to="/signup" className="block px-4 py-2 text-white hover:bg-gray-700">Sign Up</Link>
                <Link to="/logout" className="block px-4 py-2 text-white hover:bg-gray-700">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;