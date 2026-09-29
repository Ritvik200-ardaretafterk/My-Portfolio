'use client'

import RitvikHero from '@/components/RitvikHero'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <RitvikHero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  )
}
