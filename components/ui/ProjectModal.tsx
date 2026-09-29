'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGithub, FaExternalLinkAlt, FaUsers, FaDownload, FaShoppingCart } from 'react-icons/fa'
import { useEffect } from 'react'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    subtitle: string
    description: string
    features: string[]
    tech: string[]
    github: string
    liveUrl?: string
    stats?: {
      downloads?: string
      sellers?: string
      users?: string
    }
    hosted?: string
    useCase: string
    image: string
  } | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl border-4 border-primary shadow-2xl shadow-primary/30 pointer-events-auto"
              style={{ backgroundColor: '#F5F0E6' }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-primary/90 hover:bg-primary text-white flex items-center justify-center transition-all hover:scale-110 hover:rotate-90"
                aria-label="Close modal"
              >
                <FaTimes size={20} />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh] custom-scrollbar bg-cream">
                {/* Header with Image */}
                <div className="relative h-64 overflow-hidden bg-cream">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/50 to-cream" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-cream/95">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-4xl font-bold text-dark mb-2"
                    >
                      {project.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl text-dark font-medium"
                    >
                      {project.subtitle}
                    </motion.p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6 bg-cream">
                  {/* Stats */}
                  {project.stats && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex flex-wrap gap-4"
                    >
                      {project.stats.downloads && (
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                          <FaDownload className="text-primary" />
                          <span className="font-semibold text-dark">{project.stats.downloads} Users</span>
                        </div>
                      )}
                      {project.stats.sellers && (
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
                          <FaShoppingCart className="text-secondary" />
                          <span className="font-semibold text-dark">{project.stats.sellers} Sellers</span>
                        </div>
                      )}
                      {project.stats.users && (
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                          <FaUsers className="text-primary" />
                          <span className="font-semibold text-dark">{project.stats.users}</span>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold text-primary mb-3">Overview</h3>
                    <p className="text-dark leading-relaxed">{project.description}</p>
                  </motion.div>

                  {/* Use Case */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-primary mb-3">Use Case</h3>
                    <p className="text-dark leading-relaxed">{project.useCase}</p>
                  </motion.div>

                  {/* Hosting Info */}
                  {project.hosted && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-2xl font-bold text-primary mb-3">Hosting</h3>
                      <p className="text-dark leading-relaxed">{project.hosted}</p>
                    </motion.div>
                  )}

                  {/* Key Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h3 className="text-2xl font-bold text-primary mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-dark">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h3 className="text-2xl font-bold text-primary mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.03 }}
                          className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex flex-wrap gap-4 pt-4"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-dark text-white rounded-full hover:bg-dark/90 transition-all hover:scale-105"
                    >
                      <FaGithub size={20} />
                      View on GitHub
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all hover:scale-105"
                      >
                        <FaExternalLinkAlt size={18} />
                        Live Demo
                      </a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
