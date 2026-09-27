import { useState } from 'react';
import { faqItems } from '../../data/faq';
import { faqItems as staticFaqItems } from '../../data/faq';
import { useSanityFetch } from '../../hooks/useSanityFetch';
import { FAQS_QUERY } from '../../lib/sanityQueries';

export default function FAQSection() {
  const [openId, setOpenId] = useState('faq-1');
  const { data: faqItems } = useSanityFetch(FAQS_QUERY, {}, staticFaqItems);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-surface py-space-xl lg:py-24" id="faqs">
      <div className="max-w-4xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="flex flex-col items-center text-center mb-space-xl">
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
            Got Questions?
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary font-bold tracking-tight mt-2">
            Frequently Asked Questions
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Everything parents and students need to know regarding admissions, batch sizes, and methodology.
          </p>
        </div>

        <div className="space-y-space-sm">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl bg-surface-container-low overflow-hidden transition-all border border-surface-container"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-space-md text-left flex items-center justify-between gap-space-sm text-primary font-headline-sm text-headline-sm font-semibold cursor-pointer"
                  type="button"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span
                    className={`material-symbols-outlined text-secondary transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

