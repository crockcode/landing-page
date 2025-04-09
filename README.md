# Launch Course Landing Page

A responsive landing page built with Next.js and Tailwind CSS for a course about launching online projects. Features Supabase integration for waitlist form submissions.

## Features

- Fully responsive design
- Modern UI with Tailwind CSS
- Next.js 14 framework
- React Icons for visual elements
- Component-based architecture
- Supabase integration for waitlist data collection

## Getting Started

First, install dependencies:

```bash
npm install
```

Create a `.env.local` file in the root directory with your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

> **IMPORTANT**: The Supabase URL must be a complete URL starting with `https://`. 
> Example: `https://abcdefghijklm.supabase.co` (no trailing slash)

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Supabase Setup

This project uses Supabase to store waitlist submissions. 

For detailed setup instructions, see [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) or [GET_SUPABASE_CREDENTIALS.md](./GET_SUPABASE_CREDENTIALS.md).

## Troubleshooting

### "Failed to construct 'URL': Invalid URL" Error

If you see this error, it means your Supabase URL is not properly formatted in your `.env.local` file.

**Solution:**
1. Go to your Supabase project dashboard > Settings > API
2. Copy the exact URL (should start with `https://`)
3. Make sure the URL has no extra spaces, quotes, or trailing slashes
4. Update your `.env.local` file with the correct URL

Example of correct format:
```
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklm.supabase.co
```

## Structure

- `app/` - Next.js App Router
  - `components/` - React components for different page sections
  - `context/` - React context providers
    - `WaitlistContext.js` - Manages the waitlist modal state and form submission
  - `utils/` - Utility functions
    - `supabase.js` - Supabase client and database functions
  - `globals.css` - Global styles and Tailwind directives
  - `layout.tsx` - Root layout component
  - `page.tsx` - Main landing page

## Technologies Used

- Next.js
- React
- Tailwind CSS
- React Icons 