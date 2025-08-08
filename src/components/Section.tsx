import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  id: string
  title?: string
  subdued?: boolean
}>

export function Section({ id, title, subdued, children }: Props) {
  return (
    <section id={id} className="py-20 sm:py-24">
      <div className="container-responsive">
        {title && (
          <motion.h2
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="section-title mb-8"
          >
            {title}
          </motion.h2>
        )}
        <div className={subdued ? 'opacity-95' : ''}>{children}</div>
      </div>
    </section>
  )
}

export default Section


