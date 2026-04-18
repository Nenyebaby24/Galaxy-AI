import { create } from 'zustand'

const models = [
  { color: 'Black', path: 'galaxy-s26-plus-black-cp.glb' },
  { color: 'Cobalt Violet', path: 'galaxy-s26-plus-cobalt-violet-cp.glb' },
  { color: 'Pink Gold', path: 'galaxy-s26-plus-pink-gold-cp.glb' },
  { color: 'Silver Shadow', path: 'galaxy-s26-plus-silver-shadow-cp.glb' },
  { color: 'Sky Blue', path: 'galaxy-s26-plus-sky-blue-cp.glb' },
  { color: 'White', path: 'galaxy-s26-plus-white-cp.glb' },
]

interface AppState {
  activeColor: string
  modelPath: string
  modelIndex: number

  // NEW ANIMATION STATE
  animationDone: boolean
  setAnimationDone: () => void

  setColor: (color: string, path: string) => void
  nextModel: () => void
  prevModel: () => void
  setModelIndex: (index: number) => void
}

export const useStore = create<AppState>((set, get) => ({
  activeColor: models[0].color,
  modelPath: models[0].path,
  modelIndex: 0,

  // NEW ANIMATION STATE
  animationDone: false,
  setAnimationDone: () => set({ animationDone: true }),

  // KEEP YOUR EXISTING API (backward compatible)
  setColor: (color, path) =>
    set({
      activeColor: color,
      modelPath: path,
      modelIndex: models.findIndex((m) => m.path === path),
    }),

  // NEXT MODEL
  nextModel: () => {
    const state = get()
    const nextIndex = (state.modelIndex + 1) % models.length

    set({
      modelIndex: nextIndex,
      activeColor: models[nextIndex].color,
      modelPath: models[nextIndex].path,
    })
  },

  // PREV MODEL
  prevModel: () => {
    const state = get()
    const prevIndex =
      (state.modelIndex - 1 + models.length) % models.length

    set({
      modelIndex: prevIndex,
      activeColor: models[prevIndex].color,
      modelPath: models[prevIndex].path,
    })
  },

  // DIRECT INDEX CONTROL
  setModelIndex: (index) => {
    const safeIndex = ((index % models.length) + models.length) % models.length

    set({
      modelIndex: safeIndex,
      activeColor: models[safeIndex].color,
      modelPath: models[safeIndex].path,
    })
  },
}))


