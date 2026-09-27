import { siteConfig } from '../../data/siteConfig';
import { useScrollTo } from '../../hooks/useScrollTo';

export default function MobileBottomBar() {
  const scrollTo = useScrollTo();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md p-space-sm shadow-[0_-2px_12px_rgba(0,0,0,0.08)] flex items-center justify-around gap-space-sm border-t border-outline-variant/30">
      <a
        className="flex-1 flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold"
        href={`tel:${siteConfig.phone?.[0]?.replace(/\s+/g, '') || '+919820145678'}`}
      >
        <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
        Call Now
      </a>
      <a
        className="flex-1 flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold"
        href={`https://wa.me/${siteConfig.whatsapp}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-[18px] text-secondary">chat</span>
        WhatsApp
      </a>
      <button
        onClick={() => scrollTo('book-demo')}
        className="flex-1 flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold cursor-pointer"
      >
        Book Demo
      </button>
    </div>
  );
}
