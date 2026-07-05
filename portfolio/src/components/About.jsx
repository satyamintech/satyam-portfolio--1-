import { motion } from 'framer-motion'
import { Zap, Puzzle, Users, Sparkles, Layers, Heart } from 'lucide-react'
import { achievements, profile } from '../data/portfolioData'

const icons = [Zap, Puzzle, Users, Sparkles, Layers, Heart]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <span className="eyebrow">About</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Engineering with intent, not just output.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>
        </motion.div>

        <div className="bento mt-12">
          {achievements.map((a, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={a.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={{ delay: i * 0.06 }}
                className="card-surface group rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent-hover">
                  <Icon size={16} />
                </div>
                <h3 className="mt-3 font-display text-lg font-medium text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.detail}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
