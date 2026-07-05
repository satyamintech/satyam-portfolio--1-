import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { nav, profile } from '../data/portfolioData'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`container-max flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled ? 'glass shadow-glow' : ''
        }`}
      >
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
          SK<span className="text-accent">J</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                active === item.href
                  ? 'text-accent-hover'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <a
            href={profile.resumeUrl}
            download
            className="btn-primary flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
          >
            <Download size={14} /> Resume
          </a>
        </div>

        <button
          className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="container-max mt-2 overflow-hidden rounded-2xl glass md:hidden"
          >
            <div className="flex flex-col p-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-ink hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between px-3">
                <ThemeToggle theme={theme} setTheme={setTheme} />
                <a
                  href={profile.resumeUrl}
                  download
                  className="btn-primary flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                >
                  <Download size={14} /> Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
