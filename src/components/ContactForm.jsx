import React, { useState } from 'react';
import {motion} from "framer-motion"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend or email service)
    console.log('Form Data Submitted:', formData);
    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-neutral-950 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto my-10">
      <h2 className="text-3xl font-semibold text-white mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-700 rounded-md bg-neutral-900 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-700 rounded-md bg-neutral-900 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-700 rounded-md bg-neutral-900 text-white"
            rows="4"
            required
          ></textarea>
        </div>
        <motion.button whileHover={{ scale: 1.2 }} onHoverStart={e => {}} onHoverEnd={e => {}}
          type="submit"
          className="w-full bg-gradient-to-r  from-pink-300 via-slate-500 to-purple-600 font-bold py-2 px-4 rounded-md hover:from-cyan-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
          Send Message
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
