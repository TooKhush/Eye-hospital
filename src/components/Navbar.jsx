import { useState, useEffect } from 'react';
import { Menu, X, Eye, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Appointment', href: '#appointment' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-bg-secondary/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9 text-xs text-text-secondary">
          <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
          <div className="flex items-center gap-5">
            <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-3 h-3" /> +1 (234) 567-890
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg-primary/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/5'
            : 'bg-bg-primary/70 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/10">
                <Eye className="w-5 h-5 text-accent" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-lg font-bold tracking-tight">
                  Clear<span className="text-accent">Vision</span>
                </span>
                <span className="text-[10px] text-text-secondary font-highlight tracking-wider uppercase">Eye Hospital</span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full group-hover:w-4/5 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
              </a>
              <a href="#appointment" className="btn-accent !py-2.5 !px-5 !text-[13px]">
                Book Appointment
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-400 overflow-hidden ${
            open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-bg-primary/98 backdrop-blur-xl border-t border-white/5 px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="btn-accent w-full justify-center"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
