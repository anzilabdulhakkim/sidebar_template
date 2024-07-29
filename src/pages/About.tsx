import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-10">
      <div className="max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
        </p>
      </div>
    </div>
  );
};

export default About;
