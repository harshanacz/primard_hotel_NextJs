"use client";

import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import './GoUpButton.css';

const GoUpButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scaleUp, setScaleUp] = useState(false); // State for scale animation

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Calculate scroll percentage
    const totalScroll = documentHeight - windowHeight;
    const scrolled = (scrollTop / totalScroll) * 100;

    // Show button if scrolled more than 1vh
    setVisible(scrollTop > windowHeight);

    // Update scroll percentage
    setScrollPercentage(scrolled);

    // Scale up animation when reaching the bottom
    if (scrolled >= 100) {
      setScaleUp(true);
    } else {
      setScaleUp(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    visible && (
      <button
        className={`go-up-button ${scaleUp ? 'scale-pop' : ''}`}
        onClick={scrollToTop}
      >
        <div
          className="fill-bar"
          style={{ height: `${scrollPercentage}%` }}
        />
        <ChevronUp size={24} color="#fff" />
      </button>
    )
  );
};

export default GoUpButton;
