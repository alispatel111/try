import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router for routing
import Navbar from './components/Navbar'; // Ensure this path is correct
import Hero from './components/Hero'; // Ensure this path is correct
import ContactForm from './components/ContactForm'; // Ensure this path is correct
import Footer from './components/Footer'; // Ensure this path is correct

const App = () => {
  return (
    <Router> {/* Wrap your components in Router for routing */}
      <div>
        <Navbar />
        <Hero />
        <ContactForm />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
