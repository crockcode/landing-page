"use client";

import React, { createContext, useState, useContext } from 'react';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { addToWaitlist } from '../utils/supabase';

// Create context
const WaitlistContext = createContext();

export const WaitlistProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  const openModal = () => {
    setShowModal(true);
    setError(null);
  };
  
  const closeModal = () => {
    if (!isSubmitting) {
      setShowModal(false);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      console.log('Submitting form with:', { name, email });
      const result = await addToWaitlist({ name, email });
      
      if (result.success) {
        console.log('Successfully added to waitlist:', { name, email });
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset after 3 seconds
        setTimeout(() => {
          setShowModal(false);
          setIsSubmitted(false);
          setEmail('');
          setName('');
        }, 3000);
      } else {
        console.log('Failed to add to waitlist:', result.error);
        
        // Handle different error types
        if (result.error?.includes('table') && result.error?.includes('exist')) {
          setError('The waitlist table hasn\'t been created in Supabase yet. Please follow the setup instructions in SUPABASE_SETUP.md to create the table.');
        } else if (result.error?.includes('configur') || result.error?.includes('Supabase')) {
          setError('Supabase is not configured properly. Please check your environment variables in .env.local file.');
        } else {
          setError(result.error || 'Failed to add to waitlist. Please try again.');
        }
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('Error in form submission:', err);
      
      // Provide helpful error messages based on error type
      if (err.message?.includes('URL') || err.message?.includes('Failed to construct')) {
        setError('Connection to database failed: Invalid Supabase URL. Please check your NEXT_PUBLIC_SUPABASE_URL in .env.local file.');
      } else if (err.message?.includes('network') || err.message?.includes('connect')) {
        setError('Connection to database failed. Please check your internet connection and try again.');
      } else {
        setError('Something went wrong. Please try again later. Error: ' + (err.message || JSON.stringify(err)));
      }
      
      setIsSubmitting(false);
    }
  };
  
  return (
    <WaitlistContext.Provider value={{ openModal, closeModal }}>
      {children}
      
      {/* Waitlist Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-dark-900/90 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-300 rounded-lg p-6 sm:p-8 w-full max-w-md relative">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-light-100 hover:text-primary"
              disabled={isSubmitting}
            >
              <FaTimes size={20} />
            </button>
            
            {!isSubmitted ? (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-light-100 mb-4">Join Our Course Waitlist</h3>
                <p className="text-light-100/80 mb-6">Be notified when enrollment opens for our next course cohort.</p>
                
                {error && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm">
                    {error}
                    {error.includes('table') && (
                      <div className="mt-2">
                        <a 
                          href="https://supabase.com/docs/guides/database/tables" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-red-100"
                        >
                          View Supabase Table Documentation
                        </a>
                      </div>
                    )}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-light-100 text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-dark-200 border border-dark-100 rounded-lg p-3 text-light-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      placeholder="Enter your name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-light-100 text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-dark-200 border border-dark-100 rounded-lg p-3 text-light-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      placeholder="Enter your email"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className={`w-full bg-primary hover:bg-primary/90 text-light-100 font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span>Join Waitlist <FaArrowRight className="ml-2" /></span>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="bg-primary/20 rounded-full p-3 inline-flex mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-light-100 mb-2">Thank You!</h3>
                <p className="text-light-100/80">You've been added to our waitlist. We'll notify you when enrollment opens.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </WaitlistContext.Provider>
  );
};

// Custom hook to use the waitlist context
export const useWaitlistModal = () => {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error('useWaitlistModal must be used within a WaitlistProvider');
  }
  return context;
}; 