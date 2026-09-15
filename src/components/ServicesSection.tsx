import React, { useState } from 'react';
import { Sparkles, Crown, Smile, ShieldAlert, Stethoscope, Zap, ArrowRight, CheckCircle2, Phone, Calendar, Info } from 'lucide-react';
import { SERVICES_LIST, CLINIC_INFO } from '../data/clinicData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onBookService: (serviceTitle: string) => void;
  onViewServiceDetail: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onBookService,
  onViewServiceDetail,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Cosmetic', 'Restorative', 'Orthodontics', 'Endodontics', 'Preventative', 'Emergency'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_LIST
    : SERVICES_LIST.filter((s) => s.category.toLowerCase() === selectedCategory.toLowerCase());

  // Helper to render icon
  const renderIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-cyan-600' };
    switch (name) {
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Crown':
        return <Crown {...props} />;
      case 'Smile':
        return <Smile {...props} />;
      case 'ShieldAlert':
        return <ShieldAlert {...props} />;
      case 'Stethoscope':
        return <Stethoscope {...props} />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-rose-500" />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Comprehensive Dental Treatments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Dental Care in Deira, Dubai
          </h2>
          <p className="text-slate-600 text-base mt-3 leading-relaxed">
            World-class treatments performed by DHA-licensed specialists utilizing advanced German and Swiss dental technology with painless care protocols.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0F172A] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => {
            const isEmergency = service.id === 'emergency-dental';

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 border ${
                  isEmergency
                    ? 'border-rose-200 bg-gradient-to-b from-rose-50/50 to-white shadow-md hover:shadow-xl hover:border-rose-300'
                    : 'border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-cyan-300'
                }`}
              >
                <div>
                  {/* Top Card Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        isEmergency ? 'bg-rose-100 text-rose-600' : 'bg-cyan-50 text-cyan-600'
                      }`}
                    >
                      {renderIcon(service.iconName)}
                    </div>
                    {service.popular && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-100 text-cyan-800">
                        Most Popular
                      </span>
                    )}
                    {isEmergency && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 text-rose-800 animate-pulse">
                        24/7 Urgent Care
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-700 mb-2">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {service.description}
                  </p>

                  {/* Key Benefits List */}
                  <div className="space-y-2 py-3 border-t border-slate-100 mb-4">
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Price & Actions */}
                <div className="pt-4 border-t border-slate-100 mt-2">
                  <div className="flex items-center justify-between mb-3.5">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                        Starting From
                      </span>
                      <span className="text-lg font-extrabold text-slate-900">
                        AED {service.startingPriceAED}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onViewServiceDetail(service)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-cyan-700"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    <button
                      id={`book-btn-${service.id}`}
                      type="button"
                      onClick={() => onBookService(service.title)}
                      className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isEmergency
                          ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/20'
                          : 'bg-[#0F172A] hover:bg-[#1E3A8A] text-white shadow-sm'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5 text-cyan-300" />
                      <span>Book This Service</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* 24/7 Emergency Dental Care Callout Bar */}
        <div className="mt-12 bg-gradient-to-r from-rose-900 via-rose-800 to-[#0F172A] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/30 text-rose-200 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-rose-300" />
              <span>Emergency Dental Hotline Deira</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Experiencing Severe Tooth Pain or Broken Tooth?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              Do not wait. Our emergency dentists in Deira provide fast pain relief, urgent root canals, and immediate tooth repair. Walk-ins welcomed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              id="emergency-whatsapp-btn"
              href={`https://wa.me/${CLINIC_INFO.phoneClean}?text=${encodeURIComponent("EMERGENCY: Hello iSmile Dental, I need urgent same-day emergency dental relief.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg transition-colors"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp Emergency Desk</span>
            </a>
            <a
              id="emergency-call-btn"
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-300" />
              <span>Direct Call: {CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
