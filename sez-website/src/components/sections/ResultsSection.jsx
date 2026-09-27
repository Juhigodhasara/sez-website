import { useState } from 'react';
import { toppers as staticToppers, resultFilters } from '../../data/toppers';
import { useScrollTo } from '../../hooks/useScrollTo';
import { useSanityFetch } from '../../hooks/useSanityFetch';
import { TOPPERS_QUERY } from '../../lib/sanityQueries';

export default function ResultsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const scrollTo = useScrollTo();
  const { data: toppers } = useSanityFetch(TOPPERS_QUERY, {}, staticToppers);

  const filteredToppers =
    activeFilter === 'all'
      ? toppers
      : toppers.filter((topper) => topper.category === activeFilter);

  return (
    <section className="w-full bg-surface py-space-xl lg:py-24" id="results">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-lg">
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
            Proven Track Record
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary font-bold tracking-tight mt-2">
            Hard Work Deserves to Be Celebrated
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            In Board Exams 2025, 89% of Sahjanand Educational Zone students scored above 90%, with multiple city rank holders across Science &amp; Commerce.
          </p>

          {/* Result Filters */}
          <div className="flex flex-wrap justify-center gap-space-xs sm:gap-space-sm mt-space-md">
            {resultFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md shadow-sm transition-all cursor-pointer ${
                  activeFilter === filter.value
                    ? 'bg-primary text-on-primary font-bold'
                    : 'bg-surface-container-highest text-on-surface hover:bg-surface-container font-medium'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {filteredToppers.map((topper) => (
            <div
              key={topper.id}
              className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center border border-surface-container/60"
            >
              <div className="relative mb-space-sm">
                <img
                  alt={`${topper.name} - ${topper.percentage}`}
                  className={`w-24 h-24 rounded-full object-cover shadow-md ${
                    topper.badgeVariant === 'accent' ? 'ring-4 ring-tertiary-fixed' : 'ring-4 ring-secondary'
                  }`}
                  src={topper.image}
                />
                <span
                  className={`absolute -bottom-2 right-0 font-label-sm text-label-sm px-2 py-0.5 rounded-full font-extrabold shadow-sm ${
                    topper.badgeVariant === 'accent'
                      ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                      : 'bg-primary text-on-primary'
                  }`}
                >
                  {topper.badge}
                </span>
              </div>

              <p className="font-display-md text-display-md-mobile text-secondary font-extrabold">
                {topper.percentage}
              </p>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">
                {topper.name}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                {topper.exam}
              </p>
              <p className="font-body-sm text-body-sm text-secondary font-bold mt-1">
                {topper.highlight}
              </p>
              <p className="font-label-sm text-label-sm text-outline mt-2">
                {topper.school}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-space-lg text-center">
          <button
            onClick={() => scrollTo('book-demo')}
            className="inline-flex items-center gap-space-xs text-secondary font-label-lg text-label-lg font-bold hover:underline cursor-pointer"
          >
            <span>View All 150+ Verified Marksheets &amp; Parent Endorsements</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}

