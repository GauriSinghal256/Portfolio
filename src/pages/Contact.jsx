import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const socials=[
  {l:'Email',v:'singhalg818@gmail.com',h:'mailto:singhalg818@gmail.com',sym:'✉',col:'var(--amber)'},
  {l:'LinkedIn',v:'gaurisinghal28',h:'https://www.linkedin.com/in/gaurisinghal28',sym:'in',col:'var(--rose)'},
  {l:'GitHub',v:'GauriSinghal256',h:'https://github.com/GauriSinghal256',sym:'⌥',col:'var(--amber)'},
  {l:'Phone',v:'+91 7017255646',h:'tel:+917017255646',sym:'◎',col:'var(--rose)'},
]

export default function Contact() {
  const hero=useRef(null)
  const [copied,setCopied]=useState(false)
  useGSAP(()=>{
    gsap.from(hero.current.querySelectorAll('.coh'),{
      opacity:0,y:50,stagger:.12,duration:1,ease:'power3.out'})
  },{scope:hero})

  const copy=()=>{
    navigator.clipboard.writeText('singhalg818@gmail.com')
    setCopied(true); setTimeout(()=>setCopied(false),2500)
  }

  return(
    <div style={{minHeight:'100vh',paddingTop:'60px',background:'var(--bg)',position:'relative',zIndex:2,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,pointerEvents:'none',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(145deg, rgba(14,12,10,.96) 0%, rgba(22,19,17,.88) 52%, rgba(14,12,10,.97) 100%)'}} />
        <div style={{position:'absolute',inset:0,overflow:'hidden'}}>
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/src/assets/project2.mp4"
            style={{width:'100%',height:'100%',objectFit:'cover',filter:'saturate(1.02) contrast(1.06) brightness(.52)'}}
          />
          <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg, rgba(14,12,10,.72) 0%, rgba(14,12,10,.42) 40%, rgba(14,12,10,.78) 100%)'}} />
        </div>
        <div style={{position:'absolute',top:'12%',right:'5%',width:'34vw',height:'34vw',borderRadius:'50%',background:'radial-gradient(circle, rgba(255,107,53,.16) 0%, rgba(255,107,53,.05) 36%, transparent 72%)',filter:'blur(18px)'}} />
        <div style={{position:'absolute',bottom:'8%',left:'-8%',width:'28vw',height:'28vw',borderRadius:'50%',background:'radial-gradient(circle, rgba(232,64,90,.1) 0%, rgba(232,64,90,.04) 34%, transparent 72%)',filter:'blur(18px)'}} />
        <div style={{position:'absolute',inset:'10% 8% 12% 8%',borderRadius:'34px',border:'1px solid rgba(255,255,255,.03)',background:'linear-gradient(180deg, rgba(255,107,53,.04), transparent 28%, rgba(232,64,90,.03) 100%)'}} />
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',backgroundSize:'72px 72px',maskImage:'linear-gradient(90deg, transparent 0%, black 28%, black 100%)',WebkitMaskImage:'linear-gradient(90deg, transparent 0%, black 28%, black 100%)',opacity:.16}} />
      </div>
      <div style={{position:'absolute',width:'500px',height:'500px',borderRadius:'50%',
        background:'radial-gradient(circle,rgba(255,107,53,.08) 0%,transparent 70%)',
        top:'10%',left:'-150px',pointerEvents:'none'}}/>
      <div style={{position:'absolute',width:'600px',height:'600px',borderRadius:'50%',
        background:'radial-gradient(circle,rgba(232,64,90,.06) 0%,transparent 70%)',
        bottom:'5%',right:'-200px',pointerEvents:'none'}}/>

      <div ref={hero} style={{padding:'clamp(3.5rem,7vw,5.25rem) clamp(2rem,6vw,7rem) clamp(3rem,6vw,4.5rem)',maxWidth:'900px',margin:'0 auto',position:'relative',zIndex:2}}>

        <div className="coh" style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'1.2rem'}}>
          <div style={{width:'28px',height:'1px',background:'var(--amber)',opacity:.6}}/>
          <span style={{fontFamily:'monospace',fontSize:'.68rem',letterSpacing:'.22em',color:'var(--amber)',opacity:.8}}>~/contact</span>
        </div>

        <h1 className="coh" style={{fontFamily:'font2',fontSize:'clamp(3rem,7vw,7rem)',
          textTransform:'uppercase',lineHeight:.9,letterSpacing:'-.02em'}}>
          Let's<br/><span className="grad">Connect.</span>
        </h1>

        <p className="coh" style={{color:'#7a7068',fontSize:'1rem',marginTop:'1.5rem',
          lineHeight:1.85,maxWidth:'420px'}}>
          Open to internships, collaborations, and interesting projects.
          I respond within hours — let's make something great.
        </p>

        {/* Big email CTA */}
        <div className="coh" style={{marginTop:'3.5rem'}}>
          <button onClick={copy} className="cta"
            style={{border:'none',background:'linear-gradient(135deg,var(--amber),var(--rose))',
              borderRadius:'100px',padding:'1px',cursor:'none',display:'inline-block',
              boxShadow:copied?'var(--glow-a)':'none',transition:'box-shadow .3s'}}>
            <span style={{display:'block',background:'var(--bg)',borderRadius:'100px',
              padding:'clamp(1rem,2vw,1.3rem) clamp(2rem,5vw,3.5rem)',
              fontFamily:'font2',fontSize:'clamp(.95rem,2.2vw,1.5rem)',textTransform:'uppercase',
              letterSpacing:'.08em',color:copied?'var(--amber)':'var(--cream)',
              transition:'color .3s'}}>
              {copied?'✓ Copied!':'✉ singhalg818@gmail.com'}
            </span>
          </button>
          <div style={{fontFamily:'monospace',fontSize:'.62rem',color:'#2e2a25',
            letterSpacing:'.18em',marginTop:'.6rem',paddingLeft:'2px'}}>click to copy</div>
        </div>

        {/* Social cards */}
        <div className="coh" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',
          gap:'1rem',marginTop:'3rem'}}>
          {socials.map(s=>(
            <a key={s.l} href={s.h}
              target={s.h.startsWith('http')?'_blank':undefined} rel="noreferrer"
              style={{display:'block',textDecoration:'none',
                background:'var(--card)',border:'1px solid var(--border)',
                borderRadius:'16px',padding:'1.6rem',transition:'all .3s'}}
              onMouseEnter={e=>{
                e.currentTarget.style.borderColor=s.col==='var(--amber)'?'rgba(255,107,53,.4)':'rgba(232,64,90,.4)'
                e.currentTarget.style.transform='translateY(-4px)'
                e.currentTarget.style.boxShadow=s.col==='var(--amber)'?'var(--glow-a)':'var(--glow-r)'
              }}
              onMouseLeave={e=>{
                e.currentTarget.style.borderColor='var(--border)'
                e.currentTarget.style.transform='none'
                e.currentTarget.style.boxShadow='none'
              }}>
              <div style={{fontSize:'1.4rem',marginBottom:'.8rem',color:s.col,
                fontFamily:'monospace',fontWeight:700}}>{s.sym}</div>
              <div style={{fontFamily:'monospace',fontSize:'.6rem',letterSpacing:'.16em',
                textTransform:'uppercase',color:'var(--muted)',marginBottom:'.4rem'}}>{s.l}</div>
              <div style={{color:'#a09080',fontSize:'.84rem',wordBreak:'break-all'}}>{s.v}</div>
            </a>
          ))}
        </div>

        {/* status */}
        <div className="coh" style={{marginTop:'3.5rem',paddingTop:'2rem',
          borderTop:'1px solid rgba(255,107,53,.08)',
          display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem',alignItems:'center'}}>
          <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
            <div style={{width:'8px',height:'8px',borderRadius:'50%',background:'var(--amber)',
              boxShadow:'0 0 10px var(--amber)',animation:'blink 2s ease-in-out infinite'}}/>
            <span style={{fontFamily:'monospace',fontSize:'.7rem',color:'#5a5048',letterSpacing:'.14em'}}>
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>
          <span style={{fontFamily:'monospace',fontSize:'.68rem',color:'#302c28',letterSpacing:'.1em'}}>
            India · Remote / Hybrid
          </span>
        </div>
      </div>
    </div>
  )
}
