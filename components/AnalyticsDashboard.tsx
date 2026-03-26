'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Users, Zap } from 'lucide-react'

export default function AnalyticsDashboard() {
  const kpis = [
    { label: 'Activation Rate', value: '68%', change: '+5.2%', icon: Users },
    { label: 'Retention Rate', value: '45%', change: '+3.1%', icon: TrendingUp },
    { label: 'Feature Adoption', value: '72%', change: '+8.4%', icon: Zap },
    { label: 'Monthly Recurring', value: '$285k', change: '+12.3%', icon: BarChart3 }
  ]

  const funnelData = [
    { stage: 'Awareness', value: 100, color: 'from-electric' },
    { stage: 'Signup', value: 58, color: 'from-purple-500' },
    { stage: 'Activation', value: 38, color: 'from-indigo-500' },
    { stage: 'Retention', value: 22, color: 'from-blue-500' },
    { stage: 'Revenue', value: 12, color: 'from-green-500' }
  ]

  const retentionCohorts = [
    { cohort: 'Jan 2024', week0: '100%', week1: '85%', week2: '72%', week4: '58%', week8: '42%' },
    { cohort: 'Feb 2024', week0: '100%', week1: '88%', week2: '75%', week4: '61%', week8: '45%' },
    { cohort: 'Mar 2024', week0: '100%', week1: '86%', week2: '73%', week4: '59%', week8: '43%' }
  ]

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
    <section id="analytics" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-heading font-semibold flex items-center gap-3 mb-2">
          <BarChart3 className="text-electric" size={32} />
          Product Metrics & Analytics
        </h2>
        <p className="dark:text-slate-400 text-slate-600">Key metrics that drive product decisions and demonstrate impact</p>
      </motion.div>

      {/* KPI Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      >
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card-glass rounded-2xl p-6 border border-white/5 hover:border-electric/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <Icon className="text-electric" size={24} />
                <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-300 font-semibold">
                  {kpi.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{kpi.value}</div>
              <p className="text-xs dark:text-slate-400 text-slate-600">{kpi.label}</p>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Funnel Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="card-glass rounded-2xl p-8 border border-white/5"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <TrendingUp className="text-electric" size={24} />
            Conversion Funnel
          </h3>
          
          <div className="space-y-6">
            {funnelData.map((item, idx) => {
              const percentage = (item.value / 100) * 100
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">{item.stage}</span>
                    <span className="text-sm font-bold dark:text-slate-300 text-slate-700">{item.value}%</span>
                  </div>
                  <div className="w-full h-8 rounded-lg bg-white/5 border border-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${item.color} to-transparent`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-8 p-4 bg-electric/10 rounded-lg border border-electric/20">
            <p className="text-sm dark:text-slate-300 text-slate-700">
              <strong className="text-electric">Key Insight:</strong> Primary drop-off is at activation (34% loss). Focus on onboarding UX and feature discovery to improve this metric by 5-10%.
            </p>
          </div>
        </motion.div>

        {/* Retention Cohorts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="card-glass rounded-2xl p-8 border border-white/5"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Users className="text-electric" size={24} />
            Retention Cohort Analysis
          </h3>

          <div className="space-y-4">
            {retentionCohorts.map((cohort, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm font-semibold dark:text-slate-300 text-slate-700">{cohort.cohort}</div>
                  <div className="flex-1 grid grid-cols-5 gap-2">
                    {[cohort.week0, cohort.week1, cohort.week2, cohort.week4, cohort.week8].map((value, vidx) => {
                      const numValue = parseInt(value)
                      const intensity = numValue / 100
                      return (
                        <div
                          key={vidx}
                          className="h-10 rounded-lg border border-white/10 flex items-center justify-center text-xs font-semibold text-white relative overflow-hidden"
                          style={{
                            backgroundColor: `rgba(59, 130, 246, ${intensity * 0.3})`
                          }}
                        >
                          <span className="relative z-10">{value}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Legend */}
            <div className="flex justify-between text-xs dark:text-slate-500 text-slate-600 mt-6 pt-4 border-t border-white/10">
              <span>Week 0</span>
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 4</span>
              <span>Week 8</span>
            </div>
          </div>

          <div className="mt-8 p-4 bg-electric/10 rounded-lg border border-electric/20">
            <p className="text-sm dark:text-slate-300 text-slate-700">
              <strong className="text-electric">Trend:</strong> Steady 3-4% improvement in Week 8 retention month-over-month. Continue focusing on engagement loops and feature value delivery.
            </p>
          </div>
        </motion.div>
      </div>

      {/* User Growth Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 card-glass rounded-2xl p-8 border border-white/5"
      >
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <Zap className="text-electric" size={24} />
          North Star Metrics Tracking
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Monthly Active Users',
              current: '145k',
              previous: '132k',
              growth: '+9.8%',
              target: '200k by Q4'
            },
            {
              title: 'Average Revenue Per User',
              current: '$24.50',
              previous: '$22.30',
              growth: '+9.9%',
              target: '$35 by end of year'
            },
            {
              title: 'Net Promoter Score',
              current: '58',
              previous: '51',
              growth: '+13.7%',
              target: '70+ (World-class)'
            }
          ].map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-electric/10 to-purple-600/10 rounded-xl p-6 border border-electric/20"
            >
              <h4 className="font-semibold dark:text-white text-slate-900 mb-4">{metric.title}</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-xs dark:text-slate-400 text-slate-600 uppercase tracking-wider mb-1">Current</p>
                  <p className="text-3xl font-bold text-electric">{metric.current}</p>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="dark:text-slate-400 text-slate-700">Previous: <span className="dark:text-white text-slate-900 font-medium">{metric.previous}</span></span>
                  <span className="text-green-400 font-semibold">{metric.growth}</span>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs dark:text-slate-400 text-slate-600"><strong className="dark:text-slate-300 text-slate-700">Target:</strong> {metric.target}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Data-driven recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-electric/5 via-transparent to-purple-600/5"
      >
        <h3 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
          <Zap className="text-electric" size={24} />
          Data-Driven Recommendations
        </h3>
        <ul className="space-y-3 dark:text-slate-300 text-slate-700">
          <li className="flex items-start gap-3">
            <span className="text-electric font-bold">1.</span>
            <span><strong>Improve Activation:</strong> Current 38% activation is below industry benchmark (45-50%). Implement guided onboarding and reduce friction in first-use experience.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-electric font-bold">2.</span>
            <span><strong>Boost Week 2 Retention:</strong> Design engagement loops around high-value features to retain users past the critical Week 2 milestone.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-electric font-bold">3.</span>
            <span><strong>Segment Users:</strong> Develop persona-based retention strategies - power users may need different engagement than casual users.</span>
          </li>
        </ul>
      </motion.div>
    </section>
  )
}
