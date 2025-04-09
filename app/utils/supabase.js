import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials are missing. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.');
}

// Create a single supabase client for the entire app
const createSupabaseClient = () => {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      return null;
    }
    return createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.error('Error creating Supabase client:', error);
    return null;
  }
};

export const supabase = createSupabaseClient();

// Function to add a user to the waitlist
export async function addToWaitlist(userData) {
  try {
    if (!supabase) {
      console.error('Supabase client is not initialized');
      return { 
        success: false, 
        error: 'Supabase is not configured. Please check your environment variables.' 
      };
    }
    
    console.log('Attempting to add to waitlist:', userData);
    
    // Check if the table exists by trying to get its schema
    const { error: schemaError } = await supabase
      .from('waitlist')
      .select('*')
      .limit(1)
      .single();
    
    // If there's a specific error about the table not existing
    if (schemaError && (
        schemaError.message.includes('does not exist') || 
        schemaError.code === '42P01')
    ) {
      console.error('Waitlist table does not exist:', schemaError);
      return { 
        success: false, 
        error: 'The waitlist table does not exist in your Supabase project. Please create it following the setup instructions.' 
      };
    }
    
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        { 
          name: userData.name,
          email: userData.email,
          created_at: new Date()
        }
      ]);
      
    if (error) {
      console.error('Error from Supabase insert operation:', error);
      throw error;
    }
    
    return { success: true, data };
  } catch (error) {
    // Better error handling with more details
    console.error('Error adding to waitlist:', error);
    let errorMessage = 'Failed to add to waitlist';
    
    if (error.message) {
      errorMessage += ': ' + error.message;
    } else if (typeof error === 'object') {
      errorMessage += ': ' + JSON.stringify(error);
    }
    
    return { success: false, error: errorMessage };
  }
} 