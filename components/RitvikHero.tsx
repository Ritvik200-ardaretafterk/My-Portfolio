"use client"

import { useEffect, useState } from 'react'
import TigerTearReveal from "@/components/ui/tiger-tear-reveal"
import StrokeText from "@/components/ui/StrokeText"

export default function RitvikHero() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  // Array of titles to rotate through
  const titles = [
    "FULL STACK DEVELOPER",
    "AI ENGINEER",
    "CLOUD ARCHITECT",
    "ML SPECIALIST",
    "SOFTWARE ENGINEER"
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const viewportHeight = window.innerHeight
      // Progress from 0 to 1 over 1.5 viewport heights of scrolling
      const newProgress = Math.min(scrolled / (viewportHeight * 1.5), 1)
      setProgress(newProgress)
      
      // Once animation is complete and user scrolls past, hide the fixed hero
      if (scrolled > viewportHeight * 2) {
        setIsComplete(true)
      } else {
        setIsComplete(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Rotate through titles every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [titles.length])

  const domains = [
    { name: "React.js", color: "#61DAFB" },
    { name: "Next.js", color: "#ffffff" },
    { name: "Node.js", color: "#339933" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Python", color: "#3776AB" },
    { name: "AI/ML", color: "#FF6F00" },
    { name: "AWS", color: "#FF9900" },
    { name: "Docker", color: "#2496ED" },
  ]

  const revealContent = (
    <div className="w-full h-full flex items-center justify-center px-8">
      <StrokeText
        key={currentTitleIndex} // Force re-render and re-animate when title changes
        text={titles[currentTitleIndex]}
        strokeColor="#D93644"
        fillColor="#33190F"
        strokeWidth={2}
        drawDuration={2}
        fillDelay={0.3}
        stagger={0.08}
        ease="power2.out"
        trigger="mount"
        fillMode="wipe"
        fontSize={48}
        fontWeight={900}
        letterSpacing={6}
        reverse={false}
      />
    </div>
  )

  return (
    <>
      <div 
        className={`fixed top-0 left-0 w-full h-screen transition-opacity duration-500 ${
          isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100 z-10'
        }`}
      >
        <TigerTearReveal
          word="RITVIK"
          tagline="GANUGAPENTA"
          ink="#D93644"
          paper="#F5F0E6"
          taglineColor="#D9832C"
          eyeColor="#f0a526"
          furColor="#d9832c"
          height="100vh"
          progress={progress}
          hint={!isComplete}
          revealContent={revealContent}
        />
      </div>
      
      {/* Invisible spacer to create scroll distance */}
      <div className="h-[250vh]" />
    </>
  )
}
