import React from 'react';

// About component displaying information about the site
const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-5">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">About</h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
        </p>
      </div>
    </div>
  );
};

export default About;
