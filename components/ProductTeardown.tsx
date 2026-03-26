'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Lightbulb, Users, Zap, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const teardowns = [
  {
    slug: 'blinkit',
    name: 'Blinkit',
    tagline: '10-minute delivery revolution',
    problem: 'Customer demand for instant gratification in grocery shopping',
    targetUsers: 'Urban millennials, busy professionals, emergency shoppers',
    keyFeatures: [
      'Real-time inventory tracking',
      'AI-powered demand forecasting',
      'Ultra-fast logistics network',
      'Smart push notifications',
      'Dynamic pricing engine'
    ],
    whatWorks: [
      'Exceptional speed as core differentiator',
      'Dark store network optimization',
      'Emotional appeal of "10 minutes"',
      'Seamless app experience',
      'Network effects in metro cities'
    ],
    improvementIdea: 'AI demand forecasting for inventory optimization - predict surge in demand 4 hours ahead based on weather, events, and user behavior patterns'
  },
  {
    slug: 'uber',
    name: 'Uber',
    tagline: 'Logistics reimagined for the city',
    problem: 'Inefficient taxi market with poor user experience and driver income instability',
    targetUsers: 'Daily commuters, business travelers, gig economy participants',
    keyFeatures: [
      'Real-time driver matching',
      'Dynamic surge pricing',
      'Transparent cost estimation',
      'Driver rating system',
      'Seamless payment integration'
    ],
    whatWorks: [
      'Solves key pain points in traditional taxis',
      'Two-sided marketplace creates network effects',
      'Transparent pricing builds trust',
      'Data-driven driver matching algorithm',
      'Expansion into multiple categories (UberEats, etc.)'
    ],
    improvementIdea: 'Predictive routing using ML - anticipate driver demand surges 30 minutes ahead and suggest preemptive driver positioning to reduce wait times'
  },
  {
    slug: 'instagram',
    name: 'Instagram',
    tagline: 'Visual storytelling at scale',
    problem: 'Existing photo-sharing platforms lack aesthetic appeal and viral mechanics',
    targetUsers: 'Content creators, casual users, visual storytellers',
    keyFeatures: [
      'Beautiful photo filters and editing',
      'Infinite scroll feed',
      'Story format (time-limited content)',
      'Influencer monetization',
      'Algorithmic feed optimization'
    ],
    whatWorks: [
      'Filters democratized photography',
      'Stories reduced posting anxiety',
      'Algorithm drives engagement and discovery',
      'Influencer economy creates aspirational content',
      'Seamless mobile-first experience',
      'Perfect balance of social and content'
    ],
    improvementIdea: 'AI Content Moderation + Creator Safety - implement advanced ML to detect negative comments before posting and offer gentle rewording suggestions to improve community health'
  }
]

export default function ProductTeardown() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="product-thinking" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-heading font-semibold mb-2">Product Thinking</h2>
        <p className="dark:text-slate-400 text-slate-600">How I analyze products and identify opportunities for improvement</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 space-y-8"
      >
        {teardowns.map((teardown, idx) => (
          <motion.article
            key={teardown.slug}
            variants={itemVariants}
            className="group card-glass rounded-2xl overflow-hidden border border-white/5 hover:border-electric/50 transition-all duration-300 shadow-lg hover:shadow-electric/20"
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-3xl font-bold group-hover:text-electric transition-colors">{teardown.name}</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-electric/10 text-electric border border-electric/20">
                      Teardown #{idx + 1}
                    </span>
                  </div>
                  <p className="dark:text-slate-400 text-slate-600 italic mb-4">{teardown.tagline}</p>
                </div>
              </div>

              {/* Grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                {/* Left column */}
                <div className="space-y-6">
                  {/* Problem */}
                  <div>
                    <h4 className="font-semibold text-white flex items-center gap-2 mb-3">
                      <Zap size={20} className="text-electric" />
                      The Problem
                    </h4>
                    <p className="dark:text-slate-300 text-slate-700">{teardown.problem}</p>
                  </div>

                  {/* Target Users */}
                  <div>
                    <h4 className="font-semibold text-white flex items-center gap-2 mb-3">
                      <Users size={20} className="text-purple-400" />
                      Target Users
                    </h4>
                    <p className="dark:text-slate-300 text-slate-700">{teardown.targetUsers}</p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-white flex items-center gap-2 mb-3">
                      <TrendingUp size={20} className="text-indigo-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {teardown.keyFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 dark:text-slate-300 text-slate-700">
                          <span className="text-electric mt-1">▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right column */}
                <div className="space-y-6">
                  {/* What Works */}
                  <div>
                    <h4 className="font-semibold text-white flex items-center gap-2 mb-3">
                      <Zap size={20} className="text-green-400" />
                      What Works Well
                    </h4>
                    <ul className="space-y-2">
                      {teardown.whatWorks.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 dark:text-slate-300 text-slate-700">
                          <span className="text-green-400 mt-1">✓</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Improvement Idea */}
                  <div className="bg-gradient-to-br from-electric/10 to-purple-600/10 rounded-xl p-4 border border-electric/20">
                    <h4 className="font-semibold text-white flex items-center gap-2 mb-2">
                      <Lightbulb size={20} className="text-electric" />
                      Improvement Idea
                    </h4>
                    <p className="text-sm dark:text-slate-300 text-slate-700">{teardown.improvementIdea}</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href={`/teardowns/${teardown.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-electric/20 to-purple-600/20 hover:from-electric/40 hover:to-purple-600/40 rounded-lg text-sm font-semibold text-electric border border-electric/30 hover:border-electric/60 transition-all mt-4"
              >
                View Teardown
                <ChevronRight size={16} />
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 text-center p-8 rounded-2xl border border-white/5 bg-gradient-to-r from-electric/5 via-transparent to-purple-600/5"
      >
        <p className="dark:text-slate-300 text-slate-700 mb-4">Want to see more teardowns or discuss product strategies?</p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-electric/50 transition"
        >
          Let's Discuss <ChevronRight size={18} />
        </Link>
      </motion.div>
    </section>
  )
}
