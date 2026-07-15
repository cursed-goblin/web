# SiteSprout 🌱

A modern, dark-themed single-page landing site for **SiteSprout** — affordable, professional websites for local shops, **starting at ₹1,999**. We handle everything: website design, custom domain & DNS, hosting, custom email, security, and database.

Built with **React + Vite + Tailwind CSS**, animated with **Framer Motion**, and iconography from **lucide-react**.

## ✨ Features

- Sticky navbar that turns to a blurred/solid background on scroll, with a mobile hamburger menu
- Hero with animated eyebrow, gradient headline, product/dashboard mockup (growth chart + plan card + trusted-by row) and a peeking phone mockup
- Glassmorphism feature cards (one highlighted) with hover glow
- Glass stats bar with a “Get Free Quote” call to action
- Footer tagline strip with a glowing blue bottom edge
- Fully responsive with scroll-in animations

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

Open the URL printed in the terminal (usually http://localhost:5173).

## 📁 Project structure

```
sitesprout/
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   └─ components/
      ├─ Navbar.jsx
      ├─ Hero.jsx
      ├─ Features.jsx
      ├─ Stats.jsx
      └─ Footer.jsx
```

## 🎨 Customize

- **Brand name / copy:** edit the text inside each component in `src/components/`.
- **Colors:** tweak the `ink` and `accent` palettes in `tailwind.config.js`.
- **Feature cards:** edit the `features` array in `Features.jsx`.
- **Stats:** edit the `stats` array in `Stats.jsx`.
- **Images:** swap the CSS gradient/mockup placeholders in `Hero.jsx` for real photography when available.

## ☁️ Deploy

The production build in `dist/` is fully static and can be hosted on Vercel, Netlify, GitHub Pages, or any static host.

## 📤 Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: SiteSprout landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/sitesprout.git
git push -u origin main
```

---

© SiteSprout — Websites for every local shop.
