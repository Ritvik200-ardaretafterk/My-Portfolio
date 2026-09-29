'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiExpress,
  SiSocketdotio,
} from 'react-icons/si'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C++', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'SQL', level: 75 },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Socket.IO', level: 80 },
        { name: 'JWT Auth', level: 85 },
      ],
    },
    {
      title: 'AI/ML & Data',
      skills: [
        { name: 'Gemini API', level: 75 },
        { name: 'RAG', level: 70 },
        { name: 'Scikit-Learn', level: 75 },
        { name: 'NumPy & Pandas', level: 80 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Supabase', level: 85 },
        { name: 'Redis', level: 75 },
      ],
    },
    {
      title: 'Cloud & Tools',
      skills: [
        { name: 'Linux', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Git/GitHub', level: 90 },
      ],
    },
  ]

  const techIcons = [
    { icon: <FaReact />, name: 'React', color: 'text-blue-400' },
    { icon: <SiNextdotjs />, name: 'Next.js', color: 'text-white' },
    { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-500' },
    { icon: <SiExpress />, name: 'Express', color: 'text-gray-400' },
    { icon: <FaPython />, name: 'Python', color: 'text-yellow-400' },
    { icon: <SiTypescript />, name: 'TypeScript', color: 'text-blue-500' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-cyan-400' },
    { icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-400' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', color: 'text-blue-600' },
    { icon: <SiRedis />, name: 'Redis', color: 'text-red-500' },
    { icon: <FaDocker />, name: 'Docker', color: 'text-blue-500' },
    { icon: <FaAws />, name: 'AWS', color: 'text-orange-400' },
  ]

  // LogoLoop data for animated borders
  const techLogos = [
    { node: <span className="text-primary"><FaReact /></span>, title: "React" },
    { node: <span className="text-dark"><SiNextdotjs /></span>, title: "Next.js" },
    { node: <span className="text-secondary"><SiTypescript /></span>, title: "TypeScript" },
    { node: <span className="text-primary"><SiTailwindcss /></span>, title: "Tailwind CSS" },
    { node: <span className="text-secondary"><FaNodeJs /></span>, title: "Node.js" },
    { node: <span className="text-primary"><SiMongodb /></span>, title: "MongoDB" },
    { node: <span className="text-dark"><FaPython /></span>, title: "Python" },
    { node: <span className="text-secondary"><FaDocker /></span>, title: "Docker" },
    { node: <span className="text-primary"><FaAws /></span>, title: "AWS" },
    { node: <span className="text-dark"><FaGitAlt /></span>, title: "Git" },
    { node: <span className="text-secondary"><SiRedis /></span>, title: "Redis" },
    { node: <span className="text-primary"><SiPostgresql /></span>, title: "PostgreSQL" },
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Top Text Strip */}
      <div className="absolute top-0 left-0 w-full h-12 flex items-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll-left text-2xl font-bold text-primary">
          <span className="inline-block">REACT ✦ TYPESCRIPT ✦ NODE.JS ✦ PYTHON ✦ MONGODB ✦ AWS ✦ DOCKER ✦ </span>
          <span className="inline-block">REACT ✦ TYPESCRIPT ✦ NODE.JS ✦ PYTHON ✦ MONGODB ✦ AWS ✦ DOCKER ✦ </span>
          <span className="inline-block">REACT ✦ TYPESCRIPT ✦ NODE.JS ✦ PYTHON ✦ MONGODB ✦ AWS ✦ DOCKER ✦ </span>
          <span className="inline-block">REACT ✦ TYPESCRIPT ✦ NODE.JS ✦ PYTHON ✦ MONGODB ✦ AWS ✦ DOCKER ✦ </span>
        </div>
      </div>

      {/* Bottom Text Strip */}
      <div className="absolute bottom-0 left-0 w-full h-12 flex items-center bg-gradient-to-r from-secondary/5 via-secondary/10 to-secondary/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll-right text-2xl font-bold text-primary">
          <span className="inline-block">NEXTJS ✦ TAILWIND ✦ EXPRESS ✦ SQL ✦ REDIS ✦ GITHUB ✦ ML ✦ AI ✦ </span>
          <span className="inline-block">NEXTJS ✦ TAILWIND ✦ EXPRESS ✦ SQL ✦ REDIS ✦ GITHUB ✦ ML ✦ AI ✦ </span>
          <span className="inline-block">NEXTJS ✦ TAILWIND ✦ EXPRESS ✦ SQL ✦ REDIS ✦ GITHUB ✦ ML ✦ AI ✦ </span>
          <span className="inline-block">NEXTJS ✦ TAILWIND ✦ EXPRESS ✦ SQL ✦ REDIS ✦ GITHUB ✦ ML ✦ AI ✦ </span>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              className={`text-5xl ${tech.color} cursor-pointer`}
              title={tech.name}
            >
              {tech.icon}
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="rounded-2xl p-6 hover-lift shadow-xl"
              style={{ backgroundColor: '#8B1E2F' }}
            >
              <h3 className="text-2xl font-bold mb-6 text-cream">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/90">{skill.name}</span>
                      <span className="text-cream font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="h-full bg-cream rounded-full shadow-lg"
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
