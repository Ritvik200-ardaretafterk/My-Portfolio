'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaCode, FaAward, FaUsers, FaRobot } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const achievements = [
    {
      icon: <FaCode />,
      title: 'Freelance Full-Stack Developer',
      description: 'Delivered 20+ live websites for individual clients and small businesses',
      tech: 'HTML, CSS, JavaScript, Node.js, MongoDB',
      gradient: 'from-primary to-accent',
      glow: 'rgba(255,107,43,0.3)',
    },
    {
      icon: <FaTrophy />,
      title: '400+ Problems Solved',
      description: 'Solved 400+ DSA and competitive programming problems across coding platforms',
      tech: 'LeetCode, CodeForces, HackerRank',
      gradient: 'from-secondary to-secondary-light',
      glow: 'rgba(37,99,235,0.3)',
    },
    {
      icon: <FaAward />,
      title: 'Hackathon Success',
      description: 'Finalist at Hack With Hyderabad & Semi-Finalist at Smart India Hackathon',
      tech: 'Team Collaboration, Problem Solving',
      gradient: 'from-amber to-primary',
      glow: 'rgba(245,158,11,0.3)',
    },
    {
      icon: <FaAward />,
      title: 'AWS Cloud Certified',
      description: 'Certified in AWS Cloud technologies and cloud infrastructure',
      tech: 'AWS, Cloud Computing, DevOps',
      gradient: 'from-accent to-accent-light',
      glow: 'rgba(239,68,68,0.3)',
    },
    {
      icon: <FaRobot />,
      title: 'Vision Robotics – Team Leader',
      description: 'Led a robotics team working on computer vision and automation',
      tech: 'Computer Vision, Robotics, Leadership',
      gradient: 'from-green to-secondary-light',
      glow: 'rgba(16,185,129,0.3)',
    },
  ]

  const stats = [
    { number: 20,  label: 'Live Websites',       suffix: '+', gradient: 'from-primary to-accent' },
    { number: 400, label: 'Problems Solved',      suffix: '+', gradient: 'from-secondary to-secondary-light' },
    { number: 200, label: 'App Downloads',        suffix: '+', gradient: 'from-amber to-primary' },
    { number: 17,  label: 'Active Sellers',       suffix: '+', gradient: 'from-accent to-accent-light' },
  ]

  function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
    const [count, setCount] = useState(0)
    useEffect(() => {
      if (!inView) return
      let start = 0
      const inc = end / (2000 / 16)
      const timer = setInterval(() => {
        start += inc
        if (start >= end) { setCount(end); clearInterval(timer) }
        else setCount(Math.floor(start))
      }, 16)
      return () => clearInterval(timer)
    }, [inView, end])
    return <span>{count}{suffix}</span>
  }

  return (
    <section id="achievements" className="py-24 relative section-base">
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
            style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', color: '#F59E0B' }}>
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-cream">
            Achievements &amp; <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-cream/60 text-lg">Highlights from my journey in tech</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + index * 0.08, type: 'spring' }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="card-dark p-6 text-center hover-lift"
            >
              <div className={`text-4xl md:text-5xl font-black mb-2 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-cream/60 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 + index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="card-dark p-7 hover-lift group relative overflow-hidden"
              style={{ borderColor: `${achievement.glow.replace('0.3', '0.2')}` }}
            >
              {/* Glow orb */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${achievement.glow}, transparent 70%)` }} />

              <motion.div
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center text-2xl text-white mb-5 shadow-lg`}
              >
                {achievement.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-cream mb-3 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              <p className="text-cream/70 mb-4 leading-relaxed text-sm">{achievement.description}</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-cream/40 font-medium">{achievement.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 max-w-3xl mx-auto rounded-3xl p-10 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(255,107,43,0.12), rgba(37,99,235,0.12))', border: '1px solid rgba(255,107,43,0.2)' }}
        >
          <div className="text-5xl mb-4">🚀</div>
          <h3 className="text-2xl font-black mb-4 text-cream">Continuous Learning &amp; Growth</h3>
          <p className="text-cream/70 leading-relaxed">
            Exploring advanced AI/ML, microservices architecture, and cloud-native development.
            Always excited to take on new challenges and collaborate on innovative projects!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
