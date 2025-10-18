# ✅ Project Setup Complete!

## 🩸 Life in a Drop / Життя в краплині
### Blood Cancer Charity Foundation Website

---

## 🎉 What Was Fixed

### 1. **Dependency Issues Resolved**
- ✅ Removed infinite postinstall loop in workspace configuration
- ✅ Installed all frontend dependencies (Vite, React, Tailwind, Framer Motion, i18next)
- ✅ Installed all backend dependencies (Express, CORS, Morgan)
- ✅ Updated scripts to use `npx vite` for reliability
- ✅ Fixed Windows PowerShell compatibility issues

### 2. **Configuration & Setup**
- ✅ Configured Vite + React + TypeScript
- ✅ Set up TailwindCSS with custom theme (white #FFFFFF, red #E63946, navy #1D3557)
- ✅ Configured Framer Motion for animations
- ✅ Set up react-i18next for Ukrainian 🇺🇦 / English 🇬🇧 bilingual support
- ✅ Added Montserrat Google Font
- ✅ Created red heart favicon (SVG)

### 3. **Website Features Implemented**

#### **Design System**
- Clean, minimalistic, medical-inspired theme
- White background with red accents
- Smooth animations and transitions
- Responsive layout for all devices

#### **Pages Created**
1. **Home** 
   - Full-screen video background hero
   - Animated headline and subtitle
   - Animated counter statistics (350 lives saved, 1200 donors, 540 treatments)
   - Image carousel with motivational quotes
   - "Join as a Donor" CTA banner

2. **About Us / Про нас**
   - Two-column layout with medical image
   - Foundation story (founded 2017)
   - Animated value cards: Transparency, Compassion, Hope

3. **How We Work / Як ми працюємо**
   - 4-step animated process flow
   - Icons: Patient Request → Verify Documents → Collect Funds → Provide Help

4. **Projects / Наші проєкти**
   - 3 completed initiatives with progress bars
   - "Краплина життя" / "Drop of Life" (85%)
   - "Промінь надії" / "Ray of Hope" (70%)
   - "Разом сильніші" / "Stronger Together" (60%)
   - Modal popup with project details

5. **Contacts / Контакти**
   - Contact form (name, email, message)
   - Google Maps embed (Kyiv)
   - Foundation info (address, phone, email)
   - Social media icons

#### **Animations**
- Page transitions (fade-slide between routes)
- Scroll reveal (fade-up) on all sections
- Animated counters
- Progress bar animations
- Modal animations
- Button hover effects with glow

#### **Bilingual Support**
- Language toggle (UA/EN) in navbar
- localStorage persistence
- Complete translations for all content

### 4. **Backend API**
- Express server on port 5000
- `/api/projects` - Returns project list
- `/api/contact` - Stores contact messages
- Vercel serverless functions ready in `frontend/api/`

### 5. **Deployment Ready**
- Vercel configuration files
- `npm run deploy` command for quick deployments
- Build command: `npm run build`
- Output directory: `frontend/dist`

---

## 🚀 How to Run the Project

### **Quick Start**
```bash
npm run dev
```

This will start:
- **Frontend (Vite):** http://localhost:5173
- **Backend (Express):** http://localhost:5000

### **Individual Services**
```bash
# Frontend only
cd frontend
npm run dev

# Backend only
cd backend
npm run dev
```

### **Production Build**
```bash
npm run build
```

### **Deploy to GitHub**
```bash
npm run deploy
```

---

## 📦 Installed Dependencies

### Frontend
- `react` + `react-dom` - UI framework
- `vite` + `@vitejs/plugin-react` - Build tool
- `tailwindcss` + `autoprefixer` + `postcss` - Styling
- `framer-motion` - Animations
- `react-i18next` + `i18next` - Internationalization
- `react-router-dom` - Routing
- `lucide-react` - Icons
- `lottie-react` - Lottie animations (optional)
- `react-helmet` - SEO

### Backend
- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `morgan` - HTTP request logger

---

## 🌍 Vercel Deployment Steps

1. Push your project to GitHub
2. Go to https://vercel.com and sign in
3. Click "Import Project"
4. Select your GitHub repository
5. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `frontend/dist`
   - **Root Directory:** (leave as project root)
6. Click **Deploy** 🎉

Future updates:
```bash
npm run deploy
```
This commits and pushes to `main`, triggering automatic Vercel deployment.

---

## 🎨 Design Highlights

### Color Palette
- **Background:** `#FFFFFF` (Pure white)
- **Primary (Red):** `#E63946` (Blood red for charity theme)
- **Navy Text:** `#1D3557` (Professional dark blue)
- **Light Gray:** `#F8F9FA` (Subtle backgrounds)

### Typography
- **Font:** Montserrat (clean, modern, readable)
- **Sizes:** Responsive (4xl-6xl for headlines)

### Components
- Rounded corners (rounded-2xl)
- Subtle shadows and borders
- Glassmorphism effects (backdrop-blur)
- Smooth transitions (duration 300-600ms)

---

## 📁 Project Structure

```
D:\Projects\Nowy folder\
├── frontend/               # React + Vite app
│   ├── api/               # Vercel serverless functions
│   ├── public/            # Static assets (favicon)
│   ├── src/
│   │   ├── components/    # Reusable components (Carousel, Container, SEO)
│   │   ├── locales/       # Translation files (en.json, ua.json)
│   │   ├── pages/         # Route pages (Home, About, How, Projects, Contact, Donate)
│   │   ├── App.tsx        # Main app with routing
│   │   ├── i18n.ts        # i18next configuration
│   │   └── main.tsx       # Entry point
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
├── backend/               # Express API server
│   ├── server.js
│   └── package.json
├── data/                  # JSON storage
│   ├── projects.json
│   └── messages.json
├── package.json           # Root scripts
└── README.md

```

---

## 🐛 Troubleshooting

### If `npm run dev` doesn't work:
```bash
# Install dependencies manually
cd frontend
npm install

cd ../backend
npm install

cd ..
npm install

# Then try again
npm run dev
```

### If port 5173 is busy:
```bash
cd frontend
npx vite --port 3000
```

### Clear npm cache:
```bash
npm cache clean --force
```

---

## ✨ Next Steps

1. **Add real images:** Replace Unsplash URLs with your own photos
2. **Connect payment:** Integrate Stripe or PayPal on Donate page
3. **Email notifications:** Add nodemailer for contact form emails
4. **Analytics:** Add Google Analytics or Plausible
5. **SEO:** Add meta tags with react-helmet for each page
6. **Database:** Replace JSON files with PostgreSQL or MongoDB
7. **Admin panel:** Build CMS for managing projects/content

---

## 📞 Support

If you encounter any issues:
1. Check that all dependencies are installed
2. Ensure Node.js version is 18+
3. Clear browser cache
4. Restart dev servers

---

## 🎯 Summary

**The project is now fully functional!**

- ✅ All dependencies installed
- ✅ Vite configured and running
- ✅ Bilingual support (UA/EN)
- ✅ Animations with Framer Motion
- ✅ Modern, responsive design
- ✅ Backend API ready
- ✅ Vercel deployment ready

**To start working:**
```bash
npm run dev
```

**To deploy:**
```bash
npm run deploy
```

---

**Built with ❤️ for Life in a Drop / Життя в краплині**


