# BowdenCore

> Enterprise-grade Managed IT Services platform built with Neuralink-inspired minimalist design.

A high-performance, production-ready landing page and marketing site for BowdenCore MSP serving Central Florida.

---

## 🎯 Project Overview

**BowdenCore** is a Managed Service Provider (MSP) specializing in:
- Managed IT Infrastructure
- Enterprise Cybersecurity
- Cloud Automation & Migration
- Zero-Trust Architecture Implementation

This repository contains the **landing page and marketing website** deployed at **bowdencore.com**.

### Design Philosophy

The site employs a **Neuralink-inspired minimalist aesthetic**:
- Deep blacks & stark whites with electric cyan/blue accents
- Heavy whitespace and refined typography
- Smooth scroll animations and interactive micro-interactions
- Network grid background animation
- Scientific, professional tone aligned with enterprise MSP positioning

---

## 🚀 Quick Start

### Prerequisites

- No build tools required (pure HTML/CSS/JavaScript)
- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile, tablet, and desktop

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/bowdencore.git
cd bowdencore

# No install step needed!
# Simply serve the files locally
python -m http.server 8000
# or
npx http-server
```

Navigate to `http://localhost:8000` in your browser.

### Deployment

**GitHub Pages:**
```bash
# Push to main branch
git add .
git commit -m "feat: rebuild with Neuralink aesthetic"
git push origin main
```

The CNAME file automatically configures `bowdencore.com` as the custom domain.

---

## 📁 Project Structure

```
bowdencore/
├── index.html           # Main landing page
├── style.css            # All styling & animations
├── main.js              # Interactions & network animation
├── CNAME                # Custom domain configuration
├── README.md            # This file
└── .gitignore           # Git ignore rules
```

---

## 🎨 Design System

### Color Palette

```css
--color-black: #000000;           /* Primary background */
--color-white: #ffffff;           /* Text & accents */
--color-accent-blue: #0066ff;     /* Primary CTA */
--color-accent-cyan: #00d9ff;     /* Highlights & hover */
```

### Typography

- **Headers**: System sans-serif (Apple system, Segoe UI)
- **Body**: Cambria / Georgia serif fonts
- **Font sizes**: Responsive with clamp() functions

---

## ⚡ Features

✅ Zero dependencies - Pure HTML/CSS/JavaScript
✅ Network grid particle animation at 60fps
✅ Scroll-triggered animations with Intersection Observer
✅ Fully responsive (mobile, tablet, desktop)
✅ CSS variables for easy customization
✅ Production-ready code
✅ Accessibility support (reduced-motion)
✅ Analytics hooks included

---

## 🔧 Customization

### Change Colors

Edit CSS variables in `style.css`:

```css
:root {
    --color-accent-blue: #0066ff;
    --color-accent-cyan: #00d9ff;
}
```

### Update Content

Edit sections in `index.html` - all content is clearly labeled.

---

## 📱 Responsive Breakpoints

- **480px**: Mobile phones
- **768px**: Tablets
- **1200px**: Desktop (max-width container)

---

## 🚀 Deployment

See `DEPLOYMENT.md` for complete GitHub Pages, Netlify, Vercel, and custom hosting setup instructions.

---

## 📊 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 📄 License

© 2026 BowdenCore. All rights reserved.

---

**Status**: ✅ Production Ready | **Last Updated**: April 21, 2026