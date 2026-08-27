# Jasurbek Omonqulov — Premium Portfolio

A world-class, fully responsive portfolio website for a senior **Full Stack Developer**
with 10+ years of experience. Apple / Tesla / Stripe inspired UI — confident and
restrained, with **one signature 3D interaction** (the hero globe) and everything else
kept quiet and disciplined.

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Full-screen hero with a lazy-loaded Three.js globe, about, skills, featured projects, contact |
| `about.html` | Story, animated counters, technology grid, expertise rings, certificates |
| `projects.html` | Data-driven, filterable project showcase (AI / Bots / Web / Mobile / Desktop) |
| `experience.html` | Numbered animated timeline, achievements, education |
| `contact.html` | Glassmorphism form (EmailJS + honeypot), social links, iframe map |

## Structure

```text
portfolio/
├── index.html
├── about.html
├── projects.html
├── experience.html
├── contact.html
│
├── assets/
│   ├── images/          # WebP/AVIF images
│   ├── icons/           # custom icons
│   ├── videos/          # background videos
│   ├── models/          # 3D models (.glb/.gltf)
│   └── fonts/           # self-hosted fonts (optional)
│
├── css/
│   ├── input.css        # Tailwind entry + full design system (EDIT THIS)
│   └── style.css        # build result (generated — do not edit)
│
├── js/
│   ├── main.js          # layout injection, cursor, loader, transitions, EmailJS, projects renderer
│   ├── animations.js    # GSAP + ScrollTrigger reveals, counters, tilt, timeline
│   ├── three-scene.js   # signature Three.js globe (lazy, pauses off-screen)
│   ├── particles.js     # canvas particle network — dark mode + desktop only
│   └── theme.js         # dark / light mode
│
├── components/          # reference markup: navbar, footer, cards
├── data/
│   └── projects.json    # projects source of truth (rendered dynamically)
│
├── tailwind.config.js
├── package.json
└── README.md
```

## Technologies

- HTML5 (semantic), Tailwind CSS (**build step, not CDN**), vanilla JavaScript ES6+
- Three.js, GSAP + ScrollTrigger, Typed.js, Lucide icons (brand icons are inline SVG)
- EmailJS (contact form)

### Tech decisions (vs. a naive first draft)

- **Tailwind via CLI** — `css/input.css` is compiled to `css/style.css`. No CDN version.
- **GSAP + ScrollTrigger instead of AOS** — a single animation library; no conflicting
  scroll systems. Framer Motion is skipped (it's React-only and doesn't apply here).
- **Lucide icons** instead of Font Awesome — lighter; social brands are inline SVGs.
- **One 3D signature object** (globe) instead of many — better performance and focus.

## Dark / Light mode

| Variable | ☀️ Light | 🌙 Dark |
|---|---|---|
| `--bg` | `#f8fafc` | `#030712` |
| `--primary` | `#2563eb` | `#38bdf8` |
| `--primary-hover` | `#1d4ed8` | `#0ea5e9` |
| `--secondary` | `#7c3aed` | `#a855f7` |
| `--text` | `#0f172a` | `#f8fafc` |
| `--text-muted` | `#475569` | `#94a3b8` |
| `--border` | `#e2e8f0` | `#1e293b` |
| `--glow` | — | `#00ffff` |

- Driven by CSS custom properties on `<html data-theme="...">`.
- `js/theme.js` respects `prefers-color-scheme` on first visit, persists the choice in `localStorage`.
- Neon particles run **only in dark mode on desktop**; light mode stays clean and quiet.
- All non-essential animation is disabled under `prefers-reduced-motion`.

## Setup

Requires Node.js (only for the CSS build).

```bash
npm install
npm run build:css      # compile Tailwind + design system -> css/style.css
npm run watch:css      # rebuild on change while developing
```

Serve the site (any static server):

```bash
# Option 1 — Python
py -m http.server 8080

# Option 2 — Node
npx serve .
```

Open `http://localhost:8080`. Opening `index.html` directly via `file://` also works —
shared layout is injected client-side and project data falls back to an embedded copy.

## Editing projects

Edit **`data/projects.json`** — the cards on `projects.html` and the featured grid on
`index.html` render from it automatically. Fields: `title`, `category` (`ai|bots|web|mobile|desktop`),
`icon` (Lucide name), `description`, `tags[]`, `github`, `demo`.

## Configuring EmailJS

The contact form falls back to a demo success message when keys are missing.
In `js/main.js` → `initContactForm`, replace:

```js
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', payload, 'YOUR_PUBLIC_KEY')
```

The form also includes a hidden **honeypot** field — bots that fill it get a fake success
and the message is silently dropped.

## Customization

- **Identity:** name / role / contact details across the pages and in `js/main.js`.
- **Colors:** the CSS variables at the top of `css/input.css`.
- **Fonts:** display = Space Grotesk, body = Inter (Google Fonts links in each page head).
- **Timeline:** add `.timeline-item` blocks in `experience.html`.

## Performance notes

- Three.js is lazy-started with `IntersectionObserver` and its render loop pauses off-screen;
  mobile and `prefers-reduced-motion` users get a single static frame.
- Scripts load with `defer`; images should use `loading="lazy"` + WebP/AVIF.
- Realistic Lighthouse targets for a 3D + animated site: **90+ desktop, 75+ mobile**.# Porfolio-web
