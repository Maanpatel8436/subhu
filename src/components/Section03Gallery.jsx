import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { galleryPhotos } from '../data/galleryData'
import ImageLightbox from './ImageLightbox'
import { Sparkles, Camera, Heart, Eye, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// Shared image loader with graceful fallback and precise face framing
function GalleryImage({ src, fallback, alt, objectPosition = 'center center', className = '' }) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleImgError = () => {
    if (currentSrc !== fallback && fallback) {
      setCurrentSrc(fallback)
    } else {
      setHasError(true)
    }
  }

  if (hasError) {
    return (
      <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-midnight-800 via-midnight-900 to-midnight-950 text-moonlight-silver border border-lavender-soft/20 rounded-xl">
        <Camera className="w-8 h-8 text-lavender-soft/70 mb-2" />
        <span className="font-serif text-sm text-warmWhite">Photograph</span>
        <span className="text-[10px] text-moonlight-silver/50 mt-1">{src}</span>
      </div>
    )
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading="lazy"
      onError={handleImgError}
      style={{ objectPosition }}
      className={`w-full h-full object-cover transition-transform duration-700 ease-out ${className}`}
    />
  )
}

export default function Section03Gallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null)
  const sectionRef = useRef(null)

  const photo1 = galleryPhotos[0] // Slot 1: Cinematic Introduction
  const photo2 = galleryPhotos[1] // Slot 2: Polaroid frame (Pink Dress)
  const photo3 = galleryPhotos[2] // Slot 3: Editorial portrait (Evening Glam)
  const photo4 = galleryPhotos[3] // Slot 4: Polaroid frame (Palace Arches)
  const photo5 = galleryPhotos[4] // Slot 5: Final Visual Highlight (Sea Bridge)

  // Subtle GSAP scroll-triggered entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.gsap-gallery-card')
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleOpenLightbox = (index) => {
    setSelectedPhotoIndex(index)
  }

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null)
  }

  const handleNextPhoto = () => {
    setSelectedPhotoIndex((prev) => (prev + 1) % galleryPhotos.length)
  }

  const handlePrevPhoto = () => {
    setSelectedPhotoIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length)
  }

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative min-h-screen w-full py-24 sm:py-32 px-4 sm:px-6 md:px-12 select-none"
    >
      {/* Background celestial glow elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-lavender-soft/5 blur-[130px] pointer-events-none" />
      <div className="absolute top-2/3 -right-32 w-96 h-96 rounded-full bg-blush-pink/5 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel text-xs uppercase tracking-widest text-lavender-soft font-sans mb-1 border border-lavender-soft/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 03 • 5 Moments</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-warmWhite font-normal tracking-wide glow-text-moon">
            A Little Gallery of You
          </h2>

          <p className="font-serif text-base sm:text-lg md:text-xl text-moonlight-silver/80 font-light italic">
            "Because some moments deserve to be admired a little longer."
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* 1. CINEMATIC INTRODUCTION (PHOTOGRAPH 1) */}
        {/* ========================================================================= */}
        {photo1 && (
          <div className="gsap-gallery-card w-full max-w-3xl mx-auto">
            <div className="text-center mb-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-lavender-soft/75">
                ✦ The Opening Glimpse ✦
              </span>
            </div>

            <motion.div
              whileHover={{ scale: 1.015, y: -4 }}
              onClick={() => handleOpenLightbox(0)}
              className="group relative cursor-pointer rounded-2xl sm:rounded-3xl p-3 sm:p-4 glass-panel border border-lavender-soft/30 hover:border-lavender-soft/60 shadow-moon-glow transition-all duration-500 overflow-hidden"
            >
              {/* Soft Moonlight Aura Backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-lavender-soft/20 via-blush-pink/15 to-moonlight-silver/20 blur-xl opacity-40 group-hover:opacity-75 transition-opacity pointer-events-none" />

              <div className="relative aspect-[3/4] sm:aspect-[4/4.5] max-h-[580px] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-midnight-950">
                <GalleryImage
                  src={photo1.src}
                  fallback={photo1.fallback}
                  alt={photo1.alt}
                  objectPosition={photo1.objectPosition}
                  className="group-hover:scale-105"
                />

                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/85 via-midnight-950/15 to-transparent pointer-events-none" />

                {/* Top Corner Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-3 py-1 rounded-full glass-panel text-[11px] font-sans text-moonlight-silver/90 border border-white/10 flex items-center gap-1.5 backdrop-blur-md">
                    <Star className="w-3 h-3 text-lavender-soft fill-lavender-soft/40" />
                    <span>01 • Introduction</span>
                  </span>
                </div>

                {/* Hover Eye Pill */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2.5 rounded-full glass-panel text-warmWhite flex items-center justify-center backdrop-blur-md shadow-lg">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Caption Pill */}
                {photo1.caption && (
                  <div className="absolute bottom-4 inset-x-4 flex items-end justify-between">
                    <div className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full glass-panel border border-lavender-soft/30 backdrop-blur-md max-w-[90%]">
                      <p className="font-serif text-sm sm:text-base md:text-lg text-warmWhite">
                        {photo1.caption}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2 & 3. POLAROID & EDITORIAL PORTRAIT (PHOTOGRAPHS 2 & 3) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center max-w-4xl mx-auto">
          {/* PHOTOGRAPH 2: POLAROID FRAME (Pink Dress) */}
          {photo2 && (
            <div className="gsap-gallery-card">
              <motion.div
                whileHover={{ scale: 1.025, rotate: '0deg', zIndex: 10 }}
                onClick={() => handleOpenLightbox(1)}
                style={{ transform: `rotate(${photo2.tilt || '-2deg'})` }}
                className="group relative cursor-pointer p-4 pb-8 bg-[#FBF8F4] text-[#1E2030] rounded-xl shadow-2xl polaroid-shadow transition-all duration-500 border border-warmWhite/30"
              >
                {/* Vintage Tape Accent */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-white/40 backdrop-blur-sm border border-white/50 rotate-1 rounded-sm shadow-sm" />

                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-midnight-950">
                  <GalleryImage
                    src={photo2.src}
                    fallback={photo2.fallback}
                    alt={photo2.alt}
                    objectPosition={photo2.objectPosition}
                    className="group-hover:scale-105"
                  />

                  {/* Hover Eye Pill */}
                  <div className="absolute inset-0 bg-midnight-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-full glass-panel text-warmWhite shadow-lg">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Polaroid Caption */}
                <div className="mt-4 text-center px-2">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-1">
                    02 • Moment
                  </span>
                  <p className="font-script text-lg sm:text-xl text-[#222538] leading-tight font-medium">
                    {photo2.caption || 'A precious moment ❤️'}
                  </p>
                </div>
              </motion.div>
            </div>
          )}

          {/* PHOTOGRAPH 3: EDITORIAL PORTRAIT (Evening Glam) */}
          {photo3 && (
            <div className="gsap-gallery-card">
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                onClick={() => handleOpenLightbox(2)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden glass-panel border border-lavender-soft/25 hover:border-lavender-soft/50 shadow-card-glow transition-all duration-500"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-midnight-950">
                  <GalleryImage
                    src={photo3.src}
                    fallback={photo3.fallback}
                    alt={photo3.alt}
                    objectPosition={photo3.objectPosition}
                    className="group-hover:scale-105"
                  />

                  {/* Gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/85 via-midnight-950/15 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full glass-panel text-[10px] font-mono tracking-wider text-moonlight-silver/80 border border-white/10">
                      03 • Editorial
                    </span>
                  </div>

                  {/* Hover Eye Pill */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2 rounded-full glass-panel text-warmWhite shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Bottom Caption */}
                  {photo3.caption && (
                    <div className="absolute bottom-4 inset-x-4">
                      <div className="px-4 py-2 rounded-full glass-panel border border-white/10 backdrop-blur-md">
                        <p className="font-serif text-sm sm:text-base text-warmWhite truncate">
                          {photo3.caption}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 4. POLAROID FRAME (PHOTOGRAPH 4 - Palace Arches) */}
        {/* ========================================================================= */}
        {photo4 && (
          <div className="gsap-gallery-card max-w-md mx-auto">
            <motion.div
              whileHover={{ scale: 1.025, rotate: '0deg', zIndex: 10 }}
              onClick={() => handleOpenLightbox(3)}
              style={{ transform: `rotate(${photo4.tilt || '2deg'})` }}
              className="group relative cursor-pointer p-4 pb-8 bg-[#FBF8F4] text-[#1E2030] rounded-xl shadow-2xl polaroid-shadow transition-all duration-500 border border-warmWhite/30"
            >
              {/* Tape Accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-white/40 backdrop-blur-sm border border-white/50 -rotate-1 rounded-sm shadow-sm" />

              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-midnight-950">
                <GalleryImage
                  src={photo4.src}
                  fallback={photo4.fallback}
                  alt={photo4.alt}
                  objectPosition={photo4.objectPosition}
                  className="group-hover:scale-105"
                />

                {/* Hover Eye Pill */}
                <div className="absolute inset-0 bg-midnight-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full glass-panel text-warmWhite shadow-lg">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Polaroid Caption */}
              <div className="mt-4 text-center px-2">
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block mb-1">
                  04 • Candid
                </span>
                <p className="font-script text-lg sm:text-xl text-[#222538] leading-tight font-medium">
                  {photo4.caption || 'Pretty without even trying. 🙈'}
                </p>
              </div>
            </motion.div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. THE FINAL VISUAL HIGHLIGHT (PHOTOGRAPH 5 - Sea Bridge) */}
        {/* ========================================================================= */}
        {photo5 && (
          <div className="gsap-gallery-card w-full max-w-3xl mx-auto pt-6">
            <div className="text-center mb-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-blush-pink">
                ✦ The Final Highlight ✦
              </span>
            </div>

            <motion.div
              whileHover={{ scale: 1.015, y: -4 }}
              onClick={() => handleOpenLightbox(4)}
              className="group relative cursor-pointer rounded-2xl sm:rounded-3xl p-3 sm:p-5 glass-panel border border-blush-pink/40 hover:border-blush-pink shadow-love-glow transition-all duration-500 overflow-hidden"
            >
              {/* Outer Luminous Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blush-pink/25 via-lavender-soft/25 to-moonlight-silver/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />

              <div className="relative aspect-square sm:aspect-[4/3] max-h-[580px] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-midnight-950">
                <GalleryImage
                  src={photo5.src}
                  fallback={photo5.fallback}
                  alt={photo5.alt}
                  objectPosition={photo5.objectPosition}
                  className="group-hover:scale-105"
                />

                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/85 via-midnight-950/10 to-transparent pointer-events-none" />

                {/* Corner Decorative Stars */}
                <div className="absolute top-3 left-3 text-lavender-soft/80 text-sm">✦</div>
                <div className="absolute top-3 right-3 text-lavender-soft/80 text-sm">✦</div>

                {/* Hover Eye Pill */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-2.5 rounded-full glass-panel text-warmWhite flex items-center justify-center backdrop-blur-md shadow-lg">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Highlight Caption Bar */}
                <div className="absolute bottom-4 inset-x-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="px-5 py-2.5 rounded-full glass-panel border border-blush-pink/30 backdrop-blur-md max-w-fit">
                    <p className="font-serif text-base sm:text-lg md:text-xl text-warmWhite">
                      {photo5.caption || 'My favourite little view.'}
                    </p>
                  </div>
                  <span className="text-xs font-serif italic text-moonlight-silver/80 px-2 sm:px-0">
                    "{photo5.quote || 'Because some views are simply unforgettable.'}"
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Subtle Bottom Interaction Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-center text-xs font-sans text-moonlight-silver/50 flex items-center justify-center gap-1.5 pt-4"
        >
          <span>Tap on any photograph to view full size</span>
          <Heart className="w-3 h-3 text-blush-pink inline fill-blush-pink/30" />
        </motion.div>
      </div>

      {/* Lightbox Modal for the 5 Photos */}
      <ImageLightbox
        isOpen={selectedPhotoIndex !== null}
        photos={galleryPhotos}
        currentIndex={selectedPhotoIndex || 0}
        onClose={handleCloseLightbox}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
      />
    </section>
  )
}
