import React from "react";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-blue-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">

          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="home"  className="text-white hover:text-gray-300">
              Home
            </Link>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="feature" className="text-white hover:text-gray-300">
              Services
            </Link>
          </div>
         
          <div className="px-5 py-2 cursor-pointer">
            <Link to="about"className="text-white hover:text-gray-300">
              About Us
            </Link>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="demo"className="text-white hover:text-gray-300">
              Why LIC?
            </Link>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="contact" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
          </div>
          
        </nav>
        
        <div className="mt-8 flex justify-center">
          <p className="text-base text-white">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;