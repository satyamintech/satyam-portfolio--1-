/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#030712',
          light: '#F8FAFC',
        },
        card: {
          DEFAULT: '#111827',
          light: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#2563EB',
          hover: '#3B82F6',
        },
        ink: {
          DEFAULT: '#F8FAFC',
          light: '#0B1220',
        },
        muted: {
          DEFAULT: '#94A3B8',
          light: '#5B6472',
        },
        line: 'rgba(255,255,255,.08)',
        'line-light': 'rgba(3,7,18,.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.18), transparent 55%)',
        'aurora':
          'linear-gradient(120deg, #2563EB 0%, #7C3AED 45%, #0EA5E9 100%)',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.94)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        marquee: 'marquee 22s linear infinite',
        blink: 'blink 1s step-start infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,.06), 0 20px 60px -20px rgba(37,99,235,.35)',
        card: '0 1px 0 rgba(255,255,255,.04) inset, 0 20px 40px -24px rgba(0,0,0,.6)',
      },
    },
  },
  plugins: [],
}
