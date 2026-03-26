'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Code2, Zap, Briefcase } from 'lucide-react'

export default function Projects(){
  const projects = [
    {
      title: 'GiftCrafters.in',
      slug: 'giftcrafters',
      type: 'Entrepreneurial Project',
      typeColor: 'from-amber-500 to-orange-500',
      icon: Briefcase,
      desc: 'A small digital gifting initiative started during college. The idea was to curate personalized gift combos and sell them through online channels, primarily using Instagram.',
      learnings: [
        'Customer acquisition through Instagram',
        'Product bundle experimentation',
        'Pricing strategy for gift combos',
        'Handling orders and logistics'
      ],
      tags: ['Entrepreneurship', 'E-commerce', 'Customer Behavior'],
      tech: []
    },
    {
      title: 'ResQNet',
      slug: 'resqnet',
      type: 'Technical Project',
      typeColor: 'from-electric to-purple-600',
      icon: Code2,
      desc: 'A web-based disaster incident reporting platform that allows users to report incidents, upload images, and visualize disaster-related information to improve situational awareness.',
      learnings: [
        'Real-time systems and APIs',
        'Data visualization for critical workflows',
        'Incident management systems',
        'Multi-source data integration'
      ],
      tags: ['Civic Tech', 'Web Platform', 'Data Integration'],
      tech: ['Node.js', 'MySQL', 'OpenWeatherMap API', 'USGS Earthquake API', 'OpenStreetMap']
    },
    {
      title: 'Vehicle Routing Simulation',
      slug: 'vehicle-routing',
      type: 'Engineering Project',
      typeColor: 'from-cyan-500 to-blue-500',
      icon: Zap,
      desc: 'A logistics simulation that analyzes different routing strategies and demonstrates how optimization algorithms can improve delivery efficiency.',
      learnings: [
        'Logistics problem modeling',
        'Routing constraints and optimization',
        'Algorithm performance analysis',
        'Real-world operational impact'
      ],
      tags: ['Logistics', 'Optimization', 'Simulation'],
      tech: ['Python', 'OR-Tools', 'Plotly', 'pandas']
    }
  ]

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

  const getTypeColors = (color: string) => {
    const colorMap: Record<string, string> = {
      'from-amber-500 to-orange-500': 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
      'from-electric to-purple-600': 'bg-gradient-to-r from-electric/20 to-purple-600/20 border-electric/30 text-electric',
      'from-cyan-500 to-blue-500': 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400'
    }
    return colorMap[color] || 'bg-white/5 border-white/10 text-white'
  }

  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-heading font-semibold mb-2">Projects & Experiments</h2>
        <p className="dark:text-slate-400 text-slate-600">A mix of entrepreneurial, technical, and analytical work that shaped my product thinking</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {projects.map((p) => {
          const IconComponent = p.icon
          return (
            <motion.div
              key={p.title}
              variants={itemVariants}
            >
              <Link href={`/projects/${p.slug}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative card-glass rounded-2xl overflow-hidden border border-white/5 hover:border-electric/50 transition-all duration-300 shadow-lg hover:shadow-electric/20 flex flex-col h-full"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-electric/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Type Badge */}
                  <div className="relative z-10 p-6 pb-3">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColors(p.typeColor)}`}>
                        <IconComponent size={14} />
                        {p.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold dark:text-white text-slate-900 group-hover:text-electric transition-colors mb-3">
                      {p.title}
                    </h3>

                    {/* Description */}
                    <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  {/* Key Learnings */}
                  <div className="relative z-10 px-6 py-4 border-t border-white/5">
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-3">Key Learnings</p>
                    <div className="space-y-2">
                      {p.learnings.map((learning, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm dark:text-slate-300 text-slate-700">
                          <span className="text-electric font-bold mt-0.5">→</span>
                          <span>{learning}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="relative z-10 px-6 py-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 rounded bg-white/10 dark:text-slate-300 text-slate-700 border border-white/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack - Only if present */}
                  {p.tech.length > 0 && (
                    <div className="relative z-10 px-6 py-4 border-t border-white/5">
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-3">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((tech, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded bg-electric/10 text-electric border border-electric/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="relative z-10 px-6 py-4 border-t border-white/5 mt-auto">
                    <div className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-electric/20 to-purple-600/20 hover:from-electric/40 hover:to-purple-600/40 text-electric rounded-lg text-sm font-medium border border-electric/30 group-hover:border-electric/60 transition-all">
                      View Project Details
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

