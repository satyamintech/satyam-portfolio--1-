import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-max">
        <span className="eyebrow">Certifications</span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Credentials that back the code.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-surface rounded-2xl p-5"
            >
              <BadgeCheck size={20} className="text-accent-hover" />
              <h3 className="mt-3 font-display text-base font-medium text-ink">{c.title}</h3>
              <p className="mt-1 text-sm text-muted">{c.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
