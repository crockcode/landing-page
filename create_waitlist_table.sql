-- SQL script to create the waitlist table in Supabase

-- Run this in your Supabase SQL Editor

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  notes TEXT
);

-- Add a unique constraint to prevent duplicate emails
ALTER TABLE waitlist ADD CONSTRAINT waitlist_email_unique UNIQUE (email);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy to allow service role to read all rows
CREATE POLICY "Allow service role select" ON waitlist
  FOR SELECT
  TO service_role
  USING (true);

-- Add comment
COMMENT ON TABLE waitlist IS 'Table to store course waitlist subscribers';

-- Instructions:
-- 1. Go to your Supabase dashboard (https://app.supabase.com)
-- 2. Select your project
-- 3. Click on "SQL Editor" in the left sidebar
-- 4. Paste this entire script into the editor
-- 5. Click "Run" to execute the script
-- 6. Go to "Table Editor" to verify the waitlist table was created 