import { useMemo } from 'react'
import Nav from './components/Nav'
import SectionRail from './components/SectionRail'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { sections } from './data/profile'
import { useActiveSection } from './hooks/useActiveSection'

function App() {
  const sectionIds = useMemo(() => sections.map((s) => s.id), [])
  const active = useActiveSection(sectionIds)

  return (
    <div className="relative">
      <Nav active={active} />
      <SectionRail active={active} />

      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
