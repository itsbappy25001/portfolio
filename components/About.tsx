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
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'IEEE Vice Chair (Technical)',
    organization: 'IEEE DIU SB CS Chapter',
    period: '2024 – 2025',
    description: 'Leading technical initiatives and events within the IEEE Student Branch Computer Science Chapter.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Briefcase,
    title: 'Secretary',
    organization: 'IEEE DIU SB WIE Affinity Group',
    period: '2024 – 2025',
    description: 'Managing operations and organizing events for the Women in Engineering Affinity Group.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    title: 'Campus Organizer',
    organization: 'Brikkhobondhu',
    period: '2024',
    description: 'Organizing campus events and activities.',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function About() {
  return (
    <section id="about" className="section-container bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl"></div>
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Final-year Computer Science and Engineering student at Daffodil International University 
            with an Erasmus+ exchange at Mälardalen University, Sweden. Passionate about deep learning, 
            computer vision, and explainable AI with applications in healthcare and agriculture. Ongoing 
            publication and ongoing research on disease detection from medical and agricultural images. 
            Strong commitment to impactful research, teaching, and global collaboration, aspiring toward 
            graduate studies and academia.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5, transition: { type: 'spring', stiffness: 300 } }}
              className="group relative"
            >
              {/* Gradient glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${role.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100/50 transition-all duration-300 group-hover:shadow-2xl group-hover:border-primary-200/50">
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <role.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-gray-900">{role.title}</h3>
                    <p className="text-primary-600 font-semibold mb-1">{role.organization}</p>
                    <p className="text-sm text-gray-500 mb-3">{role.period}</p>
                    <p className="text-gray-600 leading-relaxed">{role.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="card bg-gradient-to-br from-primary-50 via-white to-primary-50/50 border-primary-200/50"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Research Focus</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Deep Learning & Computer Vision',
                  desc: 'Developing advanced deep learning models for image classification and analysis, with a focus on explainable AI to make model decisions transparent and interpretable.',
                },
                {
                  title: 'Healthcare Applications',
                  desc: 'Applying AI and machine learning to medical image analysis for disease detection and diagnosis, contributing to improved healthcare outcomes.',
                },
                {
                  title: 'Agricultural Applications',
                  desc: 'Using computer vision and deep learning for agricultural image analysis, including disease detection in crops and plants to support sustainable farming practices.',
                },
                {
                  title: 'Explainable AI',
                  desc: 'Researching methods to make AI models more interpretable and transparent, ensuring that AI decisions can be understood and trusted by domain experts.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-xl bg-white/50 border border-gray-100 hover:border-primary-200 transition-all"
                >
                  <h4 className="font-bold text-primary-600 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
