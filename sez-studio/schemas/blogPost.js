// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SCHEMA: blogPost — Full-featured blog with rich text editor
// Client can write articles, add images, categories, and publish/draft
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const blogPostSchema = {
  name: 'blogPost',
  title: '✍️ Blog Post',
  type: 'document',
  fields: [
    // ── Basic Info ────────────────────────────────
    {
      name: 'title',
      title: 'Post Title',
      type: 'string',
      description: 'The headline of your blog post',
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Auto-generated from title. The URL will be /blog/[slug]',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Short Summary (shown in blog listing)',
      type: 'text',
      rows: 3,
      description: 'A 1–2 sentence summary of what this post is about',
      validation: (Rule) => Rule.max(250),
    },

    // ── Media ────────────────────────────────────
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Featured image shown at the top of the post and in listing',
      options: { hotspot: true },
    },

    // ── Categorization ────────────────────────────
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: '📚 Exam Tips & Strategy', value: 'exam-tips' },
          { title: '🏆 Results & Achievements', value: 'results' },
          { title: '📢 News & Announcements', value: 'news' },
          { title: '📅 Events & Activities', value: 'events' },
          { title: '👨‍🎓 Student Stories', value: 'student-stories' },
          { title: '👨‍🏫 Faculty Insights', value: 'faculty-insights' },
          { title: '💡 Study Guides', value: 'study-guides' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'news',
    },
    {
      name: 'tags',
      title: 'Tags (keywords)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Add relevant keywords e.g. CBSE, JEE, Tips, Class 10',
    },

    // ── Author & Date ──────────────────────────────
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      description: 'e.g. SEZ Academic Team or Dr. Vikram Sen',
      initialValue: 'SEZ Academic Team',
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      description: 'When this post should appear as published',
    },

    // ── Main Content (Rich Text) ──────────────────
    {
      name: 'body',
      title: '📝 Post Content (Rich Text Editor)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal Paragraph', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
            { title: 'Quote / Blockquote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab?',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        // Inline image blocks within the post body
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              title: 'Image Caption (optional)',
              type: 'string',
            },
          ],
        },
      ],
      description: 'Write your full blog post here. Add headings, images, bullet lists, and bold text.',
    },

    // ── SEO ────────────────────────────────────────
    {
      name: 'seoTitle',
      title: 'SEO Title (optional)',
      type: 'string',
      description: 'Custom title for Google search. Leave blank to use post title.',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description (optional)',
      type: 'text',
      rows: 2,
      description: 'Short description for Google (150 characters ideal)',
    },

    // ── Visibility ─────────────────────────────────
    {
      name: 'isPublished',
      title: 'Published (visible on website)',
      type: 'boolean',
      description: 'Turn ON to show this post publicly. Keep OFF to save as draft.',
      initialValue: false,
    },
    {
      name: 'isFeatured',
      title: 'Featured Post (shown prominently)',
      type: 'boolean',
      description: 'Highlight this post at the top of the blog listing',
      initialValue: false,
    },
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
      isPublished: 'isPublished',
    },
    prepare({ title, subtitle, media, isPublished }) {
      return {
        title: `${isPublished ? '✅' : '📝'} ${title}`,
        subtitle: subtitle || 'Uncategorized',
        media,
      };
    },
  },
};

