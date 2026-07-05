import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 18 + 6, 100)
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setVisible(false)
            setTimeout(onFinish, 700)
          }, 260)
        }
        return next
      })
    }, 140)
    return () => clearInterval(interval)
  }, [onFinish])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl tracking-tight text-ink"
          >
            SK<span className="text-accent">J</span>.dev
          </motion.div>

          <div className="mt-8 h-px w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-accent"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <p className="mt-4 font-mono text-xs text-muted tracking-widest">
            {String(Math.floor(progress)).padStart(3, '0')}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
