import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { personal, projects } from '../data'
import Fuse from 'fuse.js'
import type { IFuseOptions } from 'fuse.js'

type CommandItem = {
  id: string
  label: string
  hint?: string
  action: () => void
  group: 'Navigate' | 'Projects' | 'Links'
}

function useCommandItems(): CommandItem[] {
  return useMemo(() => {
    const navigate: CommandItem[] = [
      { id: 'nav-home', label: 'Go to Home', group: 'Navigate', action: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) },
      { id: 'nav-about', label: 'Go to About', group: 'Navigate', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
      { id: 'nav-projects', label: 'Go to Projects', group: 'Navigate', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
      { id: 'nav-experience', label: 'Go to Experience', group: 'Navigate', action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
      { id: 'nav-achievements', label: 'Go to Achievements', group: 'Navigate', action: () => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' }) },
      { id: 'nav-skills', label: 'Go to Skills', group: 'Navigate', action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
      { id: 'nav-contact', label: 'Go to Contact', group: 'Navigate', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
    ]

    const projectItems: CommandItem[] = projects.map((p) => ({
      id: `proj-${p.title}`,
      label: `Open: ${p.title}`,
      hint: p.links.live ? 'Live' : 'Code',
      group: 'Projects',
      action: () => window.open(p.links.live || p.links.github, '_blank', 'noopener,noreferrer'),
    }))

    const linkItems: CommandItem[] = [
      { id: 'link-github', label: 'GitHub Profile', group: 'Links', action: () => window.open(personal.links.github, '_blank', 'noopener,noreferrer') },
      { id: 'link-linkedin', label: 'LinkedIn Profile', group: 'Links', action: () => window.open(personal.links.linkedin, '_blank', 'noopener,noreferrer') },
      { id: 'link-leetcode', label: 'LeetCode Profile', group: 'Links', action: () => window.open(personal.links.leetcode, '_blank', 'noopener,noreferrer') },
      { id: 'link-email', label: 'Copy Email Address', hint: personal.email, group: 'Links', action: () => navigator.clipboard.writeText(personal.email) },
    ]

    return [...navigate, ...projectItems, ...linkItems]
  }, [])
}

const fuseOptions: IFuseOptions<CommandItem> = {
  includeScore: true,
  threshold: 0.4,
  ignoreLocation: true,
  keys: [
    { name: 'label', weight: 0.8 },
    { name: 'hint', weight: 0.2 },
  ],
}

export default function CommandPalette() {
  const items = useCommandItems()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = useMemo(() => {
    if (!query.trim()) return items
    const fuse = new Fuse(items, fuseOptions)
    return fuse.search(query).map((r) => r.item)
  }, [items, query])

  const grouped = useMemo(() => {
    const map: Record<string, CommandItem[]> = {}
    for (const it of filtered) {
      if (!map[it.group]) map[it.group] = []
      map[it.group].push(it)
    }
    const order: Array<CommandItem['group']> = ['Navigate', 'Projects', 'Links']
    return order.filter((g) => map[g]?.length).map((g) => ({ group: g, items: map[g]! }))
  }, [filtered])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const isMac = navigator.platform.toUpperCase().includes('MAC')
      const mod = isMac ? e.metaKey : e.ctrlKey
      if (mod && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (!isOpen) return
      if (e.key === 'Escape') setIsOpen(false)
      if (e.key === 'ArrowDown') setHighlightedIndex((i) => Math.min(i + 1, filtered.length - 1))
      if (e.key === 'ArrowUp') setHighlightedIndex((i) => Math.max(i - 1, 0))
      if (e.key === 'Enter') {
        e.preventDefault()
        filtered[highlightedIndex]?.action()
        setIsOpen(false)
      }
    }
    function onOpenEvent() {
      setIsOpen(true)
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('open-command-palette', onOpenEvent as EventListener)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('open-command-palette', onOpenEvent as EventListener)
    }
  }, [filtered, highlightedIndex, isOpen])

  useEffect(() => {
    if (!isOpen) return
    setTimeout(() => inputRef.current?.focus(), 0)
  }, [isOpen])

  useEffect(() => {
    setHighlightedIndex(0)
  }, [query])

  const overlay = (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-[60]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
          <div className="absolute inset-x-0 top-20 mx-auto max-w-xl px-4">
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="rounded-2xl glass-card overflow-hidden"
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-black/5 dark:border-white/5">
                <span className="text-sm text-gray-500 dark:text-gray-400">⌘K</span>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects, sections, links..."
                  className="w-full bg-transparent outline-none text-sm"
                />
              </div>
              <div className="max-h-80 overflow-auto py-2">
                {grouped.map(({ group, items }) => (
                  <div key={group}>
                    <div className="px-4 py-2 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{group}</div>
                    {items.map((it) => {
                      const flatIndex = filtered.findIndex((f) => f.id === it.id)
                      const isActive = flatIndex === highlightedIndex
                      return (
                        <button
                          key={it.id}
                          onMouseEnter={() => setHighlightedIndex(flatIndex)}
                          onClick={() => {
                            it.action()
                            setIsOpen(false)
                          }}
                          className={`w-full text-left px-4 py-2 flex items-center justify-between gap-4 ${isActive ? 'bg-black/5 dark:bg-white/5' : ''}`}
                        >
                          <span className="text-sm">{it.label}</span>
                          {it.hint && <span className="text-xs text-gray-500 dark:text-gray-400">{it.hint}</span>}
                        </button>
                      )
                    })}
                  </div>
                ))}
                {filtered.length === 0 && (
                  <div className="px-4 py-6 text-sm text-gray-600 dark:text-gray-300">No results</div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return createPortal(overlay, document.body)
}


