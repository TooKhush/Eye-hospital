import { Eye, Microscope, Glasses, Scan, Check } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';
import servicesBg from '../assets/wallhaven-nmk579_1920x1080.png';
import cataractImg from '../assets/Cataract-Eye-Surgery.jpg';
import glaucomaImg from '../assets/new-glaucoma-treatment.webp';
import lasikImg from '../assets/lasik1.jpg';
import examImg from '../assets/pics-bob_3476-500x500.webp';

const services = [
  {
    icon: Eye, title: 'Cataract Surgery', color: 'from-emerald-400/30 to-green-600/10',
    img: cataractImg,
    desc: 'Advanced phacoemulsification with premium IOL options for crystal-clear vision restoration.',
    features: ['Micro-incision technique', 'Premium lens options', 'Same-day discharge'],
  },
  {
    icon: Microscope, title: 'Glaucoma Treatment', color: 'from-emerald-400/30 to-emerald-600/10',
    img: glaucomaImg,
    desc: 'Comprehensive glaucoma management with early detection and cutting-edge laser therapies.',
    features: ['IOP monitoring', 'Laser trabeculoplasty', 'Micro-invasive surgery'],
  },
  {
    icon: Scan, title: 'LASIK & Refractive', color: 'from-teal-400/30 to-teal-600/10',
    img: lasikImg,
    desc: 'State-of-the-art bladeless LASIK and PRK for life free from glasses and contacts.',
    features: ['Bladeless technology', 'Custom wavefront', 'Quick recovery'],
  },
  {
    icon: Glasses, title: 'Eye Examinations', color: 'from-amber-400/30 to-amber-600/10',
    img: examImg,
    desc: 'Thorough eye health assessments using AI-assisted diagnostics for early detection.',
    features: ['Digital retinal imaging', 'Visual field testing', 'AI-assisted screening'],
  },
];

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={servicesBg}
          alt=""
          className="w-full h-full object-cover opacity-[0.07]"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A]/95 to-[#0F172A]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[70px] -z-10" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-10 sm:mb-14 reveal ${inView ? 'visible' : ''}`}>
          <p className="section-label justify-center">Our Specialities</p>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-[2.75rem] font-bold mb-3 sm:mb-4">
            Expert Eye Care <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base lg:text-lg">
            We offer a full spectrum of ophthalmology services using the latest technology
            and evidence-based treatments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`glass-card glass-card-bar overflow-hidden group flex flex-col reveal ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1 + 0.2}s` }}
            >
              {/* Card image */}
              <div className="relative h-36 sm:h-44 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                <div className={`absolute top-3 left-3 w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} backdrop-blur-sm flex items-center justify-center border border-white/10`}>
                  <s.icon className="w-5 h-5 text-accent" />
                </div>
              </div>

              {/* Card content */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
