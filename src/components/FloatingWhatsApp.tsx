import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('Hello! I would like to book a dental appointment at iSmile Dental Clinic.');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${CLINIC_INFO.phoneClean}?text=${encodeURIComponent(quickMsg)}`;
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = url;
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Pop-up Mini Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#0F172A] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0F172A]" />
              </div>
              <div>
                <h4 className="text-xs font-bold">iSmile Reception Desk</h4>
                <p className="text-[10px] text-emerald-300 font-medium">
                  Online • Typically replies in 2 mins
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-xs border border-slate-200 text-xs text-slate-700 shadow-xs">
              <p className="font-semibold text-slate-900 mb-1">
                Welcome to iSmile Dental Clinic Deira! 👋
              </p>
              <p>
                How can we assist your smile today? Send us a message directly on WhatsApp or use our online assistant.
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="space-y-1.5 pt-1">
              <button
                type="button"
                onClick={() => setQuickMsg("I'd like to book an appointment for Teeth Whitening.")}
                className="w-full text-left p-2 rounded-lg bg-white hover:bg-cyan-50 border border-slate-200 text-[11px] font-semibold text-slate-700 transition-colors"
              >
                ✨ Book Teeth Whitening
              </button>
              <button
                type="button"
                onClick={() => setQuickMsg("I need emergency dental care for urgent tooth pain.")}
                className="w-full text-left p-2 rounded-lg bg-white hover:bg-rose-50 border border-slate-200 text-[11px] font-semibold text-rose-700 transition-colors"
              >
                🚨 Emergency Pain Relief
              </button>
              <button
                type="button"
                onClick={() => setQuickMsg("I would like a consultation for Dental Implants / Aligners.")}
                className="w-full text-left p-2 rounded-lg bg-white hover:bg-cyan-50 border border-slate-200 text-[11px] font-semibold text-slate-700 transition-colors"
              >
                🦷 Implants / Aligners Inquiry
              </button>
            </div>

            {/* Input & Send Form */}
            <form onSubmit={handleSendWhatsApp} className="pt-2">
              <div className="relative">
                <input
                  type="text"
                  value={quickMsg}
                  onChange={(e) => setQuickMsg(e.target.value)}
                  className="w-full pl-3 pr-10 py-2.5 rounded-xl border border-slate-300 text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Type your message..."
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  title="Send via WhatsApp"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
            <span>Direct WhatsApp: {CLINIC_INFO.phone}</span>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="text-cyan-700 font-bold hover:underline"
            >
              Wizard Form →
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        id="floating-whatsapp-btn"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2.5 p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer ring-4 ring-emerald-500/20 active:scale-95"
        title="Chat on WhatsApp"
        aria-label="Chat with iSmile Dental Clinic on WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-6 h-6 fill-white text-emerald-500" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-300 border-2 border-emerald-600 animate-ping" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-xs font-bold leading-tight">Chat with Us</span>
          <span className="text-[10px] text-emerald-100 font-medium leading-tight">
            WhatsApp Online
          </span>
        </div>
      </button>

    </div>
  );
};
