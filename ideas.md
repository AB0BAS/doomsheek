# Doomsheek Design Ideas

## Chosen Approach: Dark Cyberpunk / Glassmorphism (matching Luminex)

**Design Movement**: Dark cyberpunk glassmorphism with animated plasma backgrounds

**Core Principles**:
1. Deep dark background (#080808) with purple (#7c3aed) as the sole accent color
2. Glass-morphism cards with backdrop blur and subtle white borders
3. Animated plasma blobs creating ambient purple glow effects
4. Smooth scroll-triggered animations (fade-in, blur-to-clear)

**Color Philosophy**:
- Background: #080808 (near-black, not pure black for depth)
- Accent: #7c3aed (Violet-600 purple)
- Accent hover: #6d28d9 (Violet-700)
- Text: white / gray-400 / gray-500 hierarchy
- Cards: rgba(255,255,255,0.03-0.06) glass effect

**Layout Paradigm**:
- Full-screen hero with centered content
- Stats row with 3 glass cards
- Bento grid for features (3-column on desktop)
- Video embed section
- CTA section
- Footer with 4-column grid

**Signature Elements**:
1. Floating purple particles in hero
2. Plasma blob background animations (slow, organic movement)
3. Glass pills for tags/badges

**Interaction Philosophy**:
- Scroll-triggered reveal animations (blur + translateY)
- Hover: subtle translateY(-2px) lift on cards
- Button hover: glow shadow effect

**Animation**:
- Plasma blobs: slow 40-100s alternating animations
- Particles: 4-6s float up/down cycle
- Scroll reveals: blur(10px) → blur(0) + opacity 0→1

**Typography System**:
- Font: Geist (variable weight) for headings — creates the variable-weight proximity effect
- Body: system-ui / sans-serif
- Hero title: clamp(4rem, 10vw, 8rem), font-weight 800
