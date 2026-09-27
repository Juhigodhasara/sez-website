// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SCHEMA: faculty — Mentor profiles
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const facultySchema = {
  name: 'faculty',
  title: '👨‍🏫 Faculty / Mentor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role / Subject',
      type: 'string',
      description: 'e.g. Mathematics Head',
    },
    {
      name: 'qualification',
      title: 'Qualification',
      type: 'string',
      description: 'e.g. M.Sc, Ph.D. in Pure Mathematics',
    },
    {
      name: 'bio',
      title: 'Short Bio / Experience Note',
      type: 'text',
      rows: 2,
      description: 'e.g. 14+ Years Experience • Ex-Allen Senior Faculty...',
    },
    {
      name: 'photo',
      title: 'Profile Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'sortOrder',
      title: 'Display Order (1 = first)',
      type: 'number',
      initialValue: 99,
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SCHEMA: topper — Results & Toppers wall
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const topperSchema = {
  name: 'topper',
  title: '🏆 Topper / Result',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: "Student's Name",
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'percentage',
      title: 'Percentage / Score',
      type: 'string',
      description: 'e.g. 98.2%',
    },
    {
      name: 'exam',
      title: 'Exam / Board Name',
      type: 'string',
      description: 'e.g. CBSE Class 10 Board 2025',
    },
    {
      name: 'highlight',
      title: 'Score Highlight',
      type: 'string',
      description: 'e.g. 100 in Maths & Science',
    },
    {
      name: 'school',
      title: 'School Name',
      type: 'string',
    },
    {
      name: 'badge',
      title: 'Achievement Badge',
      type: 'string',
      description: 'e.g. AIR 14 or Rank 1',
    },
    {
      name: 'badgeVariant',
      title: 'Badge Color',
      type: 'string',
      options: {
        list: [
          { title: 'Gold (Accent)', value: 'accent' },
          { title: 'Blue (Primary)', value: 'primary' },
        ],
        layout: 'radio',
      },
      initialValue: 'accent',
    },
    {
      name: 'category',
      title: 'Category Filter',
      type: 'string',
      options: {
        list: [
          { title: 'Class 10 CBSE/ICSE', value: 'class10' },
          { title: 'Class 12 Science', value: 'class12sci' },
          { title: 'Class 12 Commerce', value: 'class12comm' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'photo',
      title: 'Student Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'year',
      title: 'Exam Year',
      type: 'number',
      description: 'e.g. 2025',
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'percentage', media: 'photo' },
  },
};

