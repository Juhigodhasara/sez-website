import { cn } from '../../lib/utils';

export default function SectionWrapper({ id, className, children, bg = 'bg-surface' }) {
  return (
    <section id={id} className={cn('w-full py-space-xl lg:py-24', bg, className)}>
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        {children}
      </div>
    </section>
  );
}
