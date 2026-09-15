import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, Calendar, Clock, User, Phone, MessageSquare, ArrowRight, ArrowLeft, ShieldAlert, Copy, Check } from 'lucide-react';
import { SERVICES_LIST, CLINIC_INFO } from '../data/clinicData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

const TIME_SLOTS = [
  { time: '10:00 AM', period: 'Morning' },
  { time: '11:00 AM', period: 'Morning' },
  { time: '12:00 PM', period: 'Morning' },
  { time: '02:00 PM', period: 'Afternoon' },
  { time: '03:30 PM', period: 'Afternoon' },
  { time: '05:00 PM', period: 'Afternoon' },
  { time: '06:30 PM', period: 'Evening' },
  { time: '07:30 PM', period: 'Evening' },
  { time: '08:15 PM', period: 'Evening' },
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Initialize booking form data
  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: SERVICES_LIST[0].id,
    serviceName: SERVICES_LIST[0].title,
    date: new Date().toISOString().split('T')[0],
    timeSlot: '11:00 AM',
    patientName: '',
    patientPhone: '',
    isEmergency: false,
    notes: '',
  });

  // When preSelectedService changes, update serviceId and serviceName
  useEffect(() => {
    if (preSelectedService) {
      const match = SERVICES_LIST.find(
        (s) => s.title.toLowerCase() === preSelectedService.toLowerCase() || s.id === preSelectedService
      );
      if (match) {
        setFormData((prev) => ({
          ...prev,
          serviceId: match.id,
          serviceName: match.title,
          isEmergency: match.id === 'emergency-dental',
        }));
      }
    }
  }, [preSelectedService]);

  if (!isOpen) return null;

  // Format pre-filled WhatsApp message
  const generatedWhatsAppMessage = `*NEW DENTAL APPOINTMENT REQUEST - iSmile Dental Clinic Deira*
---------------------------------------
👤 *Patient Name:* ${formData.patientName || 'Not specified'}
📞 *Contact Phone:* ${formData.patientPhone || 'Not specified'}
🦷 *Requested Service:* ${formData.serviceName}
📅 *Preferred Date:* ${formData.date}
⏰ *Preferred Time:* ${formData.timeSlot}
🚨 *Urgency Status:* ${formData.isEmergency ? 'URGENT / EMERGENCY' : 'Standard Appointment'}
📝 *Patient Notes / Symptoms:* ${formData.notes || 'None'}
---------------------------------------
📍 *Clinic Location:* Nobel Showroom Building, Al Rigga, Deira, Dubai
_Sent via iSmile Online Booking Assistant_`;

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneClean}?text=${encodeURIComponent(generatedWhatsAppMessage)}`;

  const handleServiceSelect = (serviceId: string, serviceTitle: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceId,
      serviceName: serviceTitle,
      isEmergency: serviceId === 'emergency-dental',
    }));
  };

  const handleNext = () => {
    setValidationError(null);
    if (step === 3) {
      if (!formData.patientName.trim()) {
        setValidationError('Please enter your full name to proceed.');
        return;
      }
      if (!formData.patientPhone.trim()) {
        setValidationError('Please enter your WhatsApp or phone number for confirmation.');
        return;
      }
    }
    setStep((prev) => Math.min(prev + 1, 4) as 1 | 2 | 3 | 4);
  };

  const handleCopyMessage = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(generatedWhatsAppMessage);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = generatedWhatsAppMessage;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch {
      // Fallback
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#0284C7] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-cyan-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold">iSmile Appointment Assistant</h2>
              <p className="text-xs text-cyan-100">
                Book in 60 seconds • Direct WhatsApp Confirmation
              </p>
            </div>
          </div>
          <button
            id="modal-close-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicator */}
        <div className="px-6 pt-4 pb-2 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span className={step >= 1 ? 'text-cyan-700 font-bold' : ''}>1. Service</span>
            <span className="text-slate-300">→</span>
            <span className={step >= 2 ? 'text-cyan-700 font-bold' : ''}>2. Date & Time</span>
            <span className="text-slate-300">→</span>
            <span className={step >= 3 ? 'text-cyan-700 font-bold' : ''}>3. Patient Info</span>
            <span className="text-slate-300">→</span>
            <span className={step >= 4 ? 'text-emerald-700 font-bold' : ''}>4. Confirm WhatsApp</span>
          </div>
          <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-cyan-600 h-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          
          {/* STEP 1: Select Service */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-900">
                  Select Dental Treatment or Consultation:
                </label>
                <span className="text-xs text-slate-500">Click to choose</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
                {SERVICES_LIST.map((srv) => {
                  const isSelected = formData.serviceId === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => handleServiceSelect(srv.id, srv.title)}
                      className={`text-left p-3 rounded-xl border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-cyan-600 bg-cyan-50/70 shadow-sm ring-2 ring-cyan-600/20'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <span className="text-xs font-bold text-slate-900 leading-snug">
                          {srv.title}
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-2 pt-1 text-[11px] text-slate-500 border-t border-slate-100">
                        <span>From AED {srv.startingPriceAED}</span>
                        <span>~{srv.durationMinutes} mins</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Emergency Fast Toggle */}
              <div className="mt-2 p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs font-semibold text-amber-900">
                    Are you experiencing severe pain or urgent dental trauma?
                  </span>
                </div>
                <input
                  type="checkbox"
                  id="emergency-check"
                  checked={formData.isEmergency}
                  onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                  className="w-4 h-4 accent-amber-600 rounded cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* STEP 2: Select Date & Time */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="appointment-date" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Select Appointment Date
                </label>
                <div className="relative">
                  <input
                    id="appointment-date"
                    type="date"
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-white text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = formData.timeSlot === slot.time;
                    return (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeSlot: slot.time })}
                        className={`p-2.5 rounded-lg text-xs font-bold border transition-all text-center ${
                          isSelected
                            ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div>{slot.time}</div>
                        <div className="text-[10px] font-normal opacity-70">{slot.period}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Working Hours: Sat-Thu 10 AM - 9 PM | Friday 2 PM - 9 PM</span>
              </div>
            </div>
          )}

          {/* STEP 3: Enter Patient Info */}
          {step === 3 && (
            <div className="space-y-4">
              {validationError && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-xl">
                  {validationError}
                </div>
              )}
              <div>
                <label htmlFor="patient-name-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    id="patient-name-input"
                    type="text"
                    required
                    placeholder="e.g. Sarah Al Zaabi or John Doe"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="patient-phone-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  WhatsApp / Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    id="patient-phone-input"
                    type="tel"
                    required
                    placeholder="+971 50 123 4567 or 054 712 8458"
                    value={formData.patientPhone}
                    onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  We will confirm your appointment instantly via this number.
                </p>
              </div>

              <div>
                <label htmlFor="patient-notes-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Additional Notes or Symptoms (Optional)
                </label>
                <textarea
                  id="patient-notes-input"
                  rows={2}
                  placeholder="e.g. Sensitivity on upper left tooth, whitening consultation before event..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                />
              </div>
            </div>
          )}

          {/* STEP 4: Submit & WhatsApp Preview */}
          {step === 4 && (
            <div className="space-y-4 text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  Ready to Confirm via WhatsApp
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Click the button below to send your pre-formatted appointment request directly to our Deira clinic reception team on WhatsApp.
                </p>
              </div>

              {/* Message Preview Box */}
              <div className="text-left bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-700 space-y-1 relative">
                <p className="font-bold text-slate-900">Preview WhatsApp Message:</p>
                <p className="text-slate-600 whitespace-pre-line leading-relaxed text-[11px]">
                  {generatedWhatsAppMessage}
                </p>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-sans font-semibold text-cyan-700 hover:text-cyan-800"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to clipboard!' : 'Copy message text'}</span>
                </button>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  id="modal-submit-whatsapp-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-700/25 transition-all"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span>Send Request to Clinic on WhatsApp</span>
                </a>
                <p className="text-[11px] text-slate-500 mt-2">
                  Hotline WhatsApp: <strong>{CLINIC_INFO.phone}</strong> • Avg response time: &lt;2 mins
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          {step > 1 && step < 4 ? (
            <button
              id="modal-prev-step-btn"
              type="button"
              onClick={() => setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 && (
            <button
              id="modal-next-step-btn"
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-xs font-bold text-white bg-[#0F172A] hover:bg-slate-800 transition-colors ml-auto shadow-sm"
            >
              <span>{step === 3 ? 'Generate WhatsApp Request' : 'Next Step'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {step === 4 && (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline"
            >
              Edit Details
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
