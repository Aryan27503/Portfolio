'use client'

import { ArrowLeft, Briefcase, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function GiftCraftersPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 max-w-6xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-electric hover:text-electric/80 transition mb-8">
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
              <Briefcase className="text-amber-400" size={28} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
                GiftCrafters.in
              </h1>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold border border-amber-500/30 bg-amber-500/10 text-amber-400 mt-2">
                <Briefcase size={14} />
                Entrepreneurial Project
              </div>
            </div>
          </div>

          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-4">
            A small digital gifting initiative started during college to explore e-commerce and customer behavior.
          </p>
          <p className="text-base text-slate-400 max-w-3xl leading-relaxed">
            Through this project, I learned how small digital businesses attract customers, test product bundles, and understand real purchasing behavior through direct market feedback.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* Overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-heading font-bold mb-4">Project Overview</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              GiftCrafters.in was a curated digital gifting platform built during my college years. The core idea was to identify popular gift combinations and sell them through Instagram, leveraging the visual nature of the platform.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              What started as a simple experiment turned into a valuable learning experience in entrepreneurship. I handled everything from product selection and pricing to customer acquisition and fulfillment logistics.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The project wasn't designed to become a massive business, but rather to answer specific questions: How do customers discover new products? What pricing works for gift bundles? How do you handle the operations of an online business?
            </p>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <div className="card-glass rounded-xl p-6 border border-white/5">
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Timeline</p>
              <p className="text-xl font-bold text-white">College Project</p>
            </div>
            <div className="card-glass rounded-xl p-6 border border-white/5">
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Channel</p>
              <p className="text-xl font-bold text-white">Instagram</p>
            </div>
            <div className="card-glass rounded-xl p-6 border border-white/5">
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Type</p>
              <p className="text-xl font-bold text-white">E-commerce</p>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="bg-gradient-to-r from-electric/10 via-purple-600/10 to-transparent rounded-3xl p-8 md:p-12 border border-white/5">
          <h2 className="text-3xl font-heading font-bold mb-8">Key Learnings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Customer Acquisition on Instagram',
                desc: 'Learned how to create visual content that resonates with gift-buyers, leverage hashtags, and build a small but engaged following.'
              },
              {
                title: 'Product Bundle Experimentation',
                desc: 'Tested different product combinations to understand what customers value, using feedback to refine offerings.'
              },
              {
                title: 'Pricing Strategy',
                desc: 'Explored how to price gift bundles competitively while maintaining margins, tested price points based on customer response.'
              },
              {
                title: 'Operations & Logistics',
                desc: 'Managed sourcing, inventory, packaging, and delivery coordination—understanding real-world operational constraints.'
              }
            ].map((learning, idx) => (
              <div key={idx} className="flex gap-4">
                <TrendingUp className="text-electric flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-white mb-1">{learning.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{learning.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Competencies */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-8">Skills Developed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'Customer Behavior Analysis',
              'Digital Marketing',
              'E-commerce Operations',
              'Product Selection',
              'Pricing Strategy',
              'Supplier Negotiation',
              'Order Management',
              'Customer Service',
              'Social Media Strategy'
            ].map((skill, idx) => (
              <div key={idx} className="card-glass rounded-lg p-4 border border-white/5 hover:border-electric/30 transition">
                <p className="text-white font-medium text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why This Matters */}
        <section className="border-l-4 border-electric pl-8 py-4">
          <h3 className="text-2xl font-heading font-bold mb-4">Why This Matters for Product Thinking</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Entrepreneurial projects like GiftCrafters.in are crucial for understanding real product problems. Unlike theoretical case studies, this project forced me to:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex gap-3">
              <span className="text-electric font-bold">→</span>
              <span>Understand real customer needs (not assumptions)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-electric font-bold">→</span>
              <span>Make business decisions with incomplete information</span>
            </li>
            <li className="flex gap-3">
              <span className="text-electric font-bold">→</span>
              <span>See the direct impact of product choices on users</span>
            </li>
            <li className="flex gap-3">
              <span className="text-electric font-bold">→</span>
              <span>Handle operations and understand supply-side constraints</span>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="py-12 text-center border-t border-white/10">
          <h3 className="text-2xl font-heading font-bold mb-4">Explore Other Projects</h3>
          <p className="text-slate-400 mb-6">Check out my technical and engineering work</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#projects"
              className="px-6 py-3 bg-gradient-to-r from-electric/20 to-purple-600/20 hover:from-electric/40 hover:to-purple-600/40 rounded-lg font-semibold text-electric border border-electric/30 hover:border-electric/60 transition"
            >
              View All Projects
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-3 bg-gradient-to-r from-electric to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-electric/50 transition"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
