import React from 'react';
import { MapPin, Clock, Phone, MessageSquare, Navigation, Train, Car, Compass, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, CLINIC_HOURS } from '../data/clinicData';

export const LocationHoursSection: React.FC = () => {
  return (
    <section id="location" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-cyan-600" />
            <span>Visit Our Clinic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Location, Working Hours & Directions
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Centrally situated in Deira, Dubai. Easily reachable via Al Rigga Metro Station with ample parking nearby.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Hours Table & Transit Details (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address & Contact Box */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Clinic Physical Address
                  </h3>
                  <p className="text-xs text-slate-700 font-medium mt-1 leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-xs text-cyan-700 font-semibold mt-1">
                    Landmark: {CLINIC_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Transit hints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Train className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>2 min from Al Rigga Metro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>RTA Paid Parking in front</span>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  id="directions-google-maps-btn"
                  href={CLINIC_INFO.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  <Navigation className="w-4 h-4 text-cyan-300" />
                  <span>Get Google Maps Route</span>
                </a>

                <a
                  id="location-whatsapp-btn"
                  href={`https://wa.me/${CLINIC_INFO.phoneClean}?text=${encodeURIComponent("Hello iSmile Dental Clinic, I am coming to your clinic and need location assistance.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs hover:bg-emerald-100 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Location Pin</span>
                </a>
              </div>
            </div>

            {/* Working Hours Table */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Official Clinic Working Hours
                </h3>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {CLINIC_HOURS.map((item, idx) => {
                  const isFriday = item.day === 'Friday';
                  return (
                    <div key={idx} className="py-2.5 flex items-center justify-between">
                      <span className={`font-semibold ${isFriday ? 'text-cyan-700' : 'text-slate-800'}`}>
                        {item.day}
                      </span>
                      <span className="font-bold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60">
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-2 text-xs text-emerald-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Walk-ins and emergency cases accepted during all clinic operational hours.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Map Showcase (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              {/* Map Toolbar Header */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold">iSmile Dental Clinic LLC - Deira</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-300">
                  Deira, Dubai • 4.9★
                </span>
              </div>

              {/* Map View Frame */}
              <div className="relative w-full h-80 sm:h-96 bg-slate-100">
                <iframe
                  title="iSmile Dental Clinic LLC Location Map Deira Dubai"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2721869818814!2d55.3214!3d25.2618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cdb61fbc34d%3A0x889811ab9f1c7d23!2sAl%20Rigga%20Rd%20-%20Deira%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Map Overlay Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl shadow-md border border-slate-200 text-xs space-y-0.5 max-w-[260px]">
                  <p className="font-bold text-slate-900">iSmile Dental Clinic</p>
                  <p className="text-[11px] text-slate-500">Opposite Jovial Center, Nobel Showroom Bldg</p>
                  <a
                    href={CLINIC_INFO.googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-cyan-700 font-bold hover:underline inline-block pt-1"
                  >
                    Open in Google Maps App →
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Bar */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>Call Us for directions: <strong>{CLINIC_INFO.phone}</strong></span>
              </div>
              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs"
              >
                Call Now
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
