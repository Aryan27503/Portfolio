'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Target, Zap } from 'lucide-react'

export default function Frameworks(){
  const frameworks = [
    {
      title: 'AARRR Metrics',
      desc: 'Pirate Metrics framework for tracking user journey',
      icon: TrendingUp,
      items: ['Acquisition', 'Activation', 'Retention', 'Revenue', 'Referral'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'RICE Prioritization',
      desc: 'Framework for feature prioritization decisions',
      icon: Target,
      items: ['Reach', 'Impact', 'Confidence', 'Effort'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'North Star Metric',
      desc: 'Single KPI representing long-term success',
      icon: Zap,
      items: ['Alignment across teams', 'Long-term vision', 'User value focus'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Product Market Fit',
      desc: 'Ensuring product strongly satisfies market',
      icon: Users,
      items: ['Strong market demand', 'Clear user retention', 'Sustainable growth'],
      color: 'from-green-500 to-emerald-500'
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
    <section id="frameworks" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-heading font-semibold mb-2">Product Frameworks</h2>
        <p className="dark:text-slate-400 text-slate-600">Core frameworks and models I use for product strategy and decision-making</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {frameworks.map((f) => {
          const Icon = f.icon
          return (
            <motion.div
              key={f.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group card-glass rounded-2xl overflow-hidden border border-white/5 hover:border-electric/50 transition-all duration-300 shadow-lg hover:shadow-electric/20"
            >
              {/* Header with gradient */}
              <div className={`h-1 bg-gradient-to-r ${f.color}`} />

              <div className="p-6">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${f.color} bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className="text-white" />
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-1 group-hover:text-electric transition-colors">
                  {f.title}
                </h3>
                <p className="text-xs dark:text-slate-400 text-slate-600 mb-4">{f.desc}</p>

                {/* Items */}
                <ul className="space-y-2">
                  {f.items.map((item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm dark:text-slate-300 text-slate-700 group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-electric/60 group-hover/item:bg-electric transition" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Footer with CTA */}
              <div className="px-6 py-4 border-t border-white/5 bg-gradient-to-r from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs dark:text-slate-400 text-slate-600">Learn more in case studies →</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Framework application section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 card-glass rounded-2xl p-8 md:p-12 border border-white/5"
      >
        <h3 className="text-2xl font-bold mb-6">How I Apply These Frameworks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-electric mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electric" />
              ResQNet Case Study
            </h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• <strong>AARRR:</strong> Tracked user acquisition through organic search and NGO partnerships</li>
              <li>• <strong>RICE:</strong> Prioritized feature releases based on impact on incident response time</li>
              <li>• <strong>North Star:</strong> Real-time incidents reported per hour</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-electric mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electric" />
              RoadLoop Navigation
            </h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• <strong>RICE:</strong> Balanced turn prediction accuracy vs. development effort</li>
              <li>• <strong>PMF:</strong> Achieved with 65% reduction in missed turns</li>
              <li>• <strong>North Star:</strong> On-time delivery rate improvement</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
