import React, { useEffect, useRef, useState } from 'react';
import Anushree_about from "../assets/Anushree_about.jpg";
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

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

    return (
        <div ref={ref} className="border-b border-neutral-900 pb-4">
            <h1 className='my-20 text-center text-4xl'>
                About <span className='text-neutral-500'>Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div
                    className="w-full lg:w-1/2 lg:p-8"
                    initial={{ opacity: 0, x: -50 }} // Start with opacity 0 and slide from the left
                    animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animate when visible
                    transition={{ duration: 0.5 }} // Duration of the animation
                >
                    <div className="flex items-center justify-center">
                        <img
                            src={Anushree_about}
                            alt="about"
                            width={300}
                            className="rounded-lg shadow-lg transition transform hover:scale-105"
                        />
                    </div>
                </motion.div>
                <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, x: 50 }} // Start with opacity 0 and slide from the right
                    animate={isVisible ? { opacity: 1, x: 0 } : {}} // Animate when visible
                    transition={{ duration: 0.5 }} // Duration of the animation
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6 lg:px-20'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
