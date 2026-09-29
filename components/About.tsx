'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaCalendar, FaTrophy } from 'react-icons/fa'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      institution: 'Maulana Azad National Institute of Technology, Bhopal',
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      duration: '2023 – 2027',
      cgpa: 'CGPA: 6.23',
      icon: <FaGraduationCap />,
    },
    {
      institution: 'Excellencia Junior College, Hyderabad',
      degree: 'Class XII (PCM)',
      duration: '2021 – 2023',
      cgpa: 'Percentage: 85.7%',
      icon: <FaGraduationCap />,
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A passionate developer with a drive to create impactful solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="rounded-2xl p-8 hover-lift shadow-xl"
              style={{ backgroundColor: '#8B1E2F' }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl text-cream">{edu.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-cream">
                    {edu.institution}
                  </h3>
                  <p className="text-white/90 mb-2">{edu.degree}</p>
                  <div className="flex items-center text-white/80 text-sm mb-2">
                    <FaCalendar className="mr-2" />
                    {edu.duration}
                  </div>
                  <div className="flex items-center text-cream font-semibold">
                    <FaTrophy className="mr-2" />
                    {edu.cgpa}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto rounded-2xl p-8 shadow-xl"
          style={{ backgroundColor: '#8B1E2F' }}
        >
          <h3 className="text-2xl font-bold mb-4 text-cream">
            About My Journey
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            I'm a Computer Science student at MANIT Bhopal with a passion for
            building innovative web applications and exploring AI/ML technologies.
            My journey in tech has been driven by curiosity and a desire to solve
            real-world problems through code.
          </p>
          <p className="text-white/90 leading-relaxed">
            With experience in full-stack development, I've delivered 20+ live
            websites as a freelance developer and built complex platforms like
            VibeXpert, a social and e-commerce platform with 200+ downloads.
            I'm always learning, growing, and pushing the boundaries of what's
            possible with technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
