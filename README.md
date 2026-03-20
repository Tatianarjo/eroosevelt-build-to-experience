# Roosevelt Allen — React / TypeScript Site

Art. Design. Consultants. | A Rosebud Group Company

---

## Quick Start

```bash
npm install
npm run dev
```

Then open **http://localhost:5173**

---

## Stack

| Tool | Purpose |
|------|---------|
| Vite 5 | Dev server & bundler |
| React 18 | UI framework |
| TypeScript 5 | Type safety |
| GSAP 3 + ScrollTrigger | All animations |
| CSS Modules | Scoped component styles |
| Google Fonts | Anton + Barlow Condensed + Barlow |

---

## Project Structure

```
src/
├── main.tsx                  # Entry point
├── App.tsx                   # Root — assembles all sections
│
├── styles/
│   └── globals.css           # CSS variables, reset, utilities
│
├── data/
│   └── content.ts            # Projects, services, clients data
│
├── hooks/
│   ├── useCursor.ts          # Custom lag-ring cursor (GSAP)
│   └── useScrollReveal.ts    # Scroll-triggered entrance animations
│
└── components/
    ├── Cursor.tsx / .module.css
    ├── Nav.tsx / .module.css         # Sticky nav, hides on scroll down
    ├── Hero.tsx / .module.css        # Full-viewport, photo grid, parallax
    ├── Marquee.tsx / .module.css     # Looping black ticker bar
    ├── About.tsx / .module.css       # Split column — stat + text
    ├── Services.tsx / .module.css    # Mind-map layout (detroit.paris style)
    ├── Projects.tsx / .module.css    # Hover fill-swipe list + preview card
    ├── Gallery.tsx / .module.css     # Asymmetric photo grid
    ├── BuildToExperience.tsx / .module.css  # 4-column process cards
    ├── Clients.tsx / .module.css     # 3-column client groups
    └── Contact.tsx / .module.css     # Split CTA + footer bar
```

---

## Adding Real Photography

All placeholder swatches in `Hero`, `Projects`, `Gallery` are CSS
gradients. To swap in real images:

1. Drop `.jpg` / `.webp` files into `src/assets/`
2. Import them at the top of the component:
   ```ts
   import opryland from '../assets/opryland.webp'
   ```
3. Replace the swatch `<div>` with an `<img src={opryland} ... />`
   or set `background-image: url(...)` via inline style.

---

## Scripts

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # TypeScript check + production build → dist/
npm run preview  # Preview the production build locally
```

---

## Deploying

The `dist/` folder after `npm run build` is a static site.
Drop it on **Netlify**, **Vercel**, or any static host.

For Netlify drag-and-drop: `npm run build` → drag `dist/` to netlify.com/drop
