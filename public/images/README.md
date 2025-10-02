# Image Management Guide for Konta Music School

## Folder Structure

Your images are organized in the following folders under `public/images/`:

### 📁 `/public/images/gallery/`
- **Purpose**: Photos and videos from performances, classes, and school events
- **Usage**: These will display in the Gallery page
- **Recommended**: Name files descriptively (e.g., `spring-concert-2024.jpg`, `piano-class-action.jpg`)

### 📁 `/public/images/team/`
- **Purpose**: Professional headshots of teachers and staff
- **Usage**: These will show on the About page and team member profiles
- **Recommended**: Use professional photos, square format preferred (400x400px or larger)
- **Naming**: Use format `firstname-lastname.jpg` (e.g., `emily-rodriguez.jpg`)

### 📁 `/public/images/events/`
- **Purpose**: Images for upcoming concerts, recitals, and special events
- **Usage**: Featured on Events page and event details
- **Recommended**: High-quality promotional images, landscape format preferred

### 📁 `/public/images/programs/`
- **Purpose**: Images representing different music programs and classes
- **Usage**: Program cards and course descriptions
- **Examples**: Piano keyboard, guitar, microphone, music sheets, etc.

### 📁 `/public/images/testimonials/`
- **Purpose**: Photos of students and parents who gave testimonials
- **Usage**: Displayed alongside testimonial quotes
- **Recommended**: Square format, friendly photos

## How to Add Images

1. **Copy your images** into the appropriate folder
2. **Update the database** through Supabase with the image path
3. **Use the path** `/images/folder-name/your-image.jpg` in the database

### Example Database Entries:

**For a team member:**
```
name: "Dr. Emily Rodriguez"
image_url: "/images/team/emily-rodriguez.jpg"
```

**For a gallery item:**
```
title: "Spring Concert 2024"
media_url: "/images/gallery/spring-concert-2024.jpg"
```

**For an event:**
```
title: "Piano Recital"
image_url: "/images/events/piano-recital-poster.jpg"
```

## Image Specifications

- **File formats**: JPG, PNG, WebP
- **Maximum size**: 2MB per image (for web performance)
- **Recommended sizes**:
  - Team photos: 400x400px (square)
  - Event images: 1200x600px (landscape)
  - Gallery images: Variable, but optimized for web
  - Program images: 800x600px

## Tips

1. **Optimize images** before uploading (compress for web)
2. **Use descriptive filenames** (no spaces, use hyphens)
3. **Keep backups** of original high-resolution images
4. **Test loading speed** after adding multiple images