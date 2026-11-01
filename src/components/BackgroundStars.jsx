import React, { useEffect, useRef } from 'react'

export default function BackgroundStars() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Realistic astronomical stellar colors (O/B/A/F/G type stars):
    // Crisp silver-white, subtle pale blue, faint lavender, gentle warm pearl
    const starColors = [
      'rgba(240, 242, 252, ', // Cool white (Vega-like)
      'rgba(225, 230, 245, ', // Silver-white
      'rgba(215, 205, 240, ', // Faint lavender
      'rgba(255, 248, 238, ', // Warm pearl
    ]

    // Density tuned for realistic deep space (neither cluttered nor empty)
    const starCount = Math.floor((width * height) / 4500)
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      // Mostly tiny distant pinpricks (0.4px - 0.9px), a few 1.3px bright stars
      radius: Math.random() > 0.85 ? Math.random() * 0.5 + 0.9 : Math.random() * 0.4 + 0.35,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      baseAlpha: Math.random() * 0.5 + 0.2, // soft, realistic visibility
      twinkleSpeed: Math.random() * 0.015 + 0.005, // very slow, serene twinkle
      phase: Math.random() * Math.PI * 2,
    }))

    // Ultra-delicate cosmic stardust particles (floating gently, very subtle)
    const particleCount = Math.min(25, Math.floor(width / 50))
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.4,
      vx: (Math.random() - 0.5) * 0.12,
      vy: -Math.random() * 0.18 - 0.06, // subtle upward drift
      alpha: Math.random() * 0.3 + 0.08,
      color: Math.random() > 0.5 ? 'rgba(215, 205, 240, ' : 'rgba(245, 220, 230, ',
    }))

    // Rare, delicate shooting star (every 10-18 seconds, gentle and realistic)
    const shootingStars = []
    let nextShootingStarTime = Date.now() + 5000

    const addShootingStar = () => {
      shootingStars.push({
        x: Math.random() * (width * 0.8),
        y: Math.random() * (height * 0.35),
        length: Math.random() * 60 + 50,
        speed: Math.random() * 5 + 8,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.15,
        alpha: 0.85,
        life: 0,
        maxLife: Math.random() * 20 + 25,
      })
      nextShootingStarTime = Date.now() + Math.random() * 10000 + 9000
    }

    let time = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Draw twinkling pinprick stars
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.phase)
        const alpha = Math.max(0.12, Math.min(0.9, star.baseAlpha + twinkle * 0.22))
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color + alpha + ')'
        ctx.fill()
      })

      // 2. Draw subtle floating cosmic particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.y < -10) p.y = height + 10
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color + p.alpha + ')'
        ctx.fill()
      })

      // 3. Rare, elegant shooting stars
      if (Date.now() > nextShootingStarTime) {
        addShootingStar()
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i]
        s.life++
        s.x += Math.cos(s.angle) * s.speed
        s.y += Math.sin(s.angle) * s.speed
        s.alpha = Math.max(0, 0.85 * (1 - s.life / s.maxLife))

        const tailX = s.x - Math.cos(s.angle) * s.length
        const tailY = s.y - Math.sin(s.angle) * s.length

        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY)
        grad.addColorStop(0, `rgba(255, 250, 245, ${s.alpha})`)
        grad.addColorStop(0.35, `rgba(215, 205, 240, ${s.alpha * 0.5})`)
        grad.addColorStop(1, 'rgba(200, 183, 240, 0)')

        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(tailX, tailY)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.2
        ctx.stroke()

        if (s.life >= s.maxLife || s.x > width + 100 || s.y > height + 100) {
          shootingStars.splice(i, 1)
        }
      }

      time++
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-75"
      style={{ willChange: 'transform' }}
    />
  )
}
