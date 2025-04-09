# How to Get Your Supabase Credentials

Follow these steps to obtain the Supabase credentials needed for this project:

## 1. Create a Supabase Account

If you don't already have one, you need to create a Supabase account:

1. Visit [https://supabase.com/](https://supabase.com/)
2. Click "Start for Free" or "Sign Up"
3. Complete the registration process

## 2. Create a New Project

1. Log in to your Supabase dashboard
2. Click "New Project"
3. Fill in the details:
   - Name: Choose a name for your project (e.g., "course-waitlist")
   - Database Password: Create a secure password (save this!)
   - Region: Choose the region closest to your users
4. Click "Create new project"
5. Wait for your project to be created (this takes 1-2 minutes)

## 3. Find Your API Credentials

Once your project is created:

1. In your project dashboard, click on the gear icon (⚙️) in the sidebar to access **Project Settings**
2. Click on **API** in the sidebar
3. Under **Project API keys**, you'll find:
   - **URL**: This is your `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public**: This is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role**: This is your `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

## 4. Update Your .env.local File

Now update your `.env.local` file with the actual values (replace the placeholders):

```
# Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-from-supabase
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-from-supabase

# Create a secure admin key for API access (generate a random string)
# You can use this command to generate one: openssl rand -base64 32
WAITLIST_ADMIN_KEY=your-secure-random-string
```

## 5. Create the Waitlist Table

Follow the instructions in [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) to create the waitlist table in your Supabase project.

## Troubleshooting

- **"Failed to construct 'URL'"**: This means your `NEXT_PUBLIC_SUPABASE_URL` is missing or invalid. Make sure it starts with `https://`.
- **Authentication errors**: Check that your `NEXT_PUBLIC_SUPABASE_ANON_KEY` is correct.
- **Missing data**: Ensure you've created the `waitlist` table as described in SUPABASE_SETUP.md. 