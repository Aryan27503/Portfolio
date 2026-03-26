'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react'

export default function Footer(){
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aryansoni27/', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/Aryan27503', icon: Github },
    { label: 'Email', href: 'mailto:aryan.soni27503@gmail.com', icon: Mail }
  ]

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-bold mb-2">Aryan Soni</h3>
            <p className="dark:text-slate-400 text-slate-600 text-sm">Product Manager | AI-Curious | Data-Driven</p>
            <p className="dark:text-slate-500 text-slate-600 text-sm mt-3 leading-relaxed">
              Building products that solve real problems and create meaningful impact in the digital economy.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold dark:text-white text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="dark:text-slate-400 text-slate-700 hover:text-electric transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-electric/40 group-hover:bg-electric transition" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold dark:text-white text-slate-900 mb-4">Connect</h4>
            <div className="space-y-3">
              {links.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 dark:text-slate-400 text-slate-700 hover:text-electric transition group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:border-electric/30 flex items-center justify-center group-hover:scale-110 transition-all">
                      <Icon size={18} />
                    </div>
                    <span className="text-sm">{link.label}</span>
                    {link.label !== 'Email' && <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition" />}
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between text-sm dark:text-slate-400 text-slate-700"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span>© {currentYear} Aryan Soni — Product Portfolio</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Built with Next.js, React & Framer Motion</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/resume.pdf" className="hover:text-electric transition font-medium">
              Download Resume
            </a>
            <span>•</span>
            <a href="#contact" className="hover:text-electric transition font-medium">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
