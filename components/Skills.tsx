'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Code2, Wrench, BarChart3 } from 'lucide-react'

export default function Skills(){
  const skillCategories = [
    {
      icon: Lightbulb,
      title: 'Product Skills',
      items: ['Product Strategy', 'User Research', 'MVP Development', 'Roadmapping', 'Feature Prioritization', 'Customer Discovery', 'GTM Strategy', 'Stakeholder Management'],
      footer: 'Focused on structured problem-solving and MVP thinking'
    },
    {
      icon: Code2,
      title: 'Technical Skills',
      items: ['API Integration', 'SQL Basics', 'Data Analysis', 'AI Product Understanding', 'Prompt Engineering'],
      footer: 'Helps me understand systems and collaborate with engineers'
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      items: ['Figma', 'Power BI', 'Notion', 'VS Code', 'Cursor / Lovable'],
      footer: 'Tools I use for design, analysis, and execution'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Metrics',
      items: ['Funnel Analysis', 'Retention Metrics', 'A/B Testing', 'North Star Metrics'],
      footer: 'Focused on measuring meaningful product outcomes'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-heading font-semibold mb-2">Skills & Expertise</h2>
        <p className="dark:text-slate-400 text-slate-600">Core competencies across product strategy, technical foundations, and analytics</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillCategories.map((category, idx) => {
          const Icon = category.icon
          return (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group card-glass rounded-2xl p-8 border border-white/5 hover:border-electric/50 transition-all duration-300 shadow-lg hover:shadow-electric/20 flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric/20 to-purple-600/20 border border-electric/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon size={24} className="text-electric" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-4 group-hover:text-electric transition-colors">
                {category.title}
              </h3>

              {/* Skills List */}
              <ul className="space-y-3 flex-grow">
                {category.items.map((skill, sidx) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: sidx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 transition group/item"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-electric/60 group-hover/item:bg-electric transition scale-0 group-hover/item:scale-100" />
                    <span className="text-sm">{skill}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Decorative line */}
              <div className="mt-6 h-px bg-gradient-to-r from-electric/20 via-electric/5 to-transparent" />

              {/* Footer line */}
              <p className="mt-4 text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                {category.footer}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
