"use client";

import React from 'react';

const Benefits = () => {
  return (
    <section className="section-padding bg-dark-300 relative" id="benefits">
      {/* Background elements */}
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <span className="bg-dark-100 text-accent text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 inline-block">COURSE BENEFITS</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-light-100 mb-3 sm:mb-6">
            Why This Course Works
          </h2>
          <p className="text-base sm:text-xl text-light-100 max-w-2xl mx-auto">
            Our course teaches you to prove your ideas with minimal risk, so you only invest fully in concepts with real potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
          <div className="bg-dark-200 p-6 sm:p-8 rounded-lg border border-dark-100/80 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-light-100 border-b border-dark-100/80 pb-4">What's Included in the Course</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-accent font-bold mr-3">01.</span>
                <div>
                  <h4 className="font-bold text-light-100 mb-1">Text Lessons & Tutorials</h4>
                  <p className="text-light-100/80">8 comprehensive modules with step-by-step written instruction on the entire validation process.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-3">02.</span>
                <div>
                  <h4 className="font-bold text-light-100 mb-1">Worksheets & Templates</h4>
                  <p className="text-light-100/80">Done-for-you research templates, validation scripts, and worksheets that simplify implementation.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-3">03.</span>
                <div>
                  <h4 className="font-bold text-light-100 mb-1">Community Support</h4>
                  <p className="text-light-100/80">Access to our private student community where you can get feedback on your ideas and validation efforts.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-dark-200 p-6 sm:p-8 rounded-lg border border-dark-100/80 hover:border-primary/30 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-light-100 border-b border-dark-100/80 pb-4">Who This Course Is For</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-accent font-bold mr-3">01.</span>
                <div>
                  <h4 className="font-bold text-light-100 mb-1">First-Time Founders</h4>
                  <p className="text-light-100/80">Skip the painful mistakes most founders make by learning validation techniques before building.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-3">02.</span>
                <div>
                  <h4 className="font-bold text-light-100 mb-1">Serial Idea Generators</h4>
                  <p className="text-light-100/80">The course teaches you how to focus on your most promising ideas instead of jumping between projects.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent font-bold mr-3">03.</span>
                <div>
                  <h4 className="font-bold text-light-100 mb-1">Risk-Averse Builders</h4>
                  <p className="text-light-100/80">Our course gives you the confidence to launch by reducing uncertainty through systematic validation.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 