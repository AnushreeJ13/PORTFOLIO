import React from 'react';
import ContactForm from '../components/ContactForm.jsx';

const Contact = () => {
  const email = "anushree025btcseai23@igdtuw.ac.in"; // Add your email here

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4 text-gray-300">
          {/* Display the email */}
          You can also reach me at: <a href={`mailto:${email}`} className="text-purple-300 hover:underline">{email}</a>
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
