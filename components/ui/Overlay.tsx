'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useStore } from '@/store/useStore'

const variants = [
  { name: 'Black', file: 'galaxy-s26-plus-black-cp.glb', hex: '#1c1c1c' },
  { name: 'Cobalt Violet', file: 'galaxy-s26-plus-cobalt-violet-cp.glb', hex: '#4e4e7a' },
  { name: 'Pink Gold', file: 'galaxy-s26-plus-pink-gold-cp.glb', hex: '#f4c2c2' },
  { name: 'Silver Shadow', file: 'galaxy-s26-plus-silver-shadow-cp.glb', hex: '#d1d1d1' },
  { name: 'Sky Blue', file: 'galaxy-s26-plus-sky-blue-cp.glb', hex: '#a1c4fd' },
  { name: 'White', file: 'galaxy-s26-plus-white-cp.glb', hex: '#ffffff' },
]

export default function Overlay() {
  const { activeColor, setColor, animationDone } = useStore()

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animationDone) return

    const el = containerRef.current
    if (!el) return

    // RESET
    gsap.set(el, { opacity: 1 })
    gsap.set(el.querySelectorAll('.color-btn'), { opacity: 1, y: 0 })
    gsap.set(el.querySelectorAll('.cta-btn'), { opacity: 1, scale: 1 })

    const tl = gsap.timeline()

    tl.from(el, {
      opacity: 0,
      duration: 0.5,
    })

    tl.from('.headline', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.2')

    //  FIX 1: AI appears earlier (feels like trigger)
    tl.from('.ai-badge', {
      scale: 0.6,
      opacity: 0,
      duration: 0.5,
      ease: 'back.out(2)',
    }, '-=0.8')

    tl.from('.color-btn', {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 0.4,
      ease: 'power2.out',
    }, '-=0.4')

    tl.from('.cta-btn', {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.8)',
    }, '-=0.3')

    //  FIX 2: AI glow pulse (alive feeling)
    gsap.to('.ai-badge', {
      boxShadow: '0 0 20px rgba(255,255,255,0.6)',
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'sine.inOut',
    })

    // Floating motion
    gsap.to(el, {
      y: 10,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    })

    // Cursor parallax
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10

      gsap.to(el, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.6,
      })
    }

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
    }

  }, [animationDone])

  // Hover animation +  FIX 4 (AI reacts)
  const handleHover = (e: any, enter: boolean) => {
    gsap.to(e.currentTarget, {
      scale: enter ? 1.2 : 1,
      boxShadow: enter
        ? '0 0 20px rgba(255,255,255,0.4)'
        : '0 0 0px rgba(0,0,0,0)',
      duration: 0.3,
      ease: 'power2.out',
    })

    //  AI reacts to interaction
    if (enter) {
      gsap.fromTo('.ai-badge',
        { scale: 1 },
        { scale: 1.1, duration: 0.2, yoyo: true, repeat: 1 }
      )
    }
  }

  // Press animation
  const handlePress = (e: any) => {
    gsap.fromTo(
      e.currentTarget,
      { scale: 1.2 },
      { scale: 0.9, duration: 0.15, yoyo: true, repeat: 1 }
    )
  }

  return (
    <div className="ui-left">
      <div ref={containerRef} className="overlay-layout">

        {/* TOP */}
        <div className="top-block">
          <header>
            <h1 className="brand">SAMSUNG</h1>
          </header>

          <h1 className="headline">
            Galaxy S26 Series
            <span className="ai-badge">GALAXY AI</span>
          </h1>
        </div>

        {/* BOTTOM */}
        <div className="bottom-block">

          {/*  FIX 3: AI-driven narrative */}
          <p className="description">
            Powered by Galaxy AI to adapt, respond, and elevate every interaction—faster, smarter, and effortlessly intuitive.
          </p>

          {/* COLOR SWITCH */}
          <div className="color-switch">
            {variants.map((v) => (
              <button
                key={v.name}
                title={v.name}
                onClick={(e) => {
                  handlePress(e)
                  setColor(v.name, v.file)
                }}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                className={`color-btn ${
                  activeColor === v.name ? 'active' : ''
                }`}
                style={{ backgroundColor: v.hex }}
              />
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={(e) => handlePress(e)}
            className="cta-btn"
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  )
}