/*
  # Konta School of Music and Performing Arts - Initial Database Schema

  ## Overview
  This migration sets up the complete database schema for the Konta School website,
  including tables for programs, events, gallery, testimonials, team members,
  donations, sponsors, and contact inquiries.

  ## Tables Created

  1. **programs**
     - Stores music and performing arts programs offered
     - Fields: id, title, description, category, image_url, duration, capacity, created_at

  2. **events**
     - Manages upcoming concerts, recitals, workshops
     - Fields: id, title, description, event_date, location, image_url, ticket_price, created_at

  3. **gallery_items**
     - Photos and videos from performances and classes
     - Fields: id, title, description, media_url, media_type, category, created_at

  4. **testimonials**
     - Student, parent, and partner testimonials
     - Fields: id, name, role, content, image_url, is_featured, created_at

  5. **team_members**
     - Staff, teachers, and volunteers
     - Fields: id, name, role, bio, image_url, display_order, created_at

  6. **sponsors**
     - Partner organizations and sponsors
     - Fields: id, name, logo_url, website_url, tier, created_at

  7. **donations**
     - Track donations and sponsorships
     - Fields: id, donor_name, amount, donation_type, message, created_at

  8. **contact_inquiries**
     - Contact form submissions
     - Fields: id, name, email, phone, subject, message, status, created_at

  9. **newsletter_subscribers**
     - Email newsletter subscriptions
     - Fields: id, email, subscribed_at

  ## Security
  - All tables have RLS enabled
  - Public read access for display data
  - Admin-only write access (to be managed via admin dashboard)
*/

-- Programs table
CREATE TABLE IF NOT EXISTS programs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  image_url text,
  duration text,
  capacity integer,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE programs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view programs"
  ON programs FOR SELECT
  TO public
  USING (true);

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  event_date timestamptz NOT NULL,
  location text NOT NULL,
  image_url text,
  ticket_price decimal(10,2) DEFAULT 0,
  status text DEFAULT 'upcoming',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view events"
  ON events FOR SELECT
  TO public
  USING (true);

-- Gallery items table
CREATE TABLE IF NOT EXISTS gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  media_url text NOT NULL,
  media_type text NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view gallery items"
  ON gallery_items FOR SELECT
  TO public
  USING (true);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  content text NOT NULL,
  image_url text,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  TO public
  USING (true);

-- Team members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text NOT NULL,
  image_url text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view team members"
  ON team_members FOR SELECT
  TO public
  USING (true);

-- Sponsors table
CREATE TABLE IF NOT EXISTS sponsors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text NOT NULL,
  website_url text,
  tier text DEFAULT 'bronze',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view sponsors"
  ON sponsors FOR SELECT
  TO public
  USING (true);

-- Donations table
CREATE TABLE IF NOT EXISTS donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_name text,
  email text,
  amount decimal(10,2) NOT NULL,
  donation_type text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create donations"
  ON donations FOR INSERT
  TO public
  WITH CHECK (true);

-- Contact inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries FOR INSERT
  TO public
  WITH CHECK (true);

-- Newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO public
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_events_date ON events(event_date);
CREATE INDEX IF NOT EXISTS idx_gallery_category ON gallery_items(category);
CREATE INDEX IF NOT EXISTS idx_programs_category ON programs(category);
CREATE INDEX IF NOT EXISTS idx_team_display_order ON team_members(display_order);
