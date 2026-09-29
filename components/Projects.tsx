'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import InfiniteMenu from '@/components/ui/InfiniteMenu'
import ProjectModal from '@/components/ui/ProjectModal'
import { useState } from 'react'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'VibeXpert',
      subtitle: 'Student Social & Multi-Vendor E-Commerce Platform',
      description:
        'A comprehensive full-stack platform combining social networking features with a multi-vendor e-commerce system, serving 200+ users with 17+ active sellers.',
      features: [
        'JWT authentication with college email/OTP verification',
        'Real-time messaging with Socket.IO, typing indicators, and online presence',
        'Multi-vendor system with seller approval, inventory management',
        'Integrated Razorpay payments and Gemini AI functionality',
        'Redis for notifications, Cloudinary for media storage',
      ],
      tech: [
        'React',
        'Node.js',
        'MongoDB',
        'Supabase',
        'Redis',
        'Socket.IO',
        'Gemini API',
      ],
      github: 'https://github.com/Ritvik200',
      liveUrl: undefined,
      stats: { downloads: '200+', sellers: '17+' },
      gradient: 'from-blue-500 to-purple-500',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiBmaWxsPSIjNjM2NmYxIi8+CiAgPHBhdGggZD0iTSA4MCwzMDAgTCAzMDAsODAwIEwgMzUwLDMwMCBMIDUyMCwzMDAgTCA0NzAsODAwIEwgNjkwLDMwMCBMIDc2MCwzMDAgTCA1MTIsOTAwIEwgNDQwLDkwMCBMIDI2NCw5MDAgTCAxMCwzMDAgWiIgZmlsbD0iI2ZmZmZmZiIvPgogIDxjaXJjbGUgY3g9IjQyMCIgY3k9IjE4MCIgcj0iNjAiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+',
      hosted: 'Hosted on Render (Backend) and Vercel (Frontend) with MongoDB Atlas for database, Redis Cloud for caching, and Cloudinary for media storage.',
      useCase: 'VibeXpert serves as a unified platform for college students to connect socially while also providing a marketplace for student entrepreneurs. Students can chat with friends, share posts, and purchase products from peer sellers - all within one application. The platform facilitates campus commerce by allowing students to become verified sellers and manage their inventory, while buyers can browse, purchase with Razorpay, and get AI-powered recommendations through Gemini API integration.',
    },
    {
      title: 'Calling AI',
      subtitle: 'AI-Powered Call Assistant',
      description:
        'Cross-platform AI calling application with intelligent conversation management and seamless integration between web and mobile platforms.',
      features: [
        'AI-assisted conversation workflows and call management',
        'RESTful API architecture with Express.js backend',
        'Supabase integration for authentication and data persistence',
        'Android mobile app using Capacitor for cross-platform deployment',
        'Responsive React interfaces for unified user experience',
      ],
      tech: [
        'React',
        'Node.js',
        'Express.js',
        'Supabase',
        'Capacitor',
        'REST APIs',
      ],
      github: 'https://github.com/Ritvik200',
      liveUrl: undefined,
      gradient: 'from-green-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&h=600&fit=crop&auto=format',
      hosted: 'Backend hosted on Render with Supabase for database and authentication. Android APK available for mobile deployment.',
      useCase: 'Calling AI is designed for businesses and individuals who need intelligent call management. The AI assistant helps schedule calls, manages conversation flows, provides real-time suggestions during calls, and maintains conversation history. Perfect for sales teams, customer support, or personal productivity - the system learns from interactions to improve call quality and efficiency over time.',
    },
    {
      title: 'NutriLens',
      subtitle: 'AI-Powered Food Recognition & Nutrition Analysis',
      description:
        'Intelligent food analysis system leveraging machine learning to identify food items and provide detailed nutritional information through image processing.',
      features: [
        'AI/ML pipeline for image preprocessing and prediction',
        'Food recognition model with high accuracy',
        'Database integration for structured nutritional data',
        'RESTful API for seamless backend-frontend communication',
        'End-to-end testing and debugging workflow',
      ],
      tech: ['Python', 'Machine Learning', 'Flask', 'SQL', 'REST APIs', 'TensorFlow'],
      github: 'https://github.com/Ritvik200',
      liveUrl: undefined,
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&h=600&fit=crop&auto=format',
      hosted: 'Flask backend deployed on Render with SQL database for nutritional information storage. Machine learning model hosted separately for image processing.',
      useCase: 'NutriLens empowers users to make informed dietary decisions by simply taking a photo of their food. The AI instantly identifies the food item and provides comprehensive nutritional information including calories, macros, vitamins, and minerals. Ideal for fitness enthusiasts, people with dietary restrictions, nutritionists, and anyone tracking their food intake. The system continuously improves its recognition accuracy through machine learning.',
    },
  ]

  // Prepare data for InfiniteMenu (3 featured projects)
  const infiniteMenuItems = projects.map((project, index) => ({
    image: project.image,
    link: '#', // Use # since we'll handle clicks with modal
    title: `${index + 1}. ${project.title}`,
    description: project.subtitle,
    onClick: () => setSelectedProject(index) // Add onClick handler
  }))

  return (
    <section id="projects" className="py-20 relative bg-[#8B1E2F] overflow-hidden">
      {/* Glassmorphism overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 pointer-events-none"></div>
      <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }}></div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject !== null ? projects[selectedProject] : null}
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-cream">Projects</span>
          </h2>
          <p className="text-cream text-lg">
            Explore my work in 3D - Drag to rotate and discover
          </p>
        </motion.div>

        {/* 3D Interactive Project Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="h-[600px] rounded-3xl overflow-hidden bg-cream border-4 border-cream/80 shadow-2xl shadow-black/40 relative">
            {/* Animated Drag Instruction Hint */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center gap-2.5 bg-[#8B1E2F]/90 text-cream px-5 py-2.5 rounded-full shadow-xl backdrop-blur-md border border-cream/40 text-xs md:text-sm font-semibold tracking-wide"
            >
              <motion.span
                animate={{ x: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="text-base inline-block"
              >
                👈 ✋ 👉
              </motion.span>
              <span>Click & Drag to Rotate 3D Globe</span>
            </motion.div>

            <InfiniteMenu
              items={infiniteMenuItems}
              scale={1}
              backgroundColor="#F5F0E6"
            />
          </div>
          <p className="text-center text-cream mt-4 text-sm">
            Drag to rotate • Click the arrow to view project details
          </p>
        </motion.div>
      </div>
    </section>
  )
}
