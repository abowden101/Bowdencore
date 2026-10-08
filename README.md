# BowdenCore — bowdencore.com

UniFi-native Managed Network Services for Central Florida small businesses,
dental practices, and medical offices.

## Site structure

Pure HTML/CSS/JS — no build step. Served by GitHub Pages.

- `index.html` — home: hero, trust strip, differentiator, stages preview, audit CTA
- `services.html` — Stage 1 (UniFi Foundation) + Stage 2 (NGFW security & compliance)
- `about.html` — mission, UniFi technology philosophy, credentials
- `portfolio.html` — industries served, illustrative example engagement
- `contact.html` — $97 Network Health Check + lead form
- `style.css`, `main.js` — shared stylesheet and scripts
- `assets/` — site imagery (`hero-closet.jpg`, `office-rack.jpg`)
- `favicon.svg`, `og-image.jpg` — brand assets

## Lead form

The contact form posts to Formspree (`xqpeqgew`, configured in `main.js`).
Submissions are tagged with the site origin and a subject line.

## Paid audit checkout

Set `STRIPE_AUDIT_URL` in `main.js` to a Stripe Payment Link for the $97
Health Check. Until then, audit CTAs route to `contact.html?interest=audit`.

## Local preview

```bash
python -m http.server 8000
# open http://localhost:8000
```

## mcp-assistant/

Separate local project (FastAPI + Ollama assistant). Not part of the website.
See `mcp-assistant/README.md`.
