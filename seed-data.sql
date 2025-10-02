-- Sample data for Konta School website

-- Programs
INSERT INTO programs (title, description, category, duration, capacity) VALUES
('Vocal Training', 'Develop your singing voice with professional guidance. Learn breathing techniques, pitch control, and performance skills.', 'vocal', '3 months', 15),
('Piano Lessons', 'Learn to play piano from beginner to advanced levels. Master music theory, reading sheet music, and classical pieces.', 'instrumental', '6 months', 10),
('Guitar Classes', 'Acoustic and electric guitar lessons for all skill levels. Learn chords, strumming patterns, and popular songs.', 'instrumental', '4 months', 12),
('African Drumming', 'Experience the rhythms of Africa through traditional drumming. Learn djembe, talking drum, and ensemble playing.', 'instrumental', '3 months', 20),
('Contemporary Dance', 'Express yourself through modern dance techniques. Build strength, flexibility, and artistic expression.', 'dance', '4 months', 25),
('Traditional Dance', 'Celebrate Ugandan culture through traditional dance forms. Learn ceremonial and folk dances.', 'dance', '3 months', 30),
('Drama & Theater', 'Develop acting skills, stage presence, and confidence. Participate in plays and theatrical productions.', 'drama', '5 months', 20),
('Music Theory', 'Understand the fundamentals of music. Learn notation, harmony, composition, and arrangement.', 'music', '4 months', 15);

-- Events
INSERT INTO events (title, description, event_date, location, ticket_price, status) VALUES
('Annual Spring Concert', 'Join us for our biggest performance of the year featuring all our students showcasing their talents in music, dance, and drama.', '2025-11-15 18:00:00', 'Konta School Main Hall, Busoga', 5000, 'upcoming'),
('Youth Talent Showcase', 'A special evening highlighting our most promising young artists. Come support the next generation of performers.', '2025-11-30 19:00:00', 'Community Center, Jinja', 3000, 'upcoming'),
('Christmas Gala Performance', 'Celebrate the holiday season with a spectacular show of music, dance, and theatrical performances.', '2025-12-20 17:00:00', 'Konta School Auditorium', 0, 'upcoming'),
('Summer Music Workshop', 'Intensive 3-day workshop with visiting international artists. Limited slots available.', '2026-01-10 09:00:00', 'Konta School Campus', 10000, 'upcoming');

-- Testimonials
INSERT INTO testimonials (name, role, content, is_featured) VALUES
('Grace Nakato', 'Student, Vocal Training', 'Konta School changed my life. I never knew I could sing until I joined the vocal program. Now I perform at community events and my confidence has soared.', true),
('Joseph Mukasa', 'Parent', 'Seeing my daughter grow through the dance program has been amazing. The teachers are dedicated and truly care about each child''s development.', true),
('Sarah Nambi', 'Alumni, Piano Graduate', 'The skills I learned at Konta opened doors I never imagined. I now teach music in my community and inspire others just like my teachers inspired me.', true),
('David Okello', 'Student, Drama Program', 'Acting classes helped me overcome my shyness. I''ve learned to express myself and work with others. This school is a blessing.', false),
('Mary Atim', 'Volunteer Teacher', 'Working with these talented young people is the highlight of my week. Their enthusiasm and dedication inspire me every day.', false);

-- Team Members
INSERT INTO team_members (name, role, bio, display_order) VALUES
('Patrick Konta', 'Founder & Director', 'A passionate musician and educator who founded Konta School in 2015 to provide arts education opportunities for underprivileged youth.', 1),
('Elizabeth Namutebi', 'Music Director', 'Classically trained pianist with 15 years of teaching experience. Specializes in developing young musical talent.', 2),
('James Wafula', 'Dance Instructor', 'Professional dancer and choreographer bringing traditional and contemporary dance to students across Busoga.', 3),
('Susan Akello', 'Drama Coach', 'Theater professional with experience in stage production and performance. Passionate about building confidence through drama.', 4);

-- Gallery Items
INSERT INTO gallery_items (title, description, media_url, media_type, category) VALUES
('Annual Concert 2024', 'Students performing at our largest event of the year', 'https://images.pexels.com/photos/1918437/pexels-photo-1918437.jpeg?auto=compress&cs=tinysrgb&w=800', 'image', 'performances'),
('Piano Practice', 'Young student mastering a classical piece', 'https://images.pexels.com/photos/8520587/pexels-photo-8520587.jpeg?auto=compress&cs=tinysrgb&w=800', 'image', 'classes'),
('Traditional Dance', 'Students performing traditional Ugandan dance', 'https://images.pexels.com/photos/8197562/pexels-photo-8197562.jpeg?auto=compress&cs=tinysrgb&w=800', 'image', 'performances'),
('Drum Circle', 'Community drumming session', 'https://images.pexels.com/photos/7520985/pexels-photo-7520985.jpeg?auto=compress&cs=tinysrgb&w=800', 'image', 'classes'),
('Theater Production', 'Drama students in costume during rehearsal', 'https://images.pexels.com/photos/8134793/pexels-photo-8134793.jpeg?auto=compress&cs=tinysrgb&w=800', 'image', 'performances'),
('Guitar Lesson', 'Individual instruction for guitar students', 'https://images.pexels.com/photos/8064026/pexels-photo-8064026.jpeg?auto=compress&cs=tinysrgb&w=800', 'image', 'classes');
