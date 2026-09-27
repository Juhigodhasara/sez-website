// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SCHEMA: course — Academic programs
// Client can add/edit/remove course cards
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const courseSchema = {
  name: 'course',
  title: '📚 Course / Program',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Program Title',
      type: 'string',
      description: 'e.g. Board Examination Mastery',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Primary & Middle (Class 1–8)', value: 'primary' },
          { title: 'Secondary (Class 9–10)', value: 'secondary' },
          { title: 'Senior Secondary (Class 11–12)', value: 'senior' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'classRange',
      title: 'Class Range Label',
      type: 'string',
      description: 'e.g. Class 9 & 10',
    },
    {
      name: 'batchSize',
      title: 'Batch Info',
      type: 'string',
      description: 'e.g. CBSE / ICSE  or  Batch: 12 Max',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'subjects',
      title: 'Subjects Covered',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add subjects one by one (e.g. Mathematics, Physics)',
    },
    {
      name: 'features',
      title: 'Key Features / Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add key highlights of this program',
    },
    {
      name: 'isPopular',
      title: 'Mark as Most Popular',
      type: 'boolean',
      description: 'Shows a "Most Popular" badge on this card',
      initialValue: false,
    },
    {
      name: 'ctaVariant',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          { title: 'Default (Blue)', value: 'default' },
          { title: 'Accent (Gold) — for popular', value: 'accent' },
        ],
        layout: 'radio',
      },
      initialValue: 'default',
    },
    {
      name: 'sortOrder',
      title: 'Display Order (1 = first)',
      type: 'number',
      description: 'Lower number shows first on the website',
      initialValue: 99,
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
    select: { title: 'title', subtitle: 'classRange', media: 'category' },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
};

