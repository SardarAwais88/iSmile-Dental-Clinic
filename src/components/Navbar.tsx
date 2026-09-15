import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Calendar, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Reviews (4.9★)', href: '#reviews' },
    { name: 'Location & Hours', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
          : 'bg-white border-b border-slate-200 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo"
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0F172A] to-[#0284C7] flex items-center justify-center text-white shadow-md shadow-cyan-900/10 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-cyan-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  iSmile
                </span>
                <span className="font-bold text-xl tracking-tight text-cyan-600">
                  Dental
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500">
                Clinic LLC • Deira Dubai
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-cyan-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="nav-whatsapp-quick"
              href={`https://wa.me/${CLINIC_INFO.phoneClean}?text=${encodeURIComponent("Hello iSmile Dental, I'd like to ask a question or book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-colors"
              title="Chat with front desk"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>

            <button
              id="nav-book-now-btn"
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#0284C7] hover:brightness-110 active:scale-95 shadow-md shadow-cyan-900/20 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-cyan-300" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-quick-book-btn"
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#0F172A]"
            >
              <span>Book</span>
            </button>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-cyan-600"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              id="drawer-book-appointment-btn"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#0F172A] to-[#0284C7] text-white font-bold text-sm shadow-md"
            >
              <Calendar className="w-4 h-4 text-cyan-300" />
              <span>Book Appointment Online</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                id="drawer-whatsapp-btn"
                href={`https://wa.me/${CLINIC_INFO.phoneClean}?text=${encodeURIComponent("Hello iSmile Dental Clinic, I would like to book an appointment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-xs text-center"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                id="drawer-call-btn"
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Clinic</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
              <span>DHA Licensed Practice • Deira, Dubai</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
