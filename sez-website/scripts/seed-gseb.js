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

async function seedGsebBlogs() {
  console.log('Adding GSEB Class 10 Blog Posts...');

  try {
    // Blog 1: GSEB Study Plan
    await client.create({
      _type: 'blogPost',
      title: 'Ultimate 3-Month Study Plan for GSEB Class 10 Board Exams',
      slug: { _type: 'slug', current: 'gseb-class-10-3-month-study-plan' },
      excerpt: 'Stressed about the upcoming Gujarat Board exams? Follow this structured 3-month roadmap to cover your syllabus and ensure enough time for revision.',
      category: 'study-guides',
      authorName: 'SEZ Academic Team',
      publishedAt: new Date().toISOString(),
      isPublished: true,
      isFeatured: false,
      tags: ['GSEB', 'Class 10', 'Study Plan', 'Board Exams'],
      body: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'With the GSEB SSC Board Exams approaching, having a structured study plan is no longer optional—it is essential. At Sahjanand Educational Zone, we recommend a 3-month split strategy to ensure you cover every topic without last-minute burnout.' }]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{ _type: 'span', text: 'Month 1: Core Concept Mastery' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Focus exclusively on your textbook. The Gujarat Board strictly follows the GCERT syllabus. Do not jump to reference books until you have thoroughly read every chapter of your Science and Social Science textbooks.' }]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{ _type: 'span', text: 'Month 2: Weightage & Chapter-wise Practice' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Look at the GSEB blueprint. Allocate more time to high-weightage chapters like Mathematics (Triangles, Trigonometry) and Science (Light, Electricity). Start solving chapter-wise questions.' }]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{ _type: 'span', text: 'Month 3: Mock Tests & Past Papers' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'The last 30 days should be dedicated to solving the last 5 years of GSEB past papers. Time yourself exactly for 3 hours to build stamina and speed.' }]
        }
      ]
    });

    // Blog 2: Scoring Strategies
    await client.create({
      _type: 'blogPost',
      title: 'Mastering GSEB Board Exams: Top 5 Scoring Strategies',
      slug: { _type: 'slug', current: 'top-5-scoring-strategies-gseb-class-10' },
      excerpt: 'Knowing the answer isn\'t always enough. Learn how to present your answers perfectly to score maximum marks in GSEB Class 10.',
      category: 'exam-tips',
      authorName: 'Dr. Vikram Sen',
      publishedAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
      isPublished: true,
      isFeatured: false,
      tags: ['GSEB', 'Exam Tips', 'Paper Presentation'],
      body: [
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Scoring above 90% in the GSEB SSC exams requires more than just rote learning. The examiner checking your paper spends only a few minutes on it. How do you make your paper stand out? Here are the top 5 strategies.' }]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{ _type: 'span', text: '1. Perfect Your Paper Presentation' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'Write in clear, legible handwriting. Always draw a line after finishing an answer. In subjects like Science and Social Science, write your answers in bullet points rather than long paragraphs.' }]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{ _type: 'span', text: '2. Underline Keywords' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'When writing definitions or important dates in History, underline the key terms with a pencil. This draws the examiner\'s eye directly to the correct information.' }]
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{ _type: 'span', text: '3. Follow the GSEB Word Limit' }]
        },
        {
          _type: 'block',
          style: 'normal',
          children: [{ _type: 'span', text: 'A 2-mark question doesn\'t need a full page. Stick strictly to the word limits specified in the paper. Overwriting wastes precious time.' }]
        }
      ]
    });

    console.log('✅ 2 GSEB Class 10 Blogs successfully added!');
  } catch (error) {
    console.error('❌ Error seeding data:', error.message);
  }
}

seedGsebBlogs();

