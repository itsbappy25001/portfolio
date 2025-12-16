'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Globe, Award } from 'lucide-react'

const education = [
  {
    icon: Globe,
    program: 'Erasmus+ Exchange Semester',
    degree: 'Computer Science and Engineering',
    institution: 'Mälardalen University',
    location: 'Västerås, Sweden',
    period: 'Jan 2025 – Jun 2025',
    highlights: ['International academic exchange', 'Cross-cultural research collaboration', 'Global perspective on AI/ML'],
  },
  {
    icon: GraduationCap,
    degree: 'Bachelor of Science in Computer Science and Engineering',
    institution: 'Daffodil International University (DIU)',
    location: 'Dhaka, Bangladesh',
    gpa: 'CGPA: 3.93/4.00',
    period: 'May 2022 – Present',
    highlights: ['Outstanding academic performance', 'Research-focused curriculum', 'Active in IEEE activities'],
  },
  {
    icon: Award,
    degree: 'HSC in Science',
    institution: 'Govt. Majid Memorial City College',
    location: 'Khulna, Bangladesh',
    gpa: 'GPA: 5.00/5.00',
    period: 'Jul 2017 – Dec 2019',
    highlights: ['Perfect GPA', 'Strong foundation in science and mathematics'],
  },
]

export default function Education() {
  return (
    <section className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Academic journey and international experiences
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <edu.icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">
                    {edu.degree || edu.program}
                  </h3>
                  <p className="text-primary-600 font-medium mb-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mb-2">{edu.location}</p>
                  {edu.gpa && (
                    <p className="text-gray-700 font-semibold mb-2">{edu.gpa}</p>
                  )}
                  <p className="text-gray-500 mb-4">{edu.period}</p>
                  <ul className="space-y-1">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
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
          <h3 className="text-2xl font-semibold mb-4">Courses & Certifications</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-primary-600 mb-1">Supervised Machine Learning: Regression and Classification</h4>
              <p className="text-gray-600">Instructor: Andrew Ng – Coursera, DeepLearning.AI (2023–2024)</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-600 mb-1">CSE Fundamental</h4>
              <p className="text-gray-600">Phitron.io (2022–2024). Includes DSA, OOP, DBMS, AWS, and ML foundations.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
