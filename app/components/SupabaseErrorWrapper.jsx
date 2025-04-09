"use client";

import React, { useState, useEffect } from 'react';
import SupabaseError from './SupabaseError';

const SupabaseErrorWrapper = ({ children }) => {
  const [hasSupabaseError, setHasSupabaseError] = useState(false);
  
  useEffect(() => {
    // Check if Supabase URL is correctly configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase environment variables are missing or invalid.');
      setHasSupabaseError(true);
    } else {
      try {
        // Basic validation of URL format
        new URL(supabaseUrl);
        setHasSupabaseError(false);
      } catch (error) {
        console.error('Invalid Supabase URL format:', error);
        setHasSupabaseError(true);
      }
    }
  }, []);
  
  return (
    <>
      <SupabaseError isVisible={hasSupabaseError} />
      {children}
    </>
  );
};

export default SupabaseErrorWrapper; 