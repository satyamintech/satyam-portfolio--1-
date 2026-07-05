import { useEffect, useRef } from 'react'

// Lightweight canvas particle field — no external dependency, no bundle bloat.
export default function ParticlesBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, particles, raf

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio
      height = canvas.height = canvas.offsetHeight * devicePixelRatio
    }

    const init = () => {
      resize()
      const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 22000)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(148, 163, 184, 0.5)'
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * devicePixelRatio, 0, Math.PI * 2)
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }

    init()
    if (!prefersReduced) draw()
    window.addEventListener('resize', init)
    return () => {
      window.removeEventListener('resize', init)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full opacity-60" />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl animate-blob [animation-delay:3s]" />
    </div>
  )
}
