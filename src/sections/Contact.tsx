import Section from '../components/Section'
import { personal } from '../data'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <motion.div
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div>
          <p className="font-semibold">Let’s build something great.</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">Available for internships and freelance opportunities.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="px-5 py-3 rounded-full bg-primary-600 text-white hover:bg-primary-500" href={`mailto:${personal.email}`}>Email</a>
          <a className="px-5 py-3 rounded-full border hover:bg-black/5 dark:hover:bg-white/5" href={personal.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="px-5 py-3 rounded-full border hover:bg-black/5 dark:hover:bg-white/5" href={personal.links.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </motion.div>
    </Section>
  )
}


