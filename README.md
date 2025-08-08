# Nandayala Abhirama Varma — Portfolio

A modern, animated portfolio built with React + Vite + TypeScript, Tailwind CSS, and Framer Motion. Features a cinematic generative background, parallax motion, a full-screen Spline 3D scene with cursor-reactive head tracking, and a fast Command Palette (⌘/Ctrl+K) for navigation.

## ✨ Features
- Minimal, responsive UI with Tailwind
- Framer Motion transitions and scroll-based parallax
- Dark mode (class-based, persisted)
- Command Palette (⌘/Ctrl+K): jump to sections, open links/projects, copy email
- Spotlight accents and glass cards
- Spline 3D scene as background (md+ screens), with cursor-driven head movement
- Sections: Hero, About, Projects, Experience, Achievements, Skills, Contact
- TS strict, alias `@` → `src`

## 🧱 Tech Stack
- React 19 + Vite + TypeScript
- Tailwind CSS 3 + PostCSS + Autoprefixer
- Framer Motion 12
- Spline runtime (`@splinetool/react-spline`)
- Utilities: `clsx`, `tailwind-merge`

## 🚀 Getting Started
Prerequisites: Node 18+ and npm

```bash
# install
npm install

# start dev server
npm run dev

# type-check + build
npm run build

# preview production build
npm run preview
```

## 🗂️ Project Structure (important bits)
```
src/
  components/
    Background.tsx           # generative bg + parallax + Spline background
    CommandPalette.tsx       # ⌘/Ctrl+K command palette
    Footer.tsx
    NavBar.tsx
    Section.tsx
    ui/
      card.tsx               # shadcn-style Card
      splite.tsx             # Spline wrapper with Suspense
      spotlight.tsx          # Spotlight accent (aceternity)
      spotlight-hover.tsx    # Hover-reactive spotlight (ibelick)
  hooks/
    useTheme.ts              # dark mode toggle
  sections/
    Hero.tsx
    About.tsx
    Projects.tsx
    Experience.tsx
    Achievements.tsx
    Skills.tsx
    Contact.tsx
  data.ts                    # your content
  types.ts                   # shared types
  index.css                  # tailwind layers + utilities + loader
  App.tsx, main.tsx

tailwind.config.js           # Tailwind v3 config (darkMode: 'class')
postcss.config.js
vite.config.ts               # alias '@' → './src'
```

## ⚙️ Configuration & Customization
- Content: edit `src/data.ts` (personal info, education, experience, projects, skills)
- Theme: tweak colors/shadows in `tailwind.config.js`
- Dark mode: class-based; persisted in `useTheme.ts`
- Command Palette: extend items in `src/components/CommandPalette.tsx`
- Background blobs/parallax: adjust speeds/intensity in `src/components/Background.tsx`
- Spline background scene: update the `scene` URL in `Background.tsx`
- Head movement tuning (Background Spline): in `src/components/Background.tsx`
  - Amplitude: `maxYaw`, `maxPitch`
  - Responsiveness: lerp factor inside the `tick()` function

Example (excerpt):
```ts
const maxYaw = 0.8   // radians left/right
const maxPitch = 0.45 // radians up/down
// responsiveness
head.rotation.y += ((targetX * maxYaw) - head.rotation.y) * 0.25
head.rotation.x += ((targetY * maxPitch) - head.rotation.x) * 0.25
```

## ⌨️ Shortcuts
- Command Palette: ⌘K (macOS) / Ctrl+K (Windows/Linux)
  - Navigate to sections, open project links, copy email, visit socials

## 🧩 shadcn-style UI folder
Components live in `src/components/ui` for predictable imports like `@/components/ui/card`. A `cn` helper is provided in `src/lib/utils.ts` using `clsx` and `tailwind-merge`.

## 📦 Scripts
```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview"
}
```

## 🌐 Deploy (Vercel)
1. Push the repo to GitHub
2. Import in Vercel → Framework: Vite → Build Command: `npm run build` → Output: `dist`
3. Set Node 18+ in Project Settings if needed

## 🔎 Notes
- Spline is heavy by nature; you can lazy-load the background or gate it to user interaction if needed.
- The background Spline is hidden on small screens by default for performance.
- If your Spline head object uses a different name, update the lookup in `Background.tsx`.

## 🙌 Credits
- Spline runtime: `@splinetool/react-spline`
- Spotlight patterns inspired by Aceternity and Ibelick
- Tailwind CSS & Framer Motion

## 📝 License
Choose your license (e.g., MIT). Add a `LICENSE` file in the repository root.
