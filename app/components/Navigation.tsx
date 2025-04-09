"use client";

import React, { useState } from 'react';
import Logo from './Logo';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useWaitlistModal } from '../context/WaitlistContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useWaitlistModal();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  const handleCtaClick = (e) => {
    e.preventDefault();
    openModal();
    setIsMenuOpen(false);
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-300/95 backdrop-blur-md border-b border-dark-100/50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <a 
            href="#features" 
            className="px-3 py-2 text-sm text-light-100 hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('features');
            }}
          >
            How It Works
          </a>
          <a 
            href="#benefits" 
            className="px-3 py-2 text-sm text-light-100 hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('benefits');
            }}
          >
            Benefits
          </a>
          <a 
            href="#cta" 
            className="bg-primary hover:bg-primary/90 text-light-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-primary/20"
            onClick={handleCtaClick}
          >
            Join Waitlist
          </a>
        </div>
        
        {/* Hamburger Menu for Mobile */}
        <button 
          className="md:hidden text-light-100 hover:text-primary transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FaBars size={24} />
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-dark-900 bg-opacity-95 z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <button 
              className="absolute top-6 right-6 text-light-100 hover:text-primary transition-colors"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <FaTimes size={24} />
            </button>
            
            <div className="flex flex-col items-center justify-center h-[80%] gap-8 text-xl">
              <a 
                className="text-light-100 hover:text-primary cursor-pointer transition-colors"
                onClick={() => scrollToSection("features")}
              >
                How It Works
              </a>
              <a 
                className="text-light-100 hover:text-primary cursor-pointer transition-colors"
                onClick={() => scrollToSection("benefits")}
              >
                Benefits
              </a>
              <a 
                className="text-light-100 hover:text-primary cursor-pointer transition-colors"
                onClick={handleCtaClick}
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 