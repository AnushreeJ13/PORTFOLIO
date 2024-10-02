import React from 'react';
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants"; // Ensure this is correctly defined
import profilePic from "../assets/AnushreeProfile.jpg"; // Check the image path

const Hero = () => {
    const text = "Aspiring SDE"; // The text to display

    return (
        <div className="border-b border-neutral-900 pb-12 lg:pb-24 lg:mb-35 overflow-hidden">
            <div className="flex flex-wrap items-center">
                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start lg:px-20">
                        <motion.h1 
                            animate={{ x: 20 }} // Reduce the horizontal shift to avoid overflow
                            transition={{ ease: "easeOut", duration: 2 }}
                            className="text-5xl lg:text-8xl font-thin tracking-tight leading-none pb-4 lg:pb-8 mt-8 lg:mt-16 text-white"
                        >
                            Anushree Jain
                        </motion.h1>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
                            animate={{ opacity: 1, scale: 1 }} // Final state for animation
                            transition={{ duration: 0.5 }} // Animation duration
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 bg-clip-text text-transparent text-3xl lg:text-5xl font-semibold tracking-tighter"
                        >
                            {text} {/* Directly displaying the text */}
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
