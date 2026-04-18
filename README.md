#  Galaxy S26 “Break the Static” – Interactive 3D Experience

This project is a real-time 3D product experience built to transform a static key visual into a cinematic, interactive advertisement. It combines Three.js (via React Three Fiber), GSAP animation, and Zustand state management to deliver a premium, narrative-driven UI.



# Project Goal

To create a high-energy, interactive product ad where:

* The phone assembles dynamically (cinematic hook)
* Galaxy AI drives the visual narrative
* UI appears as a result of the animation, not independently
* Users can interact with different model variants



#  Architecture Overview

The application is split into clear, modular responsibilities:


page.tsx
 ├── Experience.tsx (3D Scene)
 │     └── S26Model.tsx (Animation + Model Logic)
 ├── Overlay.tsx (UI + Branding + Interaction)
 ├── Zustand Store (Global State)
 └── Loader.tsx (Fallback UI)




# File Responsibilities



##  S26Model.tsx — Core Animation Engine

### Role:

Handles the 3D model logic and cinematic animation sequence.

### Responsibilities:

* Loads .glb models dynamically using useGLTF
* Clones scene to prevent mutation issues
* Centers model using bounding box
* Creates scatter → assemble animation
* Controls GSAP timeline (cinematic sequencing)
* Triggers global state (animationDone) when animation completes
* Adds subtle idle motion (floating + rotation)

### Key Features:

* Prevents duplication and scaling bugs
* Fully reset-safe when switching models
* Drives the entire visual narrative



##  Experience.tsx — 3D Scene & Rendering Layer

### Role:

Sets up the 3D environment and rendering pipeline.

### Responsibilities:

* Initializes <Canvas> from React Three Fiber
* Configures camera, lighting, and performance settings
* Wraps model with:

  * Stage (scene composition)
  * PresentationControls (user interaction)
  * ContactShadows (ground realism)
* Handles loading fallback via Suspense

### Key Features:

* Stable camera (no auto overrides)
* Clean, product-style lighting
* Smooth user-controlled rotation



##  Overlay.tsx — UI, Branding & Interaction Layer

### Role:

Handles all UI, branding, and user interaction, synchronized with animation.

### Responsibilities:

* Displays:

  * Product name (Galaxy S26 Series)
  * Branding (Galaxy AI)
  * Description text
  * Color/model selector
  * CTA button
* Animates UI only after 3D animation completes
* Implements:

  * GSAP timeline for UI reveal
  * Micro-interactions (hover, press feedback)
  * Cursor-based parallax (depth effect)
  * Floating UI motion (subtle liveliness)

### Key Features:

* UI is event-driven (not time-based)
* Branding becomes part of the storytelling
* Premium interaction polish



## useStore.ts (Zustand) — Global State Manager

### Role:

Centralized state for model control and animation synchronization.

### Responsibilities:

* Stores:

  * `activeColor`
  * `modelPath`
  * `modelIndex`
  * `animationDone`
* Handles:

  * Switching between 6 model variants
  * Next/previous model navigation
  * Syncing UI with animation lifecycle

### Key Features:

* Lightweight and fast
* Decouples UI from animation logic
* Enables cross-component communication



##  page.tsx — Layout & Composition Layer

### Role:

Composes the **entire experience layout.

### Responsibilities:

* Dynamically loads Experience (client-only)
* Structures layout using flexbox
* Positions:

  * UI (left)
  * 3D model (center/right)
* Handles loading state during 3D initialization

### Key Features:

* Prevents SSR issues with dynamic import
* Controls spacing between UI and model
* Ensures responsive structure



##  Loader.tsx — Loading Fallback

### Role:

Displays a loading indicator while 3D assets load.

### Responsibilities:

* Acts as Suspense fallback
* Improves perceived performance
* Maintains visual consistency during loading

### Example Behavior:

* Shows GALAXY AI INITIALIZING
* Prevents blank screen during asset fetch



#  Cinematic Flow (Narrative)

1. Scene loads
2. Phone parts scatter in space
3. “AI energy” builds
4. Device assembles with staggered motion
5. Animation completes → animationDone = true
6. UI reveals in sequence:

   * Headline
   * “Galaxy AI” badge
   * Color controls
   * CTA button
7. User interacts:

   * Switch models
   * Rotate device
   * Experience parallax UI



#  Key Features

*  Real-time 3D rendering
*  Narrative-driven animation
*  GSAP timeline orchestration
*  Interactive controls (rotation + model switching)
*  Micro-interactions (hover, press, glow)
*  Cursor-based parallax
*  Product-focused UI/UX



#  Outcome

This project successfully transforms a static product into:

A cinematic, interactive product story powered by real-time 3D and motion design.



#  Final Note

The system is designed with clear separation of concerns:

* Animation logic → S26Model
* Rendering → Experience
* UI & storytelling → Overlay
* State → Zustand

This ensures:

* Maintainability 
* Scalability 
* Production readiness 



#  Future Improvements (Optional)

* Camera parallax synced with cursor
* AI energy shader effects
* Sound design integration
* Performance optimization (LOD / lazy loading)



Built for creative storytelling, not just rendering.


