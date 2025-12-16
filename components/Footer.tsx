'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Sarbajit Paul Bappy</h3>
            <p className="text-gray-400">
              Final-year Computer Science student passionate about Deep Learning, Computer Vision, and Explainable AI
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Education', 'Research', 'Publications', 'Projects', 'Contact'].map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/SarbajitPbappy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="hover:text-primary-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/iamsarbajit"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="hover:text-primary-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:sarbajit2001@gmail.com"
                whileHover={{ scale: 1.2 }}
                className="hover:text-primary-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Sarbajit Paul Bappy. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
