import React from 'react';
import { Star, ShieldCheck, Sparkles, MessageSquare, ArrowRight, CheckCircle2, Clock, MapPin, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onScrollToServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onScrollToServices }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80">
      {/* Subtle background ambient circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill: 4.9 Stars on Google */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200/80 mx-auto lg:mx-0">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="h-3.5 w-px bg-slate-200" />
              <span className="text-xs font-bold text-slate-800">
                4.9★ Rated on Google
              </span>
              <span className="text-xs text-slate-500 hidden sm:inline">
                ({CLINIC_INFO.reviewsCount} Verified Reviews)
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-cyan-50 text-cyan-700 border border-cyan-200">
                Deira, Dubai
              </span>
            </div>

            {/* High-Impact Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Dubai's Top-Rated Dental Clinic for Your{' '}
              <span className="bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] bg-clip-text text-transparent underline decoration-cyan-400/40 decoration-wavy decoration-2">
                Perfect Smile
              </span>
            </h1>

            {/* Trust Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              <strong className="text-slate-900 font-semibold">4.9★ Rated on Google (1,270+ Happy Patients).</strong> Premier, painless dental care in the heart of Deira, Dubai. From same-day teeth whitening and Swiss implants to gentle root canals and 24/7 emergency relief.
            </p>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs font-semibold text-slate-700 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>100% Painless Tech</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>DHA Licensed Specialists</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>0% Interest Tabby/Tamara</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              {/* Primary CTA: WhatsApp Direct */}
              <a
                id="hero-whatsapp-cta-btn"
                href={`https://wa.me/${CLINIC_INFO.phoneClean}?text=${encodeURIComponent("Hello iSmile Dental Clinic! I would like to book an appointment. Please let me know available slots.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 shadow-lg shadow-emerald-700/25 transition-all group"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Book via WhatsApp ({CLINIC_INFO.phone})</span>
              </a>

              {/* Secondary CTA: View Services / Online Assistant */}
              <button
                id="hero-view-services-btn"
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 active:scale-95 border border-slate-300 shadow-sm hover:border-slate-400 transition-all cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-cyan-600" />
                <span>Online Booking Wizard</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Quick Location Hint */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 pt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                <span>Nobel Showroom Bldg, Opp. Jovial Center, Al Rigga</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-cyan-600" />
                <span>Walk-ins & Emergency Welcome</span>
              </span>
            </div>

          </div>

          {/* Right Column: Visual Showcase & Floating Trust Badges (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Primary Showcase Card with Clinical Excellence Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
                  alt="iSmile Dental Clinic LLC - Modern Dental Practice in Deira Dubai"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
                
                {/* Overlay Doctor & Clinic Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-base text-white flex items-center gap-1.5">
                        <span>iSmile Dental Clinic LLC</span>
                        <ShieldCheck className="w-4 h-4 text-cyan-300" />
                      </p>
                      <p className="text-xs text-slate-200">
                        Al Rigga, Deira • Licensed by DHA
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-1 bg-emerald-500/90 backdrop-blur-sm text-white rounded-md text-xs font-bold shadow-sm">
                        Accepting Patients
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Trust Badge 1: 1,270+ Google Reviews | 4.9 Rating */}
              <div
                id="floating-google-trust-badge"
                className="absolute -top-5 -left-4 sm:-left-6 bg-white p-3.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-in fade-in zoom-in duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-base font-extrabold text-slate-900">4.9</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] font-bold text-slate-700">
                    1,270+ Google Reviews
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Top-Rated in Deira, Dubai
                  </p>
                </div>
              </div>

              {/* Floating Trust Badge 2: Emergency 24/7 / Same-day slots */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#0F172A] text-white p-3.5 rounded-xl shadow-xl border border-slate-700 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">
                    Emergency Dental Dubai
                  </p>
                  <p className="text-[11px] text-cyan-300 font-medium">
                    Same-Day Relief Hotline
                  </p>
                  <p className="text-[10px] text-slate-300">
                    Walk-ins & WhatsApp Fast-Track
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
