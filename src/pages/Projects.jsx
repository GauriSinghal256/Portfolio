import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const FEATURED = [
  {
    id: '01', name: 'MediScan', sub: 'MultiDisease Prediction System',
    desc: 'Full-stack ML system analysing user health data to deliver risk percentages + diagnosis across multiple diseases. Models achieve up to 96% accuracy with MySQL history tracking.',
    tags: ['Python', 'Flask', 'Random Forest', 'scikit-learn', 'MySQL', 'JavaScript'],
    github: 'https://github.com/GauriSinghal256/Multi_Disease_Predictor', live: null,
    stat: '96% Accuracy', accent: 'var(--amber)'
  },
  {
    id: '02', name: 'DSA Tracker', sub: 'Full-Stack Productivity Platform',
    desc: 'Track DSA progress with secure auth, topic filtering, dashboards, notes, reminders, whiteboard, streaks, and an AWS-hosted integrated code editor.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'AWS'],
    live: 'https://dsa-tracker-pearl.vercel.app/', github: null,
    stat: 'AWS Hosted', accent: 'var(--rose)'
  },
  {
    id: '03', name: 'AnshulArchitects', sub: 'Live Production Website',
    desc: 'Professional architecture firm website live in production — fully responsive layout, dynamic service pages, and integrated Node.js backend.',
    tags: ['React.js', 'Tailwind CSS', 'Node.js'],
    live: 'https://www.anshularchitects.org/', github: null,
    stat: 'In Production', accent: 'var(--amber)'
  },
]

const REPOS = [
  {
    name: 'Java DSA', sub: 'Day-Wise DSA in Java',
    desc: 'Structured day-by-day DSA practice in Java — arrays, linked lists, trees, graphs, DP and more. Great reference for interview prep.',
    tags: ['Java', 'DSA', 'Algorithms', 'Data Structures'],
    github: 'https://github.com/GauriSinghal256/JavaDayWise',
    icon: '☕',
  },
  {
    name: 'Social Media', sub: 'Django Social Platform',
    desc: 'Full-featured social media platform built with Django — user auth, posts, likes, follows, feed, and profile management.',
    tags: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS'],
    github: 'https://github.com/GauriSinghal256/SocialMedia_Django',
    icon: '🌐',
  },
  {
    name: 'Churn Predictor', sub: 'ML Customer Retention Model',
    desc: 'Machine learning model to predict customer churn using classification algorithms. Includes EDA, feature engineering and model evaluation.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'ML'],
    github: 'https://github.com/GauriSinghal256/Churn_Predictor',
    icon: '📊',
  },
  {
    name: 'OOPs in Java', sub: 'Object-Oriented Concepts',
    desc: 'Comprehensive OOP concepts implementation in Java — inheritance, polymorphism, abstraction, encapsulation with real examples.',
    tags: ['Java', 'OOP', 'Design Patterns'],
    github: 'https://github.com/GauriSinghal256/Churn_Predictor',
    icon: '🧩',
  },
  {
    name: 'Vibe Music', sub: 'Music Streaming App',
    desc: 'A music streaming and discovery platform with playlist management, audio playback, and a clean modern UI.',
    tags: ['JavaScript', 'React.js', 'Node.js', 'API'],
    github: 'https://github.com/GauriSinghal256/Vibe-Music',
    icon: '🎵',
  },
]

const FeaturedCard = ({ p, i }) => {
  const card = useRef(null)
  useGSAP(() => {
    gsap.from(card.current, {
      opacity: 0, y: 80, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: card.current, start: 'top 90%' }, delay: i * .13
    })
  }, { scope: card })

  const onMove = e => {
    const r = card.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - .5
    const y = (e.clientY - r.top) / r.height - .5
    card.current.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 7}deg) scale3d(1.02,1.02,1.02)`
    card.current.querySelector('.shine').style.background =
      `radial-gradient(circle at ${(x + .5) * 100}% ${(y + .5) * 100}%, rgba(255,107,53,.1) 0%, transparent 60%)`
  }
  const onLeave = () => {
    card.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0) scale3d(1,1,1)'
    card.current.querySelector('.shine').style.background = 'transparent'
  }

  return (
    <div ref={card} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{
        background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '22px',
        overflow: 'hidden', position: 'relative', transition: 'transform .18s ease, box-shadow .4s',
        cursor: 'none', transformStyle: 'preserve-3d'
      }}>
      <div className="shine" style={{ position: 'absolute', inset: 0, borderRadius: '22px', pointerEvents: 'none', transition: 'background .2s', zIndex: 1 }} />
      <div style={{ height: '3px', background: `linear-gradient(90deg,${p.accent},${p.accent === 'var(--amber)' ? 'var(--rose)' : 'var(--amber)'})` }} />
      <div style={{ padding: '2rem', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '.62rem', color: 'var(--muted)', letterSpacing: '.15em' }}>{p.id}</span>
          <span style={{
            fontFamily: 'monospace', fontSize: '.62rem', padding: '4px 12px', borderRadius: '100px',
            background: p.accent === 'var(--amber)' ? 'rgba(255,107,53,.1)' : 'rgba(232,64,90,.1)',
            color: p.accent, border: `1px solid ${p.accent === 'var(--amber)' ? 'rgba(255,107,53,.25)' : 'rgba(232,64,90,.25)'}`,
            letterSpacing: '.12em'
          }}>{p.stat}</span>
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '.65rem', letterSpacing: '.1em', color: p.accent, marginBottom: '.5rem', opacity: .8 }}>// {p.sub}</div>
        <h2 style={{ fontFamily: 'font2', fontSize: 'clamp(1.8rem,3vw,2.5rem)', textTransform: 'uppercase', letterSpacing: '-.01em', lineHeight: 1, marginBottom: '1.1rem' }}>{p.name}</h2>
        <p style={{ color: '#6a6058', lineHeight: 1.78, fontSize: '.92rem', marginBottom: '1.8rem' }}>{p.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '2rem' }}>
          {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div style={{ display: 'flex', gap: '.8rem' }}>
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer"
              style={{
                fontFamily: 'monospace', fontSize: '.75rem', letterSpacing: '.1em', textDecoration: 'none',
                padding: '9px 22px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--amber),var(--rose))',
                color: '#fff', fontWeight: 600, transition: 'opacity .3s, box-shadow .3s'
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '.88'; e.currentTarget.style.boxShadow = 'var(--glow-a)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.boxShadow = 'none' }}>
              Live ↗
            </a>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer"
              style={{
                fontFamily: 'monospace', fontSize: '.75rem', letterSpacing: '.1em', textDecoration: 'none',
                padding: '9px 22px', borderRadius: '8px', border: '1px solid rgba(255,107,53,.3)',
                color: 'var(--amber)', transition: 'all .3s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--amber)'; e.currentTarget.style.color = '#0E0C0A' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--amber)' }}>
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const RepoCard = ({ p, i }) => {
  const card = useRef(null)
  useGSAP(() => {
    gsap.from(card.current, {
      opacity: 0, y: 50, duration: .85, ease: 'power3.out',
      scrollTrigger: { trigger: card.current, start: 'top 92%' }, delay: (i % 3) * .1
    })
  }, { scope: card })

  return (
    <div ref={card}
      style={{
        background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px',
        padding: '1.6rem', transition: 'all .3s', cursor: 'none'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255,107,53,.3)'
        e.currentTarget.style.background = 'var(--card)'
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = 'var(--glow-a)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.background = 'var(--bg2)'
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.boxShadow = 'none'
      }}>
      <div style={{ fontSize: '1.8rem', marginBottom: '.8rem' }}>{p.icon}</div>
      <div style={{ fontFamily: 'monospace', fontSize: '.6rem', color: 'var(--amber)', opacity: .7, letterSpacing: '.12em', marginBottom: '.4rem' }}>{p.sub}</div>
      <h3 style={{ fontFamily: 'font2', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '.8rem' }}>{p.name}</h3>
      <p style={{ color: '#5a5248', fontSize: '.85rem', lineHeight: 1.7, marginBottom: '1.4rem' }}>{p.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', marginBottom: '1.4rem' }}>
        {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: '.62rem' }}>{t}</span>)}
      </div>
      <a href={p.github} target="_blank" rel="noreferrer"
        style={{
          fontFamily: 'monospace', fontSize: '.7rem', letterSpacing: '.1em', textDecoration: 'none',
          padding: '7px 18px', borderRadius: '6px', border: '1px solid rgba(255,107,53,.2)',
          color: 'var(--muted)', transition: 'all .3s', display: 'inline-block'
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--amber)'; e.currentTarget.style.color = 'var(--amber)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,107,53,.2)'; e.currentTarget.style.color = 'var(--muted)' }}>
        GitHub ↗
      </a>
    </div>
  )
}

export default function Projects() {
  const hero = useRef(null)
  useGSAP(() => {
    gsap.from(hero.current.querySelectorAll('.prh'), {
      opacity: 0, y: 50, stagger: .11, duration: 1, ease: 'power3.out'
    })
  }, { scope: hero })

  return (
    <div style={{ minHeight: '100vh', paddingTop: '60px', background: 'var(--bg)', position: 'relative', zIndex: 2 }}>
      <div style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none'}}>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(145deg, rgba(14,12,10,.93) 0%, rgba(22,19,17,.88) 42%, rgba(14,12,10,.97) 100%)'}} />
        <div style={{position:'absolute',top:'8%',right:'-10%',width:'34vw',height:'34vw',borderRadius:'50%',background:'radial-gradient(circle, rgba(232,64,90,.14) 0%, rgba(232,64,90,.05) 36%, transparent 72%)',filter:'blur(18px)'}} />
        <div style={{position:'absolute',bottom:'10%',left:'-8%',width:'30vw',height:'30vw',borderRadius:'50%',background:'radial-gradient(circle, rgba(255,107,53,.12) 0%, rgba(255,107,53,.05) 34%, transparent 72%)',filter:'blur(18px)'}} />
        <div style={{position:'absolute',inset:'10% 8% 8% 8%',borderRadius:'34px',border:'1px solid rgba(255,255,255,.03)',background:'linear-gradient(180deg, rgba(255,107,53,.05) 0%, transparent 28%, rgba(232,64,90,.03) 100%)'}} />
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)',backgroundSize:'72px 72px',maskImage:'linear-gradient(90deg, transparent 0%, black 28%, black 100%)',WebkitMaskImage:'linear-gradient(90deg, transparent 0%, black 28%, black 100%)',opacity:.24}} />
      </div>

      {/* Hero */}
      <div ref={hero} style={{ padding: 'clamp(4rem,8vw,6rem) clamp(2rem,6vw,7rem)', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="prh" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
          <div style={{ width: '28px', height: '1px', background: 'var(--amber)', opacity: .6 }} />
          <span style={{ fontFamily: 'monospace', fontSize: '.68rem', letterSpacing: '.22em', color: 'var(--amber)', opacity: .8 }}>~/projects</span>
        </div>
        <h1 className="prh" style={{ fontFamily: 'font2', fontSize: 'clamp(3rem,7vw,7rem)', textTransform: 'uppercase', lineHeight: .9, letterSpacing: '-.02em' }}>
          Things I've<br /><span className="grad">Built.</span>
        </h1>
        <p className="prh" style={{ color: '#6a6058', fontSize: '1rem', marginTop: '1.5rem', lineHeight: 1.7, maxWidth: '480px' }}>
          Shipped products, live platforms, and repositories I'm proud of.
        </p>
      </div>

      {/* Featured 3 */}
      <div style={{ padding: '0 clamp(2rem,6vw,7rem) 5rem', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: '1.5rem' }}>
        {FEATURED.map((p, i) => <FeaturedCard key={p.id} p={p} i={i} />)}
      </div>

      {/* More repos section */}
      <div style={{ padding: '0 clamp(2rem,6vw,7rem) 8rem', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.4rem',
          padding: '1.1rem 1.2rem', borderRadius: '18px',
          background: 'rgba(14,12,10,.68)', border: '1px solid rgba(255,107,53,.12)',
          boxShadow: '0 0 30px rgba(0,0,0,.18)'
        }}>
          <div style={{ width: '28px', height: '1px', background: 'var(--rose)', opacity: .8 }} />
          <span style={{ fontFamily: 'monospace', fontSize: '.7rem', letterSpacing: '.22em', color: 'var(--cream)', opacity: .95, textTransform: 'uppercase' }}>
            more repositories
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,.08)' }} />
          <a href="https://github.com/GauriSinghal256" target="_blank" rel="noreferrer"
            style={{
              fontFamily: 'monospace', fontSize: '.68rem', letterSpacing: '.12em', color: 'var(--amber)',
              textDecoration: 'none', padding: '6px 14px', border: '1px solid rgba(255,107,53,.24)',
              borderRadius: '999px', transition: 'all .3s', background: 'rgba(255,107,53,.06)'
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,107,53,.55)'; e.currentTarget.style.background = 'rgba(255,107,53,.18)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--amber)'; e.currentTarget.style.borderColor = 'rgba(255,107,53,.24)'; e.currentTarget.style.background = 'rgba(255,107,53,.06)' }}>
            All Repos ↗
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.1rem', position: 'relative', zIndex: 4 }}>
          {REPOS.map((p, i) => <RepoCard key={p.name} p={p} i={i} />)}
        </div>
      </div>
    </div>
  )
}
