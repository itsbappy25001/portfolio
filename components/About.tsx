'use client'

import { motion } from 'framer-motion'
import { Award, Users, BookOpen, Briefcase } from 'lucide-react'

const roles = [
  {
    icon: BookOpen,
    title: 'Teaching Assistant',
    organization: 'Daffodil International University',
    period: 'October 2025 – Present',
    description: 'Working under the supervision of Professor Dr. Fernaz Narin Nur. Assisting in undergraduate courses, laboratory sessions, and coursework evaluation. Providing academic and research support within the department.',
  },
  {
    icon: Users,
    title: 'IEEE Vice Chair (Technical)',
    organization: 'IEEE DIU SB CS Chapter',
    period: '2024 – 2025',
    description: 'Leading technical initiatives and events within the IEEE Student Branch Computer Science Chapter.',
  },
  {
    icon: Briefcase,
    title: 'Secretary',
    organization: 'IEEE DIU SB WIE Affinity Group',
    period: '2024 – 2025',
    description: 'Managing operations and organizing events for the Women in Engineering Affinity Group.',
  },
  {
    icon: Award,
    title: 'Campus Organizer',
    organization: 'Brikkhobondhu',
    period: '2024',
    description: 'Organizing campus events and activities.',
  },
]

export default function About() {
  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
          Final-year Computer Science and Engineering student at Daffodil International University 
          with an Erasmus+ exchange at Mälardalen University, Sweden. Passionate about deep learning, 
          computer vision, and explainable AI with applications in healthcare and agriculture. Ongoing 
          publication and ongoing research on disease detection from medical and agricultural images. 
          Strong commitment to impactful research, teaching, and global collaboration, aspiring toward 
          graduate studies and academia.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <role.icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
                  <p className="text-primary-600 font-medium mb-1">{role.organization}</p>
                  <p className="text-sm text-gray-500 mb-3">{role.period}</p>
                  <p className="text-gray-600">{role.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="card bg-gradient-to-br from-primary-50 to-white">
            <h3 className="text-2xl font-semibold mb-4">Research Focus</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">Deep Learning & Computer Vision</h4>
                <p className="text-gray-600">
                  Developing advanced deep learning models for image classification and analysis, 
                  with a focus on explainable AI to make model decisions transparent and interpretable.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">Healthcare Applications</h4>
                <p className="text-gray-600">
                  Applying AI and machine learning to medical image analysis for disease detection 
                  and diagnosis, contributing to improved healthcare outcomes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">Agricultural Applications</h4>
                <p className="text-gray-600">
                  Using computer vision and deep learning for agricultural image analysis, including 
                  disease detection in crops and plants to support sustainable farming practices.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 mb-2">Explainable AI</h4>
                <p className="text-gray-600">
                  Researching methods to make AI models more interpretable and transparent, ensuring 
                  that AI decisions can be understood and trusted by domain experts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
