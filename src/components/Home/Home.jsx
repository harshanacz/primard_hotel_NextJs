"use client";
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Rooms from './Rooms/Rooms';
import Footer from './Footer/Footer';
import GoUpButton from '../Common/GoUpButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomerReviewsSection from './Feedback/Feedback';
import FAQSection from './FAQ/FAQ';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };

    initAOS();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Rooms />
      <CustomerReviewsSection />
      <FAQSection/>
      <Footer />
      <GoUpButton />
    </div>
  );
};

export default Home;
