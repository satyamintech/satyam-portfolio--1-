import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Download, Send, MapPin } from 'lucide-react'
import { profile } from '../data/portfolioData'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sent')
    setTimeout(() => setStatus('idle'), 3500)
    setForm({ name: '', email: '', message: '' })
  }

  const contactLinks = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
    { icon: Github, label: 'GitHub', href: profile.github },
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
  ]

  return (
    <section id="contact" className="section">
      <div className="container-max grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Contact</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Let&apos;s build something worth shipping.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Open to full-time roles, internships, and collaborations. Reach out directly or send a
            note through the form.
          </p>

          <div className="mt-8 space-y-3">
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="card-surface flex items-center gap-3 rounded-xl p-3.5 text-sm text-muted transition-colors hover:text-ink"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent-hover">
                  <Icon size={16} />
                </span>
                {label}
              </a>
            ))}
          </div>

          <a
            href={profile.resumeUrl}
            download
            className="btn-primary mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
          >
            <Download size={15} /> Download Resume
          </a>

          <div className="card-surface mt-8 flex items-center gap-3 rounded-xl p-4 text-sm text-muted">
            <MapPin size={16} className="text-accent-hover" />
            {profile.location}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-surface space-y-4 rounded-2xl p-6 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="text-xs font-medium text-muted">
              Name
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1.5 w-full rounded-lg border border-white/10 bg-transparent px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent-hover"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs font-medium text-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1.5 w-full rounded-lg border border-white/10 bg-transparent px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent-hover"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-medium text-muted">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-lg border border-white/10 bg-transparent px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent-hover"
              placeholder="Tell me a bit about the opportunity or project..."
            />
          </div>
          <button
            type="submit"
            className="btn-primary flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
          >
            <Send size={15} /> {status === 'sent' ? 'Message sent' : 'Send message'}
          </button>
          <p className="text-center text-xs text-muted">
            This form is a front-end demo. Wire it to an email service (e.g. Formspree, Resend) to
            receive submissions.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
