import { motion } from 'framer-motion'
import { education, personal } from '../data'
import Section from '../components/Section'

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 space-y-4"
        >
          <p>
            I am a software engineer passionate about building delightful web experiences and applying AI/ML to solve real problems. I enjoy working across the stack, with a focus on React, performance, and clean design.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a className="px-4 py-2 rounded-full border hover:bg-black/5 dark:hover:bg-white/5" href={personal.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="px-4 py-2 rounded-full border hover:bg-black/5 dark:hover:bg-white/5" href={personal.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="px-4 py-2 rounded-full border hover:bg-black/5 dark:hover:bg-white/5" href={personal.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
            <a className="px-4 py-2 rounded-full border hover:bg-black/5 dark:hover:bg-white/5" href={personal.links.codechef} target="_blank" rel="noreferrer">CodeChef</a>
            <a className="px-4 py-2 rounded-full border hover:bg-black/5 dark:hover:bg-white/5" href={personal.links.gfg} target="_blank" rel="noreferrer">GeeksforGeeks</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="space-y-3"
        >
          <div className="space-y-1">
            <p className="font-semibold">Education</p>
            <div className="glass-card rounded-xl divide-y divide-black/5 dark:divide-white/5">
              {education.map((e, idx) => (
                <div key={idx} className="px-4 py-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{e.period}</p>
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-sm">{e.school}{e.score ? ` • ${e.score}` : ''}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}


