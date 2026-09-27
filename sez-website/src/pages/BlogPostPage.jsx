import { useParams, Link, useNavigate } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { useSanityFetch } from '../hooks/useSanityFetch';
import { BLOG_POST_BY_SLUG_QUERY, RELATED_POSTS_QUERY } from '../lib/sanityQueries';

// ─── PortableText rendering components ────────────────────────────
// Controls how rich text from Sanity renders in the browser
const ptComponents = {
  block: {
    normal: ({ children }) => <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-5">{children}</p>,
    h2: ({ children }) => <h2 className="font-headline-xl text-headline-xl text-primary font-bold mt-10 mb-4 leading-tight">{children}</h2>,
    h3: ({ children }) => <h3 className="font-headline-lg text-headline-lg text-primary font-bold mt-8 mb-3 leading-tight">{children}</h3>,
    h4: ({ children }) => <h4 className="font-headline-md text-headline-md text-primary font-semibold mt-6 mb-2">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-secondary pl-space-md my-6 italic text-on-surface-variant font-body-lg text-body-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-5 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-5 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="font-body-lg text-body-lg text-on-surface">{children}</li>,
    number: ({ children }) => <li className="font-body-lg text-body-lg text-on-surface">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-primary">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="font-mono text-sm bg-surface-container px-1.5 py-0.5 rounded text-secondary">{children}</code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className="text-secondary underline hover:text-secondary-container transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="my-8">
        <img
          src={value?.url || value?.asset?.url}
          alt={value?.caption || ''}
          className="w-full rounded-xl shadow-md object-cover"
        />
        {value?.caption && (
          <figcaption className="text-center font-body-sm text-body-sm text-on-surface-variant mt-2 italic">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
};

const CATEGORY_LABELS = {
  'exam-tips': 'Exam Tips',
  results: 'Results',
  news: 'News',
  events: 'Events',
  'student-stories': 'Student Stories',
  'faculty-insights': 'Faculty Insights',
  'study-guides': 'Study Guides',
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: post, loading, error } = useSanityFetch(
    BLOG_POST_BY_SLUG_QUERY,
    { slug },
    null
  );

  const { data: relatedPosts } = useSanityFetch(
    RELATED_POSTS_QUERY,
    { slug, category: post?.category || '' },
    []
  );

  // Loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-on-surface-variant">
          <span className="material-symbols-outlined text-[64px] animate-spin">refresh</span>
          <p className="font-body-lg text-body-lg">Loading article...</p>
        </div>
      </div>
    );
  }

  // Not found or error
  if (!post || error) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center gap-6 px-4 text-center">
        <span className="material-symbols-outlined text-[80px] text-outline-variant">article</span>
        <h1 className="font-headline-xl text-headline-xl text-primary font-bold">Article Not Found</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
          This post may have been unpublished or the URL might be incorrect.
        </p>
        <div className="flex items-center gap-space-md">
          <Link
            to="/blog"
            className="px-6 py-3 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-bold"
          >
            Back to Blog
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-lg bg-surface-container text-on-surface font-label-lg text-label-lg font-semibold cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* ── Cover Image ── */}
      {post.coverImage && (
        <div className="w-full h-72 sm:h-96 lg:h-[480px] bg-surface-container overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-gutter-mobile lg:px-gutter py-space-xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mb-space-lg">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <Link to="/blog" className="hover:text-secondary transition-colors">Blog</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-surface font-medium truncate max-w-48">{post.title}</span>
        </nav>

        {/* Category & Date */}
        <div className="flex items-center gap-space-sm flex-wrap mb-space-md">
          {post.category && (
            <span className="px-3 py-1.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-bold">
              {CATEGORY_LABELS[post.category] || post.category}
            </span>
          )}
          {post.publishedAt && (
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          )}
        </div>

        {/* Post Title */}
        <h1 className="font-display-md text-display-md-mobile sm:text-display-md text-primary font-bold tracking-tight leading-tight mb-space-md">
          {post.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-space-sm pb-space-lg border-b border-surface-container mb-space-lg">
          <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[20px]">person</span>
          </div>
          <div>
            <p className="font-label-lg text-label-lg text-primary font-bold">{post.authorName}</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Sahjanand Educational Zone</p>
          </div>
        </div>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-space-lg">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-body-sm text-body-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* ── Article Body — PortableText Rich Text ── */}
        <article className="prose-sez max-w-none">
          {post.body ? (
            <PortableText value={post.body} components={ptComponents} />
          ) : (
            <p className="font-body-lg text-body-lg text-on-surface-variant italic">
              This post has no content yet.
            </p>
          )}
        </article>

        {/* Social Share Hint */}
        <div className="mt-space-xl pt-space-lg border-t border-surface-container flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="font-label-md text-label-md text-on-surface-variant font-semibold">Share this article:</p>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - ${window.location.href}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-space-xs px-4 py-2 mt-2 rounded-lg bg-surface-container text-secondary font-label-md text-label-md font-bold hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">share</span>
              Share on WhatsApp
            </a>
          </div>
          <Link
            to="/blog"
            className="flex items-center gap-space-xs text-secondary font-label-lg text-label-lg font-bold hover:underline"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Blog
          </Link>
        </div>

        {/* ── Related Posts ── */}
        {relatedPosts?.length > 0 && (
          <div className="mt-space-xl">
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-space-lg">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
              {relatedPosts.map((related) => (
                <Link
                  key={related._id}
                  to={`/blog/${related.slug}`}
                  className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-surface-container"
                >
                  {related.coverImage && (
                    <div className="h-36 overflow-hidden">
                      <img
                        src={related.coverImage}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-space-md">
                    <h3 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    {related.excerpt && (
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                        {related.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

