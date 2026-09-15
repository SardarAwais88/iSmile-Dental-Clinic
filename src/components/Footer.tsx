import React from 'react';
import { Sparkles, MapPin, Phone, MessageSquare, Mail, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { CLINIC_INFO, SERVICES_LIST } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white">
                  iSmile Dental
                </span>
                <p className="text-[10px] tracking-wider uppercase font-semibold text-cyan-400">
                  Clinic LLC • Deira Dubai
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Top-rated dental healthcare practice in Deira, Dubai. 4.9★ Rated on Google across 1,270+ reviews. Offering painless cosmetic, implant, orthodontic, and emergency dentistry.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-300">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Licensed by Dubai Health Authority (DHA)</span>
            </div>
          </div>

          {/* Col 2: Quick Dental Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Our Dental Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <button
                    type="button"
                    onClick={() => onOpenBooking(srv.title)}
                    className="hover:text-cyan-400 transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="text-cyan-500">›</span>
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Clinic Working Hours */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Clinic Working Hours
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span>Saturday – Thursday:</span>
                <span className="font-semibold text-white">10:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-cyan-400">Friday (Afternoon):</span>
                <span className="font-semibold text-white">2:00 PM – 9:00 PM</span>
              </div>
              <div className="pt-2 text-[11px] text-slate-400">
                <p>Emergency & Walk-in triage available during all operating hours.</p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{CLINIC_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneClean}`} className="hover:text-cyan-400 font-semibold text-white">
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${CLINIC_INFO.phoneClean}?text=${encodeURIComponent("Hello iSmile Dental Clinic, I would like to book an appointment.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  WhatsApp: +971 54 712 8458
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-slate-300">{CLINIC_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                Book Appointment Online
              </button>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer & DHA Notice */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong>Medical Disclaimer:</strong> The information provided on this website is for educational and appointment scheduling purposes only and does not substitute for personalized medical diagnosis or professional dental treatment. Treatment outcomes, duration, and healing times vary per patient. All surgical and invasive dental procedures involve potential risks. Please consult with our licensed dental specialists for a comprehensive clinical assessment.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} iSmile Dental Clinic LLC. All Rights Reserved. Deira, Dubai, UAE.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px]">Designed for Exceptional Patient Care</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
