'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Hero() {
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: 'https://github.com/Ritvik200',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/in/g-ritvik',
      label: 'LinkedIn',
    },
    {
      icon: <SiLeetcode />,
      href: 'https://leetcode.com/Ritvik',
      label: 'LeetCode',
    },
    {
      icon: <FaEnvelope />,
      href: 'mailto:ganugaritwik@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.div
              className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-secondary p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                <FaCode className="text-6xl text-white" />
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Ganugapenta Ritvik</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-4xl text-gray-400 mb-6"
          >
            Full Stack Developer & AI Enthusiast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Crafting innovative web solutions with React, Node.js, and AI/ML.
            Building scalable applications that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-4 glass rounded-full text-white font-semibold hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl text-gray-400"
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
