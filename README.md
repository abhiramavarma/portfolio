# Nandayala Abhirama Varma — Portfolio

Live: [portfolio-abhiramavarmas-projects.vercel.app](https://portfolio-abhiramavarmas-projects.vercel.app/)

Personal site built with React, Vite, TypeScript, Tailwind CSS and Framer Motion. It has a clean layout, dark mode, a command palette, and a Spline background with subtle parallax and cursor‑driven head movement.

## Stack
- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion
- Spline (`@splinetool/react-spline`)

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Project layout (short)
```
src/
  components/        shared UI
  components/ui/     shadcn-style primitives (card, spotlight, etc.)
  sections/          page sections
  data.ts            content
  index.css          Tailwind layers and small utilities
```

## Customization
- Content: `src/data.ts`
- Background & parallax: `src/components/Background.tsx`
- Command palette: `src/components/CommandPalette.tsx`
- Tailwind theme: `tailwind.config.js`

Spline head movement (Background): adjust range and response near the `onLoad` handler.
```ts
const maxYaw = 0.8
const maxPitch = 0.45
// increase the factor for snappier motion
head.rotation.y += ((targetX * maxYaw) - head.rotation.y) * 0.25
```

## Deploy
Any static host works. For Vercel: build `npm run build`, output `dist`.
