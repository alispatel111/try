import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true); // State to manage navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  const handleScroll = () => {
    const currentScrollY = window.scrollY; // Current scroll position
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false); // Hide navbar on scroll down
    } else {
      setIsVisible(true); // Show navbar on scroll up
    }
    setLastScrollY(currentScrollY); // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Attach scroll event
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, [lastScrollY]); // Run the effect whenever lastScrollY changes

  return (
    <nav className={`bg-blue-600 shadow-lg sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">BrandName</div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-200 transition duration-300 transform hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="text-white hover:text-gray-200 transition duration-300 transform hover:scale-105"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-gray-200 transition duration-300 transform hover:scale-105"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-gray-200 transition duration-300 transform hover:scale-105"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
