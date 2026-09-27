import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'sez-studio',
  title: 'Sahjanand Educational Zone CMS',

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 👉 IMPORTANT: Replace these values with your own
  //    after creating a free account at https://sanity.io
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  projectId: 'your-project-id',   // ← Paste Project ID here
  dataset: 'production',

  plugins: [
    structureTool({
      // Custom navigation structure for the CMS sidebar
      structure: (S) =>
        S.list()
          .title('Content Manager')
          .items([
            S.listItem()
              .title('🏫 Site Configuration')
              .child(
                S.document()
                  .schemaType('siteConfig')
                  .documentId('siteConfig')
              ),
            S.divider(),
            S.listItem()
              .title('📚 Courses & Programs')
              .child(S.documentTypeList('course').title('Courses')),
            S.listItem()
              .title('👨‍🏫 Faculty & Mentors')
              .child(S.documentTypeList('faculty').title('Faculty')),
            S.listItem()
              .title('🏆 Toppers & Results')
              .child(S.documentTypeList('topper').title('Toppers')),
            S.listItem()
              .title('⭐ Testimonials')
              .child(S.documentTypeList('testimonial').title('Testimonials')),
            S.listItem()
              .title('❓ FAQs')
              .child(S.documentTypeList('faqItem').title('FAQs')),
            S.listItem()
              .title('🖼️ Gallery')
              .child(S.documentTypeList('galleryItem').title('Gallery')),
            S.divider(),
            S.listItem()
              .title('✍️ Blog Posts')
              .child(S.documentTypeList('blogPost').title('Blog Posts')),
          ]),
    }),
    visionTool(), // GROQ query playground for developers
  ],

  schema: {
    types: schemaTypes,
  },
});

