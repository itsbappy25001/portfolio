'use client'

import { motion } from 'framer-motion'
import { FileText, ExternalLink, CheckCircle, Clock, Sparkles } from 'lucide-react'

const publications = [
  {
    title: 'SkinVisualNet: A Hybrid Deep Learning Approach Leveraging Explainable Models for Identifying Lyme Disease from Skin Rash Images',
    authors: 'Sohel, A., Turjy, R. C. D., Bappy, S. P., Assaduzzaman, M., Marouf, A. A., Rokne, J. G., & Alhajj, R.',
    status: 'Published',
    journal: 'Machine Learning and Knowledge Extraction',
    year: '2025',
    doi: '10.3390/make7040157',
    type: 'Journal Article (Q1)',
    link: 'https://doi.org/10.3390/make7040157',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'JackVisualNet: A Fine-Tuned Hybrid Deep Learning Model for Jackfruit Disease Classification with Explainable AI',
    authors: 'Bappy, S. P. et al.',
    status: 'Major Revision',
    journal: 'PeerJ Computer Science (Q1)',
    year: '2025',
    type: 'Journal Article',
    link: '#',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    title: 'A Hybrid Deep Learning Approach for Identifying Jackfruit Leaf and Fruit Disease',
    authors: 'Paul, S., R.C.D. Turjy, A. Sohel',
    status: 'Published (Abstract)',
    journal: 'IEEE CS BDC Symposium 2024',
    year: '2024',
    type: 'Conference Proceedings',
    volume: 'Vol. 3',
    link: 'https://symposium24.ieeecsbdc.org/papers/20-a-hybrid-deep-learning-approach-for-identifying-jackfruit-leaf-and-fruit-disease',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'A Hybrid Deep Learning Approach for Identifying Lyme Disease from Skin Rash Images',
    authors: 'R.C.D. Turjy, Paul, S., A. Sohel',
    status: 'Published (Abstract)',
    journal: 'IEEE CS BDC Symposium 2024',
    year: '2024',
    type: 'Conference Proceedings',
    volume: 'Vol. 3',
    link: 'https://symposium24.ieeecsbdc.org/papers/20-a-hybrid-deep-learning-approach-for-identifying-jackfruit-leaf-and-fruit-disease',
    gradient: 'from-purple-500 to-pink-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Publications() {
  return (
    <section id="publications" className="section-container bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-primary-300/10 rounded-full blur-3xl"></div>
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
            <span className="gradient-text">Publications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Research contributions to the AI/ML community
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01, x: 8, transition: { type: 'spring', stiffness: 300 } }}
              className="group relative"
            >
              {/* Gradient glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${pub.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100/50 transition-all duration-300 group-hover:shadow-2xl group-hover:border-primary-200/50">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pub.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <FileText className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2">{pub.title}</h3>
                        <div className="flex items-center gap-2 flex-wrap">
                          {pub.status === 'Published' && (
                            <motion.span
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-semibold shadow-md"
                            >
                              <CheckCircle className="w-3.5 h-3.5" />
                              {pub.status}
                            </motion.span>
                          )}
                          {pub.status === 'Major Revision' && (
                            <motion.span
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-full text-xs font-semibold shadow-md"
                            >
                              <Clock className="w-3.5 h-3.5" />
                              {pub.status}
                            </motion.span>
                          )}
                          {pub.status === 'Published (Abstract)' && (
                            <motion.span
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs font-semibold shadow-md"
                            >
                              {pub.status}
                            </motion.span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed pl-16">{pub.authors}</p>
                    
                    <div className="flex flex-wrap items-center gap-3 text-sm pl-16">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg font-medium">{pub.type}</span>
                      {pub.journal && (
                        <span className="text-primary-600 font-semibold">{pub.journal}</span>
                      )}
                      {pub.year && (
                        <span className="text-gray-500">({pub.year})</span>
                      )}
                      {pub.doi && (
                        <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg font-medium">DOI: {pub.doi}</span>
                      )}
                      {pub.volume && (
                        <span className="text-gray-500">{pub.volume}</span>
                      )}
                    </div>
                  </div>
                  
                  {pub.link && pub.link !== '#' && (
                    <motion.a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
