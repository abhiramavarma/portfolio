import { motion } from 'framer-motion'
import Section from '../components/Section'
import { achievements } from '../data'

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <ul className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a, idx) => (
          <motion.li
            key={idx}
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="glass-card rounded-xl p-4"
          >
            <span className="mr-2">🏅</span>
            {a}
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}


