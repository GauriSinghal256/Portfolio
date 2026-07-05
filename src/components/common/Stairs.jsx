import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function Stairs() {
  const wrap = useRef(null)
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(wrap.current,{display:'flex'})
    tl.from('.stair',{height:0,stagger:{amount:-.3},duration:.65,ease:'power3.inOut'})
    tl.to('.stair',{y:'100%',stagger:{amount:-.3},duration:.65,ease:'power3.inOut'})
    tl.to(wrap.current,{display:'none'})
    tl.to('.stair',{y:'0%'})
  })
  const cols = ['#0E0C0A','#111008','#14110C','#171410','#1A1714']
  return (
    <div ref={wrap} style={{position:'fixed',inset:0,zIndex:500,display:'none',flexDirection:'row'}}>
      {cols.map((c,i)=>(
        <div key={i} className="stair" style={{flex:1,background:c,
          borderRight:i<4?'1px solid rgba(255,107,53,.08)':'none'}}/>
      ))}
    </div>
  )
}
