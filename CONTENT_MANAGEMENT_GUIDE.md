# Content Management Guide for Konta Music School

## Overview
This guide explains how to manage your website content through the Supabase dashboard without needing technical knowledge.

## Accessing Your Content Management System

1. **Go to your Supabase dashboard**: https://supabase.com/dashboard
2. **Sign in** with your account
3. **Select your project**: "konta-music-school"
4. **Click on "Table Editor"** in the left sidebar

## Managing Different Types of Content

### 📚 Programs (Music Courses)

**Table**: `programs`

**To add a new program:**
1. Click "Table Editor" → Select "programs" table
2. Click "Insert row" button
3. Fill in:
   - **title**: Name of the program (e.g., "Advanced Piano")
   - **description**: Detailed description of what students learn
   - **category**: Type (e.g., "Instrumental", "Vocal", "Theory")
   - **image_url**: Path to image (e.g., "/images/programs/piano.jpg")
   - **duration**: How long the course lasts (e.g., "12 weeks")
   - **capacity**: Maximum number of students (e.g., 15)
4. Click "Save"

### 🎭 Events (Concerts, Recitals, Workshops)

**Table**: `events`

**To add a new event:**
1. Go to "events" table
2. Click "Insert row"
3. Fill in:
   - **title**: Event name (e.g., "Spring Concert 2025")
   - **description**: What the event is about
   - **event_date**: Date and time (format: 2025-03-15 19:00:00+00)
   - **location**: Where it's happening
   - **image_url**: Event poster image path
   - **ticket_price**: Cost in USD (0.00 for free events)
   - **status**: "upcoming" (for future events)
4. Click "Save"

### 💬 Testimonials (Student/Parent Reviews)

**Table**: `testimonials`

**To add a testimonial:**
1. Go to "testimonials" table
2. Click "Insert row"
3. Fill in:
   - **name**: Person's full name
   - **role**: Their relationship (e.g., "Parent", "Student", "Adult Student")
   - **content**: The testimonial quote
   - **image_url**: Photo path (optional)
   - **is_featured**: Check this box to show on homepage
4. Click "Save"

### 👥 Team Members (Staff & Teachers)

**Table**: `team_members`

**To add a team member:**
1. Go to "team_members" table
2. Click "Insert row"
3. Fill in:
   - **name**: Full name
   - **role**: Job title (e.g., "Piano Instructor", "School Director")
   - **bio**: Professional background and experience
   - **image_url**: Professional headshot path
   - **display_order**: Number for ordering (1 = first, 2 = second, etc.)
4. Click "Save"

### 📸 Gallery Items (Photos & Videos)

**Table**: `gallery_items`

**To add gallery content:**
1. Go to "gallery_items" table
2. Click "Insert row"
3. Fill in:
   - **title**: Descriptive name
   - **description**: Brief description (optional)
   - **media_url**: Path to image/video file
   - **media_type**: "image" or "video"
   - **category**: Type (e.g., "concerts", "classes", "events")
4. Click "Save"

## Managing Contact Form Submissions

**Table**: `contact_inquiries`

**To view contact submissions:**
1. Go to "contact_inquiries" table
2. See all messages received through the website
3. Update **status** column to track responses:
   - "new" = Just received
   - "in-progress" = Working on it
   - "resolved" = Completed

## Managing Newsletter Subscribers

**Table**: `newsletter_subscribers`

**To view subscribers:**
1. Go to "newsletter_subscribers" table
2. See all email addresses that signed up
3. Export the list for email marketing campaigns

## Managing Donations

**Table**: `donations`

**To view donation records:**
1. Go to "donations" table
2. See all donation submissions
3. Contact donors using their provided email addresses

## Adding Images

### Step 1: Upload Images to Your Project
1. Copy your images to the appropriate folder:
   - Team photos → `public/images/team/`
   - Event images → `public/images/events/`
   - Gallery photos → `public/images/gallery/`
   - Program images → `public/images/programs/`

### Step 2: Reference Images in Database
- Use the path format: `/images/folder-name/your-image.jpg`
- Example: `/images/team/john-smith.jpg`

## Tips for Success

### Image Guidelines
- **Keep file sizes small** (under 1MB) for fast loading
- **Use descriptive filenames** (no spaces, use hyphens)
- **Recommended sizes**:
  - Team photos: 400x400px (square)
  - Event images: 1200x600px (landscape)
  - Gallery images: Varies, but web-optimized

### Content Best Practices
- **Keep descriptions clear and engaging**
- **Update events regularly** (mark old events as "completed")
- **Feature your best testimonials** on the homepage
- **Keep team information current**

### Regular Maintenance
- **Monthly**: Review and update upcoming events
- **Quarterly**: Add new testimonials and team changes
- **As needed**: Add new programs and gallery content

## Getting Help

If you need assistance:
1. **Check this guide first**
2. **Contact your web developer** for technical issues
3. **Keep backups** of important content

## Security Notes

- **Never share your Supabase login credentials**
- **Only give database access to trusted team members**
- **Regularly review who has access to your data**

---

*This website is powered by Supabase and React. For technical support, contact your development team.*