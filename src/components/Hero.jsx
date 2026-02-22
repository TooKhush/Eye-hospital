import { ChevronRight, Phone, Shield, Users, Award, Clock } from 'lucide-react';
import { useTypewriter, useInView, useCounter } from '../hooks/useAnimations';
import heroImg from '../assets/pexels-rdne-6129681.jpg';

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
    <div className={`text-center px-2 sm:px-4 py-1 ${hasBorder ? 'sm:border-r sm:border-white/[0.08]' : ''}`}>
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent mx-auto mb-1.5 sm:mb-2 opacity-60" />
      <p className="text-2xl sm:text-4xl font-bold font-highlight gradient-text">{display}{suffix}</p>
      <p className="text-[10px] sm:text-xs text-text-secondary mt-0.5 sm:mt-1 tracking-wide">{label}</p>
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
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-[-150px] w-[400px] h-[400px] bg-teal-400/6 rounded-full blur-[70px]" />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-10 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh] sm:min-h-[70vh]">
            {/* Left: Text */}
            <div className="space-y-5 sm:space-y-7 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass-accent px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-highlight font-bold text-accent tracking-wide uppercase">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Trusted Eye Care Since 2005
              </div>

              {/* Heading */}
              <h1 className="font-heading text-[1.75rem] leading-[1.15] sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold sm:leading-[1.1]">
                Don't let blurred vision{' '}
                <span className="gradient-text">{tagline}</span>
                <span className="cursor-blink text-accent">|</span>
              </h1>

              <p className="text-text-secondary text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed">
                Experience world-class eye care with cutting-edge technology.
                From routine exams to advanced surgical procedures — your vision, our mission.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
                <a href="#appointment" className="btn-accent text-sm sm:text-base justify-center sm:justify-start">
                  Book Appointment
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a href="tel:+1234567890" className="btn-outline justify-center sm:justify-start text-sm sm:text-base">
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="flex justify-center items-center order-first lg:order-last">
              <div className="relative">
                {/* Outer glow — reduced blur for perf */}
                <div className="absolute inset-0 bg-accent/6 rounded-3xl blur-[40px] scale-110" />

                {/* Main image frame */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-card !p-0 w-full h-[220px] sm:h-[300px] lg:w-[400px] lg:h-[480px] animate-float"
                  style={{ boxShadow: '0 0 60px rgba(74,222,128,0.08), 0 0 120px rgba(74,222,128,0.03)' }}
                >
                  <img
                    src={heroImg}
                    alt="Expert eye care consultation at ClearVision clinic"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-[#0F172A]/20" />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-2 right-1 sm:-top-3 sm:right-0 glass-accent px-2.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold text-accent animate-float flex items-center gap-1 sm:gap-1.5 z-10" style={{ animationDelay: '1.5s' }}>
                  <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Award Winning
                </div>
                <div className="absolute -bottom-2 -left-1 sm:-bottom-3 sm:-left-6 glass-accent px-2.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold text-accent animate-float flex items-center gap-1 sm:gap-1.5 z-10" style={{ animationDelay: '2.5s' }}>
                  <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Advanced Technology
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div ref={statsRef} className="relative z-10 border-y border-white/[0.08] bg-gradient-to-r from-[#0F172A]/80 via-[#1E293B]/90 to-[#0F172A]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto py-5 sm:py-9 px-3 sm:px-6">
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
