import React, { useEffect, useRef, useState } from 'react'

const FULL_TEXT = 'GAURI SINGHAL'

const HomeHeroText = () => {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const i = useRef(0)

  useEffect(() => {
    const id = setInterval(() => {
      if (i.current < FULL_TEXT.length) {
        setDisplayed(FULL_TEXT.slice(0, i.current + 1))
        i.current++
      } else {
        setDone(true)
        clearInterval(id)
      }
    }, 80)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ paddingTop: '60px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
      {/* terminal prefix */}
      <div style={{
        fontFamily: 'monospace', color: '#C8FF00', fontSize: 'clamp(0.7rem, 1.5vw, 1rem)',
        letterSpacing: '0.2em', marginBottom: '0.5rem', opacity: 0.7
      }}>
        ~/portfolio $
      </div>

      {/* big typed name */}
      <div style={{
        fontFamily: 'font2, sans-serif',
        fontSize: 'clamp(3rem, 9.5vw, 10rem)',
        textTransform: 'uppercase',
        lineHeight: 1,
        letterSpacing: '-0.01em',
      }}>
        <span style={{ color: '#fff' }}>&gt;&nbsp;</span>
        <span className="neon-text">{displayed}</span>
        {!done && <span className="cursor" />}
      </div>

      {/* sub-role line */}
      <div style={{
        fontFamily: 'monospace', color: '#666', fontSize: 'clamp(0.75rem, 1.8vw, 1.1rem)',
        letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '1.2rem',
      }}>
        Full-Stack Developer &nbsp;·&nbsp; Data Science Intern &nbsp;·&nbsp; B.Tech CSE 2027
      </div>
    </div>
  )
}

export default HomeHeroText
