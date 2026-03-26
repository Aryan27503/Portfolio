'use client'

import { motion } from 'framer-motion'
import { Sparkles, Brain, Zap, BarChart3 } from 'lucide-react'

const experiments = [
  {
    title: 'AI-based Disaster Report Classification',
    project: 'ResQNet',
    description: 'Automatically classify incoming disaster reports into categories (earthquake, flood, fire, etc.) and route to appropriate response teams using computer vision and NLP.',
    impact: 'Reduces manual triage time by 80%, ensures reports reach the right team in seconds',
    technologies: ['TensorFlow', 'NLP', 'Computer Vision', 'Real-time Classification']
  },
  {
    title: 'AI-Powered Analytics Insights',
    project: 'Product Metrics',
    description: 'ML models that detect anomalies in user behavior, predict churn, and automatically generate insights from product metrics dashboards.',
    impact: 'Identify problems 2-3 days earlier, enable proactive interventions',
    technologies: ['Time Series Forecasting', 'Anomaly Detection', 'LLMs for Insight Generation']
  },
  {
    title: 'Prompt Engineering for Product Workflows',
    project: 'Internal Tools',
    description: 'Using LLMs like ChatGPT APIs to automate product documentation, user story generation, and requirement synthesis from customer feedback.',
    impact: 'Cut documentation time from 4 hours to 30 minutes per feature',
    technologies: ['OpenAI API', 'Prompt Engineering', 'Fine-tuning']
  },
  {
    title: 'Predictive Route Optimization',
    project: 'RoadLoop',
    description: 'ML model that predicts traffic patterns, weather changes, and suggests optimal routes 30 minutes before driver departure.',
    impact: 'Reduces travel time by 18%, improves delivery efficiency',
    technologies: ['Prophet (Time Series)', 'Graph Neural Networks', 'Traffic APIs']
  }
]

export default function AIProduct() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="ai-product" className="section-padding max-w-6xl mx-auto relative">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-electric/20 to-transparent blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-3">
          <Sparkles className="text-electric" size={32} />
          <h2 className="text-4xl font-heading font-semibold">AI × Product Experiments</h2>
        </div>
        <p className="dark:text-slate-400 text-slate-600 max-w-2xl">Exploring how artificial intelligence can enhance product experiences, automate workflows, and enable better decision-making</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
      >
        {experiments.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group card-glass rounded-2xl p-8 border border-white/5 hover:border-electric/50 transition-all duration-300 shadow-lg hover:shadow-electric/20 overflow-hidden relative"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric/20 to-purple-600/20 border border-electric/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {idx === 0 && <Brain size={24} className="text-electric" />}
                {idx === 1 && <BarChart3 size={24} className="text-electric" />}
                {idx === 2 && <Sparkles size={24} className="text-electric" />}
                {idx === 3 && <Zap size={24} className="text-electric" />}
              </div>

              {/* Title and project */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric transition-colors">
                {exp.title}
              </h3>
              <div className="inline-block px-3 py-1 rounded-full bg-electric/10 text-electric text-xs font-medium mb-4 border border-electric/20">
                {exp.project}
              </div>

              {/* Description */}
              <p className="dark:text-slate-300 text-slate-700 mb-4 leading-relaxed">{exp.description}</p>

              {/* Impact */}
              <div className="bg-gradient-to-r from-electric/10 to-purple-600/10 rounded-lg p-3 mb-4 border border-electric/20">
                <p className="text-sm font-semibold text-electric mb-1">Impact</p>
                <p className="text-sm dark:text-slate-300 text-slate-700">{exp.impact}</p>
              </div>

              {/* Technologies */}
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="text-xs px-2 py-1 rounded bg-white/5 dark:text-slate-300 text-slate-700 dark:border dark:border-white/10 light:border light:border-slate-300 group-hover:border-electric/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-electric/5 via-purple-600/5 to-transparent text-center"
      >
        <h3 className="text-2xl font-heading font-bold mb-2">Interested in AI for Product?</h3>
        <p className="dark:text-slate-400 text-slate-600 mb-4">I'm actively exploring how to leverage ML and LLMs to solve real product problems</p>
        <a
          href="/#contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-electric to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-electric/50 transition gap-2"
        >
          <Sparkles size={18} />
          Start a Conversation
        </a>
      </motion.div>
    </section>
  )
}
