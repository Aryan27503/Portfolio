import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import TeardownContent from '../../../components/TeardownContent'

interface Props {
  params: { slug: string }
}

const teardownsData = {
  blinkit: {
    name: 'Blinkit',
    tagline: '10-minute delivery revolution',
    oneLineSummary: 'Hyperlocal quick commerce platform disrupting grocery delivery.',
    problem: 'Customer demand for instant gratification in grocery shopping',
    targetUsers: 'Urban millennials, busy professionals, emergency shoppers',
    keyFeatures: [
      'Real-time inventory tracking',
      'AI-powered demand forecasting',
      'Ultra-fast logistics network',
      'Smart push notifications',
      'Dynamic pricing engine'
    ],
    whatWorks: [
      'Exceptional speed as core differentiator - "10 minutes" is emotionally compelling',
      'Dark store network optimization - inventory positioned near demand',
      'Seamless app experience - minimal friction from discovery to delivery',
      'Network effects in metro cities create defensibility',
      'Psychological appeal of urgency drives repeat usage'
    ],
    productStrategy: [
      'Speed as primary moat - extremely difficult to replicate at scale',
      'Unit economics through volume and operational efficiency',
      'Category expansion beyond groceries into essentials',
      'Cross-sell opportunities through targeted recommendations',
      'Data-driven inventory management reduces wastage'
    ],
    improvementIdea: 'AI demand forecasting for inventory optimization - predict surge in demand 4 hours ahead based on weather patterns, local events, and user behavior patterns to minimize stockouts during peak times.',
    metrics: [
      { label: 'Order Frequency', value: '+3x', desc: 'Higher repeat purchase rate than traditional groceries' },
      { label: 'Market Speed', value: '10 min', desc: 'Industry-leading delivery time' },
      { label: 'Customer Retention', value: '65%', desc: 'Monthly active user retention' },
      { label: 'Basket Size', value: '₹400-600', desc: 'Average order value trending upward' }
    ]
  },
  uber: {
    name: 'Uber',
    tagline: 'Logistics reimagined for the city',
    oneLineSummary: 'Two-sided marketplace platform transforming urban transportation and logistics.',
    problem: 'Inefficient taxi market with poor user experience, high prices, and driver income instability',
    targetUsers: 'Daily commuters, business travelers, gig economy participants, delivery recipients',
    keyFeatures: [
      'Real-time driver matching using location data',
      'Dynamic surge pricing based on demand',
      'Transparent cost estimation upfront',
      'Driver and rider rating system for quality control',
      'Seamless payment integration with multiple methods'
    ],
    whatWorks: [
      'Solves core pain points of traditional taxis - unpredictability and trust issues',
      'Two-sided marketplace creates strong network effects',
      'Transparent pricing builds trust and reduces friction',
      'Data-driven driver matching algorithm optimizes wait times',
      'Expansion into multiple categories (UberEats, Uber Freight) leverages core infrastructure',
      'Mobile-first approach captures emerging market behaviors'
    ],
    productStrategy: [
      'Platform stickiness through multi-category offerings',
      'Network effects create defensible moat - both driver and rider side benefits from scale',
      'Data analytics enables continuous optimization',
      'Pricing algorithm balances supply-demand in real time',
      'Expansion strategy: perfect demand aggregation, then solve supply'
    ],
    improvementIdea: 'Predictive driver positioning using ML - anticipate driver demand surges 30 minutes ahead based on historical patterns, weather, events, and time of day to suggest preemptive driver repositioning, reducing average wait times.',
    metrics: [
      { label: 'Market Coverage', value: '70+', desc: 'Countries and territories worldwide' },
      { label: 'Active Users', value: '100M+', desc: 'Monthly active riders globally' },
      { label: 'Driver Supply', value: '5M+', desc: 'Active driver partners' },
      { label: 'Ride Time', value: '5-10 min', desc: 'Average wait time in metros' }
    ]
  },
  instagram: {
    name: 'Instagram',
    tagline: 'Visual storytelling at scale',
    oneLineSummary: 'Social platform that democratized photography and created the influencer economy.',
    problem: 'Existing photo-sharing platforms lack aesthetic appeal, viral mechanics, and cultural relevance for digital natives',
    targetUsers: 'Content creators, casual users, visual storytellers, brands, influencers',
    keyFeatures: [
      'Beautiful photo filters and editing tools',
      'Infinite scroll feed optimized for dopamine hits',
      'Story format (time-limited content reducing pressure)',
      'Influencer monetization through sponsored posts',
      'Algorithmic feed optimization for engagement'
    ],
    whatWorks: [
      'Filters democratized photography - anyone can create beautiful content',
      'Stories reduced posting anxiety - temporary visibility encourages sharing',
      'Algorithm drives discovery and engagement rather than chronological feeds',
      'Influencer economy creates aspirational content and brand partnerships',
      'Perfect balance of social (following friends) and discovery (new content)',
      'Mobile-first design optimized for youth behaviors',
      'Seamless integration of commerce (shopping features, partnerships)'
    ],
    productStrategy: [
      'Content creation tools as primary engagement driver',
      'Algorithm continuously optimizes for time-on-app',
      'Influencer marketplace enables monetization for creators',
      'Stories feature borrowed from Snapchat but executed better',
      'Reels feature captures short-form video trend',
      'Commerce integration (Instagram Shopping) creates new revenue streams'
    ],
    improvementIdea: 'AI Content Moderation + Creator Safety - implement advanced ML to detect negative comments/harassment patterns before posting and offer gentle rewording suggestions to improve community health while empowering creators with healthy feedback.',
    metrics: [
      { label: 'Monthly Users', value: '2B+', desc: 'Monthly active users globally' },
      { label: 'Daily Active', value: '500M+', desc: 'Daily active user engagement' },
      { label: 'Content Posts', value: '95M+', desc: 'Posts shared daily' },
      { label: 'Engagement Rate', value: '3-5%', desc: 'Average interaction rate' }
    ]
  }
}

export async function generateMetadata({ params }: Props) {
  const teardown = teardownsData[params.slug as keyof typeof teardownsData]
  if (!teardown) {
    return {
      title: 'Teardown | Aryan Soni',
      description: 'Product teardown analysis'
    }
  }
  return {
    title: `${teardown.name} Product Teardown — Aryan Soni`,
    description: teardown.oneLineSummary,
    openGraph: {
      title: `${teardown.name} - Product Analysis & Insights`,
      description: teardown.oneLineSummary,
    }
  }
}

export default function TeardownPage({ params }: Props) {
  const teardown = teardownsData[params.slug as keyof typeof teardownsData]

  if (!teardown) {
    return (
      <div className="section-padding max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-electric hover:text-electric/80">
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>
        <div className="mt-8 text-center">
          <p className="text-slate-400">Teardown not found</p>
        </div>
      </div>
    )
  }

  return <TeardownContent teardown={teardown} />
}
