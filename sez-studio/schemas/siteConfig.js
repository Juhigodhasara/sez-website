// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SCHEMA: siteConfig — Global site settings
// Client edits phone, address, hours, logos here
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const siteConfigSchema = {
  name: 'siteConfig',
  title: '🏫 Site Configuration',
  type: 'document',
  // Only one instance allowed
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'instituteName',
      title: 'Institute Full Name',
      type: 'string',
      description: 'e.g. Sahjanand Educational Zone',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortName',
      title: 'Short Name / Abbreviation',
      type: 'string',
      description: 'e.g. SEZ',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'e.g. We Create Future',
    },
    {
      name: 'established',
      title: 'Established Year',
      type: 'number',
      description: 'e.g. 2016',
    },
    {
      name: 'phone',
      title: 'Phone Numbers',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add one or more phone numbers',
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp Number (with country code, no spaces)',
      type: 'string',
      description: 'e.g. 919820145678',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Campus Address',
      type: 'text',
      rows: 2,
    },
    {
      name: 'hours',
      title: 'Operating Hours',
      type: 'string',
      description: 'e.g. Monday to Saturday: 8:00 AM – 8:30 PM',
    },
    {
      name: 'heroHeadline',
      title: 'Hero Section Headline (Line 1)',
      type: 'string',
      description: 'e.g. We Create Future:',
    },
    {
      name: 'heroSubHeadline',
      title: 'Hero Section Headline (Line 2 — colored)',
      type: 'string',
      description: 'e.g. Learn Better. Score Higher.',
    },
    {
      name: 'heroDescription',
      title: 'Hero Description Paragraph',
      type: 'text',
      rows: 3,
    },
    {
      name: 'logo',
      title: 'Header Logo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'emblem',
      title: 'Emblem / Seal (small circular icon)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'heroImage',
      title: 'Hero Banner Image (classroom photo)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'aboutImage',
      title: 'About Section Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'mapImage',
      title: 'Map / Location Preview Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'announcementText',
      title: 'Top Banner Announcement',
      type: 'string',
      description: 'e.g. Admissions Open 2026–27 | Batches filling fast!',
    },
    {
      name: 'admissionStatus',
      title: 'Admission Status',
      type: 'string',
      options: {
        list: [
          { title: 'Open', value: 'open' },
          { title: 'Closed', value: 'closed' },
          { title: 'Limited Seats', value: 'limited' },
        ],
      },
      initialValue: 'open',
    },
  ],
};

