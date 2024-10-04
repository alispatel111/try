import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the email
    emailjs
      .send('service_c8iag3s', 'template_kg970bi', formData, 'SVKz-D0cD8hn6RRgw') // Replace with your EmailJS credentials
      .then((response) => {
        console.log('Email successfully sent:', response);
        setSuccessMessage('Your message has been sent successfully!');
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        setErrorMessage('There was an error sending your message. Please try again later.');
        setSuccessMessage('');
      });
  };

  return (
    <section className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white text-center mb-6">Get In Touch</h2>
        
        {/* Success/Error Messages */}
        {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}
        {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}

        {/* Form */}
        <form className="max-w-lg mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-blue-500 transition duration-300 transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
