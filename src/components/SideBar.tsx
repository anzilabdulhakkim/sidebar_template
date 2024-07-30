import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaPhone } from 'react-icons/fa';

// Sidebar component with navigation links
const Sidebar: React.FC = () => {
  return (
    <div className="w-16 md:w-1/4 lg:w-1/5 h-screen bg-black text-white rounded-tr-lg rounded-br-lg">
      <div className="p-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">SIDEBAR</h1>
        <hr className='mt-5'/>
        <nav className="mt-9">
          <Link to="/" className="flex items-center justify-center p-2 text-sm md:text-base lg:text-lg hover:bg-gray-700 hover:border-r-2 hover:border-l-2 rounded-lg">
            <FaHome className="mr-4" /> HOME
          </Link>
          <Link to="/about" className="flex items-center justify-center p-2 text-sm md:text-base lg:text-lg hover:bg-gray-700 hover:border-r-2 hover:border-l-2 rounded-lg">
            <FaInfoCircle className="mr-4" /> ABOUT
          </Link>
          <Link to="/contact" className="flex items-center justify-center p-2 text-sm md:text-base lg:text-lg hover:bg-gray-700 hover:border-r-2 hover-border-l-2 rounded-lg">
            <FaPhone className="mr-4" /> CONTACT
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
