import React from "react";
import logo from "../assets/FutureLinks.png"; // Adjust the path as necessary

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Logo Section */}
        <div className="mb-8">
          <img
            src={logo}
            alt="Company Logo"
            className="w-32 h-auto mx-auto transition-transform duration-300 hover:scale-110" // Logo size and animation
          />
        </div>

        {/* Introduction */}
        <h2 className="text-4xl font-bold mb-8">Future Links</h2>
        <p className="text-lg mb-12">
          Discover a world of exceptional products at [Your Company Name]. With
          our dedication to sourcing high-quality items from various countries,
          we offer a shopping experience like no other. Our global reach ensures
          you have access to unique products that cater to your taste and
          lifestyle, all backed by our unparalleled customer service.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group relative border border-transparent rounded-lg p-6 shadow-lg bg-white bg-opacity-20 transition-all duration-300 hover:bg-opacity-40 hover:scale-105 transform hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-4">Quality Products</h3>
            <p className="text-gray-200 group-hover:text-white transition duration-300">
              All our products go through a rigorous quality check to ensure you
              get the best experience.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group relative border border-transparent rounded-lg p-6 shadow-lg bg-white bg-opacity-20 transition-all duration-300 hover:bg-opacity-40 hover:scale-105 transform hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
            <p className="text-gray-200 group-hover:text-white transition duration-300">
              We ensure that your products reach you swiftly, with real-time
              delivery tracking.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group relative border border-transparent rounded-lg p-6 shadow-lg bg-white bg-opacity-20 transition-all duration-300 hover:bg-opacity-40 hover:scale-105 transform hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
            <p className="text-gray-200 group-hover:text-white transition duration-300">
              Our 24/7 customer support is here to help with any inquiries or
              issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
