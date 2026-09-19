# Jyoti.dev — Portfolio Website

A React + Vite portfolio site for freelance web development work targeted at
local businesses (salons, cafes, gyms, restaurants, hotels, coaching institutes).

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Before you send this to a business owner — replace these

| What | Where |
|---|---|
| WhatsApp number | `src/data/config.js` → `WHATSAPP_NUMBER` |
| Contact email | `src/data/config.js` → `CONTACT_EMAIL` |
| Project demo links | `src/data/projects.js` → `demoUrl` on each project |
| Project preview images | `src/data/projects.js` → `image` on each project (currently placeholder images from picsum.photos) |
| Any personal details in the About section | `src/components/About.jsx` |

Everything else (services, pricing, FAQ copy) lives in `src/data/` if you want to edit wording without touching component code.

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts (framework preset: Vite). Vercel auto-detects the build command (`npm run build`) and output folder (`dist`).

**Option B — GitHub + Vercel dashboard**
1. Push this project to a GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Vercel detects Vite automatically — leave the defaults and click Deploy.

## Project structure

```
jyoti-dev/
├─ index.html
├─ package.json
├─ vite.config.js
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css          # design tokens + shared styles
   ├─ hooks/
   │  └─ useReveal.js     # scroll-reveal animation hook
   ├─ data/
   │  ├─ config.js        # WhatsApp number + email — edit this first
   │  ├─ services.js
   │  ├─ projects.js
   │  ├─ pricing.js
   │  └─ faq.js
   └─ components/
      ├─ Navbar.jsx / .css
      ├─ Hero.jsx / .css
      ├─ TrustStrip.jsx / .css
      ├─ Services.jsx / .css
      ├─ Projects.jsx / .css
      ├─ Process.jsx / .css
      ├─ WhyWorkWithMe.jsx / .css
      ├─ About.jsx / .css
      ├─ Pricing.jsx / .css
      ├─ FAQ.jsx / .css
      ├─ Contact.jsx / .css
      ├─ Footer.jsx / .css
      └─ icons.jsx         # dependency-free SVG icon set
```

## Notes on honesty in the copy

All four case studies are labelled "Demo Concept" in the UI and in code
comments. There are no fake testimonials, client names, review counts, or
stats anywhere in the copy — if you add real client work later, replace the
`projects` array entries and their labels accordingly.

The contact form doesn't have a backend wired up: submitting it opens the
visitor's email client with the enquiry pre-filled (via a `mailto:` link).
If you want enquiries to land directly without depending on the visitor's
email client, wire the form up to a service like Formspree or EmailJS — the
form's `handleSubmit` in `src/components/Contact.jsx` is where that would go.
