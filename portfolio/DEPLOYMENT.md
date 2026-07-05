# Deployment Guide — Vercel

This project is preconfigured for Vercel with `vercel.json` (SPA rewrites + asset caching).

## Option A — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

## Option B — Git-based deploy (recommended)

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Vite. Confirm these settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Every push to your main branch redeploys automatically.

## Environment / Domain

- Add a custom domain under **Project → Settings → Domains**.
- Update `index.html`'s canonical URL, Open Graph URL, and `public/sitemap.xml` to match your
  final domain before going live.

## Alternative Hosts

The build output in `dist/` is static and works on any static host:

- **Netlify:** build command `npm run build`, publish directory `dist`
- **GitHub Pages:** use `vite.config.js`'s `base` option if deploying to a subpath, then
  `npm run build` and push `dist/` to the `gh-pages` branch
- **Cloudflare Pages:** build command `npm run build`, output directory `dist`

## Pre-launch Checklist

- [ ] Replace placeholder resume link with a real `public/resume.pdf`
- [ ] Add a real Open Graph image at `public/og-image.png`
- [ ] Update GitHub/LinkedIn/email/phone in `src/data/portfolioData.js`
- [ ] Update the canonical domain in `index.html` and `public/sitemap.xml`
- [ ] Run `npm run build` locally once to confirm a clean, warning-free build
