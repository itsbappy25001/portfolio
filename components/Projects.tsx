'use client'

import { motion } from 'framer-motion'
import { Github, Database, Mail, Cloud, Code, Sparkles } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    icon: Cloud,
    title: 'Rainfall and Temperature Prediction',
    description: 'ML-based analysis for climate and agriculture forecasting. Developed machine learning models to predict rainfall patterns and temperature variations, supporting agricultural planning and climate analysis.',
    technologies: ['Machine Learning', 'Time Series', 'Climate Analysis', 'Python'],
    github: 'https://github.com/SarbajitPbappy',
    category: 'Machine Learning',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Population Analysis with MySQL',
    description: 'Demographic and urbanization insights using advanced SQL queries. Analyzed large-scale population datasets to extract meaningful insights about demographic trends and urbanization patterns.',
    technologies: ['MySQL', 'SQL', 'Data Analysis', 'Database Design'],
    github: 'https://github.com/SarbajitPbappy',
    category: 'Data Analysis',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Mail,
    title: 'Email Spam Classification',
    description: 'ML models for spam filtering using Random Forest and Decision Trees. Built and compared multiple machine learning algorithms to accurately classify emails as spam or legitimate messages.',
    technologies: ['Random Forest', 'Decision Trees', 'NLP', 'Classification'],
    github: 'https://github.com/SarbajitPbappy',
    category: 'Machine Learning',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Code,
    title: 'Medical Image Classification Projects',
    description: 'Deep learning models for disease detection from medical images. Includes projects on skin disease classification, medical image analysis, and explainable AI implementations.',
    technologies: ['Deep Learning', 'CNN', 'Medical Imaging', 'TensorFlow', 'Keras'],
    github: 'https://github.com/SarbajitPbappy',
    category: 'Deep Learning',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: Sparkles,
    title: 'Agricultural Image Analysis',
    description: 'Computer vision projects for agricultural applications including jackfruit disease classification, plant health monitoring, and crop analysis using deep learning techniques.',
    technologies: ['Computer Vision', 'Deep Learning', 'Image Classification', 'OpenCV'],
    github: 'https://github.com/SarbajitPbappy',
    category: 'Computer Vision',
    gradient: 'from-amber-500 to-orange-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="section-container bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Showcasing my work in machine learning, deep learning, and data analysis
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100/50 h-full flex flex-col transition-all duration-300 group-hover:shadow-2xl group-hover:border-primary-200/50">
                {/* Icon with gradient background */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <project.icon className="w-8 h-8 text-white" />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight flex-1">{project.title}</h3>
                    <motion.span
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: 'spring' }}
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs font-semibold shadow-md whitespace-nowrap`}
                    >
                      {project.category}
                    </motion.span>
                  </div>
                  
                  <p className="text-gray-600 mb-5 leading-relaxed text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (i * 0.05), type: 'spring' }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-xs font-medium border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex gap-2 mt-auto pt-4 border-t border-gray-100"
                >
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group/link"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.div>
                    <span className="group-hover/link:underline">View on GitHub</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="https://github.com/SarbajitPbappy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-xl hover:from-primary-700 hover:to-primary-600 transition-all font-semibold shadow-xl hover:shadow-2xl"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
