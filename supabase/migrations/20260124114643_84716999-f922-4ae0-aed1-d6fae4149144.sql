-- Create waitlist table for storing signups
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  destination TEXT,
  wants_updates BOOLEAN DEFAULT false,
  source TEXT DEFAULT 'website',
  mailchimp_synced BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public waitlist form)
CREATE POLICY "Anyone can join waitlist" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated admins can view waitlist (for future admin panel)
CREATE POLICY "Admins can view waitlist" 
ON public.waitlist 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

-- Create index on email for faster lookups
CREATE INDEX idx_waitlist_email ON public.waitlist(email);