/**
 * Ambient Synth Fallback
 * Provides a gentle, dreamy celestial chime / music box progression
 * in case no local audio file is loaded yet.
 * Completely zero-dependency, pure Web Audio API.
 */

class AmbientSynth {
  constructor() {
    this.ctx = null
    this.isPlaying = false
    this.intervalId = null
    this.gainNode = null
    this.reverbNode = null
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (AudioCtx) {
        this.ctx = new AudioCtx()
        this.gainNode = this.ctx.createGain()
        this.gainNode.gain.setValueAtTime(0.18, this.ctx.currentTime) // soft volume
        this.gainNode.connect(this.ctx.destination)
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
  }

  playNote(freq, timeOffset = 0, duration = 3.5) {
    if (!this.ctx) return
    const now = this.ctx.currentTime + timeOffset

    const osc = this.ctx.createOscillator()
    const noteGain = this.ctx.createGain()

    // Warm, dreamy bell / celesta sound: triangle wave with subtle harmonic
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(freq, now)

    // Gentle envelope
    noteGain.gain.setValueAtTime(0.0001, now)
    noteGain.gain.exponentialRampToValueAtTime(0.2, now + 0.08) // soft attack
    noteGain.gain.exponentialRampToValueAtTime(0.06, now + 0.8) // decay
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration) // release

    osc.connect(noteGain)
    noteGain.connect(this.gainNode)

    osc.start(now)
    osc.stop(now + duration)
  }

  start() {
    this.init()
    if (!this.ctx || this.isPlaying) return
    this.isPlaying = true

    // Romantic midnight chord progression: Cmaj9 -> Am9 -> Fmaj7 -> Gadd9
    // Frequency tables for notes (Hz)
    const chords = [
      [261.63, 329.63, 392.00, 493.88, 587.33], // C, E, G, B, D (Cmaj9)
      [220.00, 261.63, 329.63, 392.00, 493.88], // A, C, E, G, B (Am9)
      [174.61, 261.63, 329.63, 349.23, 440.00], // F, C, E, F, A (Fmaj7)
      [196.00, 246.94, 293.66, 392.00, 440.00], // G, B, D, G, A (Gadd9)
    ]

    let chordIndex = 0

    const playChordArpeggio = () => {
      if (!this.isPlaying) return
      const notes = chords[chordIndex]
      // Arpeggiate softly
      notes.forEach((freq, idx) => {
        this.playNote(freq, idx * 0.35, 4.0)
      })
      // Occasional gentle high sparkle note
      if (Math.random() > 0.4) {
        const sparkleFreq = notes[Math.floor(Math.random() * notes.length)] * 2
        this.playNote(sparkleFreq, 1.8 + Math.random() * 0.5, 3.0)
      }
      chordIndex = (chordIndex + 1) % chords.length
    }

    playChordArpeggio()
    this.intervalId = setInterval(playChordArpeggio, 4200)
  }

  stop() {
    this.isPlaying = false
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  setVolume(volume) {
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(Math.max(0, Math.min(1, volume * 0.2)), this.ctx.currentTime)
    }
  }
}

export const ambientSynth = new AmbientSynth()

