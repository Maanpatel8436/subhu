import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function GlowingMoon({ size = 'large', className = '', enableParallax = true }) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })

  // Subtle interactive parallax on desktop
  useEffect(() => {
    if (!enableParallax) return
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 8 // subtle 4px shift
      const y = (e.clientY / innerHeight - 0.5) * 8
      setMouseOffset({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [enableParallax])

  // Refined astronomical sizes tailored for desktop & mobile
  // Mobile-first sizes prevent overpowering the text or overflowing
  const sizeClasses = {
    hero: 'w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64',
    large: 'w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52',
    medium: 'w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44',
    small: 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28',
  }

  const selectedSize = sizeClasses[size] || sizeClasses.large

  return (
    <div
      className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{
        transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
        transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
    >
      {/* 1. Outer Deep Atmospheric Scattering (Extremely subtle, diffuse night-sky illumination) */}
      <div
        className="absolute -inset-10 sm:-inset-16 md:-inset-20 rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200, 215, 245, 0.12) 0%, rgba(140, 160, 210, 0.04) 50%, transparent 75%)',
        }}
      />

      {/* 2. Soft Lunar Corona & Halo (Natural silver-lavender atmospheric glow) */}
      <div
        className="absolute -inset-4 sm:-inset-6 md:-inset-8 rounded-full opacity-60 blur-xl pointer-events-none animate-pulse-subtle"
        style={{
          background: 'radial-gradient(circle, rgba(235, 240, 255, 0.22) 0%, rgba(200, 183, 240, 0.12) 45%, transparent 70%)',
          animationDuration: '10s',
        }}
      />

      {/* 3. The Photorealistic Astronomical Full Moon Disc */}
      <div
        className={`relative ${selectedSize} rounded-full overflow-hidden shadow-2xl transition-all duration-700`}
        style={{
          boxShadow: `
            0 0 25px 2px rgba(230, 235, 250, 0.2),
            0 0 50px 8px rgba(200, 183, 240, 0.1),
            inset 0 0 35px rgba(8, 13, 27, 0.7),
            inset 0 0 12px rgba(5, 8, 17, 0.5)
          `,
        }}
      >
        {/* Real NASA LRO Astronomical Photograph */}
        <img
          src="/images/moon/real-lunar-full-moon.jpg"
          alt="Photorealistic Astronomical Full Moon"
          className="w-full h-full object-cover scale-[1.045] pointer-events-none select-none transition-transform duration-1000"
          style={{
            filter: 'contrast(1.05) brightness(1.02) saturate(0.95)',
          }}
          loading="eager"
        />

        {/* Natural Spherical Limb Darkening (Recreates true 3D spherical curvature) */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 32px 6px rgba(8, 13, 27, 0.65), inset 0 0 10px 2px rgba(16, 24, 45, 0.45)',
          }}
        />

        {/* Delicate Translucent Atmospheric Shimmer across the lunar face */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none opacity-20 mix-blend-screen"
          style={{
            background: 'radial-gradient(circle at 40% 35%, rgba(255, 248, 242, 0.3) 0%, transparent 65%)',
          }}
        />

        {/* Soft Drifting Cloud Mist passing across the Moon */}
        <div
          className="absolute -inset-full opacity-15 mix-blend-screen pointer-events-none animate-shimmer"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(240, 230, 250, 0.35) 45%, rgba(200, 220, 255, 0.25) 55%, transparent 100%)',
            backgroundSize: '200% 100%',
            animationDuration: '16s',
          }}
        />
      </div>

      {/* 4. Natural Sub-lunar Atmospheric Mist */}
      <div
        className="absolute -bottom-4 w-3/4 h-8 bg-lavender-soft/5 blur-lg rounded-full pointer-events-none"
      />
    </div>
  )
}
