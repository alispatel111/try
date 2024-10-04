import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">Company</h3>
          <p>© 2024 Company Name. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://futurelinkconsultants.com/" aria-label="Facebook" className="hover:text-gray-400">Home</a>
            <a href="https://futurelinkconsultants.com/about/" aria-label="Twitter" className="hover:text-gray-400">About us</a>
            <a href="https://futurelinkconsultants.com/career/" aria-label="Instagram" className="hover:text-gray-400">carrer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
