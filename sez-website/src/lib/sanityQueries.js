// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// GROQ Queries — all data-fetching queries in one place
// GROQ is Sanity's query language (like SQL for content)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Site configuration (singleton document)
export const SITE_CONFIG_QUERY = `
  *[_type == "siteConfig"][0] {
    instituteName,
    shortName,
    tagline,
    established,
    phone,
    whatsapp,
    email,
    address,
    hours,
    heroHeadline,
    heroSubHeadline,
    heroDescription,
    announcementText,
    admissionStatus,
    "logo": logo.asset->url,
    "footerLogo": footerLogo.asset->url,
    "emblem": emblem.asset->url,
    "heroImage": heroImage.asset->url,
    "aboutImage": aboutImage.asset->url,
    "mapImage": mapImage.asset->url,
  }
`;

// All courses sorted by display order
export const COURSES_QUERY = `
  *[_type == "course"] | order(sortOrder asc) {
    _id,
    title,
    category,
    classRange,
    batchSize,
    description,
    subjects,
    features,
    isPopular,
    ctaVariant,
    sortOrder,
  }
`;

// All faculty sorted by display order
export const FACULTY_QUERY = `
  *[_type == "faculty"] | order(sortOrder asc) {
    _id,
    name,
    role,
    qualification,
    bio,
    sortOrder,
    "image": photo.asset->url,
  }
`;

// All toppers
export const TOPPERS_QUERY = `
  *[_type == "topper"] | order(year desc) {
    _id,
    name,
    percentage,
    exam,
    highlight,
    school,
    badge,
    badgeVariant,
    category,
    year,
    "image": photo.asset->url,
  }
`;

// Active testimonials only
export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && isActive == true] {
    _id,
    name,
    relation,
    quote,
    rating,
    initials,
  }
`;

// Active FAQs sorted by order
export const FAQS_QUERY = `
  *[_type == "faqItem" && isActive == true] | order(sortOrder asc) {
    _id,
    question,
    answer,
    sortOrder,
  }
`;

// Gallery items sorted by order
export const GALLERY_QUERY = `
  *[_type == "galleryItem"] | order(sortOrder asc) {
    _id,
    title,
    category,
    "image": image.asset->url,
    sortOrder,
  }
`;

// Published blog posts listing (for /blog page)
export const BLOG_POSTS_QUERY = `
  *[_type == "blogPost" && isPublished == true] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    tags,
    authorName,
    publishedAt,
    isFeatured,
    "coverImage": coverImage.asset->url,
  }
`;

// Single blog post by slug (for /blog/[slug] page)
export const BLOG_POST_BY_SLUG_QUERY = `
  *[_type == "blogPost" && slug.current == $slug && isPublished == true][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    tags,
    authorName,
    publishedAt,
    isFeatured,
    seoTitle,
    seoDescription,
    "coverImage": coverImage.asset->url,
    body[] {
      ...,
      _type == "image" => {
        ...,
        "url": asset->url,
      }
    },
  }
`;

// Related posts (same category, excluding current)
export const RELATED_POSTS_QUERY = `
  *[_type == "blogPost" && isPublished == true && category == $category && slug.current != $slug][0..2] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    "coverImage": coverImage.asset->url,
  }
`;

