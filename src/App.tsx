import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InsuranceBanner } from './components/InsuranceBanner';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceItem } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<string | undefined>(undefined);
  const [activeDetailService, setActiveDetailService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (serviceName?: string) => {
    setPreSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-cyan-600 selection:text-white">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sticky Navbar with Mobile Drawer */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. High-Converting Hero Section */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onScrollToServices={handleScrollToServices}
        />

        {/* 4. Insurance & Payment Facilities */}
        <InsuranceBanner />

        {/* 5. Comprehensive Services Grid */}
        <ServicesSection
          onBookService={(serviceTitle) => handleOpenBooking(serviceTitle)}
          onViewServiceDetail={(service) => setActiveDetailService(service)}
        />

        {/* 6. Why Choose iSmile Clinic */}
        <WhyChooseUs />

        {/* 7. Social Proof & Google Reviews (4.9★, 1270+ reviews) */}
        <ReviewsSection />

        {/* 8. Location, Embedded Map & Hours */}
        <LocationHoursSection />

        {/* 9. FAQ Section */}
        <FaqSection />
      </main>

      {/* 10. Footer with Disclaimers & Emergency Contacts */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* 11. Dynamic Step-by-Step Booking Assistant Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preSelectedService={preSelectedService}
      />

      {/* 12. Service In-Depth Detail Modal */}
      <ServiceDetailModal
        service={activeDetailService}
        onClose={() => setActiveDetailService(null)}
        onBook={(serviceTitle) => handleOpenBooking(serviceTitle)}
      />

      {/* 13. High-converting Floating WhatsApp Widget */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
