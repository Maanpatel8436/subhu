import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import GlowingMoon from './GlowingMoon'
import { Sparkles, ChevronDown } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function Section01Opening({ onOpenSurprise }) {
  const containerRef = useRef(null)

  const handleOpenClick = () => {
    // Delicate stardust sparkle burst (subtle, romantic colors)
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#C8B7F0', '#E6E8F0', '#F0BFD0', '#FFF8F2'],
      ticks: 200,
      gravity: 0.6,
      scalar: 0.8,
    })

    if (onOpenSurprise) {
      onOpenSurprise()
    }
  }

  return (
    <section
      ref={containerRef}
      id="opening"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden select-none"
    >
      {/* Subtle moving clouds in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div
          className="absolute -top-1/4 -left-1/4 w-[150%] h-[80%] rounded-full bg-gradient-to-br from-lavender-deep/10 via-midnight-800/20 to-transparent blur-3xl animate-float-slow"
        />
        <div
          className="absolute top-1/3 -right-1/4 w-[120%] h-[70%] rounded-full bg-gradient-to-tl from-blush-pink/5 via-lavender-soft/10 to-transparent blur-3xl animate-float-medium"
        />
      </div>

      {/* Center content container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Large Glowing Moon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative pt-4 sm:pt-0"
        >
          <GlowingMoon size="hero" />
        </motion.div>

        {/* Text Area */}
        <div className="space-y-3 sm:space-y-4 px-2">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
            className="font-handwriting text-4xl sm:text-5xl md:text-6xl text-lavender-soft glow-text-lavender tracking-wide"
          >
            Heyyy, you...
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.0, ease: 'easeOut' }}
            className="font-serif text-lg sm:text-xl md:text-2xl text-moonlight-silver/90 font-light tracking-wide max-w-lg mx-auto"
          >
            Someone made a little something just for you.
          </motion.p>
        </div>

        {/* Action Button: "Open Your Surprise ✨" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: 'easeOut' }}
          className="pt-2"
        >
          <button
            onClick={handleOpenClick}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-serif text-base sm:text-lg text-warmWhite font-medium tracking-wide transition-all duration-500 overflow-hidden shadow-moon-subtle hover:shadow-moon-glow active:scale-95"
            style={{
              background: 'linear-gradient(135deg, rgba(33, 46, 82, 0.9) 0%, rgba(16, 24, 45, 0.95) 100%)',
              border: '1px solid rgba(200, 183, 240, 0.35)',
            }}
          >
            {/* Shimmer sweep effect */}
            <span
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"
            />

            <span className="relative z-10 flex items-center gap-2">
              Open Your Surprise
              <Sparkles className="w-4 h-4 text-lavender-soft group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Gentle Scroll Hint Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 flex flex-col items-center gap-1 text-moonlight-silver/50 cursor-pointer hover:text-lavender-soft transition-colors"
        onClick={handleOpenClick}
      >
        <span className="text-xs font-sans tracking-widest uppercase">Scroll Down</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  )
}

