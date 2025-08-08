import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import CommandPalette from './CommandPalette'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function NavBar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="container-responsive">
        <div className="mt-4 rounded-full glass-card px-4 py-2 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-semibold tracking-tight">
            <img src="/trans_logo.png" alt="Logo" className="h-12 w-12 rounded-sm" />
            <span className="hidden sm:inline">Portfolio</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1.5 rounded-full text-sm hover:bg-black/5 dark:hover:bg-white/5"
              >
                {s.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded-full text-sm hover:bg-black/5 dark:hover:bg-white/5"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
            <button
              aria-label="Open command palette"
              onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
              className="px-3 py-1.5 rounded-full text-sm hover:bg-black/5 dark:hover:bg-white/5"
            >
              ⌘K
            </button>
          </div>
        </div>
      </div>
      <CommandPalette />
    </motion.nav>
  )
}

export default NavBar


