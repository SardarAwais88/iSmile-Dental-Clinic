import React from 'react';
import { Cpu, HeartHandshake, Award, CreditCard, ShieldCheck, CheckCircle, Zap } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/clinicData';

export const WhyChooseUs: React.FC = () => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-cyan-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-cyan-600" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-cyan-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-slate-50 border-t border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100/70 border border-cyan-300/60 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-700" />
            <span>Excellence in Dental Healthcare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Patients Choose iSmile Dental Clinic
          </h2>
          <p className="text-slate-600 text-base mt-3 leading-relaxed">
            Combining empathetic patient care with precision digital dentistry to deliver comfortable, anxiety-free treatments in Deira, Dubai.
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-4">
                  {renderIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-cyan-700">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-600" />
                <span>Verified Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats Counter Strip */}
        <div className="mt-14 bg-[#0F172A] rounded-2xl p-8 text-white shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            <div className="pt-4 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">
                4.9 / 5.0
              </div>
              <p className="text-xs font-semibold text-slate-300 mt-1">
                Google Verified Score
              </p>
              <span className="text-[11px] text-slate-400">1,270+ real patient reviews</span>
            </div>

            <div className="pt-4 lg:pt-0 lg:pl-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">
                15+ Years
              </div>
              <p className="text-xs font-semibold text-slate-300 mt-1">
                Clinical Excellence
              </p>
              <span className="text-[11px] text-slate-400">DHA Licensed Dental Specialists</span>
            </div>

            <div className="pt-4 lg:pt-0 lg:pl-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">
                100%
              </div>
              <p className="text-xs font-semibold text-slate-300 mt-1">
                Painless Gentle Tech
              </p>
              <span className="text-[11px] text-slate-400">Topical gel & precision anesthesia</span>
            </div>

            <div className="pt-4 lg:pt-0 lg:pl-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">
                0% Interest
              </div>
              <p className="text-xs font-semibold text-slate-300 mt-1">
                Flexible Monthly EMI
              </p>
              <span className="text-[11px] text-slate-400">Tabby & Tamara 4-Month plans</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
