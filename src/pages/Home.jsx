import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const ROLES = ['Full-Stack Developer', 'Data Science Intern', 'ML Engineer', 'Problem Solver']
const NAME  = 'GAURI SINGHAL'

export default function Home() {
  const [typed,   setTyped]   = useState('')
  const [done,    setDone]    = useState(false)
  const [roleTxt, setRoleTxt] = useState('')
  const heroRef = useRef(null)

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setTyped(NAME.slice(0, ++i))
      if (i >= NAME.length) { setDone(true); clearInterval(id) }
    }, 65)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    let ci = 0, dir = 1, ri = 0
    const id = setInterval(() => {
      if (dir === 1) { ci++; setRoleTxt(ROLES[ri].slice(0, ci)); if (ci >= ROLES[ri].length) dir = -1 }
      else { ci--; setRoleTxt(ROLES[ri].slice(0, ci)); if (ci <= 0) { ri = (ri + 1) % ROLES.length; dir = 1 } }
    }, 55)
    return () => clearInterval(id)
  }, [])

  useGSAP(() => {
    gsap.from(heroRef.current.querySelectorAll('.hl'), {
      opacity: 0, y: 40, stagger: .15, duration: 1.1, ease: 'power3.out', delay: .4
    })
  }, { scope: heroRef })

  const stats = [{ n: '9.22', l: 'CGPA' }, { n: '6+', l: 'Projects' }, { n: '2', l: 'Internships' }, { n: '3★', l: 'Hackathons' }]

  return (
    <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>

      {/* ── Full-screen video background ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video
          autoPlay loop muted playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src="/src/assets/project.mp4"
        />
        {/* layered dark gradient so text pops */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(14,12,10,.88) 0%, rgba(14,12,10,.65) 50%, rgba(14,12,10,.82) 100%)'
        }} />
        {/* bottom vignette */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
          background: 'linear-gradient(transparent, rgba(14,12,10,.95))'
        }} />
        {/* top vignette */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '20%',
          background: 'linear-gradient(rgba(14,12,10,.6), transparent)'
        }} />
      </div>

      {/* ── Ambient warm orb (keeps the glow vibe over the video) ── */}
      <div style={{
        position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,53,.12) 0%, transparent 70%)',
        top: '-200px', right: '-100px', pointerEvents: 'none', zIndex: 1,
        animation: 'pulse 6s ease-in-out infinite'
      }} />

      {/* ── Hero content ── */}
      <div ref={heroRef} style={{
        position: 'relative', zIndex: 2, height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '0 clamp(2rem,7vw,8rem)', paddingTop: '60px'
      }}>

        {/* eyebrow role */}
        <div className="hl" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.4rem' }}>
          <div style={{ width: '32px', height: '1px', background: 'var(--amber)', opacity: .7 }} />
          <span style={{ fontFamily: 'monospace', fontSize: '.7rem', letterSpacing: '.24em', textTransform: 'uppercase', color: 'var(--amber)' }}>
            {roleTxt}<span className="blink" style={{ color: 'var(--amber)' }}>|</span>
          </span>
        </div>

        {/* BIG name */}
        <h1 className="hl" style={{
          fontFamily: 'font2, sans-serif',
          fontSize: 'clamp(3.5rem, 9vw, 10rem)',
          textTransform: 'uppercase',
          lineHeight: .9, letterSpacing: '-.03em',
          marginBottom: '1.6rem', maxWidth: '900px'
        }}>
          <span style={{ display: 'block', color: 'rgba(245,240,232,.4)', fontSize: '40%', fontFamily: 'font1', letterSpacing: '.05em', marginBottom: '.4em' }}>
            Hello, I'm
          </span>
          <span className="grad">{typed}</span>
          {!done && <span className="blink" style={{ color: 'var(--amber)' }}>|</span>}
        </h1>

        {/* sub line */}
        <p className="hl" style={{
          color: 'rgba(245,240,232,.55)', lineHeight: 1.8,
          fontSize: 'clamp(.9rem, 1.4vw, 1.15rem)', maxWidth: '520px', marginBottom: '3rem'
        }}>
          CS undergrad @ MM University building real-world products — from ML prediction engines
          to full-stack platforms. Currently interning at{' '}
          <span style={{ color: 'var(--amber)', borderBottom: '1px solid rgba(255,107,53,.35)' }}>Celebal Technologies</span>.
        </p>

        {/* CTA row */}
        <div className="hl" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4.5rem' }}>
          <a href="#projects" className="cta"><span className="cta-in">View Projects →</span></a>
          <a href="#gallery"
            style={{
              fontFamily: 'monospace', fontSize: '.78rem', padding: '12px 26px',
              border: '1px solid rgba(232,64,90,.35)', borderRadius: '100px',
              color: 'var(--rose)', textDecoration: 'none', letterSpacing: '.1em',
              transition: 'all .3s', display: 'inline-block'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--rose)'; e.currentTarget.style.background = 'rgba(232,64,90,.08)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(232,64,90,.35)'; e.currentTarget.style.background = 'transparent' }}>
            Gallery ✦
          </a>
          <a href="mailto:singhalg818@gmail.com"
            style={{
              fontFamily: 'monospace', fontSize: '.78rem', padding: '12px 26px',
              border: '1px solid rgba(255,255,255,.12)', borderRadius: '100px',
              color: 'rgba(245,240,232,.5)', textDecoration: 'none', letterSpacing: '.1em',
              transition: 'all .3s', display: 'inline-block'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,107,53,.5)'; e.currentTarget.style.color = 'var(--amber)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)'; e.currentTarget.style.color = 'rgba(245,240,232,.5)' }}>
            Say hello ✉
          </a>
        </div>

        {/* Stats strip */}
        <div className="hl" style={{ display: 'flex', gap: 'clamp(1.5rem,4vw,3.5rem)', flexWrap: 'wrap' }}>
          {stats.map((s, i) => (
            <div key={s.l} style={{ borderLeft: '2px solid rgba(255,107,53,.3)', paddingLeft: '1.2rem' }}>
              <div style={{ fontFamily: 'font2', fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: 'var(--amber)', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontFamily: 'monospace', fontSize: '.58rem', color: 'rgba(245,240,232,.35)', letterSpacing: '.14em', textTransform: 'uppercase', marginTop: '.25rem' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', zIndex: 3
      }}>
        <span style={{ fontFamily: 'monospace', fontSize: '.55rem', color: 'rgba(255,107,53,.35)', letterSpacing: '.24em' }}>SCROLL</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(var(--amber), transparent)' }} />
      </div>

      {/* ── Bottom tech ticker ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3,
        borderTop: '1px solid rgba(255,107,53,.07)',
        overflow: 'hidden', padding: '12px 0',
        background: 'rgba(14,12,10,.55)', backdropFilter: 'blur(10px)'
      }}>
        <div className="marquee">
          {['React.js', 'Python', 'Node.js', 'MongoDB', 'AWS', 'scikit-learn', 'Java', 'Tailwind CSS',
            'Django', 'MySQL', 'GSAP', 'Express.js', 'Git', 'Pandas', 'NumPy',
            'React.js', 'Python', 'Node.js', 'MongoDB', 'AWS', 'scikit-learn', 'Java', 'Tailwind CSS',
            'Django', 'MySQL', 'GSAP', 'Express.js', 'Git', 'Pandas', 'NumPy'].map((t, i) => (
            <span key={i} style={{
              fontFamily: 'monospace', fontSize: '.66rem', letterSpacing: '.2em',
              textTransform: 'uppercase', whiteSpace: 'nowrap', padding: '0 1.4rem',
              color: i % 7 === 0 ? 'var(--amber)' : i % 7 === 3 ? 'var(--rose)' : 'rgba(255,255,255,.12)'
            }}>{t} ·</span>
          ))}
        </div>
      </div>
    </div>
  )
}
