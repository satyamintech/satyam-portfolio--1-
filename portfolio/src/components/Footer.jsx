import { Github, Linkedin, Mail } from 'lucide-react'
import { profile, nav } from '../data/portfolioData'

export default function Footer() {
  const techs = ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Gemini API', 'OpenAI API']

  return (
    <footer className="relative border-t border-white/5 pt-14">
      <div className="overflow-hidden border-b border-white/5 py-4">
        <div className="flex w-max animate-marquee gap-10 font-mono text-xs uppercase tracking-widest text-muted">
          {[...techs, ...techs].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      <div className="container-max flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            SK<span className="text-accent">J</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">{profile.headline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted hover:text-ink">
            <Github size={15} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted hover:text-ink">
            <Linkedin size={15} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted hover:text-ink">
            <Mail size={15} />
          </a>
        </div>
      </div>

      <div className="container-max flex flex-col items-center justify-between gap-3 border-t border-white/5 py-6 text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Satyam Kumar Jha. All rights reserved.</p>
        <p>Designed & built with React, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  )
}
