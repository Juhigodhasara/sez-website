import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Load .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../.env') });

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("Missing VITE_SANITY_PROJECT_ID or SANITY_API_TOKEN in .env");
  process.exit(1);
}

const client = createClient({
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: token,
  useCdn: false,
});

async function seedExtraData() {
  console.log('Seeding Blog Posts and Site Config...');

  try {
    // 1. Re-seed Site Config with very clear dummy data
    console.log('Updating Site Config...');
    await client.createOrReplace({
      _id: 'siteConfig',
      _type: 'siteConfig',
      instituteName: 'Sahjanand Educational Zone',
      shortName: 'SEZ',
      tagline: 'We Create Future',
      established: 2016,
      phone: ['+91 98765 43210', '+91 98765 43211'],
      whatsapp: '919876543210',
      email: 'info@sez.edu.in',
      address: '123 Education Street, Knowledge Park, City - 400001',
      hours: 'Mon-Sat: 8:00 AM - 8:00 PM',
      heroHeadline: 'We Create Future:',
      heroSubHeadline: 'Learn Better. Score Higher.',
      heroDescription: 'Join the most trusted coaching institute. Expert faculty, proven methodology, and consistent top results.',
      announcementText: 'Admissions Open for 2026-27 | Batches filling fast!',
      admissionStatus: 'open',
    });

    // 2. Add Dummy Blog Posts
    console.log('Adding Blog Posts...');
    
    // Featured Post
    await client.create({
      _type: 'blogPost',
      title: 'How to Prepare for Board Exams Effectively',
      slug: { _type: 'slug', current: 'prepare-for-board-exams' },
      excerpt: 'Discover the top strategies our toppers use to maximize their study time and reduce exam stress.',
      category: 'exam-tips',
      authorName: 'SEZ Academic Team',
      publishedAt: new Date().toISOString(),
      isPublished: true,
      isFeatured: true,
      tags: ['CBSE', 'Study Tips', 'Board Exams'],
      body: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Preparing for board exams can be stressful, but with the right strategy, you can achieve your dream score. Here at Sahjanand Educational Zone, we have developed a proven methodology.' }]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{ _type: 'span', text: '1. Create a Realistic Timetable' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Do not overload your day. Break your subjects into manageable chunks and stick to the routine consistently.' }]
        }
      ]
    });

    // Regular Post
    await client.create({
      _type: 'blogPost',
      title: 'Celebrating Our 2025 Top Scorers',
      slug: { _type: 'slug', current: 'celebrating-2025-top-scorers' },
      excerpt: 'A huge congratulations to all our students who scored 95%+ in this year\'s board examinations!',
      category: 'results',
      authorName: 'Dr. Vikram Sen',
      publishedAt: new Date(Date.now() - 86400000).toISOString(), // Yesterday
      isPublished: true,
      isFeatured: false,
      tags: ['Results', 'Success Stories'],
      body: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'We are incredibly proud to announce that over 50 of our students have scored above 95% in the recent examinations. This is a testament to their hard work and our faculty\'s dedication.' }]
        }
      ]
    });

    console.log('✅ Blog Posts and Site Config successfully added!');
  } catch (error) {
    console.error('❌ Error seeding data:', error.message);
  }
}

seedExtraData();

