# 🦷 iSmile Dental Clinic LLC — Premier Dental Care in Deira, Dubai

> Official modern web application for **iSmile Dental Clinic LLC**, located in Al Rigga, Deira, Dubai. Rated **4.9★ on Google with 1,270+ verified patient reviews**.

[![Deploy to GitHub Pages](https://github.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC.svg)](https://tailwindcss.com/)

---

## 🌟 Key Highlights & Features

- **⚡ Instant 60-Second Appointment Assistant**: Step-by-step interactive booking flow generating formatted WhatsApp messages for direct receptionist confirmation.
- **💬 Floating 1-Click WhatsApp Desk**: Persistent direct WhatsApp quick-reply button connected to `+971 54 712 8458`.
- **🚨 24/7 Emergency Dental Triage**: Urgent dental trauma & severe toothache quick-call protocol.
- **💰 Interactive Treatment Cost Estimator**: Transparent Dubai dental price guide with instant AED calculations and flexible 0% installment breakdowns.
- **✨ Before & After Smile Visualizer**: Interactive slider showcasing real cosmetic veneers, whitening, and orthodontic transformations.
- **📍 Location & Metro Transport Guide**: Detailed directions from Al Rigga Metro Station and Union Station, parking advice, and embedded Google Maps route links.
- **⭐ Verified Patient Testimonial Wall**: 4.9-star rating breakdown with filterable Google patient reviews.
- **📱 Fully Responsive**: Fluid, mobile-first design optimized for iOS, Android, tablets, and desktop displays.

---

## 🏥 Clinic Location & Contact

| Detail | Information |
|---|---|
| **Clinic Name** | iSmile Dental Clinic LLC |
| **Address** | GCC Exchange, Nobel Showroom Building, Opposite Jovial Center, Al Rigga, Al Sabkha, Deira, Dubai, UAE |
| **Phone / WhatsApp** | [+971 54 712 8458](https://wa.me/971547128458) |
| **Nearest Metro** | Al Rigga Metro Station (5 min walk) / Union Metro Station |
| **Working Hours** | Sat – Thu: 10:00 AM – 9:00 PM<br/>Fri: 2:00 PM – 9:00 PM |

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 6](https://vitejs.dev/) (configured with relative `base: './'` for flawless hosting anywhere)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Motion](https://motion.dev/)
- **SEO & Structured Data**: Schema.org JSON-LD for Local `Dentist` business with geo-coordinates, price range, and opening hours.

---

## 💻 Local Development Setup

Follow these steps to run the application locally on your computer:

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### 2. Clone & Install

```bash
# Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# Navigate into the project folder
cd <your-repo-name>

# Install project dependencies
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port displayed in your terminal) to view the app in your browser.

### 4. Build for Production

```bash
npm run build
```

The optimized static assets will be output to the `dist/` directory.

---

## 🌐 Deploying to GitHub Pages (2 Easy Methods)

### Method 1: Automatic Deployment via GitHub Actions (Recommended)

This repository includes a pre-configured GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of iSmile Dental Clinic app"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in your repository settings**:
   - Go to your GitHub repository in your browser.
   - Click **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
   - That's it! GitHub Actions will automatically build and publish your site at:
     ```
     https://<your-username>.github.io/<your-repo-name>/
     ```

---

### Method 2: Manual Deployment with `gh-pages` Package

If you prefer deploying via terminal command:

1. Install `gh-pages` as a dev dependency:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Run the deploy command:
   ```bash
   npm run deploy
   ```

4. Go to **Settings** > **Pages** on GitHub and set the branch to `gh-pages` / `/ (root)`.

---

## 📁 Project Directory Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions CI/CD for automatic GitHub Pages deployment
├── public/                  # Public assets
├── src/
│   ├── components/          # Reusable UI modules
│   │   ├── BookingModal.tsx       # 4-Step interactive booking wizard
│   │   ├── CostEstimator.tsx      # Dubai treatment price calculator
│   │   ├── FloatingWhatsApp.tsx   # Instant WhatsApp floating widget
│   │   ├── Navbar.tsx             # Responsive header with sticky emergency bar
│   │   ├── ServicesSection.tsx    # Comprehensive treatments catalog
│   │   ├── TestimonialsSection.tsx # Google reviews wall
│   │   └── ...
│   ├── data/
│   │   └── clinicData.ts    # Centralized clinic contact, pricing, and services data
│   ├── types.ts             # TypeScript definitions & interfaces
│   ├── App.tsx              # Main application shell
│   ├── index.css            # Tailwind CSS styling entry
│   └── main.tsx             # Application bootstrap
├── index.html               # Entry HTML with Schema.org JSON-LD & meta tags
├── package.json             # NPM dependencies & scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite bundler configuration (relative base for Pages)
```

---

## 📄 License

This project is created for **iSmile Dental Clinic LLC**. All rights reserved.
