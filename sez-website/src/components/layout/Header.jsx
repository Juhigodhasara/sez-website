import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollTo } from '../../hooks/useScrollTo';
import { navLinks } from '../../data/navigation';
import { siteConfig } from '../../data/siteConfig';

export default function Header() {
  const scrollTo = useScrollTo();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Banner */}
      <div className="w-full bg-primary-container text-on-primary font-body-sm text-body-sm py-space-xs px-gutter-mobile lg:px-gutter">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-gutter-mobile">
          <div className="flex items-center gap-space-sm overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex h-2 w-2 rounded-full bg-tertiary-fixed-dim shrink-0 animate-pulse"></span>
            <p className="font-label-sm text-label-sm truncate text-inverse-on-surface">
              Admissions Open 2026–27 | Sahjanand Educational Zone • Batches starting with 1-on-1 Mentorship{' '}
              <span className="bg-surface-container-highest/20 text-tertiary-fixed px-2 py-0.5 rounded ml-1.5 font-bold">
                We Create Future ®
              </span>
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-space-md shrink-0">
            <a
              className="flex items-center gap-space-xs text-inverse-on-surface hover:text-on-secondary transition-colors"
              href={`tel:${siteConfig.phone?.[0]?.replace(/\s+/g, '') || '+919820145678'}`}
            >
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">call</span>
              <span className="font-label-md text-label-md">{siteConfig.phone?.[0] || '+91 98201 45678'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/20">
        <div className="h-20 max-w-7xl mx-auto px-gutter-mobile lg:px-gutter flex items-center justify-between gap-gutter">
          {/* Logo */}
          <div className="flex items-center gap-space-md shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-space-sm cursor-pointer"
            >
              <img
                alt={siteConfig.name}
                className="h-11 sm:h-12 w-auto object-contain"
                src={siteConfig.logo}
              />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-space-lg">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                onClick={() => {
                  if (link.isPageLink) {
                    navigate(link.path);
                  } else {
                    scrollTo(link.id);
                  }
                }}
                className={`font-label-md text-label-md transition-colors cursor-pointer ${
                  activeSection === link.id
                    ? 'text-secondary font-bold'
                    : 'text-on-surface-variant hover:text-on-surface font-medium'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-space-sm lg:gap-space-md shrink-0">
            <a
              aria-label="WhatsApp Inquiry"
              className="p-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center"
              href={`https://wa.me/${siteConfig.whatsapp}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px] text-secondary">chat</span>
            </a>
            <button
              onClick={() => scrollTo('book-demo')}
              className="hidden sm:inline-flex items-center justify-center px-gutter-mobile py-2.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-label-lg text-label-lg shadow-sm hover:bg-tertiary-fixed-dim transition-all cursor-pointer font-bold"
            >
              Book Free Demo
            </button>
            <div className="flex items-center pl-space-xs">
              <img
                alt="SEZ Emblem"
                className="w-9 h-9 rounded-full object-contain ring-2 ring-tertiary-fixed bg-surface-container-lowest p-0.5 shadow-sm"
                src={siteConfig.emblem}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
