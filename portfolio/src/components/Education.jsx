import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-max">
        <span className="eyebrow">Education</span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Academic foundation.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-surface flex items-start gap-4 rounded-2xl p-5"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-hover">
                <GraduationCap size={18} />
              </div>
              <div>
                <h3 className="font-display text-base font-medium text-ink">{e.degree}</h3>
                {e.school && <p className="mt-1 text-sm text-muted">{e.school}</p>}
                <div className="mt-2 flex items-center gap-3 font-mono text-xs text-muted">
                  {e.period && <span>{e.period}</span>}
                  {e.note && <span className="text-accent-hover">{e.note}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
