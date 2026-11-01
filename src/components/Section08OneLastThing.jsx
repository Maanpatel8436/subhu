import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlowingMoon from './GlowingMoon'
import { Heart, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function Section08OneLastThing() {
  const [isRevealed, setIsRevealed] = useState(false)

  const handleReveal = () => {
    setIsRevealed(true)
    confetti({
      particleCount: 50,
      spread: 90,
      origin: { y: 0.65 },
      colors: ['#F0BFD0', '#C8B7F0', '#FFF8F2', '#E6E8F0'],
      ticks: 300,
    })
  }

  return (
    <section
      id="one-last-thing"
      className="relative min-h-screen w-full py-28 sm:py-36 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* Background starlight haze */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-b from-lavender-deep/10 via-blush-pink/5 to-transparent blur-[160px] pointer-events-none" />

      {/* Floating Tiny Hearts */}
      {isRevealed && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: [0, 0.5, 0],
                y: [-20, -220],
                x: [(i % 2 === 0 ? 1 : -1) * (i * 12), (i % 2 === 0 ? -1 : 1) * (i * 24)],
              }}
              transition={{
                duration: 7 + (i % 5),
                repeat: Infinity,
                delay: i * 0.8,
                ease: 'easeInOut',
              }}
              className="absolute text-blush-pink/50"
              style={{
                left: `${10 + i * 7}%`,
                bottom: '15%',
              }}
            >
              <Heart className="w-3.5 h-3.5 fill-blush-pink/30" />
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-xl mx-auto relative z-10 w-full text-center flex flex-col items-center">
        
        {/* Reveal Button if not revealed yet */}
        {!isRevealed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center space-y-6"
          >
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-lavender-soft/70 block">
              Section 08 • Finale
            </span>

            <button
              onClick={handleReveal}
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-serif text-lg text-warmWhite glass-panel border border-blush-pink/40 hover:border-blush-pink shadow-card-glow hover:shadow-love-glow transition-all duration-500 active:scale-95"
            >
              <span>One Last Thing... ❤️</span>
              <Sparkles className="w-4 h-4 text-blush-pink group-hover:rotate-12 transition-transform" />
            </button>

            <p className="font-serif text-sm text-moonlight-silver/50 italic">
              Tap whenever you are ready.
            </p>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center space-y-8"
            >
              {/* Serene Moon Animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="mb-2"
              >
                <GlowingMoon size="medium" />
              </motion.div>

              {/* The Final Heartwarming Words */}
              <div className="space-y-4 max-w-lg mx-auto font-serif text-lg sm:text-xl text-warmWhite font-light leading-relaxed">
                <p>
                  "I hope tomorrow gives you a hundred more reasons to smile."
                </p>
                <p className="text-blush-pink font-normal text-xl sm:text-2xl">
                  "And here's one reason to start with — you're special."
                </p>
                <p className="text-lavender-soft font-serif italic pt-1">
                  "Never forget that. ❤️"
                </p>
              </div>

              {/* Gentle Divider */}
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-lavender-soft/40 to-transparent my-6" />

              {/* Final End Line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.2 }}
                className="pt-2 text-center"
              >
                <p className="font-handwriting text-3xl sm:text-4xl text-lavender-soft glow-text-lavender">
                  Made with love, just for you. ❤️
                </p>
                <p className="text-[11px] font-mono tracking-widest text-moonlight-silver/40 uppercase mt-4">
                  A Little World of You
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  )
}

