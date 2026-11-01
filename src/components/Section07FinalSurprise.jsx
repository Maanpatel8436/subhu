import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GlowingMoon from './GlowingMoon'
import { Heart, Sparkles, Moon, ArrowRight } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function Section07FinalSurprise({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNextStep = (next) => {
    setCurrentStep(next)
    if (next === 2) {
      // Message 3 (Love): Celebration bloom
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F0BFD0', '#C8B7F0', '#FFF8F2'],
        ticks: 250,
      })
    }
  }

  return (
    <section
      id="final-surprise"
      className={`relative min-h-screen w-full py-28 sm:py-36 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center select-none overflow-hidden transition-colors duration-1000 ${
        currentStep >= 2 ? 'bg-[#0B1226]' : 'bg-[#080D1B]'
      }`}
    >
      {/* Dynamic Luminous Aura */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
          currentStep >= 2 ? 'opacity-40' : 'opacity-20'
        }`}
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgba(200, 183, 240, 0.25) 0%, rgba(240, 191, 208, 0.15) 40%, transparent 75%)',
        }}
      />

      {/* Floating Hearts in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [-20, -180],
              x: [(i % 2 === 0 ? 1 : -1) * (i * 10), (i % 2 === 0 ? -1 : 1) * (i * 20)],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 1.2,
              ease: 'easeInOut',
            }}
            className="absolute text-blush-pink/40"
            style={{
              left: `${15 + i * 10}%`,
              bottom: '10%',
            }}
          >
            <Heart className="w-4 h-4 fill-blush-pink/20" />
          </motion.div>
        ))}
      </div>

      {/* Center glowing moon */}
      <div className="relative mb-8 sm:mb-12 pointer-events-none">
        <GlowingMoon size={currentStep >= 2 ? 'large' : 'medium'} />
      </div>

      {/* Content Card with Steps */}
      <div className="max-w-2xl mx-auto relative z-10 w-full text-center">
        
        {/* Step Indicator Pills */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[0, 1, 2, 3].map((step) => (
            <button
              key={step}
              onClick={() => handleNextStep(step)}
              aria-label={`Go to message step ${step + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentStep === step
                  ? 'w-8 bg-lavender-soft shadow-moon-subtle'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 0: FIRST MESSAGE */}
          {currentStep === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <span className="font-sans text-xs uppercase tracking-[0.25em] text-lavender-soft/70 block">
                The Final Surprise ✨
              </span>
              <h2 className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-lavender-soft glow-text-lavender">
                Heyyy, one last thing...
              </h2>
              <p className="font-serif text-lg sm:text-xl text-moonlight-silver/80 font-light max-w-md mx-auto italic">
                Take a quiet moment, take a breath, and read this with an open heart.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => handleNextStep(1)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-serif text-base text-warmWhite glass-panel border border-lavender-soft/30 hover:border-lavender-soft shadow-card-glow hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4 text-lavender-soft" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 1: SECOND MESSAGE */}
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 sm:space-y-8 glass-panel p-6 sm:p-10 rounded-3xl border border-lavender-soft/25 shadow-2xl"
            >
              <h3 className="font-serif text-2xl sm:text-3xl text-warmWhite font-light">
                "You know what? I don't think you realise how special you are."
              </h3>

              <div className="space-y-4 font-serif text-base sm:text-lg text-moonlight-silver/90 font-light leading-relaxed">
                <p>
                  There's just something about youuu... your smile, your little talks, your cuteness and even those tiny things you do without realising.
                </p>
                <p className="text-blush-pink font-normal">
                  Somehow, they make me smile more than you can imagine. 🥹❤️
                </p>
                <p>
                  If I could, I'd remind you every single day how precious you are.
                  You deserve all the happiness, love and beautiful things in this world.
                </p>
                <p className="italic text-lavender-soft pt-2">
                  And haan, don't forget to smileee, because someone here is secretly a very big fan of that smile of yours.
                  <span className="block mt-1 font-script text-2xl">Hehe! 🙈</span>
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNextStep(2)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-serif text-base text-warmWhite glass-panel border border-blush-pink/40 hover:border-blush-pink shadow-card-glow hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>There's something more ❤️</span>
                  <ArrowRight className="w-4 h-4 text-blush-pink" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: THIRD MESSAGE — LOVE */}
          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 glass-panel p-8 sm:p-12 rounded-3xl border border-blush-pink/40 shadow-love-glow"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.05, 1], opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
              >
                <h2 className="font-handwriting text-5xl sm:text-7xl md:text-8xl text-blush-pink glow-text-pink tracking-wide">
                  I LOVE YOUUU! ❤️
                </h2>
              </motion.div>

              <div className="space-y-4 max-w-lg mx-auto font-serif text-base sm:text-xl text-warmWhite font-light leading-relaxed">
                <p>
                  You genuinely mean a lot to me, and I'm really glad to have you in my life. ❤️
                </p>
                <p className="text-lavender-soft text-lg sm:text-2xl font-serif pt-2">
                  Sending you the biggest virtual huggg! 🫂
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleNextStep(3)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-serif text-base text-warmWhite glass-panel border border-lavender-soft/40 hover:border-lavender-soft shadow-moon-subtle hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>Good Night Message 🌙</span>
                  <ArrowRight className="w-4 h-4 text-lavender-soft" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: FOURTH MESSAGE — GOOD NIGHT */}
          {currentStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-7 glass-panel p-8 sm:p-12 rounded-3xl border border-lavender-soft/30 shadow-2xl"
            >
              <div className="inline-flex items-center justify-center gap-2 text-lavender-soft">
                <Moon className="w-5 h-5 text-moonlight-silver" />
                <span className="font-mono text-xs uppercase tracking-widest text-moonlight-silver/60">
                  Sweet Dreams
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-warmWhite font-light tracking-wide glow-text-moon">
                GOOD NIGHT, MY CUTIEEE! 🌙
              </h2>

              <div className="space-y-4 font-serif text-base sm:text-lg text-moonlight-silver/90 font-light leading-relaxed max-w-lg mx-auto">
                <p>
                  Now put that pretty little smile on your face, close your eyes and sleep peacefully.
                  <span className="block mt-1 font-medium text-warmWhite">No overthinking, okayyy?</span>
                </p>
                <p>
                  Sweet sleep, sweetest dreams and lots of hugs for youuu.
                  <span className="block mt-1 text-lavender-soft font-normal">
                    Take care of yourself, my favourite human. ❤️✨
                  </span>
                </p>
                <p className="font-handwriting text-3xl sm:text-4xl text-blush-pink pt-2">
                  Good nighttt, babeee! 🥰
                </p>
              </div>

              {/* Transition to Section 08 */}
              <div className="pt-6">
                <button
                  onClick={onComplete}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-serif text-base sm:text-lg text-warmWhite glass-panel border border-blush-pink/50 hover:border-blush-pink shadow-card-glow hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>One Last Thing... ❤️</span>
                  <Sparkles className="w-4 h-4 text-blush-pink" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

