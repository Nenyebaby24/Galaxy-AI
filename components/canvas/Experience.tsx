'use client'

import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { PointLight } from 'three'
import { gsap } from 'gsap'

import S26Model from './S26Model'
import Loader from '../ui/Loader'

// Lazy-load heavy Drei components
const ContactShadows = dynamic(
  () => import('@react-three/drei').then((m) => m.ContactShadows),
  { ssr: false }
)

const PresentationControls = dynamic(
  () => import('@react-three/drei').then((m) => m.PresentationControls),
  { ssr: false }
)

export default function Experience() {
  const lightRef = useRef<PointLight>(null!)

  //  NEW: control minimum loader display time
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true)
    }, 800) //  adjust (600–1200ms recommended)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!lightRef.current) return

    gsap.to(lightRef.current, {
      intensity: 5,
      duration: 1,
      delay: 1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out',
    })
  }, [])

  return (
    <Canvas
      className="w-full h-screen"
      shadows
      dpr={[1, 1.5]}
      flat
      linear
      gl={{
        antialias: true,
        powerPreference: 'high-performance',
        alpha: false,
        stencil: false,
        depth: true,
      }}
      camera={{ position: [0, 0, 4], fov: 35 }}
    >
          <ambientLight intensity={2.3} />

            <directionalLight
              position={[5,5,5]}
              intensity={2.2}
             />

           <directionalLight
             position={[-5,-5,-5]}
             intensity={0.8}
            />

          {/* Bottom bounce light */}
          <pointLight
          position={[0,-4,2]}
          intensity={2.8}
          distance={14}
           />

          {/* Soft rim fill */}
          <directionalLight
            position={[0,2,-4]}
            intensity={0.5}
            />

      {/*  OPTION 1: Controlled Loader */}
      {!ready ? (
        <Loader />
      ) : (
        <Suspense fallback={null}>
          <PresentationControls
            global
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
          >
            <S26Model />
          </PresentationControls>

          <ContactShadows
            opacity={0.4}
            scale={10}
            blur={2.4}
            far={1}
          />
        </Suspense>
      )}
    </Canvas>
  )
}