import { createClient } from '@sanity/client';
import { courses } from '../src/data/courses.js';
import { faculty } from '../src/data/faculty.js';
import { faqItems } from '../src/data/faq.js';
import { testimonials } from '../src/data/testimonials.js';
import { toppers } from '../src/data/toppers.js';
import { siteConfig } from '../src/data/siteConfig.js';
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

async function seedData() {
  console.log('Seeding data to Sanity...');

  try {
    // 1. Site Config (Singleton)
    console.log('Seeding Site Config...');
    await client.createOrReplace({
      _id: 'siteConfig',
      _type: 'siteConfig',
      ...siteConfig,
      // Remove any image fields that are just raw strings in static data, 
      // as Sanity expects specific asset references. The client can upload these later.
      logo: undefined,
      footerLogo: undefined,
      heroImage: undefined,
      aboutImage: undefined,
    });

    // 2. Courses
    console.log('Seeding Courses...');
    for (const course of courses) {
      await client.create({
        _type: 'course',
        title: course.title,
        category: course.category,
        subjects: course.subjects,
        features: course.features,
        isPopular: course.isPopular,
        ctaVariant: course.ctaVariant,
      });
    }

    // 3. Faculty
    console.log('Seeding Faculty...');
    for (const person of faculty) {
      await client.create({
        _type: 'faculty',
        name: person.name,
        role: person.role,
        qualification: person.qualification,
        bio: person.bio,
      });
    }

    // 4. FAQs
    console.log('Seeding FAQs...');
    for (const faq of faqItems) {
      await client.create({
        _type: 'faqItem',
        question: faq.question,
        answer: faq.answer,
        isActive: true,
      });
    }

    // 5. Testimonials
    console.log('Seeding Testimonials...');
    for (const review of testimonials) {
      await client.create({
        _type: 'testimonial',
        name: review.name,
        relation: review.relation,
        quote: review.quote,
        rating: review.rating,
        initials: review.initials,
        isActive: true,
      });
    }

    // 6. Toppers
    console.log('Seeding Toppers...');
    for (const topper of toppers) {
      await client.create({
        _type: 'topper',
        name: topper.name,
        percentage: topper.percentage,
        badge: topper.badge,
        badgeVariant: topper.badgeVariant,
        category: topper.category,
      });
    }

    console.log('✅ All dummy data successfully seeded!');
  } catch (error) {
    console.error('❌ Error seeding data:', error.message);
  }
}

seedData();

