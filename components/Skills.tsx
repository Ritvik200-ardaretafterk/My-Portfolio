'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaDatabase } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiRedis, SiExpress, SiSocketdotio } from 'react-icons/si'

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const skillCategories = [
    {
      title: 'Languages',
      emoji: '🧩',
      color: 'from-primary to-accent',
      borderColor: 'border-primary/30',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'C++',        level: 85 },
        { name: 'Python',     level: 80 },
        { name: 'SQL',        level: 75 },
        { name: 'HTML/CSS',   level: 95 },
      ],
    },
    {
      title: 'Frontend',
      emoji: '🎨',
      color: 'from-secondary to-secondary-light',
      borderColor: 'border-secondary/30',
      skills: [
        { name: 'React.js',    level: 92 },
        { name: 'Next.js',     level: 85 },
        { name: 'Tailwind CSS',level: 90 },
      ],
    },
    {
      title: 'Backend',
      emoji: '⚙️',
      color: 'from-amber to-primary',
      borderColor: 'border-amber/30',
      skills: [
        { name: 'Node.js',    level: 90 },
        { name: 'Express.js', level: 87 },
        { name: 'REST APIs',  level: 90 },
        { name: 'Socket.IO',  level: 80 },
        { name: 'JWT Auth',   level: 85 },
      ],
    },
    {
      title: 'AI / ML & Data',
      emoji: '🤖',
      color: 'from-accent to-accent-light',
      borderColor: 'border-accent/30',
      skills: [
        { name: 'Gemini API',   level: 78 },
        { name: 'RAG Systems',  level: 72 },
        { name: 'Scikit-Learn', level: 75 },
        { name: 'NumPy/Pandas', level: 80 },
      ],
    },
    {
      title: 'Databases',
      emoji: '🗄️',
      color: 'from-green to-secondary-light',
      borderColor: 'border-green/30',
      skills: [
        { name: 'MongoDB',    level: 90 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Supabase',   level: 85 },
        { name: 'Redis',      level: 75 },
        { name: 'MySQL',      level: 75 },
      ],
    },
    {
      title: 'Cloud & Tools',
      emoji: '☁️',
      color: 'from-secondary-light to-primary',
      borderColor: 'border-secondary-light/30',
      skills: [
        { name: 'AWS',       level: 78 },
        { name: 'Docker',    level: 75 },
        { name: 'Git/GitHub',level: 92 },
        { name: 'Linux',     level: 80 },
        { name: 'Cloudinary',level: 80 },
      ],
    },
  ]

  const techIcons = [
    { icon: <FaReact />,      name: 'React',      color: '#61DAFB' },
    { icon: <SiNextdotjs />,  name: 'Next.js',    color: '#FFFFFF' },
    { icon: <FaNodeJs />,     name: 'Node.js',    color: '#339933' },
    { icon: <SiExpress />,    name: 'Express',    color: '#AAAAAA' },
    { icon: <FaPython />,     name: 'Python',     color: '#FFD43B' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <SiTailwindcss />,name: 'Tailwind',   color: '#06B6D4' },
    { icon: <SiMongodb />,    name: 'MongoDB',    color: '#47A248' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
    { icon: <SiRedis />,      name: 'Redis',      color: '#FF4438' },
    { icon: <FaDocker />,     name: 'Docker',     color: '#2496ED' },
    { icon: <FaAws />,        name: 'AWS',        color: '#FF9900' },
    { icon: <FaGitAlt />,     name: 'Git',        color: '#F05032' },
    { icon: <SiSocketdotio />,name: 'Socket.IO',  color: '#FFFFFF' },
  ]

  return (
    <section id="skills" className="py-24 relative section-base overflow-hidden">
      {/* Blurred canvas overlay */}
      <div className="section-blur-overlay" />

      {/* Scrolling top strip */}
      <div className="absolute top-0 left-0 w-full h-10 flex items-center overflow-hidden z-10"
        style={{ background: 'rgba(255,107,43,0.06)', borderBottom: '1px solid rgba(255,107,43,0.12)' }}>
        <div className="flex whitespace-nowrap animate-scroll-left text-xl font-black text-primary tracking-widest opacity-60">
          {['REACT', 'TYPESCRIPT', 'NODE.JS', 'PYTHON', 'MONGODB', 'AWS', 'DOCKER', 'NEXT.JS', 'TAILWIND', 'REDIS'].map((t, i) => (
            <span key={i} className="inline-block px-8">{t} ✦</span>
          ))}
          {['REACT', 'TYPESCRIPT', 'NODE.JS', 'PYTHON', 'MONGODB', 'AWS', 'DOCKER', 'NEXT.JS', 'TAILWIND', 'REDIS'].map((t, i) => (
            <span key={`d${i}`} className="inline-block px-8">{t} ✦</span>
          ))}
        </div>
      </div>

      {/* Scrolling bottom strip */}
      <div className="absolute bottom-0 left-0 w-full h-10 flex items-center overflow-hidden z-10"
        style={{ background: 'rgba(37,99,235,0.06)', borderTop: '1px solid rgba(37,99,235,0.12)' }}>
        <div className="flex whitespace-nowrap animate-scroll-right text-xl font-black text-secondary-light tracking-widest opacity-60">
          {['EXPRESS', 'SQL', 'SUPABASE', 'GITHUB', 'ML', 'AI', 'SOCKET.IO', 'JWT', 'GEMINI', 'LINUX'].map((t, i) => (
            <span key={i} className="inline-block px-8">{t} ✦</span>
          ))}
          {['EXPRESS', 'SQL', 'SUPABASE', 'GITHUB', 'ML', 'AI', 'SOCKET.IO', 'JWT', 'GEMINI', 'LINUX'].map((t, i) => (
            <span key={`d${i}`} className="inline-block px-8">{t} ✦</span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)', color: '#60A5FA' }}>
            What I Know
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-cream">
            Technical <span className="gradient-text-blue">Skills</span>
          </h2>
          <p className="text-cream/60 text-lg">Technologies and tools I work with daily</p>
        </motion.div>

        {/* Tech Icon Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.04, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.35, rotate: 360 }}
              title={tech.name}
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl cursor-pointer transition-all"
              style={{
                color: tech.color,
                background: `${tech.color}18`,
                border: `1px solid ${tech.color}30`,
                boxShadow: `0 0 0 0 ${tech.color}`,
              }}
            >
              {tech.icon}
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: catIdx * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`card-dark p-6 hover-lift border ${category.borderColor}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-lg text-white`}>
                  {category.emoji}
                </div>
                <h3 className="text-lg font-bold text-cream">{category.title}</h3>
              </div>
              <div className="space-y-3.5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-cream/80 font-medium">{skill.name}</span>
                      <span className="text-xs font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full rounded-full h-1.5 overflow-hidden"
                      style={{ background: 'rgba(255,255,255,0.08)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: catIdx * 0.08 + skillIdx * 0.06, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        style={{ boxShadow: '0 0 8px rgba(255,107,43,0.4)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
