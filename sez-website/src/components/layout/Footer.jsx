import { siteConfig } from '../../data/siteConfig';
import { footerStreams, footerResources } from '../../data/navigation';
import { useScrollTo } from '../../hooks/useScrollTo';

export default function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer className="w-full bg-primary-container text-inverse-on-surface pt-space-xl pb-24 lg:pb-space-xl">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl">
          {/* Col 1: Institute Brand & Motto */}
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                alt={siteConfig.name}
                className="h-10 w-auto object-contain bg-white p-1 rounded"
                src={siteConfig.footerLogo}
              />
            </div>
            <p className="font-body-md text-body-md text-on-primary-container max-w-sm">
              <span className="text-tertiary-fixed-dim font-semibold">{siteConfig.motto}</span> — Guiding
              young minds toward conceptual mastery &amp; academic excellence since {siteConfig.established}. High-impact
              pedagogy built for board ranks &amp; competitive exams.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <a
                className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-inverse-on-surface hover:text-secondary-fixed transition-colors"
                href="#courses"
              >
                <span className="material-symbols-outlined text-[18px]">language</span>
              </a>
              <a
                className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-inverse-on-surface hover:text-secondary-fixed transition-colors"
                href="#pedagogy"
              >
                <span className="material-symbols-outlined text-[18px]">play_circle</span>
              </a>
              <a
                className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-inverse-on-surface hover:text-secondary-fixed transition-colors"
                href="#results"
              >
                <span className="material-symbols-outlined text-[18px]">school</span>
              </a>
            </div>
          </div>

          {/* Col 2: Academic Streams */}
          <div className="flex flex-col gap-space-md">
            <h4 className="font-headline-sm text-headline-sm text-on-primary font-bold">Academic Streams</h4>
            <ul className="flex flex-col gap-space-sm font-body-md text-body-md text-on-primary-container">
              {footerStreams.map((stream, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo('courses')}
                    className="hover:text-on-primary transition-colors text-left"
                  >
                    {stream.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Parent Resources */}
          <div className="flex flex-col gap-space-md">
            <h4 className="font-headline-sm text-headline-sm text-on-primary font-bold">Parent Resources</h4>
            <ul className="flex flex-col gap-space-sm font-body-md text-body-md text-on-primary-container">
              {footerResources.map((res, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo('book-demo')}
                    className="hover:text-on-primary transition-colors text-left"
                  >
                    {res.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Academy Campus */}
          <div className="flex flex-col gap-space-md">
            <h4 className="font-headline-sm text-headline-sm text-on-primary font-bold">Academy Campus</h4>
            <div className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-primary-container">
              <p className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim shrink-0">location_on</span>
                {siteConfig.address}
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim shrink-0">call</span>
                {siteConfig.phone?.[0]}
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim shrink-0">mail</span>
                {siteConfig.email}
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim shrink-0">schedule</span>
                {siteConfig.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & sub-links */}
        <div className="pt-space-lg border-t border-surface-container/20 flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-primary-container">
          <p>© {new Date().getFullYear()} Sahjanand Educational Zone. All Rights Reserved. {siteConfig.motto}</p>
          <div className="flex items-center gap-space-md">
            <a className="hover:text-on-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-on-primary transition-colors" href="#">Terms of Enrollment</a>
            <a className="hover:text-on-primary transition-colors" href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
