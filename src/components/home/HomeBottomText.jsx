import React from 'react'

const links = [
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'skills', label: 'Skills' },
  { to: 'contact', label: 'Contact' },
]

const HomeBottomText = () => {
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
      gap: '1rem', padding: '0 1.5rem 2rem',
      position: 'relative', zIndex: 10,
    }}>
      {links.map(l => (
        <a
          key={l.to} href={`#${l.to}`}
          style={{
            fontFamily: 'font2, sans-serif',
            fontSize: 'clamp(1.2rem, 3.5vw, 2.5rem)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: 'clamp(0.4rem, 1vw, 0.8rem) clamp(1rem, 3vw, 2.5rem)',
            border: '2px solid #333',
            borderRadius: '100px',
            color: '#aaa',
            textDecoration: 'none',
            transition: 'border-color 0.3s, color 0.3s, box-shadow 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#C8FF00'
            e.currentTarget.style.color = '#C8FF00'
            e.currentTarget.style.boxShadow = '0 0 20px #C8FF0033'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#333'
            e.currentTarget.style.color = '#aaa'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          {l.label}
        </a>
      ))}
    </div>
  )
}

export default HomeBottomText
