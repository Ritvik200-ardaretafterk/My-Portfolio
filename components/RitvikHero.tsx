"use client"

import { useEffect, useState } from 'react'
import TigerTearReveal from "@/components/ui/tiger-tear-reveal"
import StrokeText from "@/components/ui/StrokeText"

export default function RitvikHero() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  const titles = [
    "AI ENGINEER",
    "FULL STACK DEVELOPER",
    "CLOUD ARCHITECT",
    "ML SPECIALIST",
    "REACT DEVELOPER",
    "SOFTWARE ENGINEER",
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const viewportHeight = window.innerHeight
      const newProgress = Math.min(scrolled / (viewportHeight * 1.5), 1)
      setProgress(newProgress)
      if (scrolled > viewportHeight * 2) {
        setIsComplete(true)
      } else {
        setIsComplete(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Rotate through titles every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [titles.length])

  const revealContent = (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-6">
      {/* Rotating title with stroke animation */}
      <StrokeText
        key={currentTitleIndex}
        text={titles[currentTitleIndex]}
        strokeColor="#FF6B2B"
        fillColor="#0A0A14"
        strokeWidth={2}
        drawDuration={1.8}
        fillDelay={0.25}
        stagger={0.07}
        ease="power2.out"
        trigger="mount"
        fillMode="wipe"
        fontSize={44}
        fontWeight={900}
        letterSpacing={6}
        reverse={false}
      />

      {/* Subtitle indicators */}
      <div className="flex items-center gap-3">
        {titles.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-500"
            style={{
              width: i === currentTitleIndex ? 24 : 6,
              height: 6,
              background: i === currentTitleIndex ? '#FF6B2B' : 'rgba(255,107,43,0.3)',
              boxShadow: i === currentTitleIndex ? '0 0 10px rgba(255,107,43,0.7)' : 'none',
            }}
          />
        ))}
      </div>

      {/* Stats row */}
      <div className="flex gap-8 mt-2">
        {[
          { val: '20+',  label: 'Live Sites' },
          { val: '400+', label: 'DSA Solved' },
          { val: '200+', label: 'App Downloads' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl font-black" style={{ color: '#FF6B2B' }}>{s.val}</div>
            <div className="text-xs font-semibold" style={{ color: 'rgba(253,246,236,0.6)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <>
      <div
        id="home"
        className={`fixed top-0 left-0 w-full h-screen transition-opacity duration-500 ${
          isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100 z-10'
        }`}
      >
        <TigerTearReveal
          word="RITVIK"
          tagline="GANUGAPENTA"
          ink="#FF6B2B"
          paper="#0A0A14"
          taglineColor="#2563EB"
          eyeColor="#f59e0b"
          furColor="#FF6B2B"
          height="100vh"
          progress={progress}
          hint={!isComplete}
          revealContent={revealContent}
        />
      </div>

      {/* Scroll spacer */}
      <div className="h-[250vh]" />
    </>
  )
}
