import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center">SIDEBAR</h1>
        <hr className='mt-5'/>
        <nav className="mt-9">
          <Link to="/" className="block p-2 hover:bg-gray-700 hover:border-r-2 hover:border-l-2 text-center">HOME</Link>
          <Link to="/about" className="block p-2 hover:bg-gray-700 hover:border-r-2 hover:border-l-2  text-center">ABOUT</Link>
          <Link to="/contact" className="block p-2 hover:bg-gray-700 hover:border-r-2 hover:border-l-2 text-center">CONTACT</Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
