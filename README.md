# Glidepath

A single-page template for a private-aviation brand, built with React + TypeScript + Vite, linted with oxlint.

## What's in it

- **Five sections, one flight** — Departure, Ascent, Cruise, Descent, Arrival — each in its own color, moving from a pale ground haze through sky blues into a night-arrival violet.
- **Scroll-triggered text reveals** — headlines build in line by line (masked slide-up), eyebrows slide in from the left, body copy and cards fade/rise into view. See `src/components/Reveal.tsx`.
- **A floating, self-tucking navbar** — pinned pill nav that slides up and tucks itself mostly out of view on scroll-down (leaving a sliver visible), and slides back down on scroll-up or near the top of the page. See `src/hooks/useNavbarVisibility.ts` + `src/components/Navbar.tsx`.
- **A scroll-linked plane** — a low-poly aircraft, seen from below and banking up-and-right, fixed in the viewport and animated via `requestAnimationFrame`. Its position is lerped toward a target derived linearly from scroll progress, so a 10% scroll always moves it 10% of its travel range — smoothed rather than snapped. See `src/components/Plane.tsx`.
- Respects `prefers-reduced-motion` throughout.

## Commands

```bash
npm install
npm run dev       # start the dev server
npm run lint       # oxlint
npm run build      # typecheck + production build
npm run preview    # preview the production build
```

## Structure

```
src/
  components/
    Navbar.tsx / Navbar.css     floating pill nav
    Plane.tsx / Plane.css       scroll-linked aircraft + HUD altitude readout
    Reveal.tsx                  RevealLines / RevealUp / RevealLeft text-entrance primitives
  hooks/
    useNavbarVisibility.ts      scroll-direction detection for the navbar
  App.tsx / App.css             the five sections and their content
  index.css                     design tokens (color, type, easing) + globals
```
