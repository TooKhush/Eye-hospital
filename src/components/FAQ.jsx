import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';

const faqs = [
  { q: 'What should I expect during my first visit?', a: 'Your first visit includes a comprehensive eye examination, medical history review, diagnostic tests, and a consultation with one of our specialists. The entire process typically takes 60-90 minutes.' },
  { q: 'Is LASIK surgery painful?', a: 'LASIK is virtually painless. We use numbing drops and the actual laser treatment takes only about 15 seconds per eye. Most patients describe a mild pressure sensation.' },
  { q: 'How long does cataract surgery take?', a: 'The procedure itself takes 15-20 minutes per eye. You will be at the clinic for about 2-3 hours including preparation and post-op monitoring. Most patients go home the same day.' },
  { q: 'Do you accept insurance?', a: 'Yes, we work with most major insurance providers. Our billing department can verify your coverage before your appointment and help you understand your benefits.' },
  { q: 'What is the recovery time for LASIK?', a: 'Most patients notice improved vision within 24 hours. You can typically return to normal activities in 2-3 days. Full stabilization occurs over 3-6 months.' },
  { q: 'How often should I get my eyes checked?', a: 'We recommend annual comprehensive eye exams for adults. If you have diabetes, glaucoma, or other conditions, more frequent visits (every 6 months) may be necessary.' },
  { q: 'Do you offer financing or EMI options?', a: 'Yes, we offer flexible payment plans and EMI options through partner banks. Interest-free EMI is available for select procedures. Ask our team for details.' },
  { q: 'Can children be treated at your clinic?', a: 'Absolutely. We have a dedicated pediatric ophthalmology department equipped to handle everything from routine exams to complex surgeries for children of all ages.' },
];

export default function FAQ() {
  const [ref, inView] = useInView();
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-16 lg:py-24 relative">
      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 reveal ${inView ? 'visible' : ''}`}>
          <p className="section-label justify-center">FAQs</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-4">
            Common <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass-card !rounded-xl overflow-hidden transition-all duration-300 reveal ${inView ? 'visible' : ''} ${openIndex === i ? '!border-accent/30' : ''}`}
              style={{ transitionDelay: `${i * 0.05 + 0.1}s` }}
            >
              <button onClick={() => toggle(i)} className="w-full flex items-center gap-3 p-4 text-left">
                <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${openIndex === i ? 'text-accent' : 'text-text-secondary'}`} />
                <span className="font-heading font-semibold text-sm flex-1">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 ${openIndex === i ? 'max-h-60' : 'max-h-0'} overflow-hidden`}>
                <p className="px-4 pb-4 pl-12 text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
