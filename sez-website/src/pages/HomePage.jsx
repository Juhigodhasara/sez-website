import HeroSection from '../components/sections/HeroSection';
import TrustStatsStrip from '../components/sections/TrustStatsStrip';
import AboutSection from '../components/sections/AboutSection';
import CoursesSection from '../components/sections/CoursesSection';
import WhyTrustSection from '../components/sections/WhyTrustSection';
import MethodologySection from '../components/sections/MethodologySection';
import ResultsSection from '../components/sections/ResultsSection';
import FacultySection from '../components/sections/FacultySection';
import GallerySection from '../components/sections/GallerySection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AdmissionCTASection from '../components/sections/AdmissionCTASection';
import FAQSection from '../components/sections/FAQSection';
import ContactFormSection from '../components/sections/ContactFormSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <TrustStatsStrip />
      <AboutSection />
      <CoursesSection />
      <WhyTrustSection />
      <MethodologySection />
      <ResultsSection />
      <FacultySection />
      <GallerySection />
      <TestimonialsSection />
      <AdmissionCTASection />
      <FAQSection />
      <ContactFormSection />
    </div>
  );
}

