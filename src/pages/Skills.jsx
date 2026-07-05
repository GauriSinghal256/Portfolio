import React, { useMemo, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const R=({children,style,d=0})=>{
  const r=useRef(null)
  useGSAP(()=>{
    gsap.from(r.current,{opacity:0,y:44,duration:.9,ease:'power3.out',delay:d,
      scrollTrigger:{trigger:r.current,start:'top 88%'}})
  },{scope:r})
  return <div ref={r} style={style}>{children}</div>
}

const Bar=({name,level,col='var(--amber)'})=>{
  const f=useRef(null)
  useGSAP(()=>{
    gsap.to(f.current,{width:`${level}%`,duration:1.5,ease:'power3.out',
      scrollTrigger:{trigger:f.current,start:'top 90%'}})
  },{scope:f})
  return(
    <div style={{marginBottom:'1.3rem'}}>
      <div style={{display:'flex',justifyContent:'space-between',marginBottom:'.45rem'}}>
        <span style={{fontSize:'.88rem',color:'#b0a898'}}>{name}</span>
        <span style={{fontFamily:'monospace',fontSize:'.68rem',color:'#3e3a35'}}>{level}%</span>
      </div>
      <div className="sbar-track">
        <div ref={f} className="sbar-fill"
          style={{background:`linear-gradient(90deg,${col},${col==='var(--amber)'?'var(--rose)':'var(--amber)'})`}}/>
      </div>
    </div>
  )
}

const groups=[
  {l:'Languages',c:'// the alphabets I think in',col:'var(--amber)',
   focus:'Writing reliable logic, scripting, and solving problems fast.',
   s:[{n:'JavaScript',v:90},{n:'Python',v:88},{n:'Java',v:85},{n:'SQL',v:80}]},
  {l:'Frontend',c:'// what the user sees',col:'var(--rose)',
   focus:'Designing motion-rich interfaces and responsive, polished UI states.',
   s:[{n:'React.js',v:90},{n:'Tailwind CSS',v:92},{n:'GSAP Animations',v:78},{n:'HTML / CSS',v:95}]},
  {l:'Backend',c:'// where logic lives',col:'var(--amber)',
   focus:'Building APIs, auth flows, and server logic that feels solid under load.',
   s:[{n:'Node.js / Express',v:85},{n:'Django',v:70},{n:'REST APIs',v:88},{n:'JWT Auth',v:82}]},
  {l:'Data & ML',c:'// making numbers make sense',col:'var(--rose)',
   focus:'Turning datasets into useful predictions, insights, and clean reports.',
   s:[{n:'Pandas / NumPy',v:85},{n:'scikit-learn',v:80},{n:'Matplotlib / Seaborn',v:75},{n:'Feature Engineering',v:78}]},
  {l:'Databases & Cloud',c:'// where data lives',col:'var(--amber)',
   focus:'Managing storage, deployment, and cloud-backed app infrastructure.',
   s:[{n:'MongoDB',v:83},{n:'MySQL',v:82},{n:'AWS (EC2,S3,IAM,VPC)',v:72}]},
  {l:'CS Core',c:'// the stuff that actually matters',col:'var(--rose)',
   focus:'Keeping the fundamentals sharp for interviews, architecture, and debugging.',
   s:[{n:'DSA',v:88},{n:'OOP',v:90},{n:'DBMS',v:82},{n:'OS / CN',v:77}]},
]

const tools=['Git / GitHub','Postman','VS Code','Vercel','Agile Scrum','Render','JWT','Linux Bash']

export default function Skills() {
  const hero=useRef(null)
  const [activeGroup, setActiveGroup] = useState(groups[1].l)
  const [activeSkill, setActiveSkill] = useState(groups[1].s[0].n)

  const currentGroup = useMemo(() => groups.find(g => g.l === activeGroup) ?? groups[0], [activeGroup])
  const currentSkill = useMemo(() => currentGroup.s.find(s => s.n === activeSkill) ?? currentGroup.s[0], [currentGroup, activeSkill])

  useGSAP(()=>{
    gsap.from(hero.current.querySelectorAll('.skh'),{
      opacity:0,y:50,stagger:.11,duration:1,ease:'power3.out'})
  },{scope:hero})

  return(
    <div style={{minHeight:'100vh',paddingTop:'60px',background:'var(--bg)',position:'relative',zIndex:2,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none'}}>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(140deg, rgba(14,12,10,.94) 0%, rgba(20,18,16,.88) 48%, rgba(14,12,10,.96) 100%)'}} />
        <div style={{position:'absolute',top:'12%',right:'-8%',width:'34vw',height:'34vw',borderRadius:'50%',background:'radial-gradient(circle, rgba(255,107,53,.14) 0%, rgba(255,107,53,.05) 36%, transparent 72%)',filter:'blur(18px)'}} />
        <div style={{position:'absolute',bottom:'8%',left:'-10%',width:'30vw',height:'30vw',borderRadius:'50%',background:'radial-gradient(circle, rgba(232,64,90,.12) 0%, rgba(232,64,90,.05) 34%, transparent 72%)',filter:'blur(18px)'}} />
        <div style={{position:'absolute',inset:'10% 8% 12% 8%',borderRadius:'32px',border:'1px solid rgba(255,255,255,.03)',background:'linear-gradient(180deg, rgba(255,107,53,.04), transparent 28%, rgba(232,64,90,.03) 100%)'}} />
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',backgroundSize:'70px 70px',maskImage:'linear-gradient(90deg, transparent 0%, black 30%, black 100%)',WebkitMaskImage:'linear-gradient(90deg, transparent 0%, black 30%, black 100%)',opacity:.22}} />
        <div style={{position:'absolute',top:'14%',right:'6%',width:'32vw',minWidth:'280px',maxWidth:'460px',height:'62%',borderRadius:'30px',overflow:'hidden',border:'1px solid rgba(255,107,53,.12)',boxShadow:'0 0 50px rgba(0,0,0,.22)'}}>
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/src/assets/project4.mp4"
            style={{width:'100%',height:'100%',objectFit:'cover',filter:'saturate(.9) contrast(1.05) brightness(.44)'}}
          />
          <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg, rgba(14,12,10,.14) 0%, rgba(14,12,10,.72) 100%)'}} />
        </div>
      </div>

      <div ref={hero} style={{padding:'clamp(4rem,8vw,6rem) clamp(2rem,6vw,7rem)',maxWidth:'1200px',margin:'0 auto'}}>
        <div className="skh" style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'1.2rem'}}>
          <div style={{width:'28px',height:'1px',background:'var(--amber)',opacity:.6}}/>
          <span style={{fontFamily:'monospace',fontSize:'.68rem',letterSpacing:'.22em',color:'var(--amber)',opacity:.8}}>~/skills</span>
        </div>
        <h1 className="skh" style={{fontFamily:'font2',fontSize:'clamp(3rem,7vw,7rem)',
          textTransform:'uppercase',lineHeight:.9}}>
          My<br/><span className="grad">Stack.</span>
        </h1>
        <p className="skh" style={{color:'#6a6058',fontSize:'1rem',marginTop:'1.5rem',lineHeight:1.7}}>
          Languages, frameworks, and tools I use to ship real software.
        </p>
      </div>

      <div style={{padding:'0 clamp(2rem,6vw,7rem) 1.4rem',maxWidth:'1200px',margin:'0 auto'}}>
        <div style={{display:'flex',flexWrap:'wrap',gap:'.7rem'}}>
          {groups.map(g => {
            const isActive = g.l === activeGroup
            return (
              <button
                key={g.l}
                type="button"
                onClick={() => {
                  setActiveGroup(g.l)
                  setActiveSkill(g.s[0].n)
                }}
                style={{
                  fontFamily:'monospace',
                  fontSize:'.72rem',
                  letterSpacing:'.14em',
                  textTransform:'uppercase',
                  padding:'10px 16px',
                  borderRadius:'999px',
                  border:`1px solid ${isActive ? 'rgba(255,107,53,.45)' : 'rgba(255,107,53,.14)'}`,
                  background:isActive ? 'linear-gradient(135deg, rgba(255,107,53,.18), rgba(232,64,90,.12))' : 'rgba(255,255,255,.02)',
                  color:isActive ? 'var(--cream)' : 'var(--muted)',
                  cursor:'none',
                  transition:'all .3s',
                  boxShadow:isActive ? '0 0 24px rgba(255,107,53,.12)' : 'none'
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(255,107,53,.3)'
                    e.currentTarget.style.color = 'var(--amber)'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(255,107,53,.14)'
                    e.currentTarget.style.color = 'var(--muted)'
                  }
                }}
              >
                {g.l}
              </button>
            )
          })}
        </div>
      </div>

      <div style={{padding:'0 clamp(2rem,6vw,7rem)',maxWidth:'1200px',margin:'0 auto',
        display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'1.3rem'}}>
        {groups.map((g,gi)=>(
          <R key={g.l} d={gi*.06}
            style={{background:g.l===activeGroup?'linear-gradient(180deg, rgba(255,107,53,.08), rgba(26,23,20,.92))':'var(--card)',
              border:`1px solid ${g.l===activeGroup?'rgba(255,107,53,.42)':'var(--border)'}`,
              borderRadius:'18px',padding:'2rem',transition:'all .3s',
              boxShadow:g.l===activeGroup?'0 0 40px rgba(255,107,53,.08)':'none',
              transform:g.l===activeGroup?'translateY(-4px)':'none',
              cursor:'none'}}
            onClick={() => {
              setActiveGroup(g.l)
              setActiveSkill(g.s[0].n)
            }}
            onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(255,107,53,.28)'}
            onMouseLeave={e=>e.currentTarget.style.borderColor=g.l===activeGroup?'rgba(255,107,53,.42)':'var(--border)'}>
            <div style={{fontFamily:'monospace',fontSize:'.62rem',letterSpacing:'.12em',
              color:g.col,marginBottom:'.3rem',opacity:.8}}>{g.c}</div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1rem',marginBottom:'.6rem'}}>
              <div style={{fontFamily:'font2',textTransform:'uppercase',letterSpacing:'.1em',
                fontSize:'.85rem',color:'var(--cream)'}}>{g.l}</div>
              <div style={{fontFamily:'monospace',fontSize:'.58rem',letterSpacing:'.16em',color:g.l===activeGroup?'var(--amber)':'var(--muted)'}}>
                {g.l===activeGroup ? 'ACTIVE' : 'CLICK TO FOCUS'}
              </div>
            </div>
            {g.s.map(s=><Bar key={s.n} name={s.n} level={s.v} col={g.col}/>)}
          </R>
        ))}
      </div>

      <R style={{padding:'clamp(3rem,5vw,5rem) clamp(2rem,6vw,7rem) 8rem',maxWidth:'1200px',margin:'0 auto'}}>
        <div style={{fontFamily:'monospace',fontSize:'.68rem',letterSpacing:'.2em',
          color:'var(--amber)',opacity:.7,marginBottom:'1.5rem'}}>// tools & practices</div>
        <div style={{display:'flex',flexWrap:'wrap',gap:'.6rem'}}>
          {tools.map(t=>(
            <div key={t} style={{fontFamily:'monospace',fontSize:'.78rem',letterSpacing:'.1em',
              padding:'8px 18px',border:'1px solid rgba(255,107,53,.12)',borderRadius:'8px',
              color:'var(--muted)',transition:'all .3s',cursor:'default'}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(255,107,53,.4)';e.currentTarget.style.color='var(--amber)';e.currentTarget.style.background='rgba(255,107,53,.05)'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,107,53,.12)';e.currentTarget.style.color='var(--muted)';e.currentTarget.style.background='transparent'}}>
              {t}
            </div>
          ))}
        </div>
      </R>
    </div>
  )
}
