'use client'

import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { useStore } from '@/store/useStore'

useGLTF.setDecoderPath(
  'https://www.gstatic.com/draco/versioned/decoders/1.5.5/'
)

//  LOCKED SCALE (same for ALL models)
const FIXED_SCALE = 10.0

export default function S26Model() {
  const modelPath = useStore((state) => state.modelPath)
  const { scene } = useGLTF(`/models/${modelPath}`)

  const group = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    if (!scene || !group.current) return

    const g = group.current

    // CLEAN RESET
    gsap.killTweensOf(g)
    g.clear()
    g.position.set(0, 0, 0)
    g.rotation.set(0, 0, 0)

    // CLONE MODEL
    const clonedScene = scene.clone(true)
    g.add(clonedScene)

    // CENTER MODEL ONLY (NO SIZE CALCULATION)
    clonedScene.position.set(0, 0.02, 0)

    // Collect meshes
    const meshes: { mesh: THREE.Mesh; original: THREE.Vector3 }[] = []

    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        meshes.push({
          mesh,
          original: mesh.position.clone(),
        })
      }
    })

    // Scatter effect
    meshes.forEach(({ mesh }) => {
      mesh.position.set(
        (Math.random() - 0.5) * 0.6,
        (Math.random() - 0.5) * 0.6,
        (Math.random() - 0.5) * 0.6
      )

      //  Directional push outward
      mesh.position.multiplyScalar(2)
    })

    // Assemble animation with pause
    meshes.forEach(({ mesh, original }, i) => {
      gsap.to(mesh.position, {
        x: original.x,
        y: original.y,
        z: original.z,
        duration: 1.2,
        delay: 0.9 + i * 0.015, //  added pause
        ease: 'expo.out',
      })
    })

    //  FORCE SAME SCALE ALWAYS
    g.scale.setScalar(FIXED_SCALE * 0.6)

    gsap.to(g.scale, {
      x: FIXED_SCALE,
      y: FIXED_SCALE,
      z: FIXED_SCALE,
      duration: 0.8,
      ease: 'expo.out',
    })

    // MARK DONE
    const store = useStore.getState()
    if (!store.animationDone) {
      store.setAnimationDone()
    }

  }, [scene])

  
  //  DANGLING + ROTATION
  // =========================
  useFrame((state, delta) => {
    if (!group.current) return

    const t = state.clock.getElapsedTime()

    //  layered floating
    group.current.position.y =
      Math.sin(t * 1.1) * 0.08 +
      Math.sin(t * 0.5) * 0.03

    //  smooth rotation
    group.current.rotation.y += delta * 0.45

    //  subtle tilt
    group.current.rotation.x = Math.sin(t * 0.4) * 0.04
    group.current.rotation.z = Math.sin(t * 0.3) * 0.02
  })

  return <group ref={group} />
}