import React from 'react';
import { Link } from 'react-router-dom';

// Sidebar component with navigation links
const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">SIDEBAR</h1>
        <hr className='mt-5'/>
        <nav className="mt-9">
          <Link to="/" className="block p-2 text-sm md:text-base lg:text-lg hover:bg-gray-700 hover:border-r-2 hover:border-l-2 text-center">HOME</Link>
          <Link to="/about" className="block p-2 text-sm md:text-base lg:text-lg hover:bg-gray-700 hover:border-r-2 hover:border-l-2 text-center">ABOUT</Link>
          <Link to="/contact" className="block p-2 text-sm md:text-base lg:text-lg hover:bg-gray-700 hover:border-r-2 hover:border-l-2 text-center">CONTACT</Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
