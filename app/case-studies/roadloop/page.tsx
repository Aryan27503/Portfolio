'use client'

import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import PDFViewer from '../../../components/PDFViewer'

export default function RoadLoopCaseStudyPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 max-w-6xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-electric hover:text-electric/80 transition mb-8">
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
            RoadLoop
          </h1>
          
          <p className="text-2xl text-slate-300 leading-relaxed mb-6 max-w-3xl">
            A freight matching marketplace to reduce empty truck journeys
          </p>

          <p className="text-base text-slate-400 leading-relaxed mb-8 max-w-3xl">
            A product case study exploring how real-time load discovery and operational visibility can help small transporters reduce empty return journeys and improve fleet utilization in the Indian logistics market.
          </p>

          {/* Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div>
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Type</p>
              <p className="text-base text-white">Product Strategy Case Study</p>
            </div>
            <div>
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {['Marketplace Design', 'Logistics', 'Supply-Demand Matching'].map((tag, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-electric/10 text-electric rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Document Format</p>
              <p className="text-base text-slate-300">Case Study + PDF</p>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-heading font-bold mb-6">MVP</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Built a functional MVP to test how early navigation alerts can improve driver decision-making and reduce missed turns.
            </p>
            
            <a
              href="https://road-loop-mvp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-gradient-to-r from-electric/20 to-purple-600/20 hover:from-electric/40 hover:to-purple-600/40 border border-electric/30 hover:border-electric/60 transition-all group hover:scale-105"
            >
              <span className="font-semibold text-electric group-hover:text-electric transition">
                View RoadLoop MVP
              </span>
              <ExternalLink size={20} className="text-electric flex-shrink-0 group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>
      </section>

      {/* Notion Link Section - FIRST */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-heading font-bold mb-6">Full Case Study</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              For the complete analysis, including market research, user interviews, marketplace dynamics, and MVP strategy for the Indian freight ecosystem, view the full case study on Notion:
            </p>
            
            <a
              href="https://www.notion.so/RoadLoop-3232d167b46a80c6a298e93690082a38?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-gradient-to-r from-electric/20 to-purple-600/20 hover:from-electric/40 hover:to-purple-600/40 border border-electric/30 hover:border-electric/60 transition-all group"
            >
              <span className="font-semibold text-electric group-hover:text-electric transition">
                View Full Case Study on Notion
              </span>
              <ExternalLink size={20} className="text-electric flex-shrink-0 group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section - SECOND */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-heading font-bold mb-6">Case Study Summary (PDF)</h2>
        <p className="text-slate-300 leading-relaxed mb-6">
          Quick overview of the key findings, strategy, and recommendations:
        </p>
        
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900/50 to-slate-950/50">
          <PDFViewer pdfUrl="/RoadLoop_Product_Case_Study.pdf" title="RoadLoop Case Study" />
        </div>

        <div className="mt-4 flex justify-end">
          <a
            href="/RoadLoop_Product_Case_Study.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-lg bg-electric/10 hover:bg-electric/20 text-electric border border-electric/20 hover:border-electric/40 transition"
          >
            Open PDF Full Screen
          </a>
        </div>
      </section>

      {/* Quick Summary Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-white/10">
        <h2 className="text-3xl font-heading font-bold mb-8">Quick Summary</h2>

        {/* One-line Summary */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-electric/10 via-purple-600/10 to-transparent border border-electric/20">
          <p className="text-lg font-semibold text-slate-100 leading-relaxed">
            A marketplace concept to reduce empty truck journeys by improving real-time load discovery and operational visibility for small fleet owners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card-glass rounded-2xl p-6 border border-white/5">
            <h3 className="text-sm uppercase text-electric font-bold tracking-wider mb-3">Problem</h3>
            <p className="text-slate-300 leading-relaxed">
              A large portion of trucks in India run empty on return journeys due to poor visibility of nearby shipment demand. Small transporters rely on brokers and manual coordination, leading to lost revenue, inefficient routes, and underutilized fleet capacity.
            </p>
          </div>

          <div className="card-glass rounded-2xl p-6 border border-white/5">
            <h3 className="text-sm uppercase text-electric font-bold tracking-wider mb-3">Target Users</h3>
            <p className="text-slate-300 leading-relaxed">
              <strong className="text-white">Small fleet owners</strong> (1–5 trucks) struggling with load discovery, and <strong className="text-white">Businesses and shippers</strong> needing reliable and timely transport.
            </p>
          </div>

          <div className="card-glass rounded-2xl p-6 border border-white/5">
            <h3 className="text-sm uppercase text-electric font-bold tracking-wider mb-3">Solution</h3>
            <p className="text-slate-300 leading-relaxed">
              RoadLoop is a two-sided freight matching platform that connects shippers with transporters while introducing smart load discovery and a dual-confirmation system to reduce cancellations and improve reliability.
            </p>
          </div>
        </div>

        {/* Key Insight - Make it stand out */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-transparent border border-amber-500/40 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⭐</span>
            <div>
              <h3 className="text-sm uppercase text-amber-300 font-bold tracking-wider mb-2">Key Insight</h3>
              <p className="text-slate-100 leading-relaxed text-lg font-semibold">
                Small transporters don't lack demand — they lack timely access to demand at the right location, which leads to inefficient operations and empty return trips.
              </p>
            </div>
          </div>
        </div>

        {/* What Makes This Case Study Strong */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">What Makes This Case Study Strong</h3>
          <div className="space-y-3">
            {[
              'Focuses on a real, unstructured market (Indian logistics)',
              'Introduces a behavior-aware solution (not just tech)',
              'Explores marketplace dynamics + operational constraints',
              'Includes validation thinking (concierge MVP approach)'
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition">
                <span className="text-electric font-bold flex-shrink-0 mt-0.5">✓</span>
                <span className="text-slate-300">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-white/10 text-center">
        <h3 className="text-2xl font-heading font-bold mb-4">Explore My Case Studies</h3>
        <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
          View my comprehensive product strategy case studies and see how I approach complex problems in marketplaces, supply-demand coordination, and user experience design.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/case-studies/skillbridge"
            className="px-6 py-3 bg-gradient-to-r from-electric/20 to-purple-600/20 hover:from-electric/40 hover:to-purple-600/40 rounded-lg font-semibold text-electric border border-electric/30 hover:border-electric/60 transition"
          >
            View SkillBridge Case Study
          </Link>
          <Link
            href="/#case-studies"
            className="px-6 py-3 bg-gradient-to-r from-electric to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-electric/50 transition"
          >
            Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  )
}
