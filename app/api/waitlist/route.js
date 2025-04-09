import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// This is a server-side function that will only be accessible with a valid admin key
export async function GET(request) {
  // Check for authorization header
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  // Extract the token
  const token = authHeader.substring(7);
  const adminKey = process.env.WAITLIST_ADMIN_KEY;
  
  // Validate the token
  if (!adminKey || token !== adminKey) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }
  
  try {
    // Initialize the Supabase client with a service role key
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseServiceKey) {
      return NextResponse.json(
        { error: 'Supabase credentials are missing. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env.local file.' },
        { status: 500 }
      );
    }
    
    // Create Supabase client with error handling
    let supabase;
    try {
      supabase = createClient(supabaseUrl, supabaseServiceKey);
    } catch (error) {
      console.error('Error creating Supabase client:', error);
      return NextResponse.json(
        { error: 'Failed to create Supabase client. Please check your Supabase URL.' },
        { status: 500 }
      );
    }
    
    // Fetch waitlist entries
    const { data, error } = await supabase
      .from('waitlist')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      throw error;
    }
    
    // Return the waitlist data
    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    return NextResponse.json(
      { error: 'Failed to fetch waitlist data: ' + error.message },
      { status: 500 }
    );
  }
} 