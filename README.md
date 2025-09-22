# Subham Kumar Das – Portfolio

A modern, responsive portfolio (HTML + Tailwind CDN + Vanilla JS).

## Features
- Warm amber theme with dark mode
- Gradient hero name with smooth type-in (no cursor)
- Curated projects (manual list with tags + filters)
- Skills grid and Experience/Education timeline
- Subtle animations (on-scroll reveal, hover, ambient blobs) + scroll progress
- Contact form (mailto) and social links

## Quick Start
- Open `index.html` in your browser, or
- Serve locally:
  - Python: `python -m http.server 8080`
  - Node: `npx serve .`

## Customize
- Summary/About: `assets/app.js` → `profileConfig.summary`
- Skills: `assets/app.js` → `profileConfig.skills`
- Experience/Education: `assets/app.js` → `profileConfig.timeline`
- Projects (manual/curated): `assets/app.js` → `profileConfig.projects`
  - Each: `name`, `description`, `url`, `language`, `tags` (e.g., `ai-ml`, `data-science`, `web`, `dsa`)
- Hero typing speed: `assets/app.js` → `startNameTypewriter()` (`speed` in ms)
- Links: `index.html` → Quick Links (GitHub, LinkedIn, LeetCode)

## Design/Animations
- Theme and small utilities: `assets/styles.css`
- Section ambient blobs: `index.html` + `assets/styles.css` (blob classes)
- Reveal/stagger/hover: `assets/styles.css` (reveal, stagger, card-anim)
- Scroll progress: header bar in `index.html` + setup in `assets/app.js`

## Deployment
- Netlify: Drag-and-drop folder or connect repo (static)
- Vercel: Import repo as static project
- GitHub Pages: Enable Pages (root or `/docs`)

## Links
- GitHub: https://github.com/Subham9Kumar3Das
- LinkedIn: https://www.linkedin.com/in/subhamkumardas
- LeetCode: https://leetcode.com/u/SubhamKumarDas

