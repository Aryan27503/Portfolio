'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, Brain } from 'lucide-react'
import Link from 'next/link'

export default function Hero(){
  const metrics = [
    { label: 'Projects Built', value: '3+', icon: Code2 },
    { label: 'Case Studies', value: '2', icon: Brain }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="home" className="section-padding max-w-6xl mx-auto relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 -left-1/2 w-full h-96 bg-gradient-to-r from-electric/20 via-purple-600/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 -right-1/2 w-full h-96 bg-gradient-to-l from-purple-600/20 via-electric/10 to-transparent blur-3xl"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1, duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-white dark:via-white dark:to-slate-300 text-slate-900">
            Aryan Soni
          </h1>
          <p className="text-xl dark:text-indigo-200 text-indigo-700 mt-4 font-medium">Product • Strategy • Systems Thinking</p>
          <p className="mt-6 max-w-xl dark:text-slate-300 text-slate-700 leading-relaxed">
            I analyze complex problems, design elegant product solutions, and turn insights into impactful digital experiences. Passionate about product strategy, user-centric design, and leveraging AI for better decision-making.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05, x: 10 }}
              href="#case-studies"
              className="px-6 py-3 bg-gradient-to-r from-electric to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-electric/50 transition flex items-center gap-2 w-fit"
            >
              View Case Studies <ArrowRight size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 border border-electric rounded-lg hover:bg-electric/10 transition font-medium w-fit"
            >
              Download Resume
            </motion.a>
          </div>

          {/* Metrics grid - left side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 grid grid-cols-2 gap-4"
          >
            {metrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="card-glass p-4 rounded-xl border dark:border-white/5 dark:hover:border-electric/30 light:border-electric/20 light:hover:border-electric/50 transition backdrop-blur-xl"
                >
                  {Icon && <Icon size={24} className="text-electric mb-2" />}
                  <div className="text-2xl font-bold bg-gradient-to-r from-electric to-purple-400 bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="text-xs dark:text-slate-400 text-slate-600 mt-1">{metric.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Right side - Featured Work cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden lg:flex flex-col gap-6"
        >
          {/* Card 1 - SkillBridge */}
          <Link href="/case-studies/skillbridge">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group card-glass rounded-2xl p-6 border dark:border-white/5 dark:hover:border-electric/50 light:border-electric/20 light:hover:border-electric/60 transition cursor-pointer overflow-hidden relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white text-slate-900 group-hover:text-electric transition">SkillBridge</h3>
                    <p className="text-sm dark:text-slate-400 text-slate-600 mt-1">Micro-internship marketplace case study</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-electric font-medium text-sm group-hover:gap-3 transition">
                  View Case Study <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Card 2 - RoadLoop */}
          <Link href="/case-studies/roadloop">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group card-glass rounded-2xl p-6 border dark:border-white/5 dark:hover:border-purple-500/50 light:border-purple-400/20 light:hover:border-purple-600/60 transition cursor-pointer overflow-hidden relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold dark:text-white text-slate-900 group-hover:text-purple-400 transition">RoadLoop</h3>
                    </div>
                    <p className="text-sm dark:text-slate-400 text-slate-600">Predictive navigation system to reduce missed turns and improve driving efficiency</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-purple-400 font-medium text-sm group-hover:gap-3 transition">
                  View Case Study <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
