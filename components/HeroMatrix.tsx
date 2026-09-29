'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function HeroMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // ASCII characters for matrix effect
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const fontSize = 14
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    function draw() {
      if (!ctx || !canvas) return
      
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#3b82f6'
      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length))
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Ritvik200', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/g-ritvik', label: 'LinkedIn' },
    { icon: <SiLeetcode />, href: 'https://leetcode.com/Ritvik', label: 'LeetCode' },
    { icon: <FaEnvelope />, href: 'mailto:ganugaritwik@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Matrix Rain Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - ASCII Art Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative">
              {/* Glowing effect behind ASCII */}
              <motion.div
                className="absolute inset-0 blur-3xl opacity-30"
                animate={{
                  background: [
                    'radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 70%)',
                    'radial-gradient(circle at 50% 50%, #8b5cf6 0%, transparent 70%)',
                    'radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 70%)',
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* ASCII Art Container */}
              <div className="relative glass rounded-2xl p-8 border border-primary/20 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="font-mono text-[8px] md:text-[10px] leading-tight text-blue-400 whitespace-pre select-none"
                  style={{ fontFamily: 'Courier New, monospace' }}
                >
{`
████████████████████████████████████████████████
██░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░██
██░░░░░░░░░░▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░░░░░░░██
██░░░░░░▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░░░██
██░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░██
██░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░██
██░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░██
██░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░██
██░▒▓▓▓▓▓▓▓▓▓▓██████▓▓▓▓▓▓██████▓▓▓▓▓▓▓▓▓▒░░░░██
██░▒▓▓▓▓▓▓▓▓██░░░░░░██▓▓██░░░░░░██▓▓▓▓▓▓▓▒░░░░██
██░▒▓▓▓▓▓▓▓▓██░░░░░░██▓▓██░░░░░░██▓▓▓▓▓▓▓▒░░░░██
██░▒▓▓▓▓▓▓▓▓▓███████▓▓▓▓▓▓███████▓▓▓▓▓▓▓▓▒░░░░██
██░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░██
██░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░██
██░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░██
██░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░██
██░░▒▓▓▓▓▓▓▓▓▓▓▓▓██████████████▓▓▓▓▓▓▓▓▓▒░░░░░██
██░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░██
██░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░██
██░░░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░██
██░░░░░░░░░▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒░░░░░░░░░░░░░░██
██░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░██
████████████████████████████████████████████████
       < FULL STACK DEVELOPER />
`}
                </motion.div>

                {/* Scanline effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ y: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="h-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
                </motion.div>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-left"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block mb-6"
            >
              <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                <span className="text-primary">{'<'}</span>
                <span>AI & Full Stack Developer</span>
                <span className="text-primary">{'/>'}</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Build, Deploy & Scale
              <br />
              <span className="gradient-text">Intelligent Systems</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed"
            >
              Crafting innovative web solutions with React, Node.js, and AI/ML.
              Building scalable applications that make a real impact.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-6 mb-8 max-w-xl"
            >
              {[
                { number: '20+', label: 'Projects' },
                { number: '400+', label: 'Problems' },
                { number: '200+', label: 'Users' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 glass rounded-lg border border-primary/10"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Get Started
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-lg text-white font-semibold border border-primary/20 hover:border-primary/50 transition-all"
              >
                Launch Demo
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 glass rounded-lg border border-primary/20 flex items-center justify-center text-xl text-gray-400 hover:text-white hover:border-primary/50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom section indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-0 right-0 z-20"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-mono">
            <span>From Idea To Production In Three Steps :</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
