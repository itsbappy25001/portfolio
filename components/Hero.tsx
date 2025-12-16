'use client'

import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Hi, I'm{' '}
                <span className="gradient-text">Sarbajit Paul Bappy</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
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
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:bappy15-6155@s.diu.edu.bd" className="hover:text-primary-600">bappy15-6155@s.diu.edu.bd</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+880 1315352270</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/Bappy_CV_Official.pdf"
                download
                className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                <Download size={20} />
                Download CV
              </a>
              <Link
                href="https://github.com/SarbajitPbappy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors"
              >
                <Github size={20} />
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/iamsarbajit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-3xl opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Sarbajit Paul Bappy"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

