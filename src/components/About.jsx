import { Award, Users, Heart, Cpu, Stethoscope, GraduationCap, Clock } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';
import clinicImg from '../assets/pexels-pixabay-263402.jpg';

const values = [
  { icon: Award, title: 'Excellence', desc: 'Internationally accredited standards of care' },
  { icon: GraduationCap, title: 'Expertise', desc: 'Fellowship-trained specialist surgeons' },
  { icon: Heart, title: 'Compassion', desc: 'Patient-first approach at every step' },
  { icon: Cpu, title: 'Technology', desc: 'AI-assisted diagnostics & robotic surgery' },
];

const doctors = [
  { name: 'Dr. Rajesh Sharma', initials: 'RS', credential: 'MS, FRCS (Ophth)', speciality: 'Cataract & Refractive', exp: 18 },
  { name: 'Dr. Priya Kapoor', initials: 'PK', credential: 'DNB, FICO', speciality: 'Glaucoma Specialist', exp: 14 },
  { name: 'Dr. Ankit Verma', initials: 'AV', credential: 'MD, FVRS', speciality: 'Retinal Surgeon', exp: 12 },
];

export default function About() {
  const [ref, inView] = useInView();
  const [teamRef, teamInView] = useInView();

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 relative">
      <div className="absolute top-0 left-[-100px] w-[400px] h-[400px] bg-accent/4 rounded-full blur-[70px] -z-10" />

      {/* Values */}
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-6 mb-14 sm:mb-20">
        <div className={`text-center max-w-2xl mx-auto mb-10 sm:mb-14 reveal ${inView ? 'visible' : ''}`}>
          <p className="section-label justify-center">Why Choose Us</p>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-[2.75rem] font-bold mb-3 sm:mb-4">
            Trusted <span className="gradient-text">Eye Care</span> Leaders
          </h2>
          <p className="text-text-secondary text-sm sm:text-base lg:text-lg">
            With decades of collective experience and state-of-the-art facilities, we deliver eye care that transforms lives.
          </p>
        </div>

        {/* Image + Text showcase */}
        <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14 items-center reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src={clinicImg}
              alt="State-of-the-art eye examination equipment at ClearVision clinic"
              className="w-full h-[200px] sm:h-[320px] lg:h-[380px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent rounded-2xl" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-sm font-heading font-bold text-text-primary">Our Advanced Diagnostic Lab</p>
              <p className="text-xs text-text-secondary">Equipped with latest AI-assisted eye care technology</p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-5">
            <h3 className="font-heading text-xl sm:text-2xl font-bold">
              World-Class Facilities,<br />
              <span className="gradient-text">Personalized Care</span>
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Our state-of-the-art clinic features the latest in ophthalmic technology, from AI-powered diagnostic systems to robotic-assisted surgical suites. Every piece of equipment is carefully selected to ensure the highest diagnostic accuracy and surgical precision.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              But technology is only half the story — our team of fellowship-trained specialists brings decades of combined expertise, treating every patient with the compassion and individual attention they deserve.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs glass-accent px-3 py-1.5 font-semibold text-accent">NABH Accredited</span>
              <span className="text-xs glass-accent px-3 py-1.5 font-semibold text-accent">ISO 9001:2015</span>
              <span className="text-xs glass-accent px-3 py-1.5 font-semibold text-accent">JCI Certified</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`glass-accent p-4 sm:p-5 text-center reveal ${inView ? 'visible' : ''} hover:border-accent/40 transition-all duration-300`}
              style={{ transitionDelay: `${i * 0.08 + 0.2}s` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <v.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-sm sm:text-base mb-1">{v.title}</h3>
              <p className="text-text-secondary text-[11px] sm:text-xs">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Doctors */}
      <div ref={teamRef} className="max-w-7xl mx-auto px-5 sm:px-6">
        <h3 className={`font-heading text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10 reveal ${teamInView ? 'visible' : ''}`}>
          Meet Our <span className="gradient-text">Specialists</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {doctors.map((d, i) => (
            <div
              key={d.name}
              className={`glass-card glass-card-bar p-5 sm:p-6 group text-center reveal ${teamInView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-accent font-heading font-bold text-lg sm:text-xl group-hover:scale-105 transition-transform">
                {d.initials}
              </div>
              <h4 className="font-heading font-bold text-lg">{d.name}</h4>
              <p className="text-accent text-xs font-semibold mb-1">{d.credential}</p>
              <span className="inline-block text-xs bg-accent/10 text-accent px-3 py-1 rounded-full mb-3">{d.speciality}</span>
              <div className="flex items-center justify-center gap-1.5 text-text-secondary text-xs">
                <Clock className="w-3.5 h-3.5" /> {d.exp}+ years experience
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
