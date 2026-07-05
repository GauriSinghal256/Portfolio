import React, { useEffect, useRef } from 'react'

const ParticleCanvas = () => {
  const cvs = useRef(null)
  useEffect(() => {
    const c   = cvs.current
    const ctx = c.getContext('2d')
    let w = c.width  = window.innerWidth
    let h = c.height = window.innerHeight
    let mx = w/2, my = h/2

    window.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY })
    window.addEventListener('resize', () => { w=c.width=window.innerWidth; h=c.height=window.innerHeight })

    const N = 55
    const pts = Array.from({ length:N }, () => ({
      x:Math.random()*w, y:Math.random()*h,
      vx:(Math.random()-.5)*.25, vy:(Math.random()-.5)*.25,
      r:Math.random()*1.2+.4,
      // warm amber / rose particles
      col:Math.random()>.5 ? 'rgba(255,107,53,' : 'rgba(232,64,90,',
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0,0,w,h)
      pts.forEach((p,i) => {
        p.x+=p.vx; p.y+=p.vy
        if(p.x<0)p.x=w; if(p.x>w)p.x=0
        if(p.y<0)p.y=h; if(p.y>h)p.y=0
        // gentle mouse drift
        const dx=p.x-mx, dy=p.y-my, d=Math.hypot(dx,dy)
        if(d<100){ p.x+=dx/d*.8; p.y+=dy/d*.8 }

        ctx.beginPath()
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
        ctx.fillStyle=p.col+'0.55)'
        ctx.fill()

        for(let j=i+1;j<pts.length;j++){
          const q=pts[j], dd=Math.hypot(p.x-q.x,p.y-q.y)
          if(dd<110){
            ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y)
            ctx.strokeStyle=p.col+(0.09*(1-dd/110))+')'
            ctx.lineWidth=.4; ctx.stroke()
          }
        }
      })
      raf=requestAnimationFrame(draw)
    }
    draw()
    return ()=>cancelAnimationFrame(raf)
  },[])
  return <canvas id="particle-canvas" ref={cvs} style={{ position:'fixed',inset:0,zIndex:0,pointerEvents:'none' }} />
}
export default ParticleCanvas
