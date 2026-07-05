import React, { useState, useEffect } from 'react'

const LINKS = [
  { to: 'home',     label: 'Home' },
  { to: 'about',    label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'gallery',  label: 'Gallery' },
  { to: 'skills',   label: 'Skills' },
  { to: 'contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, height: '60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(1.5rem,4vw,3.5rem)',
        background: scrolled ? 'rgba(14,12,10,.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(22px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,107,53,.1)' : 'none',
        transition: 'all .5s',
      }}>
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '34px', height: '34px', borderRadius: '10px',
            background: 'linear-gradient(135deg,var(--amber),var(--rose))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'font2', fontSize: '.8rem', color: '#fff', fontWeight: 900,
            boxShadow: '0 0 20px rgba(255,107,53,.35)',
          }}>GS</div>
          <span style={{ fontFamily: 'monospace', fontSize: '.62rem', color: '#3a3530', letterSpacing: '.2em' }}>portfolio</span>
        </a>

        <div className="hi-mob" style={{ display: 'flex', gap: '2rem' }}>
          {LINKS.map(l => (
            <a key={l.to} href={`#${l.to}`} className="nl">{l.label}</a>
          ))}
        </div>

        <a href="mailto:singhalg818@gmail.com" className="cta hi-mob">
          <span className="cta-in" style={{ padding: '8px 20px', fontSize: '.72rem' }}>Hire Me</span>
        </a>

        <button className="ham" onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', color: 'var(--amber)', fontSize: '1.4rem', cursor: 'none' }}>
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 190, background: 'rgba(14,12,10,.97)',
          backdropFilter: 'blur(20px)', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '2rem'
        }}>
          {LINKS.map(l => (
            <a key={l.to} href={`#${l.to}`} onClick={() => setOpen(false)} style={{
              fontFamily: 'font2', fontSize: '2.2rem', textTransform: 'uppercase',
              textDecoration: 'none',
              color: 'var(--cream)'
            }}>{l.label}</a>
          ))}
        </div>
      )}
    </>
  )
}
