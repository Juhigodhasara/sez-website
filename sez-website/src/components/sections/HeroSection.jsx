import { siteConfig } from '../../data/siteConfig';
import { useScrollTo } from '../../hooks/useScrollTo';

export default function HeroSection() {
  const scrollTo = useScrollTo();

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-lowest via-surface to-surface-container-low py-space-xl lg:py-24">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-gutter items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col items-start gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed shadow-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-ping"></span>
              <span className="font-label-sm text-label-sm tracking-wide uppercase font-bold">
                Admissions Open 2026–27 • Max 15 per Batch
              </span>
            </div>

            <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary tracking-tight font-extrabold leading-tight">
              We Create Future: <br className="hidden sm:inline" />
              <span className="text-secondary">Learn Better.</span> <br className="hidden sm:inline" />
              Score Higher.
            </h1>

            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-xl">
              Sahjanand Educational Zone (SEZ) delivers concept-focused, mentor-led coaching designed to unlock student
              potential across CBSE, ICSE &amp; State Boards from Class 1 to 12.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-space-sm sm:gap-space-md pt-space-xs w-full sm:w-auto">
              <button
                onClick={() => scrollTo('book-demo')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-label-lg text-label-lg shadow-md hover:bg-tertiary-fixed-dim transition-all group font-bold cursor-pointer"
              >
                <span>Book Free Demo Class</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>

              <button
                onClick={() => scrollTo('courses')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-surface-container-high text-primary font-label-lg text-label-lg hover:bg-surface-container-highest transition-colors font-semibold cursor-pointer"
              >
                <span>Explore All Courses</span>
                <span className="material-symbols-outlined text-[18px]">south</span>
              </button>

              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-md py-3.5 rounded-lg bg-surface-container text-secondary font-label-md text-label-md hover:bg-surface-container-high transition-colors font-semibold"
                href={`https://wa.me/${siteConfig.whatsapp}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Quick WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-md w-full border-t border-surface-container/60 mt-2">
              <div className="flex items-center gap-space-xs text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
                <span className="font-body-sm text-body-sm font-medium">8+ Yrs Avg Faculty</span>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[20px]">groups</span>
                <span className="font-body-sm text-body-sm font-medium">Max 15 Students</span>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[20px]">assignment_turned_in</span>
                <span className="font-body-sm text-body-sm font-medium">Weekly Tests</span>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[20px]">psychology</span>
                <span className="font-body-sm text-body-sm font-medium">1:1 Mentorship</span>
              </div>
            </div>
          </div>

          {/* Right Visual: Classroom with Floating Badges */}
          <div className="lg:col-span-6 relative mt-space-lg lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest border border-surface-container">
              <img
                alt="Interactive Coaching Classroom at Sahjanand Educational Zone"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center"
                src={siteConfig.heroImage}
              />
              {/* Gradient Overlay for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-on-primary">
                <div className="flex items-center gap-space-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                  <span className="font-label-sm text-label-sm tracking-wide font-semibold">
                    Live Interactive Classroom Session
                  </span>
                </div>
                <span className="font-label-sm text-label-sm bg-primary/80 px-2.5 py-1 rounded-md backdrop-blur-sm font-semibold">
                  Board &amp; Concept Prep
                </span>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -left-3 sm:-left-6 p-space-sm bg-surface-container-lowest/95 backdrop-blur-md rounded-xl shadow-lg flex items-center gap-space-xs sm:gap-space-sm border border-surface-container">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                <img alt="SEZ Seal" className="w-7 h-7 object-contain" src={siteConfig.sealLogo} />
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm text-primary font-bold leading-tight">10+ Years</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Of Academic Excellence</p>
              </div>
            </div>

            <div className="absolute top-12 -right-3 sm:-right-6 p-space-sm bg-surface-container-lowest/95 backdrop-blur-md rounded-xl shadow-lg flex items-center gap-space-xs sm:gap-space-sm border border-surface-container">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary-fixed-dim">
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm text-primary font-bold leading-tight">95%+ Rate</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Score Improvement</p>
              </div>
            </div>

            <div className="absolute -bottom-5 left-6 p-space-sm bg-surface-container-lowest/95 backdrop-blur-md rounded-xl shadow-lg flex items-center gap-space-xs sm:gap-space-sm border border-surface-container">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]">diversity_3</span>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm text-primary font-bold leading-tight">1:15 Ratio</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Focused Attention</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-3 sm:-right-4 p-space-sm bg-surface-container-lowest/95 backdrop-blur-md rounded-xl shadow-lg flex items-center gap-space-xs sm:gap-space-sm border border-surface-container">
              <div className="w-10 h-10 rounded-lg bg-primary-container text-tertiary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm text-primary font-bold leading-tight">500+ Top</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Board Rankers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

