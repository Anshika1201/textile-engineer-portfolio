import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <nav className="bg-indigo-700 p-4 fixed w-full top-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Textile Portfolio Logo"
            className="h-10 w-10 object-contain rounded-full"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span
            className="text-white text-xl font-bold hidden hover:text-indigo-300 transition"
            style={{ display: 'none' }}
          >
            Textile Portfolio
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;