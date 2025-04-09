"use client";

import React from 'react';
import { FaArrowRight, FaLightbulb } from 'react-icons/fa';
import { useWaitlistModal } from '../context/WaitlistContext';

const Hero = () => {
  const { openModal } = useWaitlistModal();
  
  return (
    <section className="bg-dark-300 section-padding relative overflow-hidden pt-28" id="hero">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block bg-dark-100/80 backdrop-blur-sm p-2 px-5 rounded-full mb-8 border border-primary/40 shadow-lg shadow-primary/5">
          <span className="flex items-center text-primary font-medium text-sm">
            <FaLightbulb className="mr-2 animate-pulse text-accent" /> Validation Course
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-light-100 leading-tight mb-8">
          Don't Just Think. <span className="text-primary">Prove Your Ideas</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-light-100 mb-10 max-w-3xl mx-auto">
          A comprehensive text-based course that teaches you how to validate your ideas before investing significant resources. Turn concepts into validated products that people actually want.
        </p>
        
        <div>
          <button 
            className="bg-primary hover:bg-primary/90 text-light-100 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 text-base sm:text-lg flex items-center mx-auto group shadow-lg shadow-primary/20"
            onClick={openModal}
          >
            Join Course Waitlist <FaArrowRight className="ml-3 text-sm group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-light-100/70 mt-4 text-xs sm:text-sm">
            Includes course materials + validation toolkit + private community
          </p>
          <p className="text-light-100/60 mt-2 text-xs">
            One-time payment. Lifetime course access. No recurring fees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 