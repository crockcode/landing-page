"use client";

import React from 'react';
import { FaCheckCircle, FaUsers, FaRocket, FaChartLine, FaRegLightbulb } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaRegLightbulb className="text-accent" />,
      title: "Test Your Concepts",
      description: "Learn proven validation techniques to test your ideas with real people before investing significant time and resources."
    },
    {
      icon: <FaCheckCircle className="text-primary" />,
      title: "Get Proof of Concept",
      description: "Our course teaches you how to quickly create testable prototypes that validate your assumptions."
    },
    {
      icon: <FaUsers className="text-primary" />,
      title: "Build Your First Audience",
      description: "Course modules on how to attract early adopters who will provide crucial feedback and become your first customers."
    },
    {
      icon: <FaRocket className="text-accent" />,
      title: "Launch With Confidence",
      description: "Step-by-step text guides on launching your proven idea with data-backed confidence instead of just hope and guesswork."
    },
    {
      icon: <FaChartLine className="text-primary" />,
      title: "Scale What Works",
      description: "Advanced course content on focusing your energy on growing products that have proven market demand."
    }
  ];

  return (
    <section className="section-padding bg-dark-200 relative" id="features">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <span className="bg-dark-100 text-primary text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 inline-block">COURSE CURRICULUM</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-light-100 mb-3 sm:mb-6">
            What You'll Learn in This Course
          </h2>
          <p className="text-base sm:text-xl text-light-100 max-w-2xl mx-auto">
            A comprehensive curriculum that teaches you the complete idea validation framework from start to finish.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-dark-100 p-5 sm:p-7 rounded-lg border border-dark-100/80 hover:border-primary/30 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="bg-dark-300 p-2 sm:p-3 rounded-lg w-fit mb-3 sm:mb-5 text-xl sm:text-2xl">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-light-100">{feature.title}</h3>
              <p className="text-sm sm:text-base text-light-100/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 