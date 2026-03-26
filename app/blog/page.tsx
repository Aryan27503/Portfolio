'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BlogPage() {
  const articles = [
    {
      slug: 'blinkit-logistics',
      title: 'How Blinkit optimizes quick commerce logistics',
      excerpt: 'Deep dive into the product and operational strategies behind Blinkit\'s 10-minute delivery model.'
    },
    {
      slug: 'disaster-reporting',
      title: 'Designing better disaster reporting systems',
      excerpt: 'Lessons from building ResQNet and how technology can improve emergency response coordination.'
    },
    {
      slug: 'early-stage-metrics',
      title: 'Metrics every early-stage product should track',
      excerpt: 'Essential KPIs and frameworks for measuring product-market fit and growth in early-stage startups.'
    }
  ]

  return (
    <section className="section-padding max-w-4xl mx-auto">
      <h1 className="text-4xl font-heading font-bold">Product Insights & Articles</h1>
      <p className="mt-2 text-slate-300">Exploring product strategy, design, and analytics.</p>

      <div className="mt-8 space-y-6">
        {articles.map((article, idx) => (
          <motion.article
            key={article.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="card-glass p-6 rounded-lg hover:border-electric/50 transition border border-white/10"
          >
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-slate-300 mt-2">{article.excerpt}</p>
            <Link href={`/blog/${article.slug}`} className="mt-4 inline-block text-electric hover:underline">
              Read article →
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
