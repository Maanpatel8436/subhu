import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles, ArrowDown } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function Section02Envelope({ onContinue }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true)
      // Delicate heart & stardust confetti
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#F0BFD0', '#C8B7F0', '#FFF8F2'],
        shapes: ['circle'],
        scalar: 0.9,
      })
    }
  }

  return (
    <section
      id="envelope-section"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6 select-none overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-lavender-soft/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center text-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8 sm:mb-12"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-lavender-soft/70 block mb-2 font-sans">
            Section 02
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-warmWhite font-light tracking-wide">
            A little letter, just for you.
          </h2>
          <p className="font-sans text-sm text-moonlight-silver/60 mt-2 flex items-center justify-center gap-1.5">
            {!isOpen && (
              <span className="animate-pulse flex items-center gap-1.5 text-blush-pink">
                Tap to open <Heart className="w-3.5 h-3.5 fill-blush-pink inline" />
              </span>
            )}
          </p>
        </motion.div>

        {/* 3D Envelope Container */}
        <div className="relative w-full max-w-md h-[260px] sm:h-[300px] flex items-center justify-center perspective-[1000px]">
          
          {/* THE LETTER (Slides out when opened) */}
          <motion.div
            animate={
              isOpen
                ? { y: -95, scale: 1.03, opacity: 1 }
                : { y: 0, scale: 0.9, opacity: 0.4 }
            }
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute top-4 w-[92%] sm:w-[94%] min-h-[220px] p-6 sm:p-8 rounded-xl shadow-2xl transition-all duration-700 z-10 ${
              isOpen
                ? 'bg-gradient-to-b from-[#FFFDF9] via-[#FBF8F2] to-[#F5EFEB] text-[#1a1c29] shadow-letter-glow cursor-default'
                : 'bg-[#FFFDF9]/60 pointer-events-none'
            }`}
            style={{
              border: '1px solid rgba(200, 183, 240, 0.4)',
              boxShadow: isOpen
                ? '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(240, 191, 208, 0.25)'
                : 'none',
            }}
          >
            {/* Delicate gold/blush border accent inside letter */}
            <div className="h-full border border-blush-pink/30 rounded-lg p-5 sm:p-6 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-blush-pink/20 mb-4">
                  <span className="font-handwriting text-2xl text-midnight-900">
                    A letter for you...
                  </span>
                  <Sparkles className="w-4 h-4 text-blush-rose" />
                </div>

                <div className="space-y-3 font-serif text-sm sm:text-base leading-relaxed text-[#2C2E3E]">
                  <p>
                    Well, I don't really know where to begin...
                  </p>
                  <p>
                    I just wanted to make something that could bring a little smile to your face.
                  </p>
                  <p className="font-medium text-[#1E2030]">
                    So here's a tiny corner of the internet, made especially for you.
                  </p>
                </div>
              </div>

              <div className="pt-3 text-right">
                <span className="font-handwriting text-lg text-blush-rose">
                  Keep scrolling down ❤️
                </span>
              </div>
            </div>
          </motion.div>

          {/* THE ENVELOPE BODY */}
          <div
            onClick={handleOpen}
            className={`relative w-full h-full rounded-2xl overflow-visible cursor-pointer z-20 transition-transform duration-500 ${
              !isOpen ? 'hover:scale-[1.02] active:scale-98' : ''
            }`}
          >
            {/* Envelope Back Plate */}
            <div
              className="absolute inset-0 rounded-2xl border border-lavender-soft/25"
              style={{
                background: 'linear-gradient(145deg, #121A33 0%, #0C1224 100%)',
                boxShadow: '0 20px 40px rgba(5, 8, 17, 0.8)',
              }}
            />

            {/* Envelope Flap (Flips Up 180 degrees) */}
            <motion.div
              animate={{ rotateX: isOpen ? 180 : 0 }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              style={{
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
              }}
              className="absolute top-0 left-0 right-0 h-1/2 z-30 pointer-events-none"
            >
              {/* Flap Outer Face */}
              <div
                className="absolute inset-0 rounded-t-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(180deg, #17223D 0%, #10182D 100%)',
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                  borderTop: '1px solid rgba(200, 183, 240, 0.4)',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Wax Seal with Heart */}
                {!isOpen && (
                  <div className="absolute bottom-1 flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-blush-rose via-blush-pink to-warmWhite shadow-lg border-2 border-warmWhite/30 transform translate-y-1/2">
                    <Heart className="w-5 h-5 fill-midnight-950 text-midnight-950" />
                  </div>
                )}
              </div>
            </motion.div>

            {/* Envelope Front Pocket Layers (Left, Right, Bottom folds) */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none z-25 overflow-hidden"
              style={{
                background: 'transparent',
              }}
            >
              {/* Left Pocket Fold */}
              <div
                className="absolute inset-y-0 left-0 w-full"
                style={{
                  clipPath: 'polygon(0% 0%, 0% 100%, 50% 50%)',
                  background: 'linear-gradient(90deg, #141E38 0%, #0F172C 100%)',
                  borderLeft: '1px solid rgba(200, 183, 240, 0.2)',
                }}
              />
              {/* Right Pocket Fold */}
              <div
                className="absolute inset-y-0 right-0 w-full"
                style={{
                  clipPath: 'polygon(100% 0%, 100% 100%, 50% 50%)',
                  background: 'linear-gradient(270deg, #141E38 0%, #0F172C 100%)',
                  borderRight: '1px solid rgba(200, 183, 240, 0.2)',
                }}
              />
              {/* Bottom Pocket Fold */}
              <div
                className="absolute inset-x-0 bottom-0 h-full"
                style={{
                  clipPath: 'polygon(0% 100%, 100% 100%, 50% 48%)',
                  background: 'linear-gradient(0deg, #1A2542 0%, #111A30 100%)',
                  borderBottom: '1px solid rgba(200, 183, 240, 0.3)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Action button when letter is opened */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-14 sm:mt-16 z-30"
            >
              <button
                onClick={onContinue}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-sans tracking-wider text-warmWhite glass-panel hover:bg-midnight-700/80 border border-lavender-soft/30 hover:border-lavender-soft transition-all duration-300 shadow-card-glow active:scale-95"
              >
                <span>Explore Her Little World</span>
                <ArrowDown className="w-4 h-4 text-lavender-soft animate-bounce" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

