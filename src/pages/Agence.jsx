import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const imageArray = [
  "src/assets/15.webp",
  "src/assets/16.jpeg",
  "src/assets/3.png",
  "src/assets/1.png",
  "src/assets/4.webp",
  "src/assets/5.png",
  "src/assets/6.png",
  "src/assets/7.png",
  "src/assets/8.png",
  "src/assets/9.jpeg",
  "src/assets/10.png",
  "src/assets/11.png",
  "src/assets/12.jpg",
  "src/assets/13.jpg",
];

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 27%',
        end: 'top -70%',
        pin: true,
        onUpdate: (elem) => {
          const imageIndex = Math.floor(elem.progress * imageArray.length);
          imageRef.current.src = imageArray[imageIndex] || imageArray[imageArray.length - 1];
        }
      }
    })
  })

  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh', paddingTop: '60px' }}>
      <div style={{ position: 'relative' }}>
        <div
          ref={imageDivRef}
          style={{
            height: 'clamp(180px, 22vw, 320px)',
            width: 'clamp(140px, 18vw, 260px)',
            overflow: 'hidden',
            borderRadius: '16px',
            position: 'absolute',
            top: '22rem',
            left: '30vw',
            border: '1px solid #C8FF0033',
            boxShadow: '0 0 30px #C8FF0011',
          }}
        >
          <img ref={imageRef} style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={imageArray[0]} alt="journey" />
        </div>

        <div style={{ position: 'relative', fontFamily: 'font2, sans-serif' }}>
          <div style={{ marginTop: '55vh' }}>
            <div style={{ fontFamily: 'monospace', color: '#C8FF00', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '1rem', padding: '0 clamp(1rem, 4vw, 4rem)', opacity: 0.7 }}>
              ~/journey $
            </div>
            <h1 style={{
              fontSize: 'clamp(3.5rem, 12vw, 15vw)',
              textTransform: 'uppercase',
              lineHeight: '1.1',
              padding: '0 clamp(1rem, 4vw, 4rem)',
            }}>
              It's About The <br />
              <span className="neon-text">Journey</span>
            </h1>
          </div>
          <div style={{ paddingLeft: '40%', marginTop: '5rem', paddingRight: '4rem', paddingBottom: '8rem' }}>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.4rem)',
              lineHeight: 1.9,
              color: '#aaa',
              fontFamily: 'font1, sans-serif',
            }}>
              I didn't start with everything figured out. Like most learners, I began with confusion, self-doubt, and countless errors.
              But step by step, I kept showing up — learning, building, failing, and improving.
              <br /><br />
              Today, I stand as a developer who not only writes code, but <span style={{ color: '#fff' }}>solves problems</span>,
              builds <span style={{ color: '#C8FF00' }}>real-world projects</span>, and constantly strives to grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agence
