import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import BackgroundStars from './components/BackgroundStars'
import AudioPlayer from './components/AudioPlayer'
import Section01Opening from './components/Section01Opening'
import Section02Envelope from './components/Section02Envelope'
import Section03Gallery from './components/Section03Gallery'
import Section04Appreciation from './components/Section04Appreciation'
import Section05OurMemory from './components/Section05OurMemory'
import Section06LetterFromMe from './components/Section06LetterFromMe'
import Section07FinalSurprise from './components/Section07FinalSurprise'
import Section08OneLastThing from './components/Section08OneLastThing'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [audioTrigger, setAudioTrigger] = useState(false)
  const mainRef = useRef(null)

  // Scroll smoothly to any section by element ID
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handler for Opening Experience button
  const handleOpenSurprise = () => {
    setAudioTrigger(true)
    scrollToSection('envelope-section')
  }

  // Setup GSAP section transitions and parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle parallax on moonlight / background glows
      gsap.utils.toArray('section').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0.95 },
          {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'top 30%',
              scrub: 0.5,
            },
          }
        )
      })
    }, mainRef)

    return () => ctx.revert() // Clean up GSAP context & ScrollTriggers on unmount
  }, [])

  return (
    <div ref={mainRef} className="relative min-h-screen bg-[#080D1B] text-[#FFF8F2] overflow-x-hidden selection:bg-[#C8B7F0]/30 selection:text-white">
      {/* 1. Cinematic Night Sky with Stars, Shooting Stars & Stardust */}
      <BackgroundStars />

      {/* 2. Floating Ambient Music Player */}
      <AudioPlayer autoStartTrigger={audioTrigger} />

      {/* Main Experience Flow */}
      <main className="relative z-10 flex flex-col w-full">
        {/* SECTION 01: The Opening Experience */}
        <Section01Opening onOpenSurprise={handleOpenSurprise} />

        {/* SECTION 02: The Little Envelope */}
        <Section02Envelope onContinue={() => scrollToSection('gallery')} />

        {/* SECTION 03: Her Little World (Photo Gallery) */}
        <Section03Gallery />

        {/* SECTION 04: A Little Appreciation */}
        <Section04Appreciation />

        {/* SECTION 05: Our Little Memory */}
        <Section05OurMemory />

        {/* SECTION 06: A Letter From Me */}
        <Section06LetterFromMe />

        {/* SECTION 07: The Final Surprise */}
        <Section07FinalSurprise onComplete={() => scrollToSection('one-last-thing')} />

        {/* SECTION 08: One Last Little Thing */}
        <Section08OneLastThing />
      </main>
    </div>
  )
}

