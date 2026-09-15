import React from 'react';
import { X, CheckCircle2, Clock, Calendar, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';
import { CLINIC_INFO } from '../data/clinicData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBook,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#0F172A] p-5 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-cyan-500/20 text-cyan-300 mb-1">
              {service.category} Department
            </span>
            <h3 className="text-lg font-bold text-white leading-snug">
              {service.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div>
            <p className="text-sm font-semibold text-cyan-700 mb-1">
              {service.tagline}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 text-[11px] block">Estimated Duration</span>
              <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-cyan-600" />
                ~{service.durationMinutes} Minutes
              </span>
            </div>
            <div>
              <span className="text-slate-400 text-[11px] block">Starting Price</span>
              <span className="font-bold text-slate-900 text-sm mt-0.5 block">
                From AED {service.startingPriceAED}
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              Treatment Highlights & Inclusions:
            </h4>
            <div className="space-y-2">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 bg-cyan-50 rounded-xl border border-cyan-100 flex items-center gap-2 text-[11px] text-cyan-900">
            <ShieldCheck className="w-4 h-4 text-cyan-700 shrink-0" />
            <span>0% Interest 4-Month Installments with Tabby / Tamara Available</span>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onBook(service.title);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-colors"
            >
              <Calendar className="w-4 h-4 text-cyan-300" />
              <span>Book Appointment</span>
            </button>

            <a
              href={`https://wa.me/${CLINIC_INFO.phoneClean}?text=${encodeURIComponent(`Hello iSmile Dental Clinic, I would like to inquire about ${service.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
