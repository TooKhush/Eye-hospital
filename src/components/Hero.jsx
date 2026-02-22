import { ChevronRight, Phone, Shield, Users, Award, Clock } from 'lucide-react';
import { useTypewriter, useInView, useCounter } from '../hooks/useAnimations';

const stats = [
  { icon: Clock, target: 20, suffix: '+', label: 'Years Experience' },
  { icon: Users, target: 50000, suffix: '+', label: 'Patients Served', format: true },
  { icon: Award, target: 700, suffix: '+', label: 'Eye Specialists' },
  { icon: Shield, target: 99, suffix: '%', label: 'Success Rate' },
];

function StatItem({ icon: Icon, target, suffix, label, format, started, hasBorder }) {
  const count = useCounter(target, 2000, started);
  const display = format ? `${Math.floor(count / 1000)}K` : count;
  return (
    <div className={`text-center px-4 py-1 ${hasBorder ? 'sm:border-r sm:border-white/[0.08]' : ''}`}>
      <Icon className="w-5 h-5 text-accent mx-auto mb-2 opacity-60" />
      <p className="text-3xl sm:text-4xl font-bold font-highlight gradient-text">{display}{suffix}</p>
      <p className="text-xs text-text-secondary mt-1 tracking-wide">{label}</p>
    </div>
  );
}

export default function Hero() {
  const tagline = useTypewriter(
    ['blur your dreams.', 'hold you back.', 'dim your future.', 'limit your life.'],
    70, 40, 2200
  );
  const [statsRef, statsVisible] = useInView();

  return (
    <>
      <section id="home" className="relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-accent/12 rounded-full blur-[150px] animate-float" />
          <div className="absolute bottom-0 right-[-150px] w-[500px] h-[500px] bg-teal-400/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8 lg:pt-20 lg:pb-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[70vh]">
            {/* Left: Text */}
            <div className="space-y-7 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass-accent px-4 py-2 text-xs font-highlight font-bold text-accent tracking-wide uppercase">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Trusted Eye Care Since 2005
              </div>

              {/* Heading */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-[1.1]">
                Don't let blurred vision{' '}
                <span className="gradient-text">{tagline}</span>
                <span className="cursor-blink text-accent">|</span>
              </h1>

              <p className="text-text-secondary text-base sm:text-lg max-w-lg leading-relaxed">
                Experience world-class eye care with cutting-edge technology.
                From routine exams to advanced surgical procedures — your vision, our mission.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 pt-1">
                <a href="#appointment" className="btn-accent text-base">
                  Book Appointment
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a href="tel:+1234567890" className="btn-outline">
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
              </div>
            </div>

            {/* Right: Eye visual */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute inset-0 bg-accent/8 rounded-full blur-[80px] scale-150" />

                {/* Main orb */}
                <div
                  className="glass-card !rounded-full w-[340px] h-[340px] flex items-center justify-center animate-float relative"
                  style={{ boxShadow: '0 0 60px rgba(74,222,128,0.08), 0 0 120px rgba(74,222,128,0.03), inset 0 0 60px rgba(74,222,128,0.02)' }}
                >
                  <svg viewBox="0 0 200 200" className="w-52 h-52 text-accent" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <ellipse cx="100" cy="100" rx="82" ry="52" opacity="0.9" />
                    <ellipse cx="100" cy="100" rx="70" ry="42" opacity="0.3" strokeDasharray="3 3" />
                    <circle cx="100" cy="100" r="32" opacity="0.8" />
                    <circle cx="100" cy="100" r="14" fill="currentColor" opacity="0.9" />
                    <circle cx="94" cy="93" r="4" fill="#0F172A" />
                    <path d="M 25 100 Q 100 35 175 100" strokeDasharray="5 5" opacity="0.25" />
                    <path d="M 25 100 Q 100 165 175 100" strokeDasharray="5 5" opacity="0.25" />
                  </svg>

                  {/* Inner shine */}
                  <div className="absolute top-6 left-8 w-16 h-8 bg-white/[0.04] rounded-full blur-md rotate-[-30deg]" />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-3 right-0 glass-accent px-4 py-2 text-xs font-bold text-accent animate-float flex items-center gap-1.5" style={{ animationDelay: '1.5s' }}>
                  <Award className="w-3.5 h-3.5" /> Award Winning
                </div>
                <div className="absolute -bottom-3 -left-6 glass-accent px-4 py-2 text-xs font-bold text-accent animate-float flex items-center gap-1.5" style={{ animationDelay: '2.5s' }}>
                  <Shield className="w-3.5 h-3.5" /> Advanced Technology
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div ref={statsRef} className="relative z-10 border-y border-white/[0.08] bg-gradient-to-r from-[#0F172A]/80 via-[#1E293B]/90 to-[#0F172A]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto py-7 sm:py-9 px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
            {stats.map((s, i) => (
              <StatItem key={s.label} {...s} started={statsVisible} hasBorder={i < 3} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
