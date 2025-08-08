import { motion } from 'framer-motion'
import Section from '../components/Section'
import { skills } from '../data'

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="glass-card rounded-xl p-4">
      <p className="font-semibold">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((i) => (
          <span key={i} className="text-xs px-2 py-1 rounded-full bg-black/5 dark:bg-white/5">{i}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subdued>
      <motion.div
        initial={{ y: 12, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Frameworks" items={skills.frameworks} />
        <SkillGroup title="Databases" items={skills.databases} />
        <SkillGroup title="Tools" items={skills.tools} />
        <SkillGroup title="Core CS" items={skills.core} />
      </motion.div>
    </Section>
  )
}


