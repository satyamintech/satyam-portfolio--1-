import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { leadership, conferences, beyondCode } from '../data/portfolioData'

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container-max grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <span className="eyebrow">Leadership & Achievements</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Leading from the front.
          </h2>

          <div className="mt-8 space-y-3">
            {leadership.map((l, i) => (
              <motion.div
                key={l.org}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card-surface flex items-center gap-4 rounded-xl p-4"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-hover">
                  <Trophy size={16} />
                </div>
                <div>
                  <p className="font-medium text-ink">{l.title}</p>
                  <p className="text-sm text-muted">{l.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">Conferences & Events</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {conferences.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-muted"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-ink">Beyond Code</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {beyondCode.map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-accent/10 px-3 py-1.5 text-sm text-accent-hover"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
