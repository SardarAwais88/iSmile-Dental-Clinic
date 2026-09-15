export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  iconName: string;
  startingPriceAED: number;
  durationMinutes: number;
  benefits: string[];
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  text: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface BookingFormData {
  serviceId: string;
  serviceName: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientPhone: string;
  isEmergency: boolean;
  notes: string;
}

export interface ClinicHours {
  day: string;
  hours: string;
  isOpenToday?: boolean;
}
