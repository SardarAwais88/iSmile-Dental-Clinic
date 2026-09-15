import React, { useMemo } from 'react';
import { MapPin, Phone, MessageSquare, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const AnnouncementBar: React.FC = () => {
  // Check clinic open/closed status in Dubai Time (UTC+4)
  const clinicStatus = useMemo(() => {
    try {
      const now = new Date();
      // Dubai time is UTC+4
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const dubaiDate = new Date(utc + (3600000 * 4));
      const day = dubaiDate.getDay(); // 0 = Sun, 5 = Fri, 6 = Sat
      const hour = dubaiDate.getHours();
      const minute = dubaiDate.getMinutes();
      const currentDecimal = hour + (minute / 60);

      // Friday: 14:00 - 21:00
      if (day === 5) {
        if (currentDecimal >= 14 && currentDecimal < 21) {
          return { isOpen: true, text: 'Open Now (Closes 9:00 PM)' };
        } else if (currentDecimal < 14) {
          return { isOpen: false, text: 'Opens Friday at 2:00 PM' };
        } else {
          return { isOpen: false, text: 'Closed (Opens Sat 10:00 AM)' };
        }
      } else {
        // Sat - Thu: 10:00 - 21:00
        if (currentDecimal >= 10 && currentDecimal < 21) {
          return { isOpen: true, text: 'Open Today until 9:00 PM' };
        } else if (currentDecimal < 10) {
          return { isOpen: false, text: 'Opens Today at 10:00 AM' };
        } else {
          return { isOpen: false, text: 'Closed (Opens 10:00 AM)' };
        }
      }
    } catch {
      return { isOpen: true, text: 'Open: Sat-Thu 10AM-9PM | Fri 2PM-9PM' };
    }
  }, []);

  return (
    <aside aria-label="Announcement & Contact" className="bg-[#0F172A] text-slate-200 text-xs py-2 px-4 border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Left: Location & Hours Status */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
          <span className="inline-flex items-center gap-1 text-slate-300 font-medium">
            <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Al Rigga, Deira, Dubai, UAE</span>
          </span>
          <span className="hidden md:inline-block text-slate-600">|</span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <span className={`w-2 h-2 rounded-full ${clinicStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0 hidden sm:inline" />
            <span className={clinicStatus.isOpen ? 'text-emerald-300' : 'text-amber-300'}>
              {clinicStatus.text}
            </span>
          </span>
        </div>

        {/* Right: Direct Phone & WhatsApp Hotline */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <a
            id="announcement-call-btn"
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors text-slate-300"
            title="Direct Call iSmile Dental"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Call: {CLINIC_INFO.phone}</span>
          </a>
          <span className="text-slate-600">|</span>
          <a
            id="announcement-whatsapp-btn"
            href={`https://wa.me/${CLINIC_INFO.phoneClean}?text=${encodeURIComponent("Hello iSmile Dental Clinic, I would like to book an appointment.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            title="Chat directly on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
