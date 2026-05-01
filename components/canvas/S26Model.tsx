'use client'

import React, { useRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group, Mesh, Vector3 } from 'three'
import { gsap } from 'gsap'
import { useStore } from '@/store/useStore'

//  Draco decoder
useGLTF.setDecoderPath(
  'https://www.gstatic.com/draco/versioned/decoders/1.5.5/'
)

//  Preload all models
useGLTF.preload('/models/galaxy-s26-plus-black-cp.glb')
useGLTF.preload('/models/galaxy-s26-plus-cobalt-violet-cp.glb')
useGLTF.preload('/models/galaxy-s26-plus-pink-gold-cp.glb')
useGLTF.preload('/models/galaxy-s26-plus-silver-shadow-cp.glb')
useGLTF.preload('/models/galaxy-s26-plus-sky-blue-cp.glb')
useGLTF.preload('/models/galaxy-s26-plus-white-cp.glb')

const FIXED_SCALE = 10.0

export default function S26Model() {
  const modelPath = useStore((state) => state.modelPath)
  const { scene } = useGLTF(`/models/${modelPath}`)

  const group = useRef<Group>(null!)

  useLayoutEffect(() => {
    if (!scene || !group.current) return

    const g = group.current

    gsap.killTweensOf(g)
    g.clear()
    g.position.set(0, 0, 0)
    g.rotation.set(0, 0, 0)

    //  lighter clone
    const clonedScene = scene.clone()
    g.add(clonedScene)

    clonedScene.position.set(0, 0.02, 0)
    
    const meshes: { mesh: Mesh; original: Vector3 }[] = []
     console.log(meshes.length)
    clonedScene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh
        meshes.push({
          mesh,
          original: mesh.position.clone(),
        })
      }
    })

    meshes.forEach(({ mesh }) => {
      mesh.position.set(
        (Math.random() - 0.5) * 0.6,
        (Math.random() - 0.5) * 0.6,
        (Math.random() - 0.5) * 0.6
      )
      mesh.position.multiplyScalar(2)
    })

    meshes.forEach(({ mesh, original }, i) => {
      gsap.to(mesh.position, {
        x: original.x,
        y: original.y,
        z: original.z,
        duration: 1.2,
        delay: 0.9 + i * 0.015,
        ease: 'expo.out',
      })
    })

    g.scale.setScalar(FIXED_SCALE * 0.6)

    gsap.to(g.scale, {
      x: FIXED_SCALE,
      y: FIXED_SCALE,
      z: FIXED_SCALE,
      duration: 0.8,
      ease: 'expo.out',
    })

    const store = useStore.getState()
    if (!store.animationDone) {
      store.setAnimationDone()
    }
  }, [scene])

  useFrame((state) => {
  if (!group.current) return

  const t = state.clock.getElapsedTime()

  //  Single clean floating (no interference)
  group.current.position.y = Math.sin(t * 0.9) * 0.09

  //  Stable rotation (time-based)
  group.current.rotation.y = t * 0.35

  //  Subtle tilt (low frequency = smooth)
  group.current.rotation.x = Math.sin(t * 0.25) * 0.025
  group.current.rotation.z = Math.sin(t * 0.2) * 0.015
})

  return <group ref={group} />
}