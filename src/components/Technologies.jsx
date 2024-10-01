import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(null); // Track the clicked index
    const ref = useRef(null);

    const technologies = [
        { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, key: 'React' },
        { icon: <TbBrandNextjs className="text-7xl" />, key: 'Next.js' },
        { icon: <SiMongodb className="text-7xl text-green-500" />, key: 'MongoDB' },
        { icon: <DiRedis className="text-7xl text-red-700" />, key: 'Redis' },
        { icon: <FaNodeJs className="text-7xl text-green-500" />, key: 'Node.js' },
        { icon: <BiLogoPostgresql className="text-7xl text-sky-700" />, key: 'PostgreSQL' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // Stop observing after visibility
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const handleIconClick = (index) => {
        setClickedIndex(index); // Set the clicked index
        setTimeout(() => {
            setClickedIndex(null); // Reset clicked index after animation
        }, 300); // Match this duration with the animation duration
    };

    return ( 
        <div ref={ref} className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.key}
                        className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer" // Added cursor pointer for better UX
                        initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly lower
                        animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to full opacity when visible
                        transition={{ duration: 0.3, delay: index * 0.1 }} // Delay based on index for staggered effect
                        onClick={() => handleIconClick(index)} // Handle icon click
                        whileTap={{ scale: 1.2 }} // Scale up on click
                    >
                        <motion.div
                            animate={clickedIndex === index ? { scale: 1.5 } : {}} // Scale animation for clicked icon
                            transition={{ duration: 0.3 }} // Match the duration
                        >
                            {tech.icon}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
