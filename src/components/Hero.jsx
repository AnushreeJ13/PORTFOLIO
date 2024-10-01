import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants"; // Ensure this is correctly defined
import profilePic from "../assets/AnushreeProfile.jpg"; // Check the image path

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const text = "Aspiring SDE"; // The text to type out
    const typingSpeed = 100; // Speed of the typing effect

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index]);
                index += 1;
            } else {
                clearInterval(typingInterval); // Stop typing when complete
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval); // Cleanup on unmount
    }, [text]);

    return (
        <div className="border-b border-neutral-900 pb-12 lg:pb-24 lg:mb-35">
            <div className="flex flex-wrap items-center">
                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start lg:px-20">
                        <motion.h1 
                            animate={{ x: 100 }} 
                            transition={{ ease: "easeOut", duration: 2 }}
                            className="text-6xl lg:text-8xl font-thin tracking-tight leading-none pb-4 lg:pb-8 mt-8 lg:mt-16 text-white"
                        >
                            Anushree Jain
                        </motion.h1>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 bg-clip-text text-transparent text-4xl lg:text-5xl font-semibold tracking-tighter"
                        >
                            {displayedText}
                        </motion.span>
                        <p className="my-4 lg:my-6 max-w-xl text-lg lg:text-xl font-light tracking-tight text-gray-400 text-center lg:text-left py-4">
                            {HERO_CONTENT} 
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0 -ml-8">
                    <div className="flex justify-center lg:justify-end px-8 lg:px-20 shadow-lg">
                        <img
                            src={profilePic}
                            alt="Anushree Jain"
                            width={300}
                            className="rounded-lg shadow-lg transition transform hover:scale-105"
                            onError={(e) => { e.target.onerror = null; e.target.src = "defaultImagePath.jpg"; }} // Fallback image in case of error
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
