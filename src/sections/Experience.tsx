import { motion } from 'framer-motion'
import Section from '../components/Section'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10" />
        <div className="space-y-6">
          {experience.map((e, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -12, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-2 size-3 rounded-full bg-primary-600" />
              <div className="glass-card rounded-xl p-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-semibold">{e.role} • {e.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{e.period}</p>
                </div>
                <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                  {e.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}


