import React, { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX, Music, Disc3 } from 'lucide-react'
import { ambientSynth } from '../utils/ambientSynth'

export default function AudioPlayer({ autoStartTrigger = false }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.4)
  const [usingSynth, setUsingSynth] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef(null)

  // Start audio on user trigger
  useEffect(() => {
    if (autoStartTrigger && !isPlaying && !hasInteracted) {
      startMusic()
    }
  }, [autoStartTrigger])

  const startMusic = async () => {
    setHasInteracted(true)
    const audio = audioRef.current

    if (audio && !usingSynth) {
      try {
        audio.volume = isMuted ? 0 : volume
        await audio.play()
        setIsPlaying(true)
      } catch (err) {
        // Fallback to ambient Web Audio synth if file is missing or blocked
        console.info('Audio file not found or failed, enabling ambient synth fallback:', err)
        setUsingSynth(true)
        ambientSynth.start()
        ambientSynth.setVolume(isMuted ? 0 : volume)
        setIsPlaying(true)
      }
    } else {
      setUsingSynth(true)
      ambientSynth.start()
      ambientSynth.setVolume(isMuted ? 0 : volume)
      setIsPlaying(true)
    }
  }

  const togglePlay = () => {
    if (isPlaying) {
      if (usingSynth) {
        ambientSynth.stop()
      } else if (audioRef.current) {
        audioRef.current.pause()
      }
      setIsPlaying(false)
    } else {
      startMusic()
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    const nextMuted = !isMuted
    setIsMuted(nextMuted)
    if (usingSynth) {
      ambientSynth.setVolume(nextMuted ? 0 : volume)
    } else if (audioRef.current) {
      audioRef.current.volume = nextMuted ? 0 : volume
    }
  }

  // Handle errors on the audio tag
  const handleAudioError = () => {
    if (isPlaying) {
      setUsingSynth(true)
      ambientSynth.start()
      ambientSynth.setVolume(isMuted ? 0 : volume)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/background-music.mp3"
        loop
        preload="auto"
        onError={handleAudioError}
      />

      {/* Floating Ambient Music Control */}
      <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
          className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-full glass-panel border transition-all duration-300 ${
            isPlaying
              ? 'border-lavender-soft/40 shadow-moon-subtle bg-midnight-800/80 text-warmWhite'
              : 'border-white/10 hover:border-lavender-soft/30 text-moonlight-silver/80 hover:text-white'
          }`}
        >
          {/* Animated disk icon */}
          <div className="relative flex items-center justify-center">
            <Disc3
              className={`w-4 h-4 transition-transform ${
                isPlaying ? 'animate-spin text-lavender-soft' : 'text-moonlight-silver/60'
              }`}
              style={{ animationDuration: '4s' }}
            />
            {isPlaying && (
              <span className="absolute -inset-1 rounded-full bg-lavender-soft/20 animate-ping opacity-60" />
            )}
          </div>

          {/* Sound wave visualizer when playing */}
          <div className="flex items-end gap-[3px] h-3.5 px-0.5">
            {[0.4, 0.8, 0.5, 0.9, 0.6].map((multiplier, idx) => (
              <span
                key={idx}
                className={`w-[2px] rounded-full transition-all duration-300 ${
                  isPlaying ? 'bg-lavender-soft' : 'bg-moonlight-silver/40'
                }`}
                style={{
                  height: isPlaying ? `${Math.max(4, multiplier * 14)}px` : '3px',
                  animation: isPlaying
                    ? `pulseSubtle ${0.6 + idx * 0.2}s ease-in-out infinite alternate`
                    : 'none',
                }}
              />
            ))}
          </div>

          <span className="text-xs font-sans tracking-wide pr-1 hidden sm:inline-block">
            {isPlaying ? 'Music On' : 'Play Music'}
          </span>

          {/* Mute button */}
          <div
            onClick={toggleMute}
            className="p-1 rounded-full hover:bg-white/10 transition-colors"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-blush-pink" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-moonlight-silver/70 group-hover:text-lavender-soft" />
            )}
          </div>
        </button>
      </div>
    </>
  )
}

