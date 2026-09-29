'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaCode, FaAward, FaUsers, FaRobot } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      icon: <FaCode />,
      title: 'Freelance Full-Stack Developer',
      description:
        'Delivered 20+ live websites for individual clients and small businesses',
      tech: 'HTML, CSS, JavaScript, Node.js, MongoDB',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaTrophy />,
      title: '400+ Problems Solved',
      description:
        'Solved 400+ DSA and competitive programming problems across coding platforms',
      tech: 'LeetCode, CodeForces, HackerRank',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaAward />,
      title: 'Hackathon Success',
      description:
        'Finalist at Hack With Hyderabad and Semi-Finalist at Smart India Hackathon',
      tech: 'Team Collaboration, Problem Solving',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <FaAward />,
      title: 'AWS Cloud Certified',
      description:
        'Certified in AWS Cloud technologies and cloud infrastructure',
      tech: 'AWS, Cloud Computing, DevOps',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <FaRobot />,
      title: 'Vision Robotics – Team Leader',
      description:
        'Led a robotics team, working on computer vision and automation projects',
      tech: 'Computer Vision, Robotics, Leadership',
      color: 'from-green-500 to-teal-500',
    },
  ]

  const stats = [
    { number: 20, label: 'Live Websites', suffix: '+' },
    { number: 400, label: 'Problems Solved', suffix: '+' },
    { number: 200, label: 'VibeXpert Downloads', suffix: '+' },
    { number: 17, label: 'Active Sellers', suffix: '+' },
  ]

  const AnimatedCounter = ({
    end,
    suffix = '',
  }: {
    end: number
    suffix?: string
  }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!inView) return

      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }, [inView, end])

    return (
      <span>
        {count}
        {suffix}
      </span>
    )
  }

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Highlights from my journey in tech
          </p>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl p-6 text-center hover-lift shadow-xl"
              style={{ backgroundColor: '#8B1E2F' }}
            >
              <div className="text-4xl md:text-5xl font-bold text-cream mb-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-white/90 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="rounded-2xl p-6 hover-lift group shadow-xl"
              style={{ backgroundColor: '#8B1E2F' }}
            >
              <motion.div
                className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl text-cream mb-4 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {achievement.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-cream">
                {achievement.title}
              </h3>
              <p className="text-white/90 mb-4 leading-relaxed">
                {achievement.description}
              </p>
              <div className="pt-4 border-t border-white/30">
                <p className="text-sm text-white/80">{achievement.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 max-w-4xl mx-auto rounded-2xl p-8 text-center shadow-xl"
          style={{ backgroundColor: '#8B1E2F' }}
        >
          <div className="text-5xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-4 text-cream">
            Continuous Learning & Growth
          </h3>
          <p className="text-white/90 leading-relaxed">
            Currently exploring advanced AI/ML techniques, microservices
            architecture, and cloud-native development. Always excited to take
            on new challenges and collaborate on innovative projects!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
