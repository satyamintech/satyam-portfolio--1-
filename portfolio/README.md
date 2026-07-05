# Satyam Kumar Jha — Portfolio

A premium, production-ready personal portfolio built with React, Vite, Tailwind CSS, and
Framer Motion — designed to feel like the personal site of an engineer at a top product company,
not a template.

## ✨ Highlights

- Cinematic loading screen with progress readout
- Sticky glass navbar with scroll-spy active states
- Hero with typewriter role rotation and a live "system status" terminal card (signature element)
- Scroll-revealed sections for About, Experience, Skills, Projects, Leadership, Certifications,
  Education, and a Developer Journey timeline
- Custom cursor, scroll progress bar, back-to-top button, ambient particle field
- Dark/light theme toggle (persists via `<html class="light">`)
- Fully responsive, keyboard-accessible, and respects `prefers-reduced-motion`
- SEO: meta tags, Open Graph, Twitter cards, structured data, `robots.txt`, `sitemap.xml`

## 🧱 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (custom design tokens — see `tailwind.config.js`)
- **Framer Motion** for animation
- **lucide-react** + **react-icons** for iconography

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/        # One component per section/feature
│   ├── data/
│   │   └── portfolioData.js   # ⭐ All content lives here — edit this file first
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          # Design tokens, utility classes, cursor, scrollbar
├── index.html              # SEO meta tags + structured data
├── tailwind.config.js       # Color palette, fonts, animation keyframes
├── vite.config.js
└── vercel.json
```

## ✏️ Editing Content

All text content — name, summary, skills, projects, experience, education, timeline, links — lives
in **`src/data/portfolioData.js`**. Update that one file to change what appears across the whole
site; components read from it and don't hardcode copy.

To finish setup, add these two files to `public/`:

- `resume.pdf` — your resume, linked from the Hero, Navbar, and Contact sections
- `og-image.png` — a 1200×630 social preview image referenced in `index.html`

## 🎨 Design System

| Token       | Value                        |
|-------------|-------------------------------|
| Background  | `#030712`                     |
| Card        | `#111827`                     |
| Accent      | `#2563EB` (hover `#3B82F6`)   |
| Text        | `#F8FAFC`                     |
| Muted       | `#94A3B8`                     |
| Border      | `rgba(255,255,255,.08)`       |
| Display font| Space Grotesk                 |
| Body font   | Inter                         |
| Mono font   | JetBrains Mono                |

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

Requires Node.js 18+.

## 🌐 Deployment

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for step-by-step Vercel deployment instructions.

## ✅ Performance & Quality Checklist

- [x] Code-split vendor/motion/icon bundles (`vite.config.js`)
- [x] Brotli compression on build
- [x] Semantic HTML landmarks (`header`, `main`, `section`, `footer`)
- [x] Visible focus states for keyboard navigation
- [x] `prefers-reduced-motion` respected globally
- [x] Meta tags, Open Graph, Twitter cards, JSON-LD structured data
- [ ] Add real project screenshots to replace gradient placeholders in `Projects.jsx`
- [ ] Wire the contact form to a service (Formspree, Resend, or your own API route)
- [ ] Replace placeholder GitHub/LinkedIn URLs in `portfolioData.js`
