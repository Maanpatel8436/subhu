import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Sun, Star, Feather } from 'lucide-react'

const appreciationMessages = [
  {
    id: 1,
    number: '01',
    text: 'Your smile has a way of making everything feel a little brighter.',
    icon: Sun,
    accent: 'from-blush-pink/20 to-lavender-soft/10',
  },
  {
    id: 2,
    number: '02',
    text: 'You are beautiful in ways that go far beyond appearances.',
    icon: Sparkles,
    accent: 'from-lavender-soft/20 to-moonlight-silver/10',
  },
  {
    id: 3,
    number: '03',
    text: 'Never underestimate how special your little presence can be.',
    icon: Star,
    accent: 'from-moonlight-silver/20 to-blush-pink/10',
  },
  {
    id: 4,
    number: '04',
    text: 'You deserve happiness, kindness and all the beautiful things in life.',
    icon: Feather,
    accent: 'from-lavender-deep/20 to-lavender-soft/10',
  },
  {
    id: 5,
    number: '05',
    text: 'And please, never stop being your adorable self. ❤️',
    icon: Heart,
    accent: 'from-blush-rose/30 to-blush-pink/15',
    isSpecial: true,
  },
]

export default function Section04Appreciation() {
  return (
    <section id="appreciation" className="relative min-h-screen w-full py-24 sm:py-32 px-4 sm:px-6 md:px-12 select-none">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-lavender-deep/5 blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-xl mx-auto mb-16 sm:mb-20 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs uppercase tracking-widest text-lavender-soft font-sans mb-1">
            <Heart className="w-3.5 h-3.5 text-blush-pink" />
            <span>Section 04</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-warmWhite font-light tracking-wide glow-text-moon">
            Things I Hope You Never Forget...
          </h2>
          <p className="font-serif text-sm sm:text-base text-moonlight-silver/70 italic">
            Just a few gentle reminders for your heart.
          </p>
        </motion.div>

        {/* Cards Stack */}
        <div className="space-y-6 sm:space-y-8">
          {appreciationMessages.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                whileHover={{ scale: 1.015, y: -2 }}
                className={`relative p-6 sm:p-8 rounded-2xl glass-panel border transition-all duration-500 overflow-hidden group shadow-card-glow ${
                  item.isSpecial
                    ? 'border-blush-pink/40 bg-gradient-to-r from-midnight-800/90 via-midnight-800/70 to-midnight-900/90'
                    : 'border-lavender-soft/15 hover:border-lavender-soft/35'
                }`}
              >
                {/* Subtle gradient wash behind text */}
                <div
                  className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${item.accent} opacity-40 group-hover:opacity-75 transition-opacity blur-2xl pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
                  
                  {/* Left: Number and icon */}
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-2xl sm:text-3xl font-light text-lavender-soft/50 group-hover:text-lavender-soft transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-lavender-soft border border-white/10 group-hover:scale-110 transition-transform">
                      <IconComponent className={`w-4 h-4 ${item.isSpecial ? 'text-blush-pink fill-blush-pink/30' : ''}`} />
                    </div>
                  </div>

                  {/* Middle / Right: The Sweet Message */}
                  <div className="flex-1 sm:text-left">
                    <p className="font-serif text-lg sm:text-xl md:text-2xl text-warmWhite font-light leading-relaxed">
                      "{item.text}"
                    </p>
                  </div>
                </div>

                {/* Bottom subtle shimmer bar on hover */}
                <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-lavender-soft/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

