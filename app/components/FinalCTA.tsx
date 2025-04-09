"use client";

import React from 'react';
import { FaArrowRight, FaLightbulb, FaLock } from 'react-icons/fa';
import { useWaitlistModal } from '../context/WaitlistContext';

const FinalCTA = () => {
  const { openModal } = useWaitlistModal();
  
  return (
    <section className="section-padding bg-dark-200 relative" id="cta">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-full h-96 bg-primary/10 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center bg-dark-100 px-5 py-2 rounded-full mb-6 text-primary text-sm font-medium">
          <FaLock className="mr-2" /> Limited Course Enrollment
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-light-100">
          Join Our <span className="text-primary">Idea Validation Course</span>
        </h2>
        
        <div className="bg-dark-300 p-6 sm:p-8 md:p-10 rounded-lg border border-primary/20 mb-10 max-w-3xl mx-auto shadow-lg">
          <div className="flex flex-col items-center">
            <div className="bg-primary p-1 rounded-lg mb-6 md:mb-8 shadow-lg">
              <button 
                className="bg-dark-200 hover:bg-dark-100 text-light-100 font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-lg transition-all duration-300 text-base sm:text-lg flex items-center group"
                onClick={openModal}
              >
                Join Course Waitlist <FaArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8 w-full">
              <div className="bg-dark-100 p-4 rounded-lg">
                <span className="text-primary font-bold block mb-1">Full Course Access</span>
                <span className="text-light-100/80 text-sm">8 comprehensive modules</span>
              </div>
              <div className="bg-dark-100 p-4 rounded-lg">
                <span className="text-primary font-bold block mb-1">Practical Exercises</span>
                <span className="text-light-100/80 text-sm">Apply as you learn</span>
              </div>
              <div className="bg-dark-100 p-4 rounded-lg">
                <span className="text-accent font-bold block mb-1">One-Time Payment</span>
                <span className="text-light-100/80 text-sm">No subscriptions</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center mt-6">
            <FaLightbulb className="text-accent mr-2" />
            <p className="text-light-100 text-sm">
              Learn to validate your ideas with our step-by-step text-based course at <span className="text-primary">ProveYourIdeas.com</span>
            </p>
          </div>
          
          <p className="mt-6 text-light-100/70 text-sm">
            One-time payment. Lifetime course access. No recurring fees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA; 