import React from 'react';

// Contact component displaying contact information
const Contact: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-5">
      <div className="max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-5">Contact</h1>
        <p className="text-gray-700">
          If you have any questions or need further information, feel free to contact us:
        </p>
        <ul className="mt-4 text-gray-700">
          <li className="mb-2"><strong>Phone :</strong> +1 (999) 123-4567</li>
          <li className="mb-2"><strong>Email :</strong> info@example.com</li>
          <li className="mb-2"><strong>Address :</strong> 123 Main Street, Springfield, USA</li>
          <li className="mb-2"><strong>Office Hours :</strong> Mon-Fri, 9 AM - 5 PM</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
