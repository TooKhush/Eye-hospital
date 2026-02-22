import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Appointment from './components/Appointment';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="w-full min-h-screen text-text-primary overflow-x-hidden relative">
      {/* Persistent decorative orbs for glassmorphism depth */}
      <div className="fixed inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-accent/[0.07] blur-[120px] animate-float" />
        <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] rounded-full bg-teal-400/[0.04] blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[70%] left-[30%] w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[140px] animate-float" style={{ animationDelay: '5s' }} />
      </div>

      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Appointment />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <FAQ />
      <div className="section-divider" />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
