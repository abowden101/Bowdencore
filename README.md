# BowdenCore

Managed IT infrastructure, cybersecurity, and cloud automation for Central Florida businesses — engineer-led, Orlando-based.

This repository contains the marketing website deployed at **bowdencore.com** (GitHub Pages).

## Site

Pure HTML/CSS/JavaScript — no build step. `index.html` is a single-page site:

- `index.html` — full site (hero, services, why us, process, lead form)
- `style.css` — theme and layout
- `main.js` — scroll animations, header state, lead-form handling

## Lead form

The contact form posts to [Formspree](https://formspree.io). Set your form ID in `main.js`:

```js
const FORMSPREE_ID = "YOUR_FORMSPREE_ID";
```

Until a real ID is set, submissions fall back to opening the visitor's email client addressed to `info@bowdencore.com`.

## Local preview

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Deploy

Push to `main` — GitHub Pages serves the site automatically.
