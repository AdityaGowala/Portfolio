import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-100 text-gray-600 py-6 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Aditya Gowala. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
