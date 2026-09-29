'use client'

import { useEffect, useRef } from 'react'

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0
    let animId: number
    let mouse = { x: -9999, y: -9999 }

    const COLORS = [
      'rgba(255,107,43,',   // orange
      'rgba(37,99,235,',    // blue
      'rgba(239,68,68,',    // red
      'rgba(245,158,11,',   // amber
      'rgba(96,165,250,',   // blue-light
      'rgba(255,154,108,',  // orange-light
    ]

    const ORBS = [
      { ox: 0.15, oy: 0.25, r: 250, color: 'rgba(255,107,43,', a: 0.07 },
      { ox: 0.85, oy: 0.65, r: 280, color: 'rgba(37,99,235,',  a: 0.06 },
      { ox: 0.5,  oy: 0.85, r: 200, color: 'rgba(239,68,68,',  a: 0.05 },
    ]
    let orbPhase = 0

    interface Particle {
      x: number; y: number
      vx: number; vy: number
      r: number; color: string
      alpha: number; life: number; age: number; pulse: number
    }

    let particles: Particle[] = []

    function resize() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    function createParticle(): Particle {
      return {
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    (Math.random() - 0.5) * 0.4,
        vy:    (Math.random() - 0.5) * 0.4,
        r:     Math.random() * 2.2 + 0.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: Math.random() * 0.55 + 0.2,
        life:  Math.random() * 220 + 100,
        age:   0,
        pulse: Math.random() * Math.PI * 2,
      }
    }

    function initParticles() {
      const count = Math.min(Math.floor(W * H / 10000), 150)
      particles = Array.from({ length: count }, createParticle)
    }

    function updateParticle(p: Particle) {
      const dx = mouse.x - p.x, dy = mouse.y - p.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 150) {
        const force = (150 - dist) / 150 * 0.5
        p.vx -= (dx / dist) * force
        p.vy -= (dy / dist) * force
      }
      p.vx *= 0.99; p.vy *= 0.99
      p.x += p.vx;  p.y += p.vy
      p.age++; p.pulse += 0.04
      if (p.x < 0 || p.x > W || p.y < 0 || p.y > H || p.age > p.life) {
        Object.assign(p, createParticle())
      }
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            const a = (1 - dist / 120) * 0.1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = (i + j) % 2 === 0
              ? `rgba(255,107,43,${a})`
              : `rgba(37,99,235,${a})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    function drawOrbs() {
      orbPhase += 0.007
      ORBS.forEach((orb, i) => {
        const px = orb.ox * W + Math.sin(orbPhase + i * 1.2) * 70
        const py = orb.oy * H + Math.cos(orbPhase + i * 0.9) * 50
        const grad = ctx.createRadialGradient(px, py, 0, px, py, orb.r)
        grad.addColorStop(0, orb.color + orb.a + ')')
        grad.addColorStop(1, orb.color + '0)')
        ctx.beginPath()
        ctx.arc(px, py, orb.r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })
    }

    function animate() {
      ctx.clearRect(0, 0, W, H)
      drawOrbs()
      drawConnections()
      particles.forEach(p => {
        updateParticle(p)
        const pa = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color + pa + ')'
        ctx.fill()
      })
      animId = requestAnimationFrame(animate)
    }

    // Scroll progress bar
    function updateScrollProgress() {
      const bar = document.getElementById('scroll-progress')
      if (!bar) return
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      bar.style.width = pct + '%'
    }

    window.addEventListener('resize', () => { resize(); initParticles() })
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY })
    window.addEventListener('scroll', updateScrollProgress)

    resize()
    initParticles()
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', () => { resize(); initParticles() })
      window.removeEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY })
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="portfolio-canvas"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
