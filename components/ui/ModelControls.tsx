'use client'

import { useStore } from '@/store/useStore'

export default function ModelControls() {
  const nextModel = useStore((state) => state.nextModel)
  const prevModel = useStore((state) => state.prevModel)

 return (
  <div style={{
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '20px',
    zIndex: 10
  }}>
    <button onClick={prevModel} className="btn-blue">
      Prev
    </button>
    
    <button onClick={nextModel} className="btn-blue">
      Next
    </button>
  </div>
)
}