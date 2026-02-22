import { CalendarCheck, PhoneCall, UserCheck, Clock, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useInView } from '../hooks/useAnimations';

const steps = [
  { icon: Send, title: 'Submit Request', desc: 'Fill in the form with your details' },
  { icon: PhoneCall, title: 'Get a Call', desc: 'Our coordinator will reach you within 30 min' },
  { icon: UserCheck, title: 'Meet a Specialist', desc: 'Visit the clinic and see your doctor' },
];

export default function Appointment() {
  const [ref, inView] = useInView();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', date: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000); };

  const inputCls = 'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors';

  return (
    <section id="appointment" className="py-16 lg:py-24 relative">
      <div className="absolute bottom-0 right-[-80px] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] -z-10" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-10 reveal ${inView ? 'visible' : ''}`}>
          <p className="section-label justify-center">Book an Appointment</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-4">
            Your <span className="gradient-text">Clear Vision</span> Journey Starts Here
          </h2>
        </div>

        {/* 3-step process */}
        <div className={`grid sm:grid-cols-3 gap-4 mb-12 reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          {steps.map((s, i) => (
            <div key={s.title} className="glass-accent p-5 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-accent text-bg-primary text-xs font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <s.icon className="w-6 h-6 text-accent mx-auto mb-2 mt-2" />
              <h4 className="font-heading font-bold text-sm mb-1">{s.title}</h4>
              <p className="text-text-secondary text-xs">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left info */}
          <div className={`space-y-6 reveal-left ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div>
              <h3 className="font-heading text-xl font-bold mb-3">Why Visit ClearVision?</h3>
              <ul className="space-y-3 text-text-secondary text-sm">
                {['Consultation within 24 hours of booking', 'State-of-the-art diagnostic equipment', 'Affordable treatment packages & EMI options', 'Post-operative care included'].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CalendarCheck className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-accent p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm">Working Hours</p>
                <p className="text-text-secondary text-xs">Mon-Fri 8 AM – 6 PM &bull; Sat 9 AM – 2 PM</p>
              </div>
            </div>
            <div className="glass-accent p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-heading font-bold text-sm">Need Help?</p>
                <p className="text-text-secondary text-xs">Call us at <a href="tel:+1234567890" className="text-accent">+1 (234) 567-890</a></p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className={`glass-card !p-7 space-y-4 reveal-right ${inView ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                  <CalendarCheck className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-heading font-bold text-xl mb-1">Request Received!</h4>
                <p className="text-text-secondary text-sm">We will call you within 30 minutes.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" required className={inputCls} />
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" required className={inputCls} />
                </div>
                <input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" type="email" className={inputCls} />
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="date" value={formData.date} onChange={handleChange} type="date" className={`${inputCls} appearance-none`} />
                  <select name="service" value={formData.service} onChange={handleChange} className={inputCls}>
                    <option value="">Select Service</option>
                    <option>Cataract Surgery</option>
                    <option>Glaucoma Treatment</option>
                    <option>LASIK / Refractive</option>
                    <option>Eye Examination</option>
                    <option>Other</option>
                  </select>
                </div>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Additional Notes" rows={3} className={inputCls} />
                <button type="submit" className="btn-accent w-full justify-center !py-3">
                  <CalendarCheck className="w-4 h-4" /> Request Appointment
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
