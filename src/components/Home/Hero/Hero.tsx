"use client";
import React, { useState, useEffect } from "react";
import { heroCarouselImage, heroTitle, heroSubtitle } from "@/data/data"; // Updated import
import { motion, AnimatePresence } from "framer-motion";
import { CircleChevronRight } from "lucide-react";

const Hero = () => {
  const [hasStarted, setHasStarted] = useState(false); // Track if carousel has started

  useEffect(() => {
    setHasStarted(true); // Set to true immediately since there's no transition
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Carousel Image */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence>
          <motion.div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${heroCarouselImage})` }} // Use the single image
            initial={{ x: 0 }} // No animation on load
            animate={{ x: 0 }} // Static since there's only one image
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </AnimatePresence>
      </div>

      {/* Black opacity overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Shimmering Heading */}
        <h1 className="text-6xl font-bold mb-1 shimmer">{heroTitle}</h1> {/* Use the title from data.ts */}

        {/* Subheading */}
        <p className="text-lg mb-4">{heroSubtitle}</p> {/* Use the subtitle from data.ts */}

        {/* Button */}
        <div className="flex justify-center"> {/* Flex container to center the button */}
          <button className="flex items-center bg-yellow-400 text-black px-6 py-2 rounded-full text-2xl font-normal hover:bg-yellow-500 transition-transform transform hover:scale-105 duration-300">
            <span>Book Now</span>
            <CircleChevronRight className="ml-2" /> {/* Adjust margin as needed */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
