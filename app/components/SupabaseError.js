"use client";

import React from 'react';
import Link from 'next/link';

const SupabaseError = ({ isVisible = true }) => {
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-x-0 top-0 bg-red-500/90 text-white p-4 z-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg font-bold mb-2">Supabase Configuration Error</h2>
        <p className="mb-4">
          The connection to Supabase failed. Please check your environment variables in the <code className="bg-red-500/50 px-1 rounded">.env.local</code> file.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://github.com/supabase/supabase#readme" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors"
          >
            View Supabase Docs
          </a>
          
          <button 
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupabaseError; 