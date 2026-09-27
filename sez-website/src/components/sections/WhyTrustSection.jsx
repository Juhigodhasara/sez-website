export default function WhyTrustSection() {
  const trustCards = [
    {
      num: '01',
      icon: 'groups',
      title: 'Strictly Small Batches',
      desc: 'With a hard ceiling of 15 students per batch, back-bench passivity is structurally eliminated. Every child is invited into every classroom dialogue.',
      tag: 'Average Ratio 1:12',
    },
    {
      num: '02',
      icon: 'award_star',
      title: 'Expert Subject Mentors',
      desc: 'Seasoned post-graduates and Ph.D. scholars with minimum 8 years of pedagogical standing who know how to deconstruct difficult abstractions.',
      tag: '100% Full-Time Faculty',
    },
    {
      num: '03',
      icon: 'analytics',
      title: 'Weekly Performance Analytics',
      desc: 'Weekly diagnostic assessments paired with topic-wise gap breakdowns sent straight to parents via WhatsApp and our student portal.',
      tag: 'Real-time Parent Visibility',
    },
    {
      num: '04',
      icon: 'help_center',
      title: 'Daily 1-on-1 Doubt Windows',
      desc: 'A 60-minute daily dedicated doubt clinic where shy students receive reassuring individual walk-throughs without judgment or time pressure.',
      tag: 'Zero Doubts Left Overnight',
    },
    {
      num: '05',
      icon: 'psychology_alt',
      title: 'Tailored Mentorship Cards',
      desc: 'Every pupil receives a customized remediation sheet targeting their exact weak spots, whether formula application or answer presentation.',
      tag: 'Personalized Growth Trajectory',
    },
    {
      num: '06',
      icon: 'self_improvement',
      title: 'Exam Mindset & Temperament',
      desc: 'Time-pressure simulations, handwriting and step-marking optimization clinics, and proactive stress-reduction guidance before finals.',
      tag: 'Calm, Confident Examination',
    },
  ];

  return (
    <section className="w-full bg-surface py-space-xl lg:py-24">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
            The SEZ Advantage
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary font-bold tracking-tight mt-2">
            Why Parents Trust Sahjanand Educational Zone
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            An uncompromised institutional commitment to academic discipline, individual transparency, and measurable score progression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {trustCards.map((card, i) => (
            <div
              key={i}
              className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container/60"
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-display-md text-display-md text-surface-container-highest font-extrabold">
                    {card.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[26px]">{card.icon}</span>
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary font-bold">{card.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">{card.desc}</p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-surface-container">
                <span className="font-label-sm text-label-sm text-secondary font-bold">{card.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

