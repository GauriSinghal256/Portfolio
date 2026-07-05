import React from 'react'
import Navbar from './components/common/Navbar'
import Home     from './pages/Home'
import About    from './pages/About'
import Projects from './pages/Projects'
import Skills   from './pages/Skills'
import Contact  from './pages/Contact'
import Gallery  from './pages/Gallery'

export default function App() {
  return (
    <div style={{ color: 'var(--text)' }}>
      <Navbar />
      <main>
        <section id="home" style={{ scrollMarginTop: '60px' }}>
          <Home />
        </section>
        <section id="about" style={{ scrollMarginTop: '60px' }}>
          <About />
        </section>
        <section id="projects" style={{ scrollMarginTop: '60px' }}>
          <Projects />
        </section>
        <section id="skills" style={{ scrollMarginTop: '60px' }}>
          <Skills />
        </section>
        <section id="gallery" style={{ scrollMarginTop: '60px' }}>
          <Gallery />
        </section>
        <section id="contact" style={{ scrollMarginTop: '60px' }}>
          <Contact />
        </section>
      </main>
    </div>
  )
}
