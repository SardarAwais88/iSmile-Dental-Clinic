import React, { useState } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight, MessageSquare, Quote, ThumbsUp, ExternalLink } from 'lucide-react';
import { REVIEWS_LIST, CLINIC_INFO } from '../data/clinicData';

export const ReviewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviewCategories = ['All', 'Teeth Whitening', 'Dental Implants', 'Orthodontics', 'Emergency Dental', 'Root Canal'];

  const filteredReviews = activeTab === 'All'
    ? REVIEWS_LIST
    : REVIEWS_LIST.filter((r) => r.service.toLowerCase().includes(activeTab.toLowerCase()));

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>Real Patient Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Google Reviews: 4.9★ Rating ({CLINIC_INFO.reviewsCount})
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              Discover why over 1,270 patients in Deira and across Dubai trust iSmile Dental Clinic for gentle, painless, and aesthetic dentistry.
            </p>
          </div>

          {/* Google Review Badge Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center gap-4 shrink-0 shadow-sm">
            <div className="w-12 h-12 bg-white rounded-xl shadow-xs border border-slate-200 flex items-center justify-center font-extrabold text-xl text-slate-800">
              G
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-extrabold text-slate-900">4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs font-semibold text-slate-700">
                1,270+ Verified Google Reviews
              </p>
              <a
                href={CLINIC_INFO.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-cyan-700 hover:text-cyan-800 inline-flex items-center gap-1"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {reviewCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveTab(cat);
                setCurrentIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === cat
                  ? 'bg-cyan-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Service tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800">
                    {rev.service}
                  </span>
                </div>

                {/* Review Quote */}
                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  "{rev.text}"
                </p>
              </div>

              {/* Patient Attribution */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-cyan-800 text-white flex items-center justify-center text-xs font-bold">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      <span>{rev.author}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-600" />
                    </h4>
                    <p className="text-[10px] text-slate-500">
                      {rev.location} • {rev.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <ThumbsUp className="w-3 h-3 text-cyan-600" />
                  <span>Helpful</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Quote className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">
                Are you an iSmile Dental patient?
              </p>
              <p className="text-[11px] text-slate-500">
                Help fellow Dubai residents find trusted dental care by sharing your experience on Google.
              </p>
            </div>
          </div>
          <a
            href={CLINIC_INFO.googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-xs font-bold text-slate-800 shadow-xs transition-colors shrink-0"
          >
            <span>Write a Google Review</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
