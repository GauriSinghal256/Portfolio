import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const R = ({children,style,d=0,className=''})=>{
  const r=useRef(null)
  useGSAP(()=>{
    gsap.from(r.current,{opacity:0,y:44,duration:.9,ease:'power3.out',delay:d,
      scrollTrigger:{trigger:r.current,start:'top 88%'}})
  },{scope:r})
  return <div ref={r} className={className} style={style}>{children}</div>
}

const tl=[
  {yr:'Aug 2023 – Present',role:'B.Tech CSE',place:'MM University, Mullana',note:'CGPA 9.22 · 90%',type:'edu'},
  {yr:'May 2026 – Present',role:'Data Science Intern',place:'Celebal Technologies · Remote',note:'ML pipelines · scikit-learn · Pandas · NumPy',type:'work'},
  {yr:'Jun – Aug 2025',role:'Web Dev Intern',place:'Nmold · Remote',note:'MERN · Agile Scrum · RESTful APIs',type:'work'},
]
const certs=[
  'Deloitte Australia — Cyber Job Simulation',
  'Deloitte Australia — Data Analytics (Forage 2025)',
  'AWS Solutions Architecture — Forage (July 2025)',
  'Infosys Springboard — Frontend & Generative AI',
  'Agile Scrum in Practice — 2025',
]
const awards=[
  {t:'3rd Position',s:'Hack-Tech',e:'🏆'},
  {t:'GDG Finalist',s:'Hackureka',e:'🎯'},
  {t:'Top 15',s:'HackVision Vault',e:'⚡'},
  {t:'Coordinator',s:'National Youth Festival (AIU)',e:'🎓'},
]

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={{ width: '14px', height: '14px', display: 'block', fill: 'currentColor' }}>
    <path d="M12 .5C5.65.5.5 5.73.5 12.18c0 5.16 3.29 9.53 7.86 11.08.58.11.79-.26.79-.58 0-.29-.01-1.05-.02-2.06-3.2.71-3.88-1.58-3.88-1.58-.53-1.4-1.3-1.78-1.3-1.78-1.06-.74.08-.72.08-.72 1.18.08 1.8 1.24 1.8 1.24 1.04 1.84 2.73 1.31 3.39 1 .11-.77.41-1.31.75-1.61-2.56-.3-5.25-1.32-5.25-5.89 0-1.3.45-2.36 1.2-3.19-.12-.3-.52-1.5.12-3.12 0 0 .98-.32 3.2 1.22.93-.26 1.93-.39 2.93-.4 1 .01 2 .14 2.93.4 2.2-1.54 3.19-1.22 3.19-1.22.64 1.62.24 2.82.12 3.12.75.83 1.2 1.89 1.2 3.19 0 4.58-2.69 5.59-5.26 5.88.42.38.8 1.13.8 2.28 0 1.65-.02 2.98-.02 3.39 0 .32.21.7.8.58 4.57-1.55 7.86-5.92 7.86-11.08C23.5 5.73 18.35.5 12 .5Z" />
  </svg>
)

export default function About() {
  const hero=useRef(null)
  useGSAP(()=>{
    gsap.from(hero.current.querySelectorAll('.ah'),{
      opacity:0,y:50,stagger:.12,duration:1,ease:'power3.out'})
  },{scope:hero})

  return (
    <div className="about-page" style={{minHeight:'100vh',paddingTop:'60px',background:'var(--bg)',position:'relative',zIndex:2,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,zIndex:0,pointerEvents:'none'}}>
        <div className="about-video-panel" style={{position:'absolute',top:'12%',right:'6%',width:'clamp(260px, 32vw, 460px)',height:'clamp(230px, 36vw, 420px)',borderRadius:'28px',overflow:'hidden',border:'1px solid rgba(255,107,53,.18)',boxShadow:'0 0 60px rgba(255,107,53,.10), 0 0 120px rgba(0,0,0,.22)'}}>
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/src/assets/project3.mp4"
            style={{width:'100%',height:'100%',objectFit:'cover',filter:'saturate(1.08) contrast(1.08) brightness(.52)'}}
          />
          <div style={{position:'absolute',inset:0,background:'linear-gradient(120deg, rgba(14,12,10,.18) 0%, rgba(14,12,10,.08) 44%, rgba(14,12,10,.34) 100%)'}} />
        </div>
        <div style={{position:'absolute',inset:'10% 8% 10% auto',width:'34vw',minWidth:'320px',maxWidth:'520px',borderRadius:'34px',border:'1px solid rgba(255,107,53,.12)',background:'linear-gradient(160deg, rgba(255,107,53,.12) 0%, rgba(232,64,90,.06) 45%, rgba(14,12,10,.72) 100%)',boxShadow:'0 0 80px rgba(255,107,53,.08)'}} />
        <div style={{position:'absolute',top:'12%',right:'8%',width:'18vw',minWidth:'160px',height:'18vw',minHeight:'160px',borderRadius:'50%',background:'radial-gradient(circle, rgba(255,107,53,.24) 0%, rgba(255,107,53,.08) 35%, transparent 72%)',filter:'blur(10px)'}} />
        <div style={{position:'absolute',bottom:'10%',left:'-6%',width:'20vw',minWidth:'160px',height:'20vw',minHeight:'160px',borderRadius:'50%',background:'radial-gradient(circle, rgba(232,64,90,.16) 0%, rgba(232,64,90,.06) 34%, transparent 72%)',filter:'blur(12px)'}} />
        <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 18% 24%, rgba(255,107,53,.08) 0%, transparent 28%), radial-gradient(circle at 82% 74%, rgba(232,64,90,.08) 0%, transparent 24%)'}} />
      </div>

      <div style={{position:'absolute',width:'600px',height:'600px',borderRadius:'50%',
        background:'radial-gradient(circle,rgba(255,107,53,.07) 0%,transparent 70%)',
        top:'5%',left:'-180px',pointerEvents:'none',zIndex:1}}/>

      {/* HERO */}
      <div ref={hero} className="about-hero" style={{position:'relative',zIndex:2,padding:'clamp(4rem,8vw,7rem) clamp(2rem,6vw,7rem)',maxWidth:'1100px',margin:'0 auto'}}>
        <div className="ah" style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'1.2rem'}}>
          <div style={{width:'28px',height:'1px',background:'var(--amber)',opacity:.6}}/>
          <span style={{fontFamily:'monospace',fontSize:'.68rem',letterSpacing:'.22em',color:'var(--amber)',opacity:.8}}>~/about</span>
        </div>
        <h1 className="ah about-title" style={{fontFamily:'font2',fontSize:'clamp(3rem,7vw,7rem)',
          textTransform:'uppercase',lineHeight:.9,letterSpacing:'-.02em'}}>
          It's About<br/><span className="grad">The Journey.</span>
        </h1>
        <p className="ah about-copy" style={{color:'#7a7068',fontSize:'clamp(.95rem,1.5vw,1.15rem)',
          lineHeight:1.88,marginTop:'2rem',maxWidth:'540px'}}>
          I didn't start with everything figured out. I began with confusion, self-doubt, and countless errors.
          Step by step I kept showing up — learning, building, failing, improving.
          Today I write code that <span style={{color:'var(--cream)'}}>solves real problems</span>.
        </p>
        <div className="ah about-actions" style={{display:'flex',gap:'.8rem',flexWrap:'wrap',marginTop:'2.5rem'}}>
          {[{l:'GitHub',h:'https://github.com/GauriSinghal256',p:true},
            {l:'LinkedIn ↗',h:'https://www.linkedin.com/in/gaurisinghal28',p:false}].map(x=>(
            <a key={x.l} href={x.h} target="_blank" rel="noreferrer"
              style={{fontFamily:'monospace',fontSize:'.76rem',letterSpacing:'.1em',
                padding:'10px 18px',borderRadius:'6px',textDecoration:'none',
                border:x.p?'1px solid var(--amber)':'1px solid rgba(255,107,53,.2)',
                color:x.p?'var(--amber)':'var(--muted)',transition:'all .3s',display:'inline-flex',alignItems:'center',gap:'.55rem'}}
              onMouseEnter={e=>{e.currentTarget.style.background=x.p?'var(--amber)':'rgba(255,107,53,.08)';e.currentTarget.style.color=x.p?'#0E0C0A':'var(--cream)'}}
              onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color=x.p?'var(--amber)':'var(--muted)'}}>
              {x.p && <GithubIcon />}
              {x.l}
              {x.p ? '' : ' ↗'}
            </a>
          ))}
        </div>
      </div>

      {/* BENTO STATS */}
      <R className="about-stats" style={{padding:'0 clamp(2rem,6vw,7rem) 4rem',maxWidth:'1100px',margin:'0 auto',
        display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1rem'}}>
        {[{n:'9.22',l:'CGPA',c:'var(--amber)'},{n:'90%',l:'Percentage',c:'var(--rose)'},
          {n:'2',l:'Internships',c:'var(--amber)'},{n:'3+',l:'Live Projects',c:'var(--rose)'}].map(s=>(
          <div key={s.l} style={{background:'var(--card)',border:'1px solid var(--border)',
            borderRadius:'16px',padding:'1.8rem',textAlign:'center',transition:'all .3s'}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=s.c;e.currentTarget.style.transform='translateY(-3px)'}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='none'}}>
            <div style={{fontFamily:'font2',fontSize:'2.4rem',color:s.c,marginBottom:'.3rem'}}>{s.n}</div>
            <div style={{fontFamily:'monospace',fontSize:'.62rem',color:'var(--muted)',letterSpacing:'.14em',textTransform:'uppercase'}}>{s.l}</div>
          </div>
        ))}
      </R>

      {/* TIMELINE */}
      <R className="about-timeline" style={{padding:'0 clamp(2rem,6vw,7rem) 5rem',maxWidth:'1100px',margin:'0 auto'}}>
        <div style={{fontFamily:'monospace',fontSize:'.68rem',letterSpacing:'.2em',
          color:'var(--amber)',opacity:.7,marginBottom:'2.5rem'}}>// education &amp; experience</div>
        {tl.map((t,i)=>(
          <div key={i} style={{display:'flex',gap:'1.5rem',paddingBottom:'2.5rem'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
              <div style={{width:'10px',height:'10px',borderRadius:'50%',flexShrink:0,marginTop:'4px',
                background:t.type==='work'?'var(--rose)':'var(--amber)',
                boxShadow:t.type==='work'?'0 0 10px var(--rose)':'0 0 10px var(--amber)'}}/>
              {i<tl.length-1&&<div style={{width:'1px',flex:1,marginTop:'6px',
                background:`linear-gradient(${t.type==='work'?'var(--rose)':'var(--amber)'},transparent)`,opacity:.25}}/>}
            </div>
            <div style={{flex:1}}>
              <div style={{background:'var(--card)',border:'1px solid var(--border)',
                borderRadius:'14px',padding:'1.5rem 2rem',transition:'border-color .3s'}}
                onMouseEnter={e=>e.currentTarget.style.borderColor=t.type==='work'?'rgba(232,64,90,.35)':'rgba(255,107,53,.35)'}
                onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
                <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'.5rem',marginBottom:'.6rem'}}>
                  <span style={{fontFamily:'monospace',fontSize:'.62rem',letterSpacing:'.14em',
                    color:t.type==='work'?'var(--rose)':'var(--amber)'}}>
                    {t.type==='work'?'▸ WORK':'▸ EDU'} · {t.yr}
                  </span>
                </div>
                <div style={{fontFamily:'font2',fontSize:'1.15rem',textTransform:'uppercase',
                  letterSpacing:'.05em',marginBottom:'.3rem'}}>{t.role}</div>
                <div style={{color:'#6a6058',fontSize:'.88rem',marginBottom:'.4rem'}}>{t.place}</div>
                <div style={{fontFamily:'monospace',fontSize:'.7rem',color:'#3e3a35'}}>{t.note}</div>
              </div>
            </div>
          </div>
        ))}
      </R>

      {/* AWARDS */}
      <R className="about-awards" style={{padding:'0 clamp(2rem,6vw,7rem) 5rem',maxWidth:'1100px',margin:'0 auto'}}>
        <div style={{fontFamily:'monospace',fontSize:'.68rem',letterSpacing:'.2em',
          color:'var(--amber)',opacity:.7,marginBottom:'2rem'}}>// achievements</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'1rem'}}>
          {awards.map((a,i)=>(
            <div key={i} style={{background:'var(--card)',border:'1px solid var(--border)',
              borderRadius:'16px',padding:'1.8rem',transition:'all .3s'}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(255,107,53,.35)';e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='var(--glow-a)'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none'}}>
              <div style={{fontSize:'2rem',marginBottom:'.8rem'}}>{a.e}</div>
              <div style={{fontFamily:'font2',textTransform:'uppercase',letterSpacing:'.08em',
                fontSize:'1rem',marginBottom:'.3rem'}}>{a.t}</div>
              <div style={{color:'#5a5248',fontSize:'.82rem'}}>{a.s}</div>
            </div>
          ))}
        </div>
      </R>

      {/* CERTS */}
      <R className="about-certs" style={{padding:'0 clamp(2rem,6vw,7rem) 8rem',maxWidth:'1100px',margin:'0 auto'}}>
        <div style={{fontFamily:'monospace',fontSize:'.68rem',letterSpacing:'.2em',
          color:'var(--amber)',opacity:.7,marginBottom:'2rem'}}>// certifications</div>
        <div style={{display:'flex',flexDirection:'column',gap:'.6rem'}}>
          {certs.map((c,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:'1.2rem',
              padding:'1rem 1.5rem',border:'1px solid var(--border)',borderRadius:'10px',
              background:'var(--bg2)',transition:'all .3s'}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(232,64,90,.3)';e.currentTarget.style.background='var(--card)'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.background='var(--bg2)'}}>
              <span style={{fontFamily:'monospace',fontSize:'.62rem',color:'var(--rose)',minWidth:'22px'}}>{String(i+1).padStart(2,'0')}</span>
              <span style={{color:'#b0a898',fontSize:'.9rem'}}>{c}</span>
            </div>
          ))}
        </div>
      </R>
    </div>
  )
}
