'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaCalendar, FaTrophy, FaMapMarkerAlt, FaPhone, FaEnvelope, FaBriefcase } from 'react-icons/fa'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const education = [
    {
      institution: 'Maulana Azad National Institute of Technology, Bhopal',
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      duration: '2023 – 2027',
      grade: 'CGPA: 6.23',
      icon: <FaGraduationCap />,
      color: 'from-primary to-accent',
      borderColor: 'border-primary/30',
    },
    {
      institution: 'Excellencia Junior College, Hyderabad',
      degree: 'Class XII (Physics, Chemistry & Mathematics)',
      duration: '2021 – 2023',
      grade: 'Percentage: 85.7%',
      icon: <FaGraduationCap />,
      color: 'from-secondary to-secondary-light',
      borderColor: 'border-secondary/30',
    },
  ]

  const facts = [
    { icon: <FaMapMarkerAlt />, label: 'Location',  value: 'Bhopal, India',           color: 'text-primary' },
    { icon: <FaPhone />,        label: 'Phone',     value: '+91 85230 15813',          color: 'text-secondary-light' },
    { icon: <FaEnvelope />,     label: 'Email',     value: 'ganugaritwik@gmail.com',   color: 'text-accent-light' },
    { icon: <FaBriefcase />,    label: 'Status',    value: 'Open to Opportunities ✅', color: 'text-green' },
  ]

  const tags = [
    '🎓 MANIT Bhopal', '☁️ AWS Certified', '🏆 SIH Semi-Finalist', '🤖 AI Enthusiast',
    '💻 20+ Live Sites', '📱 Play Store App',
  ]

  return (
    <section id="about" className="py-24 relative section-base">
      {/* Blurred canvas overlay for this section */}
      <div className="section-blur-overlay" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(255,107,43,0.12)', border: '1px solid rgba(255,107,43,0.3)', color: '#FF9A6C' }}>
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-cream">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            A passionate developer with a drive to create impactful solutions
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Left: story + tags */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="card-dark p-8 hover-lift"
          >
            <h3 className="text-2xl font-bold text-cream mb-5">My Journey 🚀</h3>
            <p className="text-cream/75 leading-relaxed mb-4">
              Hey! I'm <span className="text-primary font-bold">Ritvik</span> — a passionate Full-Stack
              Developer and AI enthusiast pursuing B.Tech in Computer Science at{' '}
              <span className="text-secondary-light font-bold">MANIT Bhopal</span>.
            </p>
            <p className="text-cream/75 leading-relaxed mb-4">
              I love building end-to-end web applications that solve real problems. From pixel-perfect
              React UIs to robust Node.js backends with real-time capabilities, I thrive on bringing
              ideas to life.
            </p>
            <p className="text-cream/75 leading-relaxed mb-6">
              I've delivered <span className="text-primary font-bold">20+ freelance websites</span>,
              built a social e-commerce platform with{' '}
              <span className="text-accent-light font-bold">200+ downloads</span>, and constantly explore
              cutting-edge AI/ML to integrate intelligent features into my projects.
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 rounded-lg text-sm font-semibold cursor-default transition-all"
                  style={{
                    background: 'rgba(255,107,43,0.1)',
                    border: '1px solid rgba(255,107,43,0.25)',
                    color: '#FF9A6C',
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right: quick facts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                whileHover={{ x: 8, borderColor: 'rgba(255,107,43,0.5)' }}
                className="card-dark flex items-center gap-4 p-5 hover-lift"
              >
                <div className={`text-2xl ${fact.color} w-10 h-10 flex items-center justify-center rounded-xl`}
                  style={{ background: 'rgba(255,107,43,0.1)' }}>
                  {fact.icon}
                </div>
                <div>
                  <div className="text-xs text-cream/40 uppercase tracking-widest font-semibold mb-0.5">{fact.label}</div>
                  <div className={`font-bold text-cream ${fact.label === 'Status' ? 'text-green' : ''}`}>{fact.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-black text-cream text-center mb-8">
            Education <span className="gradient-text-blue">Timeline</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 + index * 0.15 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`card-dark p-7 hover-lift border ${edu.borderColor}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-white text-2xl mb-4 animate-pulse-glow`}>
                  {edu.icon}
                </div>
                <h4 className="text-lg font-bold text-cream mb-2">{edu.institution}</h4>
                <p className="text-cream/70 mb-3">{edu.degree}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="flex items-center gap-1.5 text-sm text-cream/50">
                    <FaCalendar className="text-primary" /> {edu.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-bold"
                    style={{ color: '#10B981' }}>
                    <FaTrophy /> {edu.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
