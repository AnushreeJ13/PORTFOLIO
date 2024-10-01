import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

const Education = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const educationRef = useRef(null);

    const educationDetails = [
        {
            institution: "Indira Gandhi Delhi Technical University for Women",
            year: "2023 - 2027",
            type: "B.Tech - CSE - AI",
            percentage: "CGPA: 9.69",
        },
        {
            institution: "Mayo International School",
            year: "2021 - 2023",
            type: "Senior Secondary",
            percentage: "Percentage: 95.2%",
        },
        {
            institution: "DPS Indirapuram",
            year: "2008 - 2021",
            type: "Secondary",
            percentage: "Percentage: 98.6%",
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const { top } = educationRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if the element is in the viewport
            if (top < windowHeight && top >= 0) {
                displayNextEducation();
                window.removeEventListener("scroll", handleScroll); // Remove the event listener once visible
            }
        };

        const displayNextEducation = () => {
            // If there's no more education details to show, return early
            if (currentIndex >= educationDetails.length) return;

            // Set a timeout to display the next education entry
            setTimeout(() => {
                setCurrentIndex(prevIndex => prevIndex + 1); // Use functional state update
                displayNextEducation(); // Call the next display after delay
            }, 1000); // Delay before showing the next education
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Cleanup
    }, [currentIndex, educationDetails.length]);

    return (
        <div ref={educationRef} className="border-b border-neutral-900 pb-4">
            <h1 className='text-center text-4xl border-b border-neutral-800 pb-16'>Education</h1>
            <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
                {educationDetails.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="relative w-full text-left py-4"
                        initial={{ opacity: 0, y: 30 }} // Start hidden
                        animate={index <= currentIndex ? { opacity: 1, y: 0 } : {}} // Fade in when visible
                        transition={{ duration: 0.5 }} // Animation duration
                    >
                        {/* Education Entry */}
                        <div className="relative z-10 text-white"> {/* Ensure text is above any potential background */}
                            <h3 className="text-3xl font-semibold">{edu.institution}</h3>
                            <p className="text-lg text-neutral-300">{edu.year}</p>
                            <p className="text-lg text-neutral-300">{edu.type}</p>
                            <p className="text-lg text-purple-300">{edu.percentage}</p>

                            {/* Line to separate entries */}
                            {index < educationDetails.length - 1 && (
                                <div className="absolute left-0 top-full w-full border-t border-pink-300 mt-4"></div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;
