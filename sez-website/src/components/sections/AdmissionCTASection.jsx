import { siteConfig } from '../../data/siteConfig';
import { useScrollTo } from '../../hooks/useScrollTo';

export default function AdmissionCTASection() {
  const scrollTo = useScrollTo();

  return (
    <section className="w-full bg-primary-container text-on-primary py-space-xl relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-gutter-mobile lg:px-gutter text-center relative z-10">
        <span className="inline-block px-3.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold uppercase mb-space-sm">
          Limited Seats for 2026–27 Academic Cycle
        </span>
        <h2 className="font-display-md text-display-md-mobile sm:text-display-md font-bold text-on-primary tracking-tight">
          Your Child’s Better Learning Journey Starts Today
        </h2>
        <p className="font-body-xl text-body-xl text-on-primary-container max-w-2xl mx-auto mt-space-sm">
          Experience our concept-focused methodology firsthand at Sahjanand Educational Zone. Attend 2 complimentary
          interactive demo classes with our senior mentors before making any commitment.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-space-md mt-space-lg">
          <button
            onClick={() => scrollTo('book-demo')}
            className="px-space-xl py-4 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-headline-sm text-headline-sm font-bold shadow-lg hover:bg-tertiary-fixed-dim transition-all cursor-pointer"
          >
            Book Free 2-Day Demo Class
          </button>
          <a
            className="inline-flex items-center gap-space-xs px-space-lg py-4 rounded-lg bg-surface-container-lowest/10 text-on-primary hover:bg-surface-container-lowest/20 transition-colors font-headline-sm text-headline-sm font-bold"
            href={`tel:${siteConfig.phone?.[0]?.replace(/\s+/g, '') || '+919820145678'}`}
          >
            <span className="material-symbols-outlined text-[20px] text-tertiary-fixed-dim">call</span>
            <span>Talk with Counsellor</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-space-lg text-on-primary-container text-body-sm font-body-sm mt-space-lg">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">check_circle</span>
            Zero Upfront Commitment
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">check_circle</span>
            Free Diagnostic Skill Test
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">check_circle</span>
            Comprehensive Subject Booklet
          </span>
        </div>
      </div>
    </section>
  );
}

