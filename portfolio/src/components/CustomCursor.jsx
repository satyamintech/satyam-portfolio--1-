import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    let ringX = 0,
      ringY = 0,
      mouseX = 0,
      mouseY = 0

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top = `${mouseY}px`
      }
      const target = e.target
      setIsPointer(
        !!target.closest('a, button, [role="button"], input, textarea, .cursor-pointer')
      )
    }

    let raf
    const animate = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={
          isPointer
            ? { width: '54px', height: '54px', borderColor: 'rgba(59,130,246,0.9)' }
            : undefined
        }
      />
    </>
  )
}
