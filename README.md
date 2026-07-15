# SiteSprout 🌱

A modern, dark-themed **multi-page** marketing site for **SiteSprout** — affordable, professional websites for local shops, **starting at ₹1,999**. We handle everything: website design, custom domain & DNS, hosting, custom email, security, and database.

Built with **React + Vite + Tailwind CSS**, routed with **React Router**, animated with **Framer Motion**, and iconography from **lucide-react**.

## ✨ What's inside

**Marketing site** (shared navbar + footer + animated ambient background):

- **Home** — hero with dashboard mockup, features, featured work, stats, FAQ
- **Services** — full service list, ₹1,999 pricing card, how-it-works steps
- **About** — story, mission, values, stats
- **Portfolio** — filterable grid of 6 projects, each with its own detail page
- **Demo** — gallery of live sample websites
- **FAQ** — accordion of common questions
- **Contact** — validated enquiry form with success state

**Live client demos** (standalone, each with its own palette/typography and no SiteSprout chrome):

- **Restaurant** — “Spice Route” (warm charcoal + saffron/red, serif)
- **Salon** — “Lumière Salon” (soft off-white + rose-gold, elegant serif)
- **Retail** — “Kirana Fresh” (bright white + fresh green, sans)

Each demo shows a small floating **“Like this site? Get yours →”** watermark badge that links back to the SiteSprout Contact page.

**Design details**

- Sticky navbar (blur/solid on scroll) with active-link underline and a mobile hamburger menu
- Glassmorphism cards, hover scale + glow
- Slowly drifting ambient gradient orbs + faint grid behind the marketing pages
- Accessible focus rings, and full `prefers-reduced-motion` support (all motion calms down)
- Fully responsive across mobile, tablet and desktop

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # build for production (outputs to dist/)
npm run preview  # preview the production build
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
   ├─ App.jsx                # routes (HashRouter)
   ├─ index.css
   ├─ layouts/
   │  ├─ MarketingLayout.jsx # navbar + footer + ambient background
   │  └─ DemoLayout.jsx      # bare wrapper + watermark CTA
   ├─ pages/
   │  ├─ Home.jsx  Services.jsx  About.jsx
   │  ├─ Portfolio.jsx  ProjectDetail.jsx
   │  ├─ Demo.jsx  FaqPage.jsx  Contact.jsx
   ├─ demos/
   │  ├─ RestaurantDemo.jsx  SalonDemo.jsx  RetailDemo.jsx
   │  ├─ DemoResolver.jsx  demoMeta.js
   ├─ data/
   │  └─ projects.js         # portfolio content
   └─ components/
      ├─ Navbar.jsx  Footer.jsx  Hero.jsx
      ├─ Features.jsx  Stats.jsx  Faq.jsx
      ├─ AmbientBackground.jsx  ScrollToTop.jsx
      ├─ WatermarkCTA.jsx  PageHeader.jsx
      └─ ProjectCard.jsx  MockThumb.jsx  SectionHeading.jsx  WorkTeaser.jsx
```

## 🧭 Routing

The app uses **HashRouter**, so routes look like `/#/services`, `/#/portfolio`, `/#/demo/restaurant`, etc. This makes deep links work reliably on GitHub Pages project sub-paths without any server rewrite rules.

## 🎨 Customize

- **Copy:** edit the text in `src/pages/` and `src/components/`.
- **Colors:** tweak the `ink` and `accent` palettes in `tailwind.config.js`.
- **Portfolio projects:** edit the `projects` array in `src/data/projects.js`.
- **Live demos:** edit `src/demos/*Demo.jsx` and `src/demos/demoMeta.js`.
- **Background motion:** adjust the `drift` / `driftAlt` keyframes in `tailwind.config.js` or the orbs in `AmbientBackground.jsx`.

## ☁️ Deploy to GitHub Pages

Configured to work on GitHub Pages **project sub-paths** (e.g. `https://<user>.github.io/web/`):

1. `base: "./"` in `vite.config.js` makes all asset links relative, so JS/CSS load correctly under `/web/` (avoids the blank-page 404 issue).
2. A GitHub Actions workflow at `.github/workflows/deploy.yml` builds the app and publishes `dist/` automatically. It runs on pushes to **`main` or `master`**, and can also be triggered manually from the **Actions** tab.

### One-time setup

1. Push this project to your repo (branch `main` **or** `master` — both trigger the build).
2. On GitHub: **Settings → Pages → Build and deployment → Source = “GitHub Actions”**.
3. Every push now builds and deploys automatically. The site goes live at `https://<user>.github.io/<repo>/`.

> If a build doesn't start, open the **Actions** tab and confirm the workflow ran on your branch. You can also click **Run workflow** manually (workflow_dispatch).

> ⚠️ Do **not** set Pages to serve from the branch root — GitHub would serve the raw source `index.html` (which references `/src/main.jsx`) and show a blank page. It must serve the built `dist/` output, which the workflow handles.

### Other hosts

The `dist/` build is fully static and also works on Vercel, Netlify, or any static host.

## 📤 Push to GitHub

```bash
git init
git add .
git commit -m "SiteSprout: multi-page site with portfolio, demos & watermark"
git branch -M master        # or: git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin master   # push to whichever branch you set above
```

---

© SiteSprout — Websites for every local shop.
