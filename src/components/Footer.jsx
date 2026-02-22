import { Eye, Phone, Mail, MapPin, ArrowUp, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Book Appointment', href: '#appointment' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Cataract Surgery',
  'LASIK / Refractive',
  'Glaucoma Treatment',
  'Comprehensive Eye Exams',
  'Retinal Disorders',
  'Pediatric Ophthalmology',
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5">
      {/* top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4 group" onClick={scrollToTop}>
              <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-accent" />
              </div>
              <div className="leading-tight">
                <span className="font-heading font-bold text-base text-text-primary block">ClearVision</span>
                <span className="text-[10px] tracking-widest uppercase text-text-secondary">Eye Hospital</span>
              </div>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed mb-5 max-w-xs">
              Committed to providing world-class eye care with advanced technology and a compassionate team of specialists.
            </p>
            <div className="flex gap-3">
              {['facebook','twitter','instagram','linkedin'].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all">
                  <span className="text-xs font-bold uppercase">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-text-primary">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-text-secondary text-sm hover:text-accent transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-text-primary">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-text-secondary text-sm hover:text-accent transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-text-primary">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex gap-2.5 text-sm text-text-secondary">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                123 Vision Blvd, Suite 200, San Francisco, CA 94102
              </li>
              <li>
                <a href="tel:+1234567890" className="flex gap-2.5 text-sm text-text-secondary hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:info@clearvisionclinic.com" className="flex gap-2.5 text-sm text-text-secondary hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  info@clearvisionclinic.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-xs">
            &copy; {new Date().getFullYear()} ClearVision Eye Hospital. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-secondary">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 z-40 w-10 h-10 rounded-xl glass flex items-center justify-center text-accent hover:bg-accent/20 transition-all shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
