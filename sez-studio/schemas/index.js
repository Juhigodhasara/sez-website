// Main schema index — exports all types to Sanity Studio
import { siteConfigSchema } from './siteConfig.js';
import { courseSchema } from './course.js';
import { facultySchema, topperSchema } from './people.js';
import { testimonialSchema, faqItemSchema, galleryItemSchema } from './content.js';
import { blogPostSchema } from './blogPost.js';

export const schemaTypes = [
  // Singleton
  siteConfigSchema,
  // Collections
  courseSchema,
  facultySchema,
  topperSchema,
  testimonialSchema,
  faqItemSchema,
  galleryItemSchema,
  // Blog
  blogPostSchema,
];

