'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import PDFViewer from '../../../components/PDFViewer'

export default function SkillBridgeCaseStudyPage() {
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
            SkillBridge
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            Bridging the gap between student talent and startup needs through micro-internships.
          </p>
          <p className="text-base text-slate-400 max-w-3xl leading-relaxed">
            This case study demonstrates a product thinking process from problem discovery to MVP definition and growth strategy. It explores how to connect students with meaningful short-term opportunities while solving real problems for startups.
          </p>

          {/* Metadata Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-8">
            <div>
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Type</p>
              <p className="text-base text-white">Product Strategy Case Study</p>
            </div>
            <div>
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {['Problem discovery', 'MVP strategy', 'Growth thinking'].map((tag, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-electric/10 text-electric rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Document</p>
              <p className="text-base text-slate-300">Comprehensive PDF</p>
            </div>
          </div>
        </div>
      </section>

      {/* Notion Link Section - First */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Full Case Study on Notion</h2>
          <p className="text-slate-400 mb-6">For the complete and most up-to-date version, view the full case study on Notion with all details, insights, and strategic analysis.</p>
          
          <a
            href="https://www.notion.so/SkillBridge-Full-Product-Management-Case-Study-2d22d167b46a809a85c0c8b8df56f07d"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-electric/20 to-purple-600/20 hover:from-electric/40 hover:to-purple-600/40 border border-electric/30 hover:border-electric/60 transition-all font-semibold text-electric hover:shadow-lg hover:shadow-electric/20"
          >
            <span className="text-2xl">→</span>
            View Full Case Study on Notion
          </a>
        </div>
      </section>

      {/* PDF Viewer Section - Second */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-white/10">
        <div>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">PDF Version</h2>
            <p className="text-slate-400">Embedded PDF viewer for easy reading. Use the zoom controls and fullscreen button below.</p>
          </div>

          <PDFViewer
            pdfUrl="/SkillBridge_Product_Management_Case_Study.pdf"
            title="SkillBridge Product Management Case Study"
          />
        </div>
      </section>

      {/* Quick Summary Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Key Insights */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">Key Insights</h3>
            <ul className="space-y-4">
              {[
                'Students struggle to find internships matching their skill level',
                'Traditional job boards fail at skill-based matching',
                'Companies need efficient talent sourcing for short-term roles',
                'MVP focused on marketplace fundamentals, not AI initially',
                'Growth driven by community building and network effects'
              ].map((insight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3"
                >
                  <span className="text-electric font-bold mt-1">→</span>
                  <span className="text-slate-300">{insight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Document Sections */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">What's Inside</h3>
            <div className="space-y-3">
              {[
                { title: 'Problem Analysis', desc: 'Student pain points and market gaps' },
                { title: 'User Research', desc: 'Interviews and behavior patterns' },
                { title: 'MVP Definition', desc: 'Core features and value proposition' },
                { title: 'Go-to-Market', desc: 'Launch strategy and acquisition' },
                { title: 'Growth Metrics', desc: 'KPIs and success criteria' },
                { title: 'Learnings', desc: 'Key takeaways and reflections' }
              ].map((section, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-electric/30 transition"
                >
                  <h4 className="font-semibold text-white text-sm">{section.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{section.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-white/10 text-center">
        <div>
          <h3 className="text-2xl font-heading font-bold mb-4">Want to explore more?</h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Check out my other case study on RoadLoop or read my portfolio for additional projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/case-studies/roadloop"
              className="px-6 py-3 bg-gradient-to-r from-electric/20 to-purple-600/20 hover:from-electric/40 hover:to-purple-600/40 rounded-lg font-semibold text-electric border border-electric/30 hover:border-electric/60 transition"
            >
              View RoadLoop Case Study
            </Link>
            <Link
              href="/#case-studies"
              className="px-6 py-3 bg-gradient-to-r from-electric to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-electric/50 transition"
            >
              Back to Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
