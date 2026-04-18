'use client'

import { Html, useProgress } from '@react-three/drei'

export default function Loader() {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-[#050505] z-50">
        {/* Galaxy AI Pulsing Icon */}
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
          <div className="relative flex items-center justify-center w-full h-full border border-white/10 rounded-full backdrop-blur-sm">
            <span className="text-white text-xs font-bold tracking-widest">AI</span>
          </div>
        </div>

        {/* Loading Progress Text */}
        <div className="text-center">
          <p className="text-white text-[10px] tracking-[0.5em] uppercase mb-2 font-light">
            Initializing Galaxy S26
          </p>
          <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-white/40 text-[9px] font-mono">
            {progress.toFixed(0)}% LOADED
          </p>
        </div>
      </div>
    </Html>
  )
}