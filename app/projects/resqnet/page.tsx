'use client'

import { ArrowLeft, Code2, Upload, Map, Database } from 'lucide-react'
import Link from 'next/link'

export default function ResQNetPage() {
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
            <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <Code2 className="text-cyan-400" size={28} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
                ResQNet
              </h1>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mt-2">
                <Code2 size={14} />
                Technical Project
              </div>
            </div>
          </div>

          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-4">
            A web-based disaster incident reporting platform developed as an engineering project.
          </p>
          <p className="text-base text-slate-400 max-w-3xl leading-relaxed">
            The platform allows users to report incidents, upload images, and view disaster-related information through integrated APIs. The goal was to improve visibility and accessibility of disaster information using real-time data sources.
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
              ResQNet is a web-based disaster incident reporting platform developed as a technical engineering project. The platform enables users to report disasters, upload supporting images, and access aggregated disaster and weather information in one place.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The project focused on building a functional system that integrates real-time data from public APIs and presents it in a usable way. Rather than predicting or automatically classifying disasters, the platform serves as a centralized repository of user-reported incidents and official data sources.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <div className="card-glass rounded-xl p-6 border border-white/5">
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Type</p>
              <p className="text-xl font-bold text-white">Web Platform</p>
            </div>
            <div className="card-glass rounded-xl p-6 border border-white/5">
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Tech Stack</p>
              <div className="space-y-1">
                <p className="text-sm font-mono text-cyan-300">Node.js</p>
                <p className="text-sm font-mono text-cyan-300">MySQL</p>
                <p className="text-sm font-mono text-cyan-300">OpenStreetMap</p>
              </div>
            </div>
            <div className="card-glass rounded-xl p-6 border border-white/5">
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Focus</p>
              <p className="text-xl font-bold text-white">Real-time Systems</p>
            </div>
          </div>
        </section>

        {/* Features Implemented */}
        <section className="bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-transparent rounded-3xl p-8 md:p-12 border border-white/5">
          <h2 className="text-3xl font-heading font-bold mb-8">Features Implemented</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="p-3 rounded-lg bg-cyan-500/20 h-fit">
                <Database size={20} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Incident Reporting System</h3>
                <p className="text-slate-400 leading-relaxed">
                  Users can create incident reports with descriptions, location information, and categorization. Data is stored in MySQL database with proper schema design.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 rounded-lg bg-cyan-500/20 h-fit">
                <Upload size={20} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Image Upload Functionality</h3>
                <p className="text-slate-400 leading-relaxed">
                  Users can attach images to their incident reports for visual documentation. Images are stored and associated with reports.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 rounded-lg bg-cyan-500/20 h-fit">
                <Map size={20} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Map-Based Visualization</h3>
                <p className="text-slate-400 leading-relaxed">
                  Incidents and external data are visualized on interactive maps using OpenStreetMap for geographic context and spatial awareness.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 rounded-lg bg-cyan-500/20 h-fit">
                <Code2 size={20} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Real-time API Integration</h3>
                <p className="text-slate-400 leading-relaxed">
                  Integrated OpenWeatherMap API for live weather data and USGS Earthquake API for official earthquake information. Data is refreshed to provide current context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I Learned */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-8">What I Learned</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Real-time API Integration',
                desc: 'How to effectively integrate external APIs into web applications, handle data updates, and manage dependencies on third-party services.'
              },
              {
                title: 'Handling Live Data',
                desc: 'Challenges in fetching, caching, and displaying real-time information. Understanding rate limits, data freshness, and fallback mechanisms.'
              },
              {
                title: 'Data Visualization for Critical Information',
                desc: 'The importance of clear data presentation when information has real-world consequences. How visualization choices affect user decision-making.'
              },
              {
                title: 'Systems Supporting Workflows',
                desc: 'How information systems need to support existing user workflows in disaster response. Understanding the operational context is as important as technical implementation.'
              }
            ].map((learning, idx) => (
              <div key={idx} className="card-glass rounded-lg p-6 border border-white/5 hover:border-cyan-500/30 transition">
                <h3 className="font-semibold text-white mb-2">{learning.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{learning.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Perspective */}
        <section className="border-l-4 border-cyan-500 pl-8 py-4">
          <h3 className="text-2xl font-heading font-bold mb-4">Product Perspective</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Working on this project helped me understand how data flows through systems and how users interact with real-time information dashboards. Key insights:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">→</span>
              <span>Information architecture matters—organizing disaster data for quick comprehension under stress</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">→</span>
              <span>Reliability is critical for crisis response tools—users depend on system availability</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">→</span>
              <span>Usability in high-stakes scenarios is non-negotiable—complexity can cost time and lives</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">→</span>
              <span>User needs in emergency contexts differ from regular applications—designing for urgency and clarity</span>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="py-12 text-center border-t border-white/10">
          <h3 className="text-2xl font-heading font-bold mb-4">Explore Other Projects</h3>
          <p className="text-slate-400 mb-6">Check out my entrepreneurial, technical, and product work</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#projects"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 rounded-lg font-semibold text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/60 transition"
            >
              View All Projects
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
