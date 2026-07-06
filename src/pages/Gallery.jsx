import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const asset = file => new URL(`../assets/${file}`, import.meta.url).href

// ── All your asset images ───────────────────────────────────────────────
// Replace caption / category as you add your own winning pics.
// Images are pulled from your existing uploaded assets.
const PHOTOS = [
  { src: asset('10.jpeg'),  caption: 'SIH', cat: 'Hackathon'    },
  { src: asset('9.jpeg'), caption: 'SIH',        cat: 'Hackathon'    },
  { src: asset('1.jpeg'),   caption: 'AIU Youth Fest',             cat: 'Event'   },
  { src: asset('2.jpeg'),   caption: 'AIU Youth Fest',                cat: 'Event'   },
  { src: asset('3.jpeg'),  caption: 'Hack-Tech — 3rd Position 🏆',                cat: 'Hackathon'   },
  { src: asset('4.jpeg'),   caption: 'Hack-Tech — 3rd Position 🏆',                cat: 'Hackathon'   },
  { src: asset('5.jpeg'),   caption: 'Hackureka - Top 7 teams',                cat: 'Hackathon'   },
  { src: asset('6.jpeg'),   caption: 'Hackureka - Top 7 teams',                    cat: 'Hackathon'   },
  { src: asset('7.jpeg'),   caption: 'Tech Conference',                   cat: 'Event'   },
  { src: asset('8.jpeg'),  caption: 'Recognition & Excellence',          cat: 'Award'   },
  { src: asset('11.jpeg'),   caption: 'Leetcode Badges',                   cat: 'Award'   },
  { src: asset('12.jpeg'),  caption: 'Leetcode Badges',          cat: 'Award'   },
  { src: asset('13.jpeg'),  caption: 'Training',          cat: 'Upskilling'   },
  { src: asset('14.jpeg'),  caption: 'Training',          cat: 'Upskilling'   },
  { src: asset('15.jpeg'),  caption: 'Training',          cat: 'Upskilling'   },
]

const CATS = ['All', 'Hackathon', 'Award', 'Work', 'Event']

const GalleryItem = ({ photo, idx, onClick }) => {
  const ref = useRef(null)
  useGSAP(() => {
    gsap.from(ref.current, {
      opacity: 0, y: 50, scale: .96, duration: .8, ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 92%' },
      delay: (idx % 4) * .08
    })
  }, { scope: ref })

  return (
    <div ref={ref} onClick={() => onClick(photo)}
      style={{
        position: 'relative', borderRadius: '14px', overflow: 'hidden',
        cursor: 'none', border: '1px solid var(--border)',
        transition: 'transform .35s ease, box-shadow .35s',
        breakInside: 'avoid', marginBottom: '1.1rem',
        background: 'var(--card)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.02)'
        e.currentTarget.style.boxShadow = '0 0 40px rgba(255,107,53,.18), 0 0 80px rgba(255,107,53,.06)'
        e.currentTarget.querySelector('.overlay').style.opacity = '1'
        e.currentTarget.querySelector('.caption').style.transform = 'translateY(0)'
        e.currentTarget.querySelector('.caption').style.opacity = '1'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.querySelector('.overlay').style.opacity = '0'
        e.currentTarget.querySelector('.caption').style.transform = 'translateY(12px)'
        e.currentTarget.querySelector('.caption').style.opacity = '0'
      }}
    >
      <img src={photo.src} alt={photo.caption}
        style={{ width: '100%', display: 'block', objectFit: 'cover', transition: 'transform .5s' }}
        onError={e => { e.target.style.display = 'none' }}
      />

      {/* hover overlay */}
      <div className="overlay" style={{
        position: 'absolute', inset: 0, opacity: 0, transition: 'opacity .3s',
        background: 'linear-gradient(transparent 30%, rgba(14,12,10,.92) 100%)'
      }} />

      {/* caption */}
      <div className="caption" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.2rem 1.4rem',
        opacity: 0, transform: 'translateY(12px)', transition: 'all .35s ease',
      }}>
        <div style={{
          display: 'inline-block', fontFamily: 'monospace', fontSize: '.58rem', letterSpacing: '.14em',
          textTransform: 'uppercase', padding: '3px 9px', borderRadius: '4px', marginBottom: '.5rem',
          background: 'rgba(255,107,53,.18)', color: 'var(--amber)', border: '1px solid rgba(255,107,53,.25)'
        }}>{photo.cat}</div>
        <div style={{ fontFamily: 'font1, sans-serif', fontSize: '.88rem', color: 'var(--cream)', lineHeight: 1.4 }}>{photo.caption}</div>
      </div>

      {/* expand icon */}
      <div className="overlay" style={{
        position: 'absolute', top: '1rem', right: '1rem', width: '32px', height: '32px',
        background: 'rgba(255,107,53,.15)', backdropFilter: 'blur(8px)',
        borderRadius: '8px', border: '1px solid rgba(255,107,53,.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '.8rem', color: 'var(--amber)', opacity: 0, transition: 'opacity .3s',
      }}>⊕</div>
    </div>
  )
}

// ── Lightbox ──────────────────────────────────────────────────────────────
const Lightbox = ({ photo, all, onClose, onPrev, onNext }) => {
  React.useEffect(() => {
    if (!photo) return undefined
    const fn = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [photo, onClose, onNext, onPrev])

  if (!photo) return null
  const idx = all.indexOf(photo)

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: 'rgba(14,12,10,.94)', backdropFilter: 'blur(18px)',
      cursor: 'none'
    }}>
      {/* close */}
      <button onClick={onClose} style={{
        position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,107,53,.12)',
        border: '1px solid rgba(255,107,53,.25)', color: 'var(--amber)', fontFamily: 'monospace',
        fontSize: '1rem', width: '40px', height: '40px', borderRadius: '10px', cursor: 'none',
        transition: 'all .3s'
      }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,107,53,.25)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,107,53,.12)'}>
        ✕
      </button>

      {/* prev */}
      <button onClick={e => { e.stopPropagation(); onPrev() }} style={{
        position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(255,107,53,.12)', border: '1px solid rgba(255,107,53,.25)',
        color: 'var(--amber)', fontFamily: 'monospace', fontSize: '1.2rem',
        width: '44px', height: '44px', borderRadius: '10px', cursor: 'none', transition: 'all .3s'
      }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,107,53,.22)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,107,53,.12)'}>
        ‹
      </button>

      {/* image */}
      <div onClick={e => e.stopPropagation()} style={{
        maxWidth: '80vw', maxHeight: '80vh', position: 'relative',
        borderRadius: '18px', overflow: 'hidden',
        border: '1px solid rgba(255,107,53,.2)',
        boxShadow: '0 0 80px rgba(255,107,53,.15), 0 0 160px rgba(255,107,53,.06)'
      }}>
        <img src={photo.src} alt={photo.caption}
          style={{ display: 'block', maxWidth: '80vw', maxHeight: '75vh', objectFit: 'contain' }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem 2rem',
          background: 'linear-gradient(transparent, rgba(14,12,10,.9))'
        }}>
          <div style={{ fontFamily: 'monospace', fontSize: '.6rem', color: 'var(--amber)', letterSpacing: '.14em', marginBottom: '.4rem' }}>
            {photo.cat} · {idx + 1} / {all.length}
          </div>
          <div style={{ fontFamily: 'font2, sans-serif', fontSize: '1.1rem', textTransform: 'uppercase', color: 'var(--cream)' }}>{photo.caption}</div>
        </div>
      </div>

      {/* next */}
      <button onClick={e => { e.stopPropagation(); onNext() }} style={{
        position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(255,107,53,.12)', border: '1px solid rgba(255,107,53,.25)',
        color: 'var(--amber)', fontFamily: 'monospace', fontSize: '1.2rem',
        width: '44px', height: '44px', borderRadius: '10px', cursor: 'none', transition: 'all .3s'
      }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,107,53,.22)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,107,53,.12)'}>
        ›
      </button>
    </div>
  )
}

export default function Gallery() {
  const hero = useRef(null)
  const [activeCat, setActiveCat] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCat === 'All' ? PHOTOS : PHOTOS.filter(p => p.cat === activeCat)

  // split into 3 columns for masonry
  const cols = [[], [], []]
  filtered.forEach((p, i) => cols[i % 3].push({ photo: p, globalIdx: PHOTOS.indexOf(p) }))

  useGSAP(() => {
    gsap.from(hero.current.querySelectorAll('.gh'), {
      opacity: 0, y: 50, stagger: .11, duration: 1, ease: 'power3.out'
    })
  }, { scope: hero })

  const lightboxFiltered = filtered
  const lbIdx = lightbox ? lightboxFiltered.indexOf(lightbox) : -1
  const openNext = () => setLightbox(lightboxFiltered[(lbIdx + 1) % lightboxFiltered.length])
  const openPrev = () => setLightbox(lightboxFiltered[(lbIdx - 1 + lightboxFiltered.length) % lightboxFiltered.length])

  return (
    <div style={{ minHeight: '100vh', paddingTop: '60px', background: 'var(--bg)', position: 'relative', zIndex: 2 }}>

      {/* ambient */}
      <div style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none'}}>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(150deg, rgba(14,12,10,.92) 0%, rgba(26,23,20,.84) 44%, rgba(14,12,10,.96) 100%)'}} />
        <div style={{position:'absolute',top:'8%',left:'-10%',width:'36vw',height:'36vw',borderRadius:'50%',background:'radial-gradient(circle, rgba(255,107,53,.16) 0%, rgba(255,107,53,.06) 36%, transparent 72%)',filter:'blur(18px)'}} />
        <div style={{position:'absolute',bottom:'8%',right:'-8%',width:'32vw',height:'32vw',borderRadius:'50%',background:'radial-gradient(circle, rgba(232,64,90,.14) 0%, rgba(232,64,90,.06) 34%, transparent 72%)',filter:'blur(18px)'}} />
        <div style={{position:'absolute',inset:'8% 7% 9% 7%',borderRadius:'36px',border:'1px solid rgba(255,107,53,.08)',background:'linear-gradient(135deg, rgba(255,107,53,.06) 0%, transparent 34%, rgba(232,64,90,.05) 100%)'}} />
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)',backgroundSize:'68px 68px',maskImage:'linear-gradient(180deg, transparent 0%, black 24%, black 100%)',WebkitMaskImage:'linear-gradient(180deg, transparent 0%, black 24%, black 100%)',opacity:.28}} />
      </div>

      {/* Hero */}
      <div ref={hero} style={{ padding: 'clamp(4rem,8vw,6rem) clamp(2rem,6vw,7rem)', maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', padding: '1.1rem 1.2rem 1.2rem', borderRadius: '24px', background: 'rgba(14,12,10,.68)', border: '1px solid rgba(255,107,53,.08)', boxShadow: '0 0 40px rgba(14,12,10,.25)' }}>
          <div className="gh" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
            <div style={{ width: '28px', height: '1px', background: 'var(--amber)', opacity: .6 }} />
            <span style={{ fontFamily: 'monospace', fontSize: '.68rem', letterSpacing: '.22em', color: 'var(--amber)', opacity: .8 }}>~/gallery</span>
          </div>
          <h1 className="gh" style={{ fontFamily: 'font2', fontSize: 'clamp(3rem,7vw,7rem)', textTransform: 'uppercase', lineHeight: .9, letterSpacing: '-.02em', color: 'var(--cream)', textShadow: '0 2px 18px rgba(0,0,0,.55)' }}>
            Moments &<br /><span style={{ color: 'var(--cream)' }}>Memories.</span>
          </h1>
          <p className="gh" style={{ color: '#8a7f73', fontSize: '1rem', marginTop: '1.5rem', lineHeight: 1.7, maxWidth: '480px' }}>
          Hackathon wins, events, internships, and the journey in pictures.
          Click any photo to view full size.
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      <div style={{ padding: '0 clamp(2rem,6vw,7rem) 2.5rem', maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
          {CATS.map(c => (
            <button key={c} onClick={() => setActiveCat(c)} style={{
              fontFamily: 'monospace', fontSize: '.7rem', letterSpacing: '.14em', textTransform: 'uppercase',
              padding: '8px 18px', borderRadius: '8px', border: `1px solid ${activeCat === c ? 'transparent' : 'rgba(255,107,53,.15)'}`, cursor: 'none',
              background: activeCat === c ? 'linear-gradient(135deg,var(--amber),var(--rose))' : 'rgba(255,107,53,.07)',
              color: activeCat === c ? '#fff' : 'var(--muted)',
              transition: 'all .3s', fontWeight: activeCat === c ? 700 : 400,
              boxShadow: activeCat === c ? 'var(--glow-a)' : 'none'
            }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry grid — 3 columns */}
      <div style={{
        padding: '0 clamp(2rem,6vw,7rem) 6rem', maxWidth: '1320px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.1rem',
        alignItems: 'start'
      }}>
        {cols.map((col, ci) => (
          <div key={ci}>
            {col.map(({ photo }, pi) => (
              <GalleryItem key={photo.src + pi} photo={photo} idx={pi} onClick={setLightbox} />
            ))}
          </div>
        ))}
      </div>

      {/* note to replace pics */}
      <div style={{
        margin: '0 clamp(2rem,6vw,7rem) 5rem', padding: '1.2rem 1.8rem',
        border: '1px dashed rgba(255,107,53,.2)', borderRadius: '12px',
        maxWidth: '1320px', display: 'flex', alignItems: 'center', gap: '1rem'
      }}>
        {/* <span style={{ fontSize: '1.2rem' }}>📸</span>
        <span style={{ fontFamily: 'monospace', fontSize: '.72rem', color: 'var(--muted)', letterSpacing: '.1em' }}>
          Replace the images in <code style={{ color: 'var(--amber)', background: 'rgba(255,107,53,.08)', padding: '2px 6px', borderRadius: '4px' }}>src/assets/</code> with your actual winning photos, then update captions in <code style={{ color: 'var(--amber)', background: 'rgba(255,107,53,.08)', padding: '2px 6px', borderRadius: '4px' }}>Gallery.jsx</code>
        </span> */}
      </div>

      {/* Lightbox */}
      <Lightbox photo={lightbox} all={lightboxFiltered} onClose={() => setLightbox(null)} onNext={openNext} onPrev={openPrev} />
    </div>
  )
}
