import React, { useEffect, useRef } from 'react'

const Cursor = () => {
  const dot  = useRef(null)
  const ring = useRef(null)
  const pos  = useRef({ x:-100, y:-100 })
  const rpos = useRef({ x:-100, y:-100 })
  const raf  = useRef(null)

  useEffect(() => {
    const move = e => { pos.current = { x:e.clientX, y:e.clientY } }
    window.addEventListener('mousemove', move)

    const loop = () => {
      if (dot.current)
        dot.current.style.transform = `translate(${pos.current.x-5}px,${pos.current.y-5}px)`
      rpos.current.x += (pos.current.x - rpos.current.x) * 0.1
      rpos.current.y += (pos.current.y - rpos.current.y) * 0.1
      if (ring.current)
        ring.current.style.transform = `translate(${rpos.current.x-20}px,${rpos.current.y-20}px)`
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    const on  = () => ring.current?.classList.add('hovered')
    const off = () => ring.current?.classList.remove('hovered')

    const observe = new MutationObserver(() => {
      document.querySelectorAll('a,button,[data-hover]').forEach(el => {
        el.addEventListener('mouseenter', on)
        el.addEventListener('mouseleave', off)
      })
    })
    observe.observe(document.body, { childList:true, subtree:true })
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', on)
      el.addEventListener('mouseleave', off)
    })

    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf.current); observe.disconnect() }
  }, [])

  return (
    <>
      <div id="cursor-dot"  ref={dot} />
      <div id="cursor-ring" ref={ring} />
    </>
  )
}
export default Cursor
