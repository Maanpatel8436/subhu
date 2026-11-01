import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ourMemoryData } from '../data/galleryData'
import { Heart, Sparkles, Camera, Eye, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Section05OurMemory() {
  const [currentSrc, setCurrentSrc] = useState(ourMemoryData.src)
  const [hasError, setHasError] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const sectionRef = useRef(null)
  const frameRef = useRef(null)

  const handleImgError = () => {
    if (currentSrc !== ourMemoryData.fallback && ourMemoryData.fallback) {
      setCurrentSrc(ourMemoryData.fallback)
    } else {
      setHasError(true)
    }
  }

  // Smooth GSAP reveal animation on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        frameRef.current,
        { opacity: 0, y: 55, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsLightboxOpen(false)
    }
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [isLightboxOpen])

  // Gentle mouse parallax calculation
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePos({ x: x * 8, y: y * 8 }) // gentle rotation in degrees
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <section
      ref={sectionRef}
      id="memory"
      className="relative min-h-screen w-full py-28 sm:py-36 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* Background celestial glow */}
      <div className="absolute w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-lavender-deep/10 via-blush-pink/10 to-transparent blur-[150px] pointer-events-none" />

      {/* Decorative stars */}
      <div className="absolute top-12 left-1/4 text-lavender-soft/30 animate-twinkle pointer-events-none">
        <Sparkles className="w-5 h-5" />
      </div>
      <div
        className="absolute bottom-16 right-1/4 text-blush-pink/30 animate-twinkle pointer-events-none"
        style={{ animationDelay: '1.5s' }}
      >
        <Sparkles className="w-4 h-4" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel text-xs uppercase tracking-widest text-lavender-soft font-sans mb-1 border border-lavender-soft/20">
            <Heart className="w-3.5 h-3.5 text-blush-rose fill-blush-rose/30" />
            <span>Section 05 • Our Memory</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-warmWhite font-light tracking-wide glow-text-moon">
            {ourMemoryData.heading}
          </h2>

          <p className="font-serif text-base sm:text-lg text-moonlight-silver/80 font-light italic max-w-xl mx-auto">
            "{ourMemoryData.subtitle}"
          </p>
        </div>

        {/* Cinematic Photo Frame (Polaroid-Inspired Layout with Moonlight Glow) */}
        <div
          ref={frameRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-2xl perspective-[1200px]"
        >
          {/* Subtle Outer Moonlight Aura Glow */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-lavender-soft/25 via-blush-pink/20 to-moonlight-silver/25 blur-2xl opacity-60 transition-opacity pointer-events-none" />

          <motion.div
            animate={{
              rotateX: -mousePos.y,
              rotateY: mousePos.x,
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 120 }}
            whileHover={{ scale: 1.015 }}
            onClick={() => setIsLightboxOpen(true)}
            className="group relative cursor-pointer p-4 sm:p-6 pb-7 sm:pb-9 bg-[#FBF8F4] text-[#1E2030] rounded-2xl shadow-2xl polaroid-shadow transition-all duration-500 border border-warmWhite/40"
            style={{
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 45px rgba(200, 183, 240, 0.22)',
            }}
          >
            {/* Top Vintage Tape Accent */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-sm border border-white/50 rotate-1 rounded-sm shadow-sm opacity-90" />

            {/* Photo Canvas (4:3 aspect ratio perfectly matching the 1024x768 photograph) */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-midnight-950">
              {!hasError ? (
                <img
                  src={currentSrc}
                  alt={ourMemoryData.alt}
                  loading="lazy"
                  onError={handleImgError}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-midnight-800 via-midnight-900 to-midnight-950 text-moonlight-silver border border-lavender-soft/20">
                  <Camera className="w-8 h-8 text-lavender-soft/70 mb-2" />
                  <span className="font-serif text-lg text-warmWhite">Our Shared Memory</span>
                  <span className="text-xs text-moonlight-silver/50 mt-1">{ourMemoryData.src}</span>
                </div>
              )}

              {/* Gentle Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Hover Eye Pill */}
              <div className="absolute inset-0 bg-midnight-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 rounded-full glass-panel text-warmWhite backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-sans">
                  <Eye className="w-4 h-4" />
                  <span>View Full Photo</span>
                </span>
              </div>
            </div>

            {/* Polaroid Handwritten Caption Area */}
            <div className="mt-4 sm:mt-5 text-center px-3">
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-[0.25em] block mb-1">
                ✦ Together ✦
              </span>
              <p className="font-script text-xl sm:text-2xl text-[#202334] font-medium leading-relaxed">
                {ourMemoryData.caption}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Subtitle Underneath */}
        <div className="mt-8 sm:mt-10 max-w-lg mx-auto">
          <p className="font-serif text-base sm:text-lg text-moonlight-silver/70 font-light leading-relaxed italic">
            "Some moments are simple, but somehow they stay with us a little longer."
          </p>
        </div>
      </div>

      {/* Dedicated Lightbox for Our Shared Memory */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight-950/95 backdrop-blur-xl p-4 sm:p-6"
          >
            {/* Top Bar with Close Button */}
            <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between z-10 pointer-events-none">
              <div className="pointer-events-auto px-4 py-1.5 rounded-full glass-panel text-xs sm:text-sm font-sans text-moonlight-silver/80">
                Our Memory ❤️
              </div>

              <button
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close memory preview"
                className="pointer-events-auto p-2.5 rounded-full glass-panel hover:bg-white/10 text-moonlight-silver hover:text-white transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            >
              {/* Uncropped Full-Resolution Photo */}
              <div className="relative rounded-xl overflow-hidden p-1 bg-gradient-to-b from-lavender-soft/30 via-midnight-800 to-blush-pink/20 shadow-2xl">
                <img
                  src={currentSrc}
                  alt={ourMemoryData.alt}
                  className="max-h-[74vh] w-auto max-w-full rounded-lg object-contain shadow-moon-subtle"
                />
              </div>

              {/* Caption Pill */}
              <div className="mt-4 px-6 py-2.5 rounded-full glass-panel border border-lavender-soft/20 text-center max-w-lg">
                <p className="font-serif text-base sm:text-lg text-warmWhite">
                  {ourMemoryData.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
