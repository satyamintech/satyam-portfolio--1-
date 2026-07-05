import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <CustomCursor />
      <ScrollProgress />
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Leadership />
        <Certifications />
        <Education />
        <Timeline />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
