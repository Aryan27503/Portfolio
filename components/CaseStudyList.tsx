'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import caseStudies from '../data/caseStudies'

export default function CaseStudyList(){
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
    <section id="case-studies" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-heading font-semibold mb-2">Featured Case Studies</h2>
        <p className="dark:text-slate-400 text-slate-600">Deep dives into product problems, solutions, and strategic thinking</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {caseStudies.map((cs) => (
          <motion.div
            key={cs.slug}
            variants={itemVariants}
          >
            <Link href={`/case-studies/${cs.slug}`} className="block h-full">
              <motion.article
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3 }
                }}
                className="group relative h-full card-glass rounded-2xl overflow-hidden border border-white/10 hover:border-electric/60 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(79,70,229,0.2)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-electric/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Header with gradient accent */}
                <div className="relative p-6 pb-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-electric/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <h3 className="font-heading text-2xl font-bold mb-2 dark:text-white text-slate-900 group-hover:text-electric transition-colors">
                      {cs.title}
                    </h3>
                    <p className="dark:text-slate-300 text-slate-700 text-base leading-relaxed mb-4">{cs.description}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="relative px-6 py-3 flex flex-wrap gap-2 z-10">
                  {(cs.tags || []).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-electric/10 text-electric border border-electric/20 font-medium group-hover:bg-electric/20 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer with type and CTA */}
                <div className="relative px-6 py-4 flex items-center justify-between border-t border-white/5 bg-gradient-to-r from-electric/5 via-transparent to-transparent z-10">
                  <div>
                    <p className="text-xs dark:text-slate-500 text-slate-500 uppercase tracking-wider font-medium">Type</p>
                    <p className="text-sm dark:text-white text-slate-900 font-semibold mt-1">{cs.type}</p>
                  </div>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-electric/20 to-purple-600/20 group-hover:from-electric/40 group-hover:to-purple-600/40 rounded-lg text-sm font-semibold text-electric border border-electric/30 group-hover:border-electric/60 transition-all">
                      Read Case Study
                      <ArrowRight size={16} />
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
