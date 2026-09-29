import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CanvasBackground from '@/components/CanvasBackground'
import RolesTicker from '@/components/RolesTicker'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ritvik Ganugapenta — Full Stack Developer & AI Engineer',
  description: 'Portfolio of Ganugapenta Ritvik — Full Stack Developer specializing in React, Node.js, and AI/ML',
  keywords: 'Ritvik Ganugapenta, Full Stack Developer, React, Node.js, AI/ML, Web Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Fixed animated canvas background — visible on all pages, blurred on non-hero */}
        <CanvasBackground />
        {/* Rotating roles ticker — hides on Contact */}
        <RolesTicker />
        {/* Scroll progress bar */}
        <div id="scroll-progress" style={{ width: '0%' }} />
        {children}
      </body>
    </html>
  )
}
