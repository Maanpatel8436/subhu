import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, Feather } from 'lucide-react'

const letterParagraphs = [
  "Heyyy cutieee,",
  "I don't know if I can put everything into words, but I really wanted to make something special for you.",
  "You are genuinely one of those people who can make an ordinary day feel a little more beautiful.",
  "I love your little talks, your smile, your cuteness and all those tiny things that make you who you are.",
  "Sometimes, I wish you could see yourself the way I see you. Maybe then you'd understand just how special you are.",
  "I hope you always keep smiling, keep chasing the things that make you happy and never doubt how wonderful you are.",
  "You deserve so much happiness, and I hope life gives you countless reasons to smile.",
  "And yes, this little website is just my way of reminding you that someone thinks you're pretty amazing.",
  "Sending you the biggest huggg! ❤️",
]

export default function Section06LetterFromMe() {
  return (
    <section id="letter-from-me" className="relative min-h-screen w-full py-28 sm:py-36 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center select-none overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-lavender-soft/5 blur-[160px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs uppercase tracking-widest text-lavender-soft font-sans mb-1">
            <Feather className="w-3.5 h-3.5 text-lavender-soft" />
            <span>Section 06</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-warmWhite font-light tracking-wide glow-text-moon">
            A Few Words From My Heart...
          </h2>
          <p className="font-serif text-sm sm:text-base text-moonlight-silver/70 italic">
            Written slowly, with you in mind.
          </p>
        </motion.div>

        {/* The Letter Parchment Surface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-7 sm:p-12 md:p-14 rounded-3xl shadow-letter-glow overflow-hidden"
          style={{
            background: 'linear-gradient(165deg, rgba(255, 252, 248, 0.96) 0%, rgba(248, 242, 235, 0.94) 100%)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 35px rgba(240, 191, 208, 0.15)',
            border: '1px solid rgba(240, 191, 208, 0.3)',
          }}
        >
          {/* Subtle watermarked corner crest */}
          <div className="absolute top-4 right-4 text-blush-rose/20 pointer-events-none">
            <Sparkles className="w-12 h-12" />
          </div>

          {/* Letter Inner Border */}
          <div className="border border-blush-rose/15 rounded-2xl p-6 sm:p-8 space-y-5 text-midnight-950 font-serif leading-relaxed">
            
            {/* Paragraphs revealed step by step */}
            {letterParagraphs.map((para, index) => {
              const isGreeting = index === 0
              const isHug = index === letterParagraphs.length - 1

              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className={`${
                    isGreeting
                      ? 'font-handwriting text-3xl sm:text-4xl text-midnight-900 mb-4'
                      : isHug
                      ? 'font-medium text-lg sm:text-xl text-blush-rose pt-2'
                      : 'text-base sm:text-lg text-[#252838] font-light leading-relaxed'
                  }`}
                >
                  {para}
                </motion.p>
              )
            })}

            {/* Handwritten Signature */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.9 }}
              className="pt-8 mt-6 border-t border-blush-rose/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 fill-blush-rose text-blush-rose" />
                <span className="font-handwriting text-2xl sm:text-3xl text-midnight-900">
                  Made with lots of love, just for you. ❤️
                </span>
              </div>
              <span className="text-xs font-mono tracking-widest text-[#6B7085] uppercase">
                Forever & Always
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

