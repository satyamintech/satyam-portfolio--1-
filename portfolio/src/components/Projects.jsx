import { motion } from 'framer-motion'
import { Github, ExternalLink, FileText } from 'lucide-react'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-max">
        <span className="eyebrow">Featured Projects</span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Things I&apos;ve built end to end.
        </h2>

        <div className="mt-10 space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="card-surface group overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="grid md:grid-cols-[1.05fr_1fr]">
                <div
                  className="relative flex min-h-[220px] items-center justify-center overflow-hidden p-8 md:min-h-[280px]"
                  style={{
                    background: `linear-gradient(135deg, ${p.accent}22, #030712 70%)`,
                  }}
                >
                  <div
                    className="absolute -right-10 -top-10 h-48 w-48 rounded-full blur-3xl opacity-40"
                    style={{ background: p.accent }}
                  />
                  <span className="relative font-display text-2xl font-semibold text-ink/90 sm:text-3xl">
                    {p.title}
                  </span>
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                      {p.description}
                    </p>

                    <p className="mt-4 text-xs uppercase tracking-wide text-accent-hover">
                      Problem
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{p.problem}</p>

                    <p className="mt-4 text-xs uppercase tracking-wide text-accent-hover">
                      Architecture
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{p.architecture}</p>

                    <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-3">
                      {p.features.map((f) => (
                        <span key={f} className="text-xs text-muted">
                          · {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium"
                      >
                        <Github size={14} /> GitHub
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {p.caseStudy && (
                      <a
                        href={p.caseStudy}
                        className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted hover:text-ink"
                      >
                        <FileText size={14} /> Case Study
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
