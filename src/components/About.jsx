import { Award, Users, Heart, Cpu, Stethoscope, GraduationCap, Clock } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';

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
    <section id="about" className="py-16 lg:py-24 relative">
      <div className="absolute top-0 left-[-100px] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10" />

      {/* Values */}
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className={`text-center max-w-2xl mx-auto mb-14 reveal ${inView ? 'visible' : ''}`}>
          <p className="section-label justify-center">Why Choose Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-4">
            Trusted <span className="gradient-text">Eye Care</span> Leaders
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            With decades of collective experience and state-of-the-art facilities, we deliver eye care that transforms lives.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`glass-accent p-5 text-center reveal ${inView ? 'visible' : ''} hover:border-accent/40 transition-all duration-300`}
              style={{ transitionDelay: `${i * 0.08 + 0.2}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <v.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-base mb-1">{v.title}</h3>
              <p className="text-text-secondary text-xs">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Doctors */}
      <div ref={teamRef} className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className={`font-heading text-2xl font-bold text-center mb-10 reveal ${teamInView ? 'visible' : ''}`}>
          Meet Our <span className="gradient-text">Specialists</span>
        </h3>
        <div className="grid sm:grid-cols-3 gap-5">
          {doctors.map((d, i) => (
            <div
              key={d.name}
              className={`glass-card glass-card-bar p-6 group text-center reveal ${teamInView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center mx-auto mb-4 text-accent font-heading font-bold text-xl group-hover:scale-105 transition-transform">
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
