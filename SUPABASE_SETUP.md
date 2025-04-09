# Supabase Setup for Waitlist Form

This document guides you through setting up Supabase to collect and store waitlist submissions.

## 1. Create a Supabase Project

1. Sign up or log in at [https://supabase.com/](https://supabase.com/)
2. Create a new project
3. Choose a project name (e.g., "course-waitlist")
4. Set a secure database password (save this somewhere safe)
5. Choose the region closest to your target audience
6. Wait for your database to be provisioned (this takes ~2 minutes)

## 2. Create the Waitlist Table

### Option A: Using the SQL Script (Recommended)

We've provided a SQL script to easily create the table with all necessary settings:

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Open the file `create_waitlist_table.sql` in this project
4. Copy and paste its contents into the SQL Editor
5. Click **Run** to execute the script
6. Go to **Table Editor** to verify the table was created successfully

### Option B: Manual Table Creation

If you prefer to create the table manually:

1. In your Supabase dashboard, go to **Table Editor**
2. Click **Create a new table**
3. Set the table name to `waitlist`
4. Add the following columns:
   - `id` (type: uuid, default: uuid_generate_v4(), primary key)
   - `created_at` (type: timestamp with time zone, default: now())
   - `name` (type: text)
   - `email` (type: text)
5. Click **Save** to create the table

## 3. Set Up Row Level Security (RLS)

To prevent unauthorized access to your waitlist data:

1. Go to the **Authentication** tab
2. Click on **Policies**
3. Select the `waitlist` table
4. Enable Row Level Security (RLS) by toggling it on
5. Add a policy for INSERT:
   - Policy name: `Allow anonymous inserts`
   - Policy definition: `true`
   - Target roles: `anon, authenticated`
   - This allows anyone to add themselves to the waitlist

## 4. Get Your API Credentials

1. Go to **Project Settings** (gear icon)
2. Click on **API**
3. Find your **Project URL** and **anon/public** key
4. Also copy your **service_role** key (this is for admin access)
5. Add these to your `.env.local` file:

```
# Public credentials (can be exposed to the browser)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Server-side credentials (keep these secure)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Generate a secure admin key for the admin panel
# You can use: openssl rand -base64 32
WAITLIST_ADMIN_KEY=your-secure-admin-key
```

## 5. Access the Waitlist Data

There are two ways to access the waitlist data:

### Option 1: Direct Database Access

1. Go to **Table Editor** in your Supabase dashboard
2. Select the `waitlist` table
3. All entries will be displayed here
4. You can export the data as CSV by clicking the **Export** button

### Option 2: Admin Panel

This project includes a built-in admin panel to view and export waitlist data:

1. Go to `/admin/waitlist` on your deployed site
2. Enter the `WAITLIST_ADMIN_KEY` you set in your `.env.local` file
3. You'll see a table of all waitlist entries
4. You can export the data as CSV using the Export button

## Troubleshooting

### Common Errors and Solutions

- **"Failed to construct 'URL': Invalid URL"**: 
  Make sure your Supabase URL in `.env.local` starts with `https://` and doesn't have any trailing slashes.

- **"The waitlist table does not exist"**: 
  Follow the instructions in Section 2 to create the table.

- **CORS errors**:
  Check that your website domain is added to the allowed domains in Supabase project settings.

- **Admin panel access fails**:
  Ensure your `SUPABASE_SERVICE_ROLE_KEY` and `WAITLIST_ADMIN_KEY` are correctly set.

### Getting Help

If you still encounter issues, check:
- [Supabase documentation](https://supabase.com/docs)
- The browser console for specific error messages
- Make sure your environment variables are correctly set and the app is restarted 