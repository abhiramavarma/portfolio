import { motion } from 'framer-motion'
import Section from '../components/Section'
import { projects } from '../data'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.a
            key={p.title}
            href={p.links.live || p.links.github}
            target="_blank"
            rel="noreferrer"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group rounded-2xl p-5 glass-card block hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <span className="text-primary-600 dark:text-primary-400 text-sm">{p.links.live ? 'Live ↗' : 'Code ↗'}</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/5 dark:bg-white/5">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}


