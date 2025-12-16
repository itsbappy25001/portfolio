'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Database, Mail, Cloud } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    icon: Cloud,
    title: 'Rainfall and Temperature Prediction',
    description: 'ML-based analysis for climate and agriculture forecasting. Developed machine learning models to predict rainfall patterns and temperature variations, supporting agricultural planning and climate analysis.',
    technologies: ['Machine Learning', 'Time Series', 'Climate Analysis', 'Python'],
    github: 'https://github.com/SarbajitPbappy',
    category: 'Machine Learning',
  },
  {
    icon: Database,
    title: 'Population Analysis with MySQL',
    description: 'Demographic and urbanization insights using advanced SQL queries. Analyzed large-scale population datasets to extract meaningful insights about demographic trends and urbanization patterns.',
    technologies: ['MySQL', 'SQL', 'Data Analysis', 'Database Design'],
    github: 'https://github.com/SarbajitPbappy',
    category: 'Data Analysis',
  },
  {
    icon: Mail,
    title: 'Email Spam Classification',
    description: 'ML models for spam filtering using Random Forest and Decision Trees. Built and compared multiple machine learning algorithms to accurately classify emails as spam or legitimate messages.',
    technologies: ['Random Forest', 'Decision Trees', 'NLP', 'Classification'],
    github: 'https://github.com/SarbajitPbappy',
    category: 'Machine Learning',
  },
  {
    icon: Github,
    title: 'Medical Image Classification Projects',
    description: 'Deep learning models for disease detection from medical images. Includes projects on skin disease classification, medical image analysis, and explainable AI implementations.',
    technologies: ['Deep Learning', 'CNN', 'Medical Imaging', 'TensorFlow', 'Keras'],
    github: 'https://github.com/SarbajitPbappy',
    category: 'Deep Learning',
  },
  {
    icon: Github,
    title: 'Agricultural Image Analysis',
    description: 'Computer vision projects for agricultural applications including jackfruit disease classification, plant health monitoring, and crop analysis using deep learning techniques.',
    technologies: ['Computer Vision', 'Deep Learning', 'Image Classification', 'OpenCV'],
    github: 'https://github.com/SarbajitPbappy',
    category: 'Computer Vision',
  },
]

export default function Projects() {
  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Showcasing my work in machine learning, deep learning, and data analysis
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <project.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 mt-auto">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="https://github.com/SarbajitPbappy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

