'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react'

export default function Contact(){
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSent(true)
      setLoading(false)
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="contact" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-heading font-semibold mb-4">Let's Connect</h2>
        <p className="dark:text-slate-400 text-slate-600 text-lg max-w-2xl mx-auto">
          Interested in discussing product strategy, startups, or opportunities? I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Email Card */}
        <motion.a
          href="mailto:aryan.soni27503@gmail.com"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="card-glass rounded-2xl p-8 border border-white/5 hover:border-electric/50 transition-all duration-300 text-center group"
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-electric/20 border border-electric/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={24} className="text-electric" />
            </div>
          </div>
          <h3 className="font-semibold dark:text-white text-slate-900 mb-2">Email</h3>
          <p className="text-sm dark:text-slate-300 text-slate-700 break-all hover:text-electric transition">
            aryan.soni27503@gmail.com
          </p>
        </motion.a>

        {/* LinkedIn Card */}
        <motion.a
          href="https://www.linkedin.com/in/aryansoni27/"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -5 }}
          className="card-glass rounded-2xl p-8 border border-white/5 hover:border-electric/50 transition-all duration-300 text-center group"
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Linkedin size={24} className="text-blue-400" />
            </div>
          </div>
          <h3 className="font-semibold dark:text-white text-slate-900 mb-2">LinkedIn</h3>
          <p className="text-sm dark:text-slate-300 text-slate-700 hover:text-blue-400 transition">
            Connect with me →
          </p>
        </motion.a>

        {/* GitHub Card */}
        <motion.a
          href="https://github.com/Aryan27503"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="card-glass rounded-2xl p-8 border border-white/5 hover:border-electric/50 transition-all duration-300 text-center group"
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Github size={24} className="text-purple-400" />
            </div>
          </div>
          <h3 className="font-semibold dark:text-white text-slate-900 mb-2">GitHub</h3>
          <p className="text-sm dark:text-slate-300 text-slate-700 hover:text-purple-400 transition">
            View my projects →
          </p>
        </motion.a>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto card-glass rounded-2xl p-8 md:p-12 border border-white/5"
      >
        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle size={48} className="text-green-400" />
              </motion.div>
            </div>
            <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-2">Message Sent!</h3>
            <p className="dark:text-slate-300 text-slate-700 mb-6">Thanks for reaching out. I'll get back to you within 24 hours.</p>
            <button
              onClick={() => setSent(false)}
              className="px-6 py-2 bg-electric/10 hover:bg-electric/20 text-electric rounded-lg font-medium border border-electric/30 transition"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-6">Send Me a Message</h3>

            <div>
              <label className="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 dark:bg-white/5 light:bg-white dark:border dark:border-white/10 light:border light:border-slate-300 rounded-lg dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-electric/50 transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 dark:bg-white/5 light:bg-white dark:border dark:border-white/10 light:border light:border-slate-300 rounded-lg dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-electric/50 transition"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 dark:bg-white/5 light:bg-white dark:border dark:border-white/10 light:border light:border-slate-300 rounded-lg dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-electric/50 transition resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-electric to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-electric/50 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        )}
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-slate-400 text-sm">
          Prefer to chat first? <a href="https://calendly.com/aryansoni" className="text-electric hover:text-electric/80 font-medium transition">Schedule a quick call</a>
        </p>
      </motion.div>
    </section>
  )
}
