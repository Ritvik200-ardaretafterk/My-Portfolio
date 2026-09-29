import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ritvik Ganugapenta - Full Stack Developer',
  description: 'Portfolio of Ganugapenta Ritvik - Full Stack Developer specializing in React, Node.js, and AI/ML',
  keywords: 'Ritvik Ganugapenta, Full Stack Developer, React, Node.js, AI/ML, Web Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
