import { useState, useEffect, useCallback, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';
import testimonialsImg from '../assets/Screenshot 2026-02-22 204645.png';

const testimonials = [
  { name: 'Anita Desai', procedure: 'Cataract Surgery', text: 'After years of blurry vision, I can see the world clearly again. The entire team made me feel completely at ease from consultation to recovery.', rating: 5 },
  { name: 'Rahul Mehta', procedure: 'LASIK', text: 'Getting LASIK here was the best decision I made. The procedure was quick and painless, and I had 20/20 vision the very next day!', rating: 5 },
  { name: 'Sunita Joshi', procedure: 'Glaucoma Treatment', text: 'Dr. Kapoor detected my glaucoma early and the treatment has been excellent. My eye pressure is under control and I feel confident about my vision.', rating: 5 },
  { name: 'Vikram Singh', procedure: 'Eye Examination', text: 'Thorough, professional, and caring. The digital imaging showed me exactly what was happening with my eyes. Highly recommend their check-up packages.', rating: 4 },
  { name: 'Meera Patel', procedure: 'Retinal Surgery', text: 'Dr. Verma performed my retinal surgery with incredible precision. The recovery was smooth and the follow-up care was outstanding.', rating: 5 },
  { name: 'Arjun Nair', procedure: 'LASIK', text: 'Freedom from glasses after 20 years! The wavefront-guided LASIK was perfect. Zero complications and amazing results.', rating: 5 },
];

export default function Testimonials() {
  const [ref, inView] = useInView();
  const [current, setCurrent] = useState(0);
  const perPage = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : 1;
  const maxIndex = Math.max(0, testimonials.length - perPage);

  const next = useCallback(() => setCurrent((p) => (p >= maxIndex ? 0 : p + 1)), [maxIndex]);
  const prev = () => setCurrent((p) => (p <= 0 ? maxIndex : p - 1));

  // Touch swipe support
  const touchStart = useRef(0);
  const touchEnd = useRef(0);
  const handleTouchStart = (e) => { touchStart.current = e.targetTouches[0].clientX; };
  const handleTouchMove = (e) => { touchEnd.current = e.targetTouches[0].clientX; };
  const handleTouchEnd = () => {
    const diff = touchStart.current - touchEnd.current;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
  };

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Background image accent */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img
          src={testimonialsImg}
          alt=""
          className="w-full h-full object-cover opacity-[0.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A]/97 to-[#0F172A]" />
      </div>
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-accent/4 rounded-full blur-[60px] -z-10" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className={`text-center max-w-2xl mx-auto mb-8 sm:mb-12 reveal ${inView ? 'visible' : ''}`}>
          <p className="section-label justify-center">Patient Stories</p>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-[2.75rem] font-bold mb-3 sm:mb-4">
            What Our <span className="gradient-text">Patients Say</span>
          </h2>
        </div>

        <div className={`relative reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className="overflow-hidden" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * (100 / perPage)}%)`, willChange: 'transform' }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="flex-shrink-0 px-1.5 sm:px-2.5" style={{ width: `${100 / perPage}%` }}>
                  <div className="glass-card glass-card-bar p-4 sm:p-6 h-full flex flex-col">
                    <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-accent/50 mb-2 sm:mb-3" />
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed flex-1 mb-3 sm:mb-4">"​{t.text}"</p>
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className={`w-3.5 h-3.5 ${j < t.rating ? 'text-amber-400 fill-amber-400' : 'text-white/10'}`}
                        />
                      ))}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm">{t.name}</p>
                      <p className="text-accent text-xs">{t.procedure}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <button onClick={prev} className="absolute top-1/2 -translate-y-1/2 left-0 sm:-left-3 lg:-left-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full glass flex items-center justify-center text-accent hover:bg-accent/20 active:scale-95 transition-all z-10" aria-label="Previous">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={next} className="absolute top-1/2 -translate-y-1/2 right-0 sm:-right-3 lg:-right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full glass flex items-center justify-center text-accent hover:bg-accent/20 active:scale-95 transition-all z-10" aria-label="Next">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-accent' : 'w-1.5 bg-white/20'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
