import { Eye, Microscope, Glasses, Scan, Check } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';

const services = [
  {
    icon: Eye, title: 'Cataract Surgery', color: 'from-emerald-400/30 to-green-600/10',
    desc: 'Advanced phacoemulsification with premium IOL options for crystal-clear vision restoration.',
    features: ['Micro-incision technique', 'Premium lens options', 'Same-day discharge'],
  },
  {
    icon: Microscope, title: 'Glaucoma Treatment', color: 'from-emerald-400/30 to-emerald-600/10',
    desc: 'Comprehensive glaucoma management with early detection and cutting-edge laser therapies.',
    features: ['IOP monitoring', 'Laser trabeculoplasty', 'Micro-invasive surgery'],
  },
  {
    icon: Scan, title: 'LASIK & Refractive', color: 'from-teal-400/30 to-teal-600/10',
    desc: 'State-of-the-art bladeless LASIK and PRK for life free from glasses and contacts.',
    features: ['Bladeless technology', 'Custom wavefront', 'Quick recovery'],
  },
  {
    icon: Glasses, title: 'Eye Examinations', color: 'from-amber-400/30 to-amber-600/10',
    desc: 'Thorough eye health assessments using AI-assisted diagnostics for early detection.',
    features: ['Digital retinal imaging', 'Visual field testing', 'AI-assisted screening'],
  },
];

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" className="py-16 lg:py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/6 rounded-full blur-[150px] -z-10" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-14 reveal ${inView ? 'visible' : ''}`}>
          <p className="section-label justify-center">Our Specialities</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-4">
            Expert Eye Care <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            We offer a full spectrum of ophthalmology services using the latest technology
            and evidence-based treatments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`glass-card glass-card-bar p-6 group flex flex-col reveal ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1 + 0.2}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <s.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
              <ul className="space-y-1.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-text-secondary">
                    <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
