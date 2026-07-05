import { motion } from 'framer-motion'
import { timeline } from '../data/portfolioData'

const typeColor = {
  education: '#2563EB',
  hackathon: '#7C3AED',
  project: '#0EA5E9',
  experience: '#10B981',
  achievement: '#F59E0B',
  goal: '#F8FAFC',
}

export default function Timeline() {
  return (
    <section id="journey" className="section">
      <div className="container-max">
        <span className="eyebrow">Developer Journey</span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          How it&apos;s unfolded so far.
        </h2>

        <div className="relative mt-12 pl-6">
          <div className="absolute left-[7px] top-0 h-full w-px bg-white/10" />

          <div className="space-y-10">
            {timeline.map((t, i) => (
              <motion.div
                key={`${t.year}-${t.title}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}
                className="relative"
              >
                <span
                  className="absolute -left-6 top-1.5 h-3 w-3 rounded-full ring-4 ring-bg"
                  style={{ backgroundColor: typeColor[t.type] }}
                />
                <p className="font-mono text-xs text-muted">{t.year}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">{t.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
