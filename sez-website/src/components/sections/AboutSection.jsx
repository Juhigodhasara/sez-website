import { siteConfig } from '../../data/siteConfig';
import { useScrollTo } from '../../hooks/useScrollTo';

export default function AboutSection() {
  const scrollTo = useScrollTo();

  const pillars = [
    {
      title: 'Concept-Based Teaching',
      desc: 'No rote cramming; we build foundational mental models.',
    },
    {
      title: 'Guaranteed Personal Attention',
      desc: 'Max 15 students per batch ensures zero passive listeners.',
    },
    {
      title: 'Weekly Diagnostic Reports',
      desc: 'Transparent micro-gap analytics delivered directly to parents.',
    },
    {
      title: 'Dedicated Doubt Windows',
      desc: '60-minute daily 1-on-1 clinic for clearing every hurdle.',
    },
    {
      title: 'Exam-Focused Strategy',
      desc: 'Past 10-year question banks & timed answer-writing practice.',
    },
    {
      title: 'Warm, Stress-Free Vibe',
      desc: 'An inspiring environment where asking doubts is celebrated.',
    },
  ];

  return (
    <section className="w-full bg-surface py-space-xl lg:py-24" id="about-us">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-gutter items-center">
          {/* Left Column: Image with Overlays */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-high border border-surface-container">
              <img
                alt="Mentor coaching student 1-on-1 at Sahjanand Educational Zone"
                className="w-full h-[400px] sm:h-[460px] object-cover object-center"
                src={siteConfig.aboutImage}
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-surface-container-lowest p-space-md rounded-xl shadow-lg max-w-xs border border-surface-container">
              <div className="flex items-center gap-space-xs text-secondary mb-1">
                <img
                  alt="SEZ Logo"
                  className="w-6 h-6 object-contain"
                  src={siteConfig.aboutBadgeLogo}
                />
                <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider">
                  Est. {siteConfig.established} • SEZ
                </span>
              </div>
              <p className="font-headline-sm text-headline-sm text-primary font-bold leading-tight">
                {siteConfig.motto}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 italic">
                “Nurturing analytical intuition rather than mechanical memorization.”
              </p>
            </div>
          </div>

          {/* Right Column: Story & 6 Value Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
              About Sahjanand Educational Zone
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary font-bold tracking-tight leading-tight">
              More Than Tuition. <br className="hidden sm:inline" />
              <span className="text-secondary">A Better Way to Learn.</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              At Sahjanand Educational Zone (SEZ), we believe every student can perform at the highest academic
              echelon when learning becomes clear, structured, and deeply personal. Our holistic framework
              harmonizes rigorous concept fundamentals, continuous formative assessments, and an empowering
              mentor-student connection.
            </p>

            {/* 6 Pillars in Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low border border-surface-container/50">
                  <span className="material-symbols-outlined text-secondary text-[22px] shrink-0">check_circle</span>
                  <div>
                    <h3 className="font-headline-sm text-body-lg font-bold text-primary">{pillar.title}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-space-xs">
              <button
                onClick={() => scrollTo('pedagogy')}
                className="inline-flex items-center gap-space-xs text-secondary font-label-lg text-label-lg font-bold hover:underline cursor-pointer"
              >
                <span>Know More About Our Pedagogy</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

