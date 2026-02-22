import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useAnimations';

export default function Contact() {
  const [ref, inView] = useInView();

  const contactInfo = [
    { icon: MapPin, title: 'Address', lines: ['123 Vision Boulevard, Suite 200', 'San Francisco, CA 94102'] },
    { icon: Phone, title: 'Phone', lines: ['+1 (234) 567-890', '+1 (234) 567-891 (Emergency)'], href: 'tel:+1234567890' },
    { icon: Mail, title: 'Email', lines: ['info@clearvisionclinic.com', 'appointments@clearvisionclinic.com'], href: 'mailto:info@clearvisionclinic.com' },
    { icon: Clock, title: 'Working Hours', lines: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'] },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 relative">
      <div className="absolute top-0 right-[-50px] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] -z-10" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`text-center max-w-2xl mx-auto mb-14 reveal ${inView ? 'visible' : ''}`}>
          <p className="section-label justify-center">Contact Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-4">
            Find <span className="gradient-text">Our Clinic</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">Visit us or reach out - we are here to help with all your eye care needs.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Map */}
          <div className={`lg:col-span-3 glass-card overflow-hidden !p-0 reveal-left ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <iframe
              title="ClearVision Eye Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e79387cb%3A0x6c296c66619367e0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', borderRadius: '1.25rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact cards */}
          <div className={`lg:col-span-2 space-y-4 reveal-right ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            {contactInfo.map((item) => (
              <div key={item.title} className="glass-card !p-4 flex gap-4 !rounded-xl">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-sm mb-1">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-text-secondary text-xs leading-relaxed">
                      {item.href ? (
                        <a href={item.href} className="hover:text-accent transition-colors">{line}</a>
                      ) : line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-accent w-full justify-center !py-3">
              <ExternalLink className="w-4 h-4" /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
