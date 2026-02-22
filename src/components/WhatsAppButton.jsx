import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '1234567890'; // Replace with actual WhatsApp number
  const message = encodeURIComponent(
    'Hello! I would like to book an appointment at ClearVision Eye Clinic.'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 group print:hidden"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500/30 animate-pulse-ring" />

      {/* Button */}
      <span className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 active:scale-95 transition-all duration-300">
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </span>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg bg-bg-primary border border-white/10 text-text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
