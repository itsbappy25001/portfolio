'use client'

import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Hi, I'm{' '}
                <span className="gradient-text">Sarbajit Paul Bappy</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">
                Final-Year Computer Science Student
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Passionate about <span className="font-semibold text-primary-600">Deep Learning</span>,{' '}
                <span className="font-semibold text-primary-600">Computer Vision</span>, and{' '}
                <span className="font-semibold text-primary-600">Explainable AI</span> with applications in healthcare and agriculture
              </p>
              <div className="space-y-2 text-gray-600 mb-6">
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4" />
                  <a href="mailto:bappy15-6155@s.diu.edu.bd" className="hover:text-primary-600">bappy15-6155@s.diu.edu.bd</a>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-4 h-4" />
                  <span>+880 1315352270</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/Bappy_CV_Official.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium shadow-lg"
              >
                <Download size={20} />
                Download CV
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://github.com/SarbajitPbappy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors shadow-lg"
                >
                  <Github size={20} />
                  GitHub
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://linkedin.com/in/iamsarbajit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors shadow-lg"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Sarbajit Paul Bappy"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
