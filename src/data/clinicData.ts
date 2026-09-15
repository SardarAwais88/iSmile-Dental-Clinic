import { ServiceItem, ReviewItem, ClinicHours } from '../types';

export const CLINIC_INFO = {
  name: 'iSmile Dental Clinic LLC',
  tagline: "Dubai's Top-Rated Dental Clinic for Your Perfect Smile",
  phone: '+971 54 712 8458',
  phoneClean: '971547128458',
  email: 'info@ismiledentaldubai.com',
  address: 'GCC Exchange, Nobel Showroom Building, Opposite Jovial Center, Al Rigga, Al Sabkha, Deira, Dubai, UAE',
  landmark: 'Opposite Jovial Center, 2-minute walk from Al Rigga Metro Station',
  rating: 4.9,
  reviewsCount: '1,270+',
  googleMapUrl: 'https://maps.google.com/?q=GCC+Exchange+Nobel+Showroom+Building+Al+Rigga+Deira+Dubai',
  embedMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2721869818814!2d55.3214!3d25.2618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cdb61fbc34d%3A0x889811ab9f1c7d23!2sAl%20Rigga%20Rd%20-%20Deira%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
};

export const CLINIC_HOURS: ClinicHours[] = [
  { day: 'Saturday', hours: '10:00 AM – 9:00 PM' },
  { day: 'Sunday', hours: '10:00 AM – 9:00 PM' },
  { day: 'Monday', hours: '10:00 AM – 9:00 PM' },
  { day: 'Tuesday', hours: '10:00 AM – 9:00 PM' },
  { day: 'Wednesday', hours: '10:00 AM – 9:00 PM' },
  { day: 'Thursday', hours: '10:00 AM – 9:00 PM' },
  { day: 'Friday', hours: '2:00 PM – 9:00 PM' },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening & Cosmetic Dentistry',
    category: 'Cosmetic',
    tagline: 'Achieve up to 8 shades whiter teeth in one single 45-minute painless session.',
    description: 'Transform your smile with laser-activated Phillips Zoom Whitening and bespoke porcelain Hollywood Smile veneers. Designed to eliminate deep coffee, tea, and smoke stains with zero enamel damage.',
    iconName: 'Sparkles',
    startingPriceAED: 499,
    durationMinutes: 45,
    popular: true,
    benefits: [
      'In-clinic Philips Zoom Laser Whitening',
      'Custom take-home maintenance kit included',
      'Painless desensitizing protective gel',
      'Instant noticeable results on the same day'
    ]
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants & Crowns',
    category: 'Restorative',
    tagline: 'Permanent, natural-looking tooth replacements with lifetime durability.',
    description: 'Restore complete chewing function and natural facial aesthetics with premium Swiss and German medical-grade titanium dental implants and CAD/CAM sculpted Zirconia crowns.',
    iconName: 'Crown',
    startingPriceAED: 1800,
    durationMinutes: 60,
    popular: true,
    benefits: [
      'Guided 3D Computer Implant Surgery',
      'High-grade biocompatible German titanium',
      'Natural aesthetic Zirconia ceramic crowns',
      'Flexible 0% interest monthly payment options'
    ]
  },
  {
    id: 'orthodontics-aligners',
    title: 'Orthodontics & Invisible Aligners',
    category: 'Orthodontics',
    tagline: 'Straighten your teeth discreetly without metal brackets or wires.',
    description: 'Clear removable orthodontic aligners customized through 3D intraoral digital scans. Correct crowding, gaps, and overbites discreetly for teens and working adults in Dubai.',
    iconName: 'Smile',
    startingPriceAED: 3500,
    durationMinutes: 30,
    benefits: [
      '100% nearly invisible crystal-clear aligners',
      '3D digital preview of your final smile outcome',
      'Removable for meals, photos, and meetings',
      'Shorter treatment timeline with gentle pressure'
    ]
  },
  {
    id: 'root-canal',
    title: 'Root Canal & Endodontics',
    category: 'Endodontics',
    tagline: 'Painless single-visit microscopic root canal therapy to save natural teeth.',
    description: 'Relieve severe throbbing tooth pain instantly. Our specialist endodontists use high-magnification dental microscopes and rotary nickel-titanium instruments for 100% painless infected nerve treatment.',
    iconName: 'ShieldAlert',
    startingPriceAED: 750,
    durationMinutes: 50,
    benefits: [
      'Painless computer-controlled local anesthesia',
      'Complete elimination of pain and infection',
      'Preservation of your original natural tooth',
      'Digital apex locator for sub-millimeter precision'
    ]
  },
  {
    id: 'general-dentistry',
    title: 'General Dentistry & Scaling / Polishing',
    category: 'Preventative',
    tagline: 'Deep ultrasonic plaque removal, fluoride protection, and comprehensive oral checks.',
    description: 'Keep your gums healthy and fresh with gentle piezo-ultrasonic scaling, stain polishing, digital low-dose X-rays, and tooth-colored composite restorations for lasting oral health.',
    iconName: 'Stethoscope',
    startingPriceAED: 199,
    durationMinutes: 40,
    benefits: [
      'Painless ultrasonic tartar & calculus removal',
      'High-gloss stain polishing & airflow cleaning',
      'Digital HD intraoral cavity diagnostics',
      'Breath freshening antiseptic oral treatment'
    ]
  },
  {
    id: 'emergency-dental',
    title: 'Emergency Dental Care Dubai',
    category: 'Emergency',
    tagline: 'Immediate same-day emergency relief for severe toothache, broken crowns, or trauma.',
    description: '24/7 prioritized emergency dental triage in Deira Dubai. Walk-ins and urgent WhatsApp bookings prioritized immediately for tooth fractures, bleeding gums, swollen abscesses, or dislodged restorations.',
    iconName: 'Zap',
    startingPriceAED: 250,
    durationMinutes: 30,
    popular: true,
    benefits: [
      'Priority immediate triage without waitlist',
      'Urgent pain relief medication & anesthesia',
      'Emergency broken tooth stabilization & bonding',
      'Direct WhatsApp emergency desk: +971 54 712 8458'
    ]
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Mariam Al Hashemi',
    location: 'Dubai, UAE (Deira resident)',
    rating: 5,
    date: '3 weeks ago',
    service: 'Teeth Whitening & Cosmetic',
    text: 'Best dental clinic in Deira hands down! Did the Zoom Whitening before my sister’s wedding and the result was unbelievable—8 shades whiter with absolutely zero sensitivity. Dr. Sarah was extremely gentle and explained everything. 10/10 recommend!',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'David Richardson',
    location: 'Expat, Downtown Dubai',
    rating: 5,
    date: '1 month ago',
    service: 'Dental Implants',
    text: 'I was very nervous about getting a molar implant replaced. The digital 3D scanning at iSmile was so fast, and the surgery was completely painless. Recovery was smooth, and the Zirconia crown matches my real teeth seamlessly. Pricing was totally transparent with no surprise bills.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Fatima Zahra Khan',
    location: 'Sharjah (Visits Deira Clinic)',
    rating: 5,
    date: '2 months ago',
    service: 'Orthodontics & Clear Aligners',
    text: 'Started my invisible aligners here 5 months ago and my teeth have already straightened out so much! The clinic is spotless, strictly follows hygiene protocols, and booking appointments over WhatsApp is super convenient. Thank you iSmile team!',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Alexander Petrov',
    location: 'Tourist from Germany',
    rating: 5,
    date: '1 month ago',
    service: 'Emergency Dental Care',
    text: 'Woke up at 2 AM on holiday with unbearable nerve pain from a cracked tooth. Contacted their WhatsApp hotline and got an emergency appointment right in the morning. Pain was gone in 30 minutes! Truly saved my vacation in Dubai.',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Suresh Menon',
    location: 'Al Rigga, Deira',
    rating: 5,
    date: '3 months ago',
    service: 'Root Canal & Endodontics',
    text: 'Single-sitting root canal done with zero pain. I used to have dental phobia, but the team here treats patients with such patience and kindness. Located right near GCC Exchange in Nobel Showroom Building, very easy to reach from the metro.',
    verified: true
  },
  {
    id: 'rev-6',
    author: 'Elena Rossi',
    location: 'Business Bay, Dubai',
    rating: 5,
    date: '2 weeks ago',
    service: 'General Dentistry & Scaling',
    text: 'Came for deep cleaning and polishing. My teeth feel brand new! The hygienist was exceptionally thorough and polite. Beautiful clinic ambiance, welcoming front desk, and very punctual appointments.',
    verified: true
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    icon: 'Cpu',
    title: 'State-of-the-Art Technology',
    description: 'Equipped with 3D digital intraoral scanners, computerized low-radiation OPG X-rays, and precision CAD/CAM milling for perfect diagnostic accuracy and painless procedures.'
  },
  {
    icon: 'HeartHandshake',
    title: 'Painless & Gentle Procedures',
    description: 'We prioritize patient comfort with computer-regulated gentle anesthesia, topical numbing gels, and stress-free soothing clinic ambiance tailored for nervous patients.'
  },
  {
    icon: 'Award',
    title: 'DHA Certified Specialists',
    description: 'Our team comprises Dubai Health Authority (DHA) licensed dental specialists, implantologists, and cosmetic surgeons with over 15+ years of clinical excellence.'
  },
  {
    icon: 'CreditCard',
    title: 'Transparent Pricing & 0% EMI',
    description: 'No hidden clinic fees or surprise billing. We offer upfront pricing treatment plans and 0% interest flexible installment plans with Tabby & Tamara.'
  }
];

export const FAQS = [
  {
    q: 'Where is iSmile Dental Clinic located in Deira?',
    a: 'We are situated in the Nobel Showroom Building, GCC Exchange, Opposite Jovial Center, Al Rigga, Al Sabkha, Deira, Dubai. We are just a 2-minute walk from the Al Rigga Metro Station with accessible RTA parking nearby.'
  },
  {
    q: 'How fast can I book an appointment via WhatsApp?',
    a: 'Immediately! When you click our WhatsApp booking button, our dedicated patient care coordinator receives your pre-filled preferred service, date, and time, typically confirming your slot within 2 to 5 minutes.'
  },
  {
    q: 'Do you offer emergency dental services in Dubai?',
    a: 'Yes! We accommodate urgent same-day emergency walk-ins and direct WhatsApp emergency triage for severe toothaches, broken teeth, bleeding gums, or displaced restorations.'
  },
  {
    q: 'Are dental procedures at iSmile completely painless?',
    a: 'Patient comfort is our top priority. We utilize micro-fine needles, numbing topical gels, and gentle electronic injection systems so you feel virtually nothing during restorative, cosmetic, or root canal procedures.'
  },
  {
    q: 'Do you accept insurance or flexible installment plans?',
    a: 'We provide immediate insurance reimbursement claim documentation for all major UAE insurance providers (MetLife, NextCare, Daman, Sukoon, etc.) and offer 0% interest monthly installment options via Tabby and Tamara.'
  }
];
