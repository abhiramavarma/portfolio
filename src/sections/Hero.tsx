import { motion } from 'framer-motion'
import { personal } from '../data'

export default function Hero() {
  return (
    <section id="hero" className="pt-28 sm:pt-32">
      <div className="container-responsive">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              {personal.name}
            </motion.h1>
            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
              className="mt-3 text-lg text-gray-600 dark:text-gray-300"
            >
              {personal.title} • {personal.location}
            </motion.p>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a href="#projects" className="px-5 py-3 rounded-full bg-primary-600 text-white hover:bg-primary-500 transition-colors">View Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">Contact</a>
              <button onClick={() => window.dispatchEvent(new Event('open-command-palette'))} className="px-5 py-3 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">Search ⌘K</button>
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Email</p>
                <a className="hover:underline" href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">GitHub</p>
                <a className="hover:underline" href={personal.links.github} target="_blank" rel="noreferrer">{new URL(personal.links.github).hostname}</a>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">LinkedIn</p>
                <a className="hover:underline" href={personal.links.linkedin} target="_blank" rel="noreferrer">linkedin.com</a>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">LeetCode</p>
                <a className="hover:underline" href={personal.links.leetcode} target="_blank" rel="noreferrer">leetcode.com</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


