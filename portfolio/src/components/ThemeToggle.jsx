import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, setTheme }) {
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-ink transition-colors hover:border-accent-hover hover:text-accent-hover"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
