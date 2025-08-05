// src/components/Footer.js
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-500 pt-8 pb-0">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center md:justify-center">
          <h6 className="text-white text-xl font-bold hover:text-indigo-300 transition"> TEXTILE PORTFOLIO</h6>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center">
          <nav className="space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row">
            <a href="#home" className="text-blue-50 font-semibold hover:text-white hover:underline focus:text-white focus:underline focus:outline-none transition">Home</a>
            <a href="#services" className="text-blue-50 font-semibold hover:text-white hover:underline focus:text-white focus:underline focus:outline-none transition">Services</a>
            <a href="#about" className="text-blue-50 font-semibold hover:text-white hover:underline focus:text-white focus:underline focus:outline-none transition">About</a>
            <a href="#faq" className="text-blue-50 font-semibold hover:text-white hover:underline focus:text-white focus:underline focus:outline-none transition">FAQ</a>
            <a href="#contact" className="text-blue-50 font-semibold hover:text-white hover:underline focus:text-white focus:underline focus:outline-none transition">Contact</a>
          </nav>
        </div>

        {/*Contact Info */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <div className="text-blue-50 font-medium">
            <span className="block text-lg ">Email:</span>
            <a href="mailto:abcdefg@gmail.com"
              className="hover:underline hover:text-white focus:text-white focus:underline focus:outline-none text-blue-50 transition">abcdefg@gmail.com</a>
          </div>
          <div className="flex items-center text-blue-50 font-medium">
            <FaMapMarkerAlt className="mr-2 text-white" />
            State,City
          </div>
        </div>
      </div>

      {/* Mini Footer */}
      <div className="bg-blue-900 mt-8 py-2 text-center">
        <span className="text-blue-100 text-sm font-medium">
          &copy; 2025 Engineer Portfolio. All rights reserved.<span> <a href="mailto:abcdefg@gmail.com"
            className="hover:underline hover:text-white focus:text-white focus:underline focus:outline-none text-blue-50 transition" >
            Website designed by me
          </a></span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
