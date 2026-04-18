'use client'

import dynamic from 'next/dynamic'


import Overlay from '@/components/ui/Overlay'

// Dynamically import the 3D Experience to prevent Server-Side Rendering (SSR) errors
const Experience = dynamic(() => import('@/components/canvas/Experience'), { 
  ssr: false,
  loading: () => (
    <div className="h-screen w-full flex items-center justify-center bg-[#050505]">
      <p className="text-white tracking-[0.3em] font-light animate-pulse text-xs">
        GALAXY AI INITIALIZING
      </p>
    </div>
  )
})

export default function Home() {
  return (
    <main className="app-container">

  {/* MODEL (TRUE CENTER) */}
  <div className="model-center">
    <div className="model-wrapper">
      <Experience />
    </div>
  </div>

  {/* UI (OFFSET FROM CENTER) */}
  <div className="ui-left">
    <Overlay />
  </div>

</main>
  )
}