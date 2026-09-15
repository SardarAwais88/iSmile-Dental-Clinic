import React from 'react';
import { CreditCard, ShieldCheck, Check } from 'lucide-react';

export const InsuranceBanner: React.FC = () => {
  const insuranceList = [
    'MetLife',
    'NextCare',
    'Daman / Thiqa',
    'Sukoon (Oman)',
    'AXA / GIG Gulf',
    'Mednet',
    'Cigna Global',
    'Neuron',
  ];

  return (
    <section className="bg-white py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left: Insurance Reimbursement support */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Insurance Reimbursement Support
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Full documentation & itemized invoices provided for direct reimbursement.
              </p>
            </div>
          </div>

          {/* Center: Insurance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {insuranceList.map((ins) => (
              <span
                key={ins}
                className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200"
              >
                {ins}
              </span>
            ))}
          </div>

          {/* Right: 0% Installments via Tabby / Tamara */}
          <div className="flex items-center gap-3 bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-200 shrink-0">
            <CreditCard className="w-4 h-4 text-emerald-700 shrink-0" />
            <div className="text-left">
              <span className="text-xs font-bold text-emerald-950 block">
                0% Interest Installments
              </span>
              <span className="text-[11px] text-emerald-800">
                Split in 4 with Tabby & Tamara
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
