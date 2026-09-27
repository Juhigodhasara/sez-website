import { testimonials as staticTestimonials } from '../../data/testimonials';
import { useSanityFetch } from '../../hooks/useSanityFetch';
import { TESTIMONIALS_QUERY } from '../../lib/sanityQueries';

export default function TestimonialsSection() {
  const { data: testimonials } = useSanityFetch(TESTIMONIALS_QUERY, {}, staticTestimonials);
  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-24" id="reviews">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
            Real Stories of Transformation
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary font-bold tracking-tight mt-2">
            Endorsed by Discerning Parents &amp; Confident Students
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Read genuine feedback from families whose academic stress transformed into triumph.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container/60"
            >
              <div>
                <div className="flex items-center gap-1 text-tertiary-fixed-dim mb-space-sm">
                  {[...Array(review.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant italic">
                  {review.quote}
                </p>
              </div>

              <div className="flex items-center gap-space-sm pt-space-md border-t border-surface-container mt-4">
                <div className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-secondary font-bold text-sm">
                  {review.initials}
                </div>
                <div>
                  <p className="font-headline-sm text-body-lg font-bold text-primary leading-tight">
                    {review.name}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {review.relation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

