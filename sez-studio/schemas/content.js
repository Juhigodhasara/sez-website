// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SCHEMA: testimonial — Parent & student reviews
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const testimonialSchema = {
  name: 'testimonial',
  title: '⭐ Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'e.g. Mrs. Radhika Mehra',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'relation',
      title: 'Relation / Role',
      type: 'string',
      description: 'e.g. Mother of Tanvi • DPS R.K. Puram',
    },
    {
      name: 'quote',
      title: 'Their Review',
      type: 'text',
      rows: 4,
      description: 'What they said about SEZ',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Star Rating',
      type: 'number',
      description: 'Rating out of 5',
      validation: (Rule) => Rule.min(1).max(5),
      initialValue: 5,
    },
    {
      name: 'initials',
      title: 'Initials (2 letters shown in avatar)',
      type: 'string',
      description: 'e.g. RM',
    },
    {
      name: 'isActive',
      title: 'Show on Website',
      type: 'boolean',
      description: 'Uncheck to hide this testimonial without deleting it',
      initialValue: true,
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'relation' },
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SCHEMA: faqItem — FAQ accordion entries
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const faqItemSchema = {
  name: 'faqItem',
  title: '❓ FAQ Item',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sortOrder',
      title: 'Display Order (1 = first)',
      type: 'number',
      initialValue: 99,
    },
    {
      name: 'isActive',
      title: 'Show on Website',
      type: 'boolean',
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'question', subtitle: 'answer' },
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SCHEMA: galleryItem — Classroom / event photos
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const galleryItemSchema = {
  name: 'galleryItem',
  title: '🖼️ Gallery Photo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Photo Title / Caption',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Modern Infrastructure, Exam Simulation, Events',
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sortOrder',
      title: 'Display Order (1 = first)',
      type: 'number',
      initialValue: 99,
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' },
  },
};

