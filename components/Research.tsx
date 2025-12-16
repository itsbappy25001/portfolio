'use client'

import { motion } from 'framer-motion'
import { Brain, Microscope, Leaf, Eye } from 'lucide-react'

const researchAreas = [
  {
    icon: Brain,
    title: 'Deep Learning',
    description: 'Developing advanced deep learning architectures for complex pattern recognition and classification tasks. Focus on hybrid models that combine multiple neural network architectures for improved performance.',
    technologies: ['CNN', 'Transfer Learning', 'Hybrid Architectures', 'Neural Networks'],
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Research in image processing, feature extraction, and visual pattern recognition. Applications include medical imaging, agricultural monitoring, and automated analysis systems.',
    technologies: ['Image Processing', 'Feature Extraction', 'Pattern Recognition', 'OpenCV'],
  },
  {
    icon: Microscope,
    title: 'Medical Image Analysis',
    description: 'Applying AI and machine learning techniques to medical imaging for disease detection, diagnosis, and treatment planning. Working with various medical imaging modalities.',
    technologies: ['Medical Imaging', 'Disease Detection', 'Diagnostic AI', 'Healthcare ML'],
  },
  {
    icon: Leaf,
    title: 'Agricultural Image Analysis',
    description: 'Using computer vision and deep learning for agricultural applications including crop disease detection, plant health monitoring, and automated agricultural analysis.',
    technologies: ['Agricultural AI', 'Crop Monitoring', 'Disease Classification', 'Plant Analysis'],
  },
  {
    icon: Brain,
    title: 'Explainable AI',
    description: 'Developing methods to make AI models interpretable and transparent. Creating visualization techniques and explanation frameworks that help users understand model decisions.',
    technologies: ['XAI', 'Model Interpretability', 'Visualization', 'Transparency'],
  },
  {
    icon: Microscope,
    title: 'Hybrid Deep Learning Models',
    description: 'Designing and implementing hybrid architectures that combine multiple deep learning approaches for enhanced performance in classification and detection tasks.',
    technologies: ['Hybrid Models', 'Ensemble Learning', 'Multi-Modal Learning', 'Architecture Design'],
  },
]

export default function Research() {
  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          Research <span className="gradient-text">Areas</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Advancing AI and machine learning through interdisciplinary research
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <area.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 max-w-4xl mx-auto card bg-gradient-to-br from-primary-50 to-white"
        >
          <h3 className="text-2xl font-semibold mb-4">Research Philosophy</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            My research focuses on developing practical AI solutions that address real-world challenges 
            in healthcare and agriculture. I believe in creating models that are not only accurate but 
            also interpretable, allowing domain experts to understand and trust AI-driven decisions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through hybrid deep learning approaches and explainable AI techniques, I aim to bridge 
            the gap between cutting-edge AI research and practical applications that can make a 
            meaningful impact on society.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
