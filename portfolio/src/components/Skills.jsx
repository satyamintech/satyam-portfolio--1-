import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-max">
        <span className="eyebrow">Technical Skills</span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          The toolkit behind the projects.
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className="card-surface group rounded-2xl p-5 transition-colors hover:border-accent-hover/50"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-semibold text-ink">{s.category}</h3>
                <span className="font-mono text-xs text-muted">{s.level}%</span>
              </div>

              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-muted transition-colors group-hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
