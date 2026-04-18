'use client'

import { Suspense, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'

import S26Model from './S26Model'
import Loader from '../ui/Loader'

export default function Experience() {
  const lightRef = useRef<THREE.PointLight>(null!)

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

      //  PERFORMANCE OPTIMIZATION
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
      {/* LIGHTING */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />

      <pointLight ref={lightRef} position={[0, 0, 2]} intensity={0} />

      <Suspense fallback={<Loader />}>
        <PresentationControls
          global
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
        >
          <S26Model />
        </PresentationControls>

        <ContactShadows opacity={0.4} scale={10} blur={2.4} far={1} />
      </Suspense>
    </Canvas>
  )
}