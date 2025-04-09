"use client";

import React from 'react';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="bg-primary p-[2px] rounded-lg">
        <div className="bg-dark-200 flex items-center justify-center h-8 w-8 rounded-lg">
          <span className="text-primary font-bold text-lg">P</span>
        </div>
      </div>
      <div className="ml-2 font-bold text-light-100">
        <span className="text-primary">Prove</span>
        <span className="text-light-100">Your</span>
        <span className="text-accent">Ideas</span>
      </div>
    </div>
  );
};

export default Logo; 