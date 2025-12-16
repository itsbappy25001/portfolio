'use client'

import { motion } from 'framer-motion'
import { Brain, Microscope, Leaf, Eye, Sparkles, Layers } from 'lucide-react'

const researchAreas = [
  {
    icon: Brain,
    title: 'Deep Learning',
    description: 'Developing advanced deep learning architectures for complex pattern recognition and classification tasks. Focus on hybrid models that combine multiple neural network architectures for improved performance.',
    technologies: ['CNN', 'Transfer Learning', 'Hybrid Architectures', 'Neural Networks'],
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Research in image processing, feature extraction, and visual pattern recognition. Applications include medical imaging, agricultural monitoring, and automated analysis systems.',
    technologies: ['Image Processing', 'Feature Extraction', 'Pattern Recognition', 'OpenCV'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Microscope,
    title: 'Medical Image Analysis',
    description: 'Applying AI and machine learning techniques to medical imaging for disease detection, diagnosis, and treatment planning. Working with various medical imaging modalities.',
    technologies: ['Medical Imaging', 'Disease Detection', 'Diagnostic AI', 'Healthcare ML'],
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: Leaf,
    title: 'Agricultural Image Analysis',
    description: 'Using computer vision and deep learning for agricultural applications including crop disease detection, plant health monitoring, and automated agricultural analysis.',
    technologies: ['Agricultural AI', 'Crop Monitoring', 'Disease Classification', 'Plant Analysis'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Sparkles,
    title: 'Explainable AI',
    description: 'Developing methods to make AI models interpretable and transparent. Creating visualization techniques and explanation frameworks that help users understand model decisions.',
    technologies: ['XAI', 'Model Interpretability', 'Visualization', 'Transparency'],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Layers,
    title: 'Hybrid Deep Learning Models',
    description: 'Designing and implementing hybrid architectures that combine multiple deep learning approaches for enhanced performance in classification and detection tasks.',
    technologies: ['Hybrid Models', 'Ensemble Learning', 'Multi-Modal Learning', 'Architecture Design'],
    gradient: 'from-pink-500 to-rose-500',
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

export default function Research() {
  return (
    <section id="research" className="section-container bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl"></div>
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
            Research <span className="gradient-text">Areas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Advancing AI and machine learning through interdisciplinary research
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="group relative"
            >
              {/* Gradient glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${area.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100/50 h-full flex flex-col transition-all duration-300 group-hover:shadow-2xl group-hover:border-primary-200/50">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-5 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  <area.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{area.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (i * 0.05), type: 'spring' }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium border border-primary-100 hover:border-primary-300 hover:bg-primary-100 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card bg-gradient-to-br from-primary-50 via-white to-primary-50/50 border-primary-200/50"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Research Philosophy</h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-700 leading-relaxed mb-4"
            >
              My research focuses on developing practical AI solutions that address real-world challenges 
              in healthcare and agriculture. I believe in creating models that are not only accurate but 
              also interpretable, allowing domain experts to understand and trust AI-driven decisions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-700 leading-relaxed"
            >
              Through hybrid deep learning approaches and explainable AI techniques, I aim to bridge 
              the gap between cutting-edge AI research and practical applications that can make a 
              meaningful impact on society.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
