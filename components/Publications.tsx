'use client'

import { motion } from 'framer-motion'
import { FileText, ExternalLink, CheckCircle, Clock } from 'lucide-react'

const publications = [
  {
    title: 'SkinVisualNet: A Hybrid Deep Learning Approach Leveraging Explainable Models for Identifying Lyme Disease from Skin Rash Images',
    authors: 'Sohel, A., Turjy, R. C. D., Bappy, S. P., Assaduzzaman, M., Marouf, A. A., Rokne, J. G., & Alhajj, R.',
    status: 'Published',
    journal: 'Machine Learning and Knowledge Extraction',
    year: '2025',
    doi: '10.3390/make7040157',
    type: 'Journal Article',
    link: 'https://doi.org/10.3390/make7040157',
  },
  {
    title: 'JackVisualNet: A Fine-Tuned Hybrid Deep Learning Model for Jackfruit Disease Classification with Explainable AI',
    authors: 'Bappy, S. P. et al.',
    status: 'Major Revision',
    journal: 'PeerJ Computer Science (Q1)',
    year: '2025',
    type: 'Journal Article',
    link: '#',
  },
  {
    title: 'A Hybrid Deep Learning Approach for Identifying Jackfruit Leaf and Fruit Disease',
    authors: 'Paul, S., R.C.D. Turjy, A. Sohel',
    status: 'Published (Abstract)',
    journal: 'IEEE CS BDC Symposium 2024',
    year: '2024',
    type: 'Conference Proceedings',
    volume: 'Vol. 3',
    link: '#',
  },
  {
    title: 'A Hybrid Deep Learning Approach for Identifying Lyme Disease from Skin Rash Images',
    authors: 'R.C.D. Turjy, Paul, S., A. Sohel',
    status: 'Published (Abstract)',
    journal: 'IEEE CS BDC Symposium 2024',
    year: '2024',
    type: 'Conference Proceedings',
    volume: 'Vol. 3',
    link: '#',
  },
]

export default function Publications() {
  return (
    <section className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Publications</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Research contributions to the AI/ML community
        </p>

        <div className="max-w-5xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card hover:border-primary-300 border-2 border-transparent transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <FileText className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <h3 className="text-xl font-semibold">{pub.title}</h3>
                    {pub.status === 'Published' && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        <CheckCircle className="w-3 h-3" />
                        {pub.status}
                      </span>
                    )}
                    {pub.status === 'Major Revision' && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                        <Clock className="w-3 h-3" />
                        {pub.status}
                      </span>
                    )}
                    {pub.status === 'Published (Abstract)' && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {pub.status}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-3 text-sm">{pub.authors}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="text-gray-500">{pub.type}</span>
                    {pub.journal && (
                      <span className="text-primary-600 font-medium">{pub.journal}</span>
                    )}
                    {pub.year && (
                      <span className="text-gray-500">({pub.year})</span>
                    )}
                    {pub.doi && (
                      <span className="text-primary-600 font-medium">DOI: {pub.doi}</span>
                    )}
                    {pub.volume && (
                      <span className="text-gray-500">{pub.volume}</span>
                    )}
                  </div>
                </div>
                
                {pub.link && pub.link !== '#' && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
