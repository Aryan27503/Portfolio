'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Zap, Users, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface TeardownProps {
  teardown: {
    name: string
    tagline: string
    problem: string
    targetUsers: string
    keyFeatures: string[]
    whatWorks: string[]
    productStrategy: string[]
    improvementIdea: string
    metrics: { label: string; value: string; desc: string }[]
  }
}

export default function TeardownContent({ teardown }: TeardownProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 max-w-6xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-electric hover:text-electric/80 transition mb-8">
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
            {teardown.name}
          </h1>
          <p className="text-xl text-slate-300 mb-2">{teardown.tagline}</p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Problem Section */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-heading font-bold flex items-center gap-3 mb-6">
                <Zap className="text-electric" size={32} />
                The Problem
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {teardown.problem}
              </p>
            </div>
            <div className="card-glass rounded-2xl p-6 border border-white/5 h-fit">
              <h3 className="font-semibold text-sm uppercase text-slate-400 mb-4">Target Users</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {teardown.targetUsers}
              </p>
            </div>
          </motion.section>

          {/* Key Features Section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-heading font-bold mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teardown.keyFeatures.map((feature, idx) => (
                <div key={idx} className="card-glass rounded-xl p-4 border border-white/5 hover:border-electric/30 transition flex items-start gap-3">
                  <CheckCircle className="text-electric flex-shrink-0 mt-1" size={20} />
                  <p className="text-slate-300">{feature}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* What Works Section */}
          <motion.section variants={itemVariants} className="bg-gradient-to-r from-electric/10 via-purple-600/10 to-transparent rounded-3xl p-8 md:p-12 border border-white/5">
            <h2 className="text-3xl font-heading font-bold mb-8">What Works Well</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teardown.whatWorks.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <TrendingUp className="text-electric mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Product Strategy Section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-heading font-bold mb-8">Product Strategy Insights</h2>
            <div className="space-y-4">
              {teardown.productStrategy.map((insight, idx) => (
                <div key={idx} className="card-glass rounded-xl p-6 border border-white/5 hover:border-electric/30 transition">
                  <div className="flex items-start gap-3">
                    <span className="text-electric font-bold text-lg flex-shrink-0">{idx + 1}</span>
                    <p className="text-slate-300 text-lg">{insight}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Improvement Idea Section */}
          <motion.section variants={itemVariants} className="border-l-4 border-electric pl-8 py-4">
            <h3 className="text-sm uppercase text-electric font-bold tracking-wider mb-3">Improvement Opportunity</h3>
            <p className="text-lg text-slate-200 leading-relaxed">{teardown.improvementIdea}</p>
          </motion.section>

          {/* Metrics Section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-heading font-bold mb-8">Key Metrics & Scale</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teardown.metrics.map((metric, idx) => (
                <div key={idx} className="card-glass rounded-2xl p-6 border border-white/5 text-center hover:border-electric/30 transition">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-electric to-purple-400 bg-clip-text mb-2">
                    {metric.value}
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{metric.label}</h4>
                  <p className="text-xs text-slate-400">{metric.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section variants={itemVariants} className="py-12 text-center border-t border-white/10">
            <h3 className="text-2xl font-heading font-bold mb-4">Interested in product analysis?</h3>
            <p className="text-slate-400 mb-6">Explore my other teardowns or case studies to see how I break down products</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/#product-thinking"
                className="px-6 py-3 bg-gradient-to-r from-electric/20 to-purple-600/20 hover:from-electric/40 hover:to-purple-600/40 rounded-lg font-semibold text-electric border border-electric/30 hover:border-electric/60 transition"
              >
                View Other Teardowns
              </Link>
              <Link
                href="/#case-studies"
                className="px-6 py-3 bg-gradient-to-r from-electric/20 to-purple-600/20 hover:from-electric/40 hover:to-purple-600/40 rounded-lg font-semibold text-electric border border-electric/30 hover:border-electric/60 transition"
              >
                View Case Studies
              </Link>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}
