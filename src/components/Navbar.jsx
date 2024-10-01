import logo from '../assets/Anushreelogo.png';
import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-20' src={logo} alt="Anushree Jain Logo" width={100} />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/anushree-jain-2990a0285/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/AnushreeJ13" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:anushree025btcseai23@igdtuw.ac.in " aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
