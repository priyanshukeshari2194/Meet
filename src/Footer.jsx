// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Cloud Connect. All rights reserve with PRIYANSHU & PRATHMESH and wrong pratices may subject to copyrights and Legal Notice</p>
      </div>
    </footer>
  );
};

export default Footer;
