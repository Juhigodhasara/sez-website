export default function TrustStatsStrip() {
  const stats = [
    {
      target: '10+',
      unit: 'Years',
      title: 'Teaching Pedagogy',
      desc: 'Proven methodology tested across 10 academic cycles.',
    },
    {
      target: '500+',
      unit: 'Students',
      title: '90%+ Score Achievers',
      desc: 'Consistently scoring exceptional percentages in Boards.',
    },
    {
      target: '50+',
      unit: 'Mentors',
      title: 'Subject Specialists',
      desc: 'Alumni of IITs, NITs, and premier state universities.',
    },
    {
      target: '1,200+',
      unit: 'Tests',
      title: 'Mock Board Exams',
      desc: 'Structured diagnostics & analytical feedback papers.',
    },
  ];

  return (
    <section className="w-full bg-primary-container text-on-primary py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md lg:gap-gutter">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center sm:items-start text-center sm:text-left p-space-md rounded-xl bg-primary/40 border border-on-primary/5 hover:border-tertiary-fixed/30 transition-all"
            >
              <div className="flex items-baseline gap-1">
                <span className="font-display-md text-display-md-mobile sm:text-display-md font-bold text-tertiary-fixed-dim">
                  {item.target}
                </span>
                <span className="font-headline-sm text-headline-sm text-tertiary-fixed font-bold">
                  {item.unit}
                </span>
              </div>
              <p className="font-label-lg text-label-lg text-on-primary font-semibold mt-1">{item.title}</p>
              <p className="font-body-sm text-body-sm text-on-primary-container mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

