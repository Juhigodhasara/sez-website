import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSanityFetch } from '../hooks/useSanityFetch';
import { BLOG_POSTS_QUERY } from '../lib/sanityQueries';

// Category labels and icons for the filter UI
const CATEGORIES = [
  { value: 'all', label: 'All Posts' },
  { value: 'exam-tips', label: '📚 Exam Tips' },
  { value: 'results', label: '🏆 Results' },
  { value: 'news', label: '📢 News' },
  { value: 'events', label: '📅 Events' },
  { value: 'student-stories', label: '👨‍🎓 Student Stories' },
  { value: 'faculty-insights', label: '👨‍🏫 Faculty Insights' },
  { value: 'study-guides', label: '💡 Study Guides' },
];

const CATEGORY_LABELS = {
  'exam-tips': 'Exam Tips',
  results: 'Results',
  news: 'News',
  events: 'Events',
  'student-stories': 'Student Stories',
  'faculty-insights': 'Faculty Insights',
  'study-guides': 'Study Guides',
};

function BlogCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 border border-surface-container/60"
    >
      {/* Cover Image */}
      <div className="w-full h-48 bg-surface-container overflow-hidden">
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="material-symbols-outlined text-[64px] text-outline-variant">article</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-space-md gap-space-xs">
        {/* Category + Date */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          {post.category && (
            <span className="px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm font-bold">
              {CATEGORY_LABELS[post.category] || post.category}
            </span>
          )}
          {post.publishedAt && (
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="font-headline-lg text-headline-lg text-primary font-bold leading-tight group-hover:text-secondary transition-colors line-clamp-2 mt-1">
          {post.title}
        </h2>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 flex-1">
            {post.excerpt}
          </p>
        )}

        {/* Author + Read More */}
        <div className="flex items-center justify-between mt-space-sm pt-space-sm border-t border-surface-container">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            By {post.authorName || 'SEZ Team'}
          </span>
          <span className="flex items-center gap-1 font-label-md text-label-md text-secondary font-bold">
            Read
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { data: posts, loading } = useSanityFetch(BLOG_POSTS_QUERY, {}, []);

  const filtered = (posts || []).filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filtered.find((p) => p.isFeatured);
  const regularPosts = filtered.filter((p) => !p.isFeatured);

  return (
    <div className="min-h-screen bg-surface">
      {/* ── Blog Header Banner ── */}
      <div className="w-full bg-gradient-to-b from-surface-container-low to-surface py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter text-center">
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
            Knowledge & Insights
          </span>
          <h1 className="font-display-md text-display-md-mobile sm:text-display-md text-primary font-bold tracking-tight mt-2">
            The SEZ Blog
          </h1>
          <p className="font-body-xl text-body-xl text-on-surface-variant mt-3 max-w-2xl mx-auto">
            Exam tips, study guides, student success stories, and updates from Sahjanand Educational Zone.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto mt-6">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[20px] text-outline">
              search
            </span>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-outline-variant bg-surface-container-lowest focus:border-secondary focus:outline-none font-body-md text-body-md text-on-surface transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter pb-24">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-space-xs sm:gap-space-sm py-6 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.value
                  ? 'bg-primary text-on-primary font-bold shadow-sm'
                  : 'bg-surface-container text-on-surface hover:bg-surface-container-high font-medium'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-[48px] animate-spin">refresh</span>
              <p className="font-body-md text-body-md">Loading posts...</p>
            </div>
          </div>
        )}

        {/* No posts — Sanity not yet configured */}
        {!loading && posts?.length === 0 && (
          <div className="flex flex-col items-center text-center py-20 gap-4">
            <span className="material-symbols-outlined text-[64px] text-outline-variant">edit_note</span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">No Blog Posts Yet</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Blog posts will appear here once they are published in the CMS. Connect Sanity and start writing!
            </p>
          </div>
        )}

        {/* Featured Post */}
        {!loading && featuredPost && (
          <div className="mb-space-xl">
            <h2 className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold mb-space-md">
              ⭐ Featured Post
            </h2>
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-surface-container/60"
            >
              <div className="h-64 lg:h-full bg-surface-container overflow-hidden">
                {featuredPost.coverImage ? (
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[64px] text-outline-variant">article</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center p-space-xl gap-space-md">
                <span className="px-3 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold w-max">
                  ⭐ Featured
                </span>
                <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary font-bold leading-tight group-hover:text-secondary transition-colors">
                  {featuredPost.title}
                </h2>
                {featuredPost.excerpt && (
                  <p className="font-body-lg text-body-lg text-on-surface-variant line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                )}
                <div className="flex items-center gap-space-md">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {featuredPost.authorName} •{' '}
                    {featuredPost.publishedAt &&
                      new Date(featuredPost.publishedAt).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                  </span>
                  <span className="flex items-center gap-1 font-label-lg text-label-lg text-secondary font-bold">
                    Read Article
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Posts Grid */}
        {!loading && regularPosts.length > 0 && (
          <>
            {featuredPost && (
              <h2 className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold mb-space-md">
                All Posts
              </h2>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-lg">
              {regularPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          </>
        )}

        {/* No results from filter */}
        {!loading && posts?.length > 0 && filtered.length === 0 && (
          <div className="flex flex-col items-center text-center py-16 gap-3">
            <span className="material-symbols-outlined text-[48px] text-outline-variant">search_off</span>
            <h3 className="font-headline-md text-headline-md text-primary font-bold">No posts found</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Try a different search or category filter.
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-bold cursor-pointer mt-2"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

