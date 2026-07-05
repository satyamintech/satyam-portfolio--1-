import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-max">
        <span className="eyebrow">Experience</span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Where I&apos;ve applied it in the field.
        </h2>

        <div className="mt-10 space-y-6">
          {experience.map((job) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="card-surface grid gap-6 rounded-2xl p-6 sm:p-8 md:grid-cols-[1fr_1.4fr]"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">{job.role}</h3>
                <p className="mt-1 text-accent-hover">{job.company}</p>
                <p className="mt-2 font-mono text-xs text-muted">{job.period}</p>
              </div>
              <ul className="space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
