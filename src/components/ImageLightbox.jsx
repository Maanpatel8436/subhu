import React, { useEffect, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react'

export default function ImageLightbox({
  isOpen,
  photos,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) {
  const currentPhoto = photos[currentIndex]
  const [imgSrc, setImgSrc] = useState(currentPhoto?.src)

  useEffect(() => {
    if (currentPhoto) {
      setImgSrc(currentPhoto.src)
    }
  }, [currentIndex, currentPhoto])

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    },
    [isOpen, onClose, onNext, onPrev]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen || !currentPhoto) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight-950/95 backdrop-blur-xl p-3 sm:p-6"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between z-10 pointer-events-none">
          <div className="pointer-events-auto px-4 py-1.5 rounded-full glass-panel text-xs sm:text-sm font-sans text-moonlight-silver/80">
            {currentIndex + 1} / {photos.length}
          </div>

          <button
            onClick={onClose}
            aria-label="Close photo preview"
            className="pointer-events-auto p-2.5 rounded-full glass-panel hover:bg-white/10 text-moonlight-silver hover:text-white transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Previous Button */}
        {photos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            aria-label="Previous photograph"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-3 sm:p-3.5 rounded-full glass-panel hover:bg-white/10 text-moonlight-silver hover:text-white transition-all active:scale-95 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Next Button */}
        {photos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            aria-label="Next photograph"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-3 sm:p-3.5 rounded-full glass-panel hover:bg-white/10 text-moonlight-silver hover:text-white transition-all active:scale-95 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Image Content Container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Main Image with delicate glowing border */}
          <div className="relative rounded-xl overflow-hidden p-1 bg-gradient-to-b from-lavender-soft/30 via-midnight-800 to-blush-pink/20 shadow-2xl">
            <img
              src={imgSrc}
              alt={currentPhoto.alt || currentPhoto.caption || 'Photo'}
              className="max-h-[72vh] w-auto max-w-full rounded-lg object-contain shadow-moon-subtle"
              onError={() => {
                if (imgSrc !== currentPhoto.fallback && currentPhoto.fallback) {
                  setImgSrc(currentPhoto.fallback)
                }
              }}
            />
          </div>

          {/* Caption Underneath */}
          {currentPhoto.caption && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="mt-4 px-6 py-2.5 rounded-full glass-panel border border-lavender-soft/20 text-center max-w-lg"
            >
              <p className="font-serif text-base sm:text-lg text-warmWhite flex items-center justify-center gap-2">
                <span>{currentPhoto.caption}</span>
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
