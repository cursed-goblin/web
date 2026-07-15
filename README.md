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

## ☁️ Deploy to GitHub Pages

This project is configured to work on GitHub Pages **project sub-paths** (e.g. `https://<user>.github.io/web/`). Two things make that work:

1. `base: "./"` in `vite.config.js` — makes all asset links relative, so the JS/CSS load correctly under `/web/` instead of 404-ing at the domain root (the usual cause of a blank page).
2. A ready-made GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the app and publishes `dist/` automatically.

### One-time setup

1. Push this project to your repo's `main` branch.
2. On GitHub: **Settings → Pages → Build and deployment → Source = “GitHub Actions”**.
3. Every push to `main` now builds and deploys automatically. Your site will be live at `https://<user>.github.io/<repo>/`.

> ⚠️ Do **not** set Pages to serve from the branch root — GitHub would then serve the raw source `index.html` (which references `/src/main.jsx`) and show a blank page. It must serve the built `dist/` output, which the workflow handles.

### Manual deploy (alternative)

```bash
npm install
npm run build      # outputs to dist/
npx gh-pages -d dist   # publishes dist/ to the gh-pages branch
```

Then set **Settings → Pages → Source = gh-pages branch / root**.

### Other hosts

The `dist/` build is fully static and also works on Vercel, Netlify, or any static host (there `base: "./"` is harmless).

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
