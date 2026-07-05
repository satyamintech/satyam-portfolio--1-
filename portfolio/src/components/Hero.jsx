import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { profile } from '../data/portfolioData'
import ParticlesBackground from './ParticlesBackground'

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.taglines)

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <div className="absolute inset-0 bg-grid-glow" />
      <ParticlesBackground />

      <div className="container-max relative grid items-center gap-14 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">Available for opportunities</span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">Satyam Kumar Jha</span>
          </h1>

          <div className="mt-4 flex h-8 items-center font-mono text-lg text-accent-hover sm:text-xl">
            <span>{typed}</span>
            <span className="typing-caret h-6" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.headline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={profile.resumeUrl} download className="btn-primary rounded-full px-6 py-3 text-sm font-medium">
              Download Resume
            </a>
            <a href="#projects" className="btn-ghost rounded-full px-6 py-3 text-sm font-medium">
              View Projects
            </a>
            <a href="#contact" className="rounded-full px-6 py-3 text-sm font-medium text-muted hover:text-ink">
              Let&apos;s Connect →
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {[
              { icon: Github, href: profile.github, label: 'GitHub' },
              { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent-hover hover:text-accent-hover"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Signature element: a live "system status" readout of the stack, in place of a static headshot frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass rounded-2xl p-5 shadow-glow animate-floaty">
            <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-[11px] text-muted">status.sh</span>
            </div>
            <div className="mt-4 space-y-2 font-mono text-[13px] leading-relaxed">
              <p className="text-muted">$ whoami</p>
              <p className="text-ink">satyam-kumar-jha</p>
              <p className="mt-3 text-muted">$ stack --active</p>
              <p className="text-ink">react · node · postgres · mongo</p>
              <p className="mt-3 text-muted">$ ai --status</p>
              <p className="text-emerald-400">gemini + openai · online</p>
              <p className="mt-3 text-muted">$ availability</p>
              <p className="text-accent-hover">open_to_work: true</p>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 hidden rounded-xl border border-white/10 bg-card px-4 py-3 shadow-card sm:block">
            <p className="font-display text-2xl font-semibold text-ink">9.0</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">CGPA</p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={14} />
      </motion.a>
    </section>
  )
}
