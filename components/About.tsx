'use client'

import { motion } from 'framer-motion'
import { Lightbulb, BarChart3, Zap } from 'lucide-react'

export default function About(){
  const highlights = [
    {
      icon: Lightbulb,
      title: "Product Thinking",
      description: "Breaking down products and identifying improvement opportunities."
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Using insights and metrics to guide product decisions."
    },
    {
      icon: Zap,
      title: "AI Curiosity",
      description: "Exploring how AI can enhance product experiences."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
      >
        {/* Left Column - About Text */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-3xl font-heading font-semibold">About Me</h2>

          <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
            I am a Mathematics & Computing Engineering student with a growing interest in Product Management and technology-driven problem solving. During my engineering journey, I realized that building technology alone is not enough — the real challenge lies in identifying meaningful problems and designing solutions that create real value for users.
          </p>

          <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
            I enjoy analyzing digital products, understanding user behavior, and breaking down how successful products are built. My focus lies in product strategy, user-centric thinking, and data-informed decision making. I am particularly interested in how technology, design, and business strategy come together to create impactful digital products.
          </p>

          <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
            Some areas that currently interest me include:
          </p>

          <ul className="dark:text-slate-300 text-slate-700 space-y-2 pl-4 border-l-2 border-indigo-500/30">
            <li>• AI-powered product experiences</li>
            <li>• Data-driven product decisions</li>
            <li>• Logistics and optimization systems</li>
            <li>• Platforms that solve real-world coordination problems</li>
          </ul>

          <p className="dark:text-slate-300 text-slate-700 leading-relaxed pt-2">
            Currently, I am working on product case studies and analytics-driven projects to deepen my understanding of product strategy, experimentation, and user-centered product development.
          </p>
        </div>

        {/* Right Column - Highlight Cards */}
        <motion.div
          className="lg:col-span-1 space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="group relative p-5 rounded-lg backdrop-blur-md dark:bg-white/5 bg-white/40 dark:border dark:border-white/10 border border-white/20 hover:dark:bg-white/[0.08] hover:bg-white/50 transition-all duration-300 cursor-default"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-lg dark:bg-indigo-500/0 bg-indigo-500/0 group-hover:dark:bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg dark:bg-indigo-500/20 bg-indigo-500/10 group-hover:dark:bg-indigo-500/30 group-hover:bg-indigo-500/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 dark:text-indigo-400 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold dark:text-white text-slate-900">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
