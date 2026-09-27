import { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    student_name: '',
    parent_name: '',
    phone_number: '',
    student_class: '',
    board_name: 'cbse',
    batch_timing: 'evening',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-24" id="book-demo">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Left Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
              Contact Our Admissions Desk
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary font-bold tracking-tight">
              Let’s Talk About Your Child’s Goals
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Have questions regarding batch timings, scholarship criteria, or faculty credentials? Drop by our
              learning center or schedule a quick phone consultation.
            </p>

            <div className="space-y-space-md pt-space-xs">
              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <p className="font-headline-sm text-body-lg text-primary font-bold">SEZ Main Campus</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <p className="font-headline-sm text-body-lg text-primary font-bold">Admissions Hotline</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {siteConfig.phone?.join(' / ')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div>
                  <p className="font-headline-sm text-body-lg text-primary font-bold">Visiting &amp; Counsellor Hours</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{siteConfig.hours}</p>
                </div>
              </div>
            </div>

            {/* Location Map Preview Card */}
            <div
              className="w-full h-48 rounded-xl bg-cover bg-center mt-space-sm shadow-sm border border-surface-container"
              style={{ backgroundImage: `url('${siteConfig.mapImage}')` }}
            ></div>
          </div>

          {/* Right: Interactive Lead Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg sm:p-space-xl rounded-2xl shadow-md border border-surface-container">
            <div className="mb-space-md">
              <div className="flex items-center gap-space-xs mb-2">
                <img
                  alt="SEZ Emblem"
                  className="w-8 h-8 object-contain"
                  src={siteConfig.formEmblem}
                />
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                  {siteConfig.name}
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary font-bold">
                Book a Free 2-Day Demo Class
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Select your child&apos;s grade and preferred timings. We will confirm your seat within 2 hours.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-space-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5" htmlFor="student_name">
                      Student Full Name *
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-secondary focus:outline-none text-body-md font-body-md text-on-surface transition-colors"
                      id="student_name"
                      name="student_name"
                      placeholder="e.g. Tanmay Sen"
                      required
                      type="text"
                      value={formData.student_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5" htmlFor="parent_name">
                      Parent / Guardian Name *
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-secondary focus:outline-none text-body-md font-body-md text-on-surface transition-colors"
                      id="parent_name"
                      name="parent_name"
                      placeholder="e.g. Alok Sen"
                      required
                      type="text"
                      value={formData.parent_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5" htmlFor="phone_number">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-secondary focus:outline-none text-body-md font-body-md text-on-surface transition-colors"
                      id="phone_number"
                      name="phone_number"
                      placeholder="+91 98765 43210"
                      required
                      type="tel"
                      value={formData.phone_number}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5" htmlFor="student_class">
                      Class / Grade *
                    </label>
                    <select
                      className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-secondary focus:outline-none text-body-md font-body-md text-on-surface transition-colors"
                      id="student_class"
                      name="student_class"
                      required
                      value={formData.student_class}
                      onChange={handleChange}
                    >
                      <option value="">Select Grade</option>
                      <option value="1-5">Class 1 to 5 (Foundation)</option>
                      <option value="6-8">Class 6 to 8 (Middle School)</option>
                      <option value="9">Class 9 (Secondary)</option>
                      <option value="10">Class 10 (Board Prep)</option>
                      <option value="11-sci">Class 11 Science (PCM/PCB)</option>
                      <option value="12-sci">Class 12 Science (PCM/PCB)</option>
                      <option value="11-comm">Class 11 Commerce</option>
                      <option value="12-comm">Class 12 Commerce</option>
                      <option value="humanities">Class 11/12 Humanities</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5" htmlFor="board_name">
                      School Board
                    </label>
                    <select
                      className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-secondary focus:outline-none text-body-md font-body-md text-on-surface transition-colors"
                      id="board_name"
                      name="board_name"
                      value={formData.board_name}
                      onChange={handleChange}
                    >
                      <option value="cbse">CBSE</option>
                      <option value="icse">ICSE / ISC</option>
                      <option value="state">State Board</option>
                      <option value="ib-igcse">IB / Cambridge</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5" htmlFor="batch_timing">
                      Preferred Slot
                    </label>
                    <select
                      className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-secondary focus:outline-none text-body-md font-body-md text-on-surface transition-colors"
                      id="batch_timing"
                      name="batch_timing"
                      value={formData.batch_timing}
                      onChange={handleChange}
                    >
                      <option value="evening">Evening (4:30 PM – 7:30 PM)</option>
                      <option value="morning">Morning (6:30 AM – 8:00 AM)</option>
                      <option value="weekend">Weekend Intensive (Sat &amp; Sun)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5" htmlFor="notes">
                    Any Specific Subject Requirements? (Optional)
                  </label>
                  <textarea
                    className="w-full p-4 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-secondary focus:outline-none text-body-md font-body-md text-on-surface transition-colors"
                    id="notes"
                    name="notes"
                    placeholder="e.g. Need special focus on Math formulas &amp; Physics numericals"
                    rows={2}
                    value={formData.notes}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  className="w-full py-4 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-headline-sm text-headline-sm font-bold shadow-md hover:bg-tertiary-fixed-dim transition-all flex items-center justify-center gap-space-xs cursor-pointer disabled:opacity-50"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Reserving your seat...' : 'Confirm & Reserve Free Demo Seat'}</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>

                <p className="font-body-sm text-body-sm text-center text-on-surface-variant">
                  We value your privacy. No promotional spam, only genuine academic advice.
                </p>
              </form>
            ) : (
              <div className="p-space-md rounded-xl bg-surface-container text-on-surface mt-space-md border border-secondary/20">
                <div className="flex items-center gap-space-xs text-secondary font-bold">
                  <span className="material-symbols-outlined text-[24px]">task_alt</span>
                  <span className="font-headline-sm text-headline-sm">Demo Seat Request Received!</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Thank you, <strong>{formData.parent_name || 'Parent'}</strong>! Our academic counsellor will call you on{' '}
                  <strong>{formData.phone_number}</strong> shortly to finalize the demo date and share the syllabus material for{' '}
                  <strong>{formData.student_name}</strong>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      student_name: '',
                      parent_name: '',
                      phone_number: '',
                      student_class: '',
                      board_name: 'cbse',
                      batch_timing: 'evening',
                      notes: '',
                    });
                  }}
                  className="mt-4 px-4 py-2 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md font-bold cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

