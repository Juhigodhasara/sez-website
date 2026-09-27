import { useState } from 'react';
import { courses as staticCourses, courseFilters } from '../../data/courses';
import { useScrollTo } from '../../hooks/useScrollTo';
import { useSanityFetch } from '../../hooks/useSanityFetch';
import { COURSES_QUERY } from '../../lib/sanityQueries';

export default function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const scrollTo = useScrollTo();
  const { data: courses } = useSanityFetch(COURSES_QUERY, {}, staticCourses);

  const filteredCourses =
    activeFilter === 'all'
      ? courses
      : courses.filter((course) => course.category === activeFilter);

  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-24" id="courses">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-lg">
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
            Academic Programs (Class 1 to 12)
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary font-bold tracking-tight mt-2">
            Choose Your Learning Path
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Structured academic coaching tailored for every stage of your school career, adhering to CBSE, ICSE, and State Board curricula.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-space-xs sm:gap-space-sm mt-space-md">
            {courseFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all cursor-pointer ${
                  activeFilter === filter.value
                    ? 'bg-primary text-on-primary shadow-sm font-bold'
                    : 'bg-surface-container-highest text-on-surface hover:bg-surface-container font-medium'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`relative flex flex-col justify-between p-space-lg rounded-2xl bg-surface-container-lowest transition-all duration-200 border border-surface-container/60 ${
                course.isPopular ? 'shadow-md ring-2 ring-tertiary-fixed' : 'shadow-sm hover:shadow-xl'
              }`}
            >
              {course.isPopular && (
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold shadow-sm">
                  ★ Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-space-sm mb-space-sm">
                  <span className="px-3 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm font-bold">
                    {course.classRange}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                    {course.batchSize}
                  </span>
                </div>

                <h3 className="font-headline-lg text-headline-lg text-primary font-bold">
                  {course.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  {course.description}
                </p>

                {/* Subjects Covered */}
                <div className="my-space-md p-space-sm rounded-lg bg-surface-container-low">
                  <p className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold mb-1">
                    Subjects Covered:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {course.subjects.map((sub, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-body-sm text-body-sm"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Feature Checklist */}
                <ul className="space-y-1.5 mb-space-md">
                  {course.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-space-sm">
                <button
                  onClick={() => scrollTo('book-demo')}
                  className={`w-full py-2.5 rounded-lg font-label-md text-label-md font-bold text-center transition-colors cursor-pointer ${
                    course.ctaVariant === 'accent' || course.isPopular
                      ? 'bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary-fixed-dim'
                      : 'bg-secondary text-on-secondary hover:bg-secondary-container'
                  }`}
                >
                  Book Free Trial Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

