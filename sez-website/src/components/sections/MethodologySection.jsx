export default function MethodologySection() {
  const steps = [
    {
      step: 'Step 01',
      icon: 'lightbulb',
      title: 'Understand',
      desc: 'Build crystal-clear fundamental mental models using real-world physical analogues and interactive smartboard visual models.',
      highlight: 'Zero Rote Cramming',
      isAccent: false,
    },
    {
      step: 'Step 02',
      icon: 'draw',
      title: 'Practice',
      desc: 'Tackle tiered practice sheets starting from NCERT fundamentals, stepping gradually to Board & Olympiad difficulty.',
      highlight: 'Graded Difficulty Worksheets',
      isAccent: false,
    },
    {
      step: 'Step 03',
      icon: 'speed',
      title: 'Evaluate',
      desc: 'Uncover exact micro-gaps through timed weekly chapter tests, subjective paper assessments, and comparative analytics.',
      highlight: 'Comprehensive Analytics',
      isAccent: false,
    },
    {
      step: 'Step 04',
      icon: 'trending_up',
      title: 'Master & Excel',
      desc: 'Targeted remedial 1-on-1 sessions, doubt clinics, and repeat challenge problem sets until 100% conceptual mastery is locked.',
      highlight: 'Consistent 90%+ Outcome',
      isAccent: true,
    },
  ];

  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-24" id="pedagogy">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
            Our Scientific Pedagogy
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary font-bold tracking-tight mt-2">
            From Confusion to Confidence in 4 Steps
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            How our disciplined circular feedback loop transforms anxious students into autonomous problem solvers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative z-10 border ${
                step.isAccent ? 'border-tertiary-fixed ring-2 ring-tertiary-fixed/30' : 'border-surface-container/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span
                    className={`px-3 py-1 rounded-full font-label-sm text-label-sm font-bold ${
                      step.isAccent
                        ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                        : 'bg-secondary text-on-secondary'
                    }`}
                  >
                    {step.step}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[28px] ${
                      step.isAccent ? 'text-tertiary-fixed-dim' : 'text-secondary'
                    }`}
                  >
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-primary font-bold">{step.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">{step.desc}</p>
              </div>

              <div
                className={`mt-space-md pt-space-sm border-t border-surface-container flex items-center gap-space-xs font-label-sm text-label-sm font-bold ${
                  step.isAccent ? 'text-on-tertiary-fixed' : 'text-secondary'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>{step.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

