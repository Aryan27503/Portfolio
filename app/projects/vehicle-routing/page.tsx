'use client'

import { ArrowLeft, Zap, TrendingUp, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export default function VehicleRoutingPage() {
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
              <Zap className="text-cyan-400" size={28} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
                Vehicle Routing Simulation
              </h1>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 mt-2">
                <Zap size={14} />
                Engineering Project
              </div>
            </div>
          </div>

          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-4">
            An algorithmic optimization system for solving the Vehicle Routing Problem (VRP) with complex real-world constraints.
          </p>
          <p className="text-base text-slate-400 max-w-3xl leading-relaxed">
            This engineering project taught me how to approach computational optimization, implement sophisticated algorithms, and think about scalability and performance at a deeper level.
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
              The Vehicle Routing Problem (VRP) is a classic optimization challenge: given a fleet of vehicles and a set of delivery locations, find the most efficient routes that minimize distance, time, or cost while satisfying various constraints.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              This project involved implementing and comparing multiple optimization algorithms to solve VRP variants with real-world constraints like vehicle capacity limits, time windows, and traffic patterns.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The simulation environment allowed me to:
            </p>
            <ul className="space-y-2 text-slate-300 mb-6">
              <li className="flex gap-3">
                <span className="text-electric font-bold">→</span>
                <span>Model complex logistics problems mathematically</span>
              </li>
              <li className="flex gap-3">
                <span className="text-electric font-bold">→</span>
                <span>Implement and benchmark different algorithmic approaches</span>
              </li>
              <li className="flex gap-3">
                <span className="text-electric font-bold">→</span>
                <span>Understand the trade-off between solution quality and computation time</span>
              </li>
              <li className="flex gap-3">
                <span className="text-electric font-bold">→</span>
                <span>Visualize and analyze algorithm behavior under different scenarios</span>
              </li>
            </ul>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <div className="card-glass rounded-xl p-6 border border-white/5">
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Problem Type</p>
              <p className="text-xl font-bold text-white">Optimization</p>
            </div>
            <div className="card-glass rounded-xl p-6 border border-white/5">
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Algorithms</p>
              <div className="space-y-1">
                <p className="text-sm font-mono text-cyan-300">Greedy</p>
                <p className="text-sm font-mono text-cyan-300">2-opt</p>
                <p className="text-sm font-mono text-cyan-300">Genetic</p>
              </div>
            </div>
            <div className="card-glass rounded-xl p-6 border border-white/5">
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Domain</p>
              <p className="text-xl font-bold text-white">Logistics</p>
            </div>
          </div>
        </section>

        {/* Algorithmic Approaches */}
        <section className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent rounded-3xl p-8 md:p-12 border border-white/5">
          <h2 className="text-3xl font-heading font-bold mb-8">Algorithmic Approaches</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">1. Greedy Algorithm</h3>
              <p className="text-slate-400 leading-relaxed">
                Start with a basic greedy approach that assigns unvisited locations to the nearest available vehicle. Fast but often suboptimal—serves as a baseline for comparison.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">2. 2-Opt Local Search</h3>
              <p className="text-slate-400 leading-relaxed">
                Iteratively improves solutions by removing crossing routes. More computationally intensive than greedy but yields significantly better solutions in reasonable time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">3. Genetic Algorithm</h3>
              <p className="text-slate-400 leading-relaxed">
                Population-based metaheuristic that evolves solutions over generations. Useful for exploring the solution space more broadly, though convergence can be slower.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">4. Constraint Handling</h3>
              <p className="text-slate-400 leading-relaxed">
                Implemented mechanisms to enforce real-world constraints: vehicle capacity limits, time windows for deliveries, and balanced workload distribution across vehicles.
              </p>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-8">Key Learnings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'NP-Hard Problems',
                desc: 'VRP is NP-hard—no known polynomial solution. Learned why heuristics and approximation algorithms are necessary for practical applications.'
              },
              {
                title: 'Algorithm Selection',
                desc: 'Different algorithms excel in different scenarios. Greedy is fast, 2-opt is balanced, genetic algorithms explore better but slower.'
              },
              {
                title: 'Empirical Validation',
                desc: 'Importance of benchmarking against known test cases and understanding when theory meets practice (local optima, convergence issues).'
              },
              {
                title: 'Complexity Analysis',
                desc: 'Understanding time and space complexity is crucial. A theoretically better algorithm might be impractical for real-world scale (thousands of deliveries).'
              }
            ].map((learning, idx) => (
              <div key={idx} className="card-glass rounded-lg p-6 border border-white/5 hover:border-cyan-500/30 transition">
                <h3 className="font-semibold text-white mb-2">{learning.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{learning.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Implementation */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-8">Technical Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              {
                title: 'Graph Representation',
                desc: 'Modeled locations and routes as a weighted graph for distance calculations.'
              },
              {
                title: 'Distance Metrics',
                desc: 'Implemented both Euclidean and real-world distance estimation for routing.'
              },
              {
                title: 'Visualization',
                desc: 'Real-time route visualization to understand algorithm behavior.'
              }
            ].map((item, idx) => (
              <div key={idx} className="card-glass rounded-lg p-4 border border-white/5">
                <h3 className="font-semibold text-white mb-2 text-sm">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Connection to Product Thinking */}
        <section className="border-l-4 border-cyan-500 pl-8 py-4">
          <h3 className="text-2xl font-heading font-bold mb-4">Why This Engineering Project Matters</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Vehicle Routing Simulation might seem like "just an algorithm project," but it taught me several principles directly applicable to product thinking:
          </p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <Lightbulb className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
              <span><strong>Trade-off Analysis</strong> — Different solutions optimize for different metrics. Products often face similar trade-offs (performance vs. accuracy, speed vs. quality).</span>
            </li>
            <li className="flex gap-3">
              <Lightbulb className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
              <span><strong>Constraint Management</strong> — Real-world systems have many constraints. Understanding them deeply is essential for good design.</span>
            </li>
            <li className="flex gap-3">
              <Lightbulb className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
              <span><strong>Iteration & Improvement</strong> — Like 2-opt improving routes incrementally, products improve through iteration based on feedback and data.</span>
            </li>
            <li className="flex gap-3">
              <Lightbulb className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
              <span><strong>Scalability Thinking</strong> — What works for 10 locations breaks at 10,000. Building with scale in mind is critical.</span>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="py-12 text-center border-t border-white/10">
          <h3 className="text-2xl font-heading font-bold mb-4">Explore Other Projects</h3>
          <p className="text-slate-400 mb-6">Check out my entrepreneurial and technical work</p>
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
