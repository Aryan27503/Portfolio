import { motion } from 'framer-motion'
import caseStudies from '../../../data/caseStudies'
import { ArrowLeft, Users, Zap, Target, Code2, BarChart3 } from 'lucide-react'
import Link from 'next/link'

interface Props {
  params: { slug: string }
}

export function generateMetadata({ params }: Props) {
  const caseStudy = caseStudies.find(c => c.slug === params.slug)
  if (!caseStudy) {
    return {
      title: 'Case Study | Aryan Soni',
      description: 'Detailed product case study'
    }
  }
  return {
    title: `${caseStudy.title} | Product Case Study — Aryan Soni`,
    description: caseStudy.description,
    openGraph: {
      title: `${caseStudy.title} | Product Case Study`,
      description: caseStudy.description,
    }
  }
}

const caseStudyDetails = {
  skillbridge: {
    heroTitle: 'SkillBridge',
    heroSubtitle: 'A marketplace connecting students with short-term micro-internships for startups and small businesses.',
    metadata: {
      role: 'Product Strategy',
      duration: '4 weeks',
      focus: ['Problem discovery', 'MVP definition', 'Growth strategy']
    },
    problem: {
      title: 'The Problem',
      description: 'Students struggle to find internship opportunities aligned with their actual skills and career interests. Traditional job boards treat all applications equally, missing the value of targeted connections. Meanwhile, startups need flexible, short-term talent to handle specific projects but lack efficient sourcing channels. This mismatch creates inefficiency on both sides—students waste time on irrelevant opportunities, and companies miss emerging talent.',
      sections: [
        'Students lack visibility into skill-aligned micro-internship opportunities',
        'Traditional job boards lack specialization for short-term roles',
        'Startups struggle to source talent efficiently for project-based work',
        'High abandonment rate in traditional internship application processes',
        'Poor match quality leads to failed internships and wasted time'
      ]
    },
    users: {
      title: 'Primary Users',
      segments: [
        { name: 'Students', desc: 'Discover skill-aligned opportunities' },
        { name: 'Job Seekers', desc: 'Find roles matching capabilities' },
        { name: 'Companies', desc: 'Source talent efficiently' },
        { name: 'Recruiters', desc: 'Match candidates to positions' }
      ]
    },
    research: {
      title: 'Research & Insights',
      findings: [
        '78% of students abandon job applications due to poor match',
        'Companies report 45% of hires don\'t fit role expectations',
        'Skill-based hiring reduces onboarding time by 35%',
        'Students value opportunities matching 60%+ of their skills'
      ]
    },
    opportunity: 'Build an AI-powered matching engine that connects students with opportunities based on actual skills rather than credentials. Focus on career growth and mutual fit.',
    solution: {
      title: 'Solution Overview',
      description: 'SkillBridge uses machine learning to analyze student skills (via assessments and portfolios) and match them with company requirements. The platform emphasizes skill growth and mutual fit, creating better outcomes for both parties.',
      features: [
        'AI-powered skill assessment and profile building',
        'Intelligent matching algorithm (targeting 80%+ fit)',
        'Personalized opportunity feed based on career interests',
        'Skill gap analysis with learning recommendations',
        'Company-side talent discovery dashboard',
        'Interview preparation with AI feedback',
        'Post-internship outcome tracking and ratings'
      ]
    },
    technology: {
      title: 'Technology Stack',
      frontend: ['React.js', 'TypeScript', 'TailwindCSS'],
      backend: ['Node.js', 'Express.js', 'Python (ML)'],
      database: ['PostgreSQL', 'Redis'],
      apis: ['Hugging Face Transformers', 'Custom Matching Engine']
    },
    metrics: [
      { label: 'Application Completion', value: '+68%', desc: 'Higher submission rate' },
      { label: 'Match Quality', value: '82%', desc: 'Average fit score' },
      { label: 'Successful Placements', value: '+45%', desc: 'Improved outcomes' },
      { label: 'User Growth', value: '5k+', desc: 'Active students' }
    ]
  },
  fleetlink: {
    heroTitle: 'FleetLink',
    heroSubtitle: 'A product exploration focused on improving navigation systems by introducing predictive turn alerts for drivers.',
    metadata: {
      role: 'Product Strategy',
      duration: '6 weeks',
      focus: ['Navigation improvement', 'Driver behavior', 'Predictive alerts']
    },
    problem: {
      title: 'The Problem',
      description: 'Delivery drivers frequently miss turns because navigation instructions come too late. Even a 2-second delay means a driver passing a turn at highway speeds has already missed the exit. This causes missed deliveries, wasted fuel, frustrated drivers, and operational inefficiency. Traditional navigation systems alert drivers AS they approach a turn, leaving no time for safe lane changes.',
      sections: [
        'Turn alerts arrive too late for safe reaction',
        'High rate of missed turns in complex routes',
        'Increased fuel consumption from route corrections',
        'Driver frustration and safety concerns',
        'Delivery performance metrics impacted negatively'
      ]
    },
    users: {
      title: 'Primary Users',
      segments: [
        { name: 'Delivery Drivers', desc: 'Need early navigation warnings' },
        { name: 'Ride-sharing Drivers', desc: 'Require predictive turn alerts' },
        { name: 'Fleet Managers', desc: 'Monitor route efficiency' },
        { name: 'Logistics Companies', desc: 'Optimize operations' }
      ]
    },
    research: {
      title: 'Research & Insights',
      findings: [
        '35% of delivery delays are due to missed turns',
        'Drivers need 200+ meters notice before turns',
        'Predictive alerts reduce wrong turns by 65%',
        'Early warnings improve driver confidence and safety'
      ]
    },
    opportunity: 'Implement predictive navigation that alerts drivers 200-500 meters before turns using speed, route geometry, and behavior patterns. Make delivery routes more efficient and safer.',
    solution: {
      title: 'Solution Overview',
      description: 'FleetLink uses machine learning to predict upcoming turns based on current speed, route geometry, and driver behavior patterns. It provides early, multi-sensory alerts (visual + audio) well before drivers need to act, giving them time to safely prepare.',
      features: [
        'Predictive turn alerts 200-500 meters in advance',
        'Speed-aware alert timing based on traffic',
        'Multi-sensory notifications (visual + audio + haptic)',
        'Driver behavior learning and personalization',
        'Offline-capable route guidance',
        'Integration with Google Maps and HERE APIs',
        'Analytics dashboard for fleet performance tracking'
      ]
    },
    technology: {
      title: 'Technology Stack',
      frontend: ['React Native', 'TypeScript', 'Mapbox GL'],
      backend: ['Python', 'FastAPI', 'TensorFlow'],
      database: ['MongoDB', 'TimescaleDB'],
      apis: ['Google Maps API', 'HERE Navigation API']
    },
    metrics: [
      { label: 'Missed Turns', value: '-65%', desc: 'Reduction in navigation errors' },
      { label: 'Driver Confidence', value: '+78%', desc: 'Improved satisfaction scores' },
      { label: 'Route Efficiency', value: '+22%', desc: 'Better time utilization' },
      { label: 'On-time Delivery', value: '+45%', desc: 'Improved completion rate' }
    ]
  }
}

export default function CaseStudyPage({ params }: Props) {
  const details = caseStudyDetails[params.slug as keyof typeof caseStudyDetails]

  if (!details) {
    return (
      <div className="section-padding max-w-4xl mx-auto">
        <Link href="/#case-studies" className="flex items-center gap-2 text-electric hover:text-electric/80">
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>
        <div className="mt-8 text-center">
          <p className="text-slate-400">Case study not found</p>
        </div>
      </div>
    )
  }

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
            {details.heroTitle}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            {details.heroSubtitle}
          </p>
          
          {/* Metadata Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div>
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Role</p>
              <p className="text-base text-white">{details.metadata.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Duration</p>
              <p className="text-base text-white">{details.metadata.duration}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-slate-500 font-semibold tracking-wider mb-2">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {details.metadata.focus.map((f, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-electric/10 text-electric rounded">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-16">
        {/* Problem Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-heading font-bold flex items-center gap-3 mb-4">
              <Target className="text-electric" size={32} />
              {details.problem.title}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {details.problem.description}
            </p>
            <ul className="space-y-3">
              {details.problem.sections.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-electric font-bold mt-1">•</span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-glass rounded-2xl p-6 border border-white/5 h-fit">
            <h3 className="font-semibold text-sm uppercase text-slate-400 mb-4">Key Metrics</h3>
            {details.metrics.slice(0, 2).map((m, idx) => (
              <div key={idx} className="mb-4 pb-4 border-b border-white/10 last:border-b-0">
                <div className="text-2xl font-bold text-electric">{m.value}</div>
                <p className="text-xs text-slate-400 mt-1">{m.label}</p>
                <p className="text-xs text-slate-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Users Section */}
        <section>
          <h2 className="text-3xl font-heading font-bold flex items-center gap-3 mb-8">
            <Users className="text-electric" size={32} />
            {details.users.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {details.users.segments.map((seg, idx) => (
              <div key={idx} className="card-glass rounded-xl p-6 border border-white/5">
                <h4 className="font-semibold text-lg text-white mb-2">{seg.name}</h4>
                <p className="text-sm text-slate-400">{seg.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Section */}
        <section className="bg-gradient-to-r from-electric/10 via-purple-600/10 to-transparent rounded-3xl p-8 md:p-12 border border-white/5">
          <h2 className="text-3xl font-heading font-bold mb-6">{details.research.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.research.findings.map((finding, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Zap className="text-electric mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-300">{finding}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Opportunity Section */}
        <section className="border-l-4 border-electric pl-8 py-4">
          <h3 className="text-sm uppercase text-electric font-bold tracking-wider mb-3">The Opportunity</h3>
          <p className="text-lg text-slate-200 leading-relaxed">{details.opportunity}</p>
        </section>

        {/* Solution Section */}
        <section>
          <h2 className="text-3xl font-heading font-bold flex items-center gap-3 mb-8">
            <Zap className="text-electric" size={32} />
            {details.solution.title}
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">{details.solution.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.solution.features.map((feature, idx) => (
              <div key={idx} className="card-glass rounded-xl p-6 border border-white/5 hover:border-electric/30 transition">
                <h4 className="font-semibold text-white mb-2">✓ {feature}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Section */}
        <section>
          <h2 className="text-3xl font-heading font-bold flex items-center gap-3 mb-8">
            <Code2 className="text-electric" size={32} />
            {details.technology.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-electric mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {details.technology.frontend.map((tech, idx) => (
                  <span key={idx} className="px-3 py-2 bg-electric/10 text-electric rounded-lg text-sm border border-electric/20">
                    {tech}
                  </span>
                ))}
              </div>
              <h4 className="font-semibold text-purple-400 mt-6 mb-3">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {details.technology.backend.map((tech, idx) => (
                  <span key={idx} className="px-3 py-2 bg-purple-600/10 text-purple-300 rounded-lg text-sm border border-purple-600/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-400 mb-3">Database</h4>
              <div className="flex flex-wrap gap-2">
                {details.technology.database.map((tech, idx) => (
                  <span key={idx} className="px-3 py-2 bg-indigo-600/10 text-indigo-300 rounded-lg text-sm border border-indigo-600/20">
                    {tech}
                  </span>
                ))}
              </div>
              <h4 className="font-semibold text-green-400 mt-6 mb-3">APIs & Integrations</h4>
              <div className="flex flex-wrap gap-2">
                {details.technology.apis.map((api, idx) => (
                  <span key={idx} className="px-3 py-2 bg-green-600/10 text-green-300 rounded-lg text-sm border border-green-600/20">
                    {api}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section>
          <h2 className="text-3xl font-heading font-bold flex items-center gap-3 mb-8">
            <BarChart3 className="text-electric" size={32} />
            Product Metrics & Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {details.metrics.map((metric, idx) => (
              <div key={idx} className="card-glass rounded-2xl p-6 border border-white/5 text-center hover:border-electric/30 transition">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-electric to-purple-400 bg-clip-text mb-2">
                  {metric.value}
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{metric.label}</h4>
                <p className="text-xs text-slate-400">{metric.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 text-center border-t border-white/10">
          <h3 className="text-2xl font-heading font-bold mb-4">Interested in learning more?</h3>
          <p className="text-slate-400 mb-6">Check out my other case studies or reach out to discuss product strategy</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#case-studies"
              className="px-6 py-3 bg-gradient-to-r from-electric/20 to-purple-600/20 hover:from-electric/40 hover:to-purple-600/40 rounded-lg font-semibold text-electric border border-electric/30 hover:border-electric/60 transition"
            >
              View Other Case Studies
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-3 bg-gradient-to-r from-electric to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-electric/50 transition"
            >
              Let's Connect
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
