import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Music Library</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-200">Accueil</a>
          <a href="#" className="text-white hover:text-gray-200">Artistes</a>
          <a href="#" className="text-white hover:text-gray-200">Albums</a>
          <a href="#" className="text-white hover:text-gray-200">Contact</a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="#" className="block text-white hover:bg-blue-500 p-2 rounded">Accueil</a>
          <a href="#" className="block text-white hover:bg-blue-500 p-2 rounded">Artistes</a>
          <a href="#" className="block text-white hover:bg-blue-500 p-2 rounded">Albums</a>
          <a href="#" className="block text-white hover:bg-blue-500 p-2 rounded">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
