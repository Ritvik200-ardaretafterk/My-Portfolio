'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { CrowdCanvas } from '@/components/ui/skiper39'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'ganugaritwik@gmail.com',
      href: 'mailto:ganugaritwik@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 85230 15813',
      href: 'tel:+918523015813',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Bhopal, India',
      href: '#',
      color: 'from-blue-500 to-cyan-500',
    },
  ]

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: 'https://github.com/Ritvik200',
      username: '@Ritvik200',
      color: 'hover:text-gray-400',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/g-ritvik',
      username: '@g-ritvik',
      color: 'hover:text-blue-500',
    },
    {
      icon: <SiLeetcode />,
      label: 'LeetCode',
      href: 'https://leetcode.com/Ritvik',
      username: '@Ritvik',
      color: 'hover:text-yellow-500',
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden min-h-screen bg-cream">
      {/* Animated Crowd Background */}
      <div className="absolute bottom-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <CrowdCanvas
          src="https://cdn.21st.dev/assets/localized/abdb8990a7bef8c2f5af3e45f0a3c969c4b0603fba8be92e81347de4ea4e1ed7.png"
          rows={15}
          cols={7}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="rounded-2xl p-8 shadow-xl" style={{ backgroundColor: '#8B1E2F' }}>
                <h3 className="text-2xl font-bold mb-6 text-cream">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center space-x-4 group cursor-pointer"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center text-xl text-white group-hover:scale-110 transition-transform`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-white/80">{info.label}</div>
                        <div className="text-cream font-semibold group-hover:text-white transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="rounded-2xl p-8 shadow-xl" style={{ backgroundColor: '#8B1E2F' }}>
                <h3 className="text-2xl font-bold mb-6 text-cream">
                  Connect With Me
                </h3>
                <div className="space-y-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`text-3xl text-white ${social.color} transition-colors`}
                        >
                          {social.icon}
                        </div>
                        <div>
                          <div className="text-cream font-semibold">
                            {social.label}
                          </div>
                          <div className="text-sm text-white/80">
                            {social.username}
                          </div>
                        </div>
                      </div>
                      <div className="text-cream group-hover:text-white transition-colors">
                        →
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="rounded-2xl p-12 text-center shadow-xl"
            style={{ backgroundColor: '#8B1E2F' }}
          >
            <h3 className="text-3xl font-bold mb-4 text-cream">
              Let's Build Something <span className="text-white">Amazing</span>{' '}
              Together!
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind, need a developer for your team,
              or just want to chat about tech, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="mailto:ganugaritwik@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-cream font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Me an Email
              </motion.a>
              <motion.a
                href="https://github.com/Ritvik200"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass rounded-full text-dark font-semibold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center text-gray-600"
        >
          <p className="mb-2">
            Designed & Built by{' '}
            <span className="gradient-text font-semibold">
              Ganugapenta Ritvik
            </span>
          </p>
          <p className="text-sm">
            © 2026 All rights reserved. Made with ❤️ using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  )
}
