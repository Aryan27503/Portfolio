'use client'

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const articles: Record<string, any> = {
    'blinkit-logistics': {
      title: 'How Blinkit optimizes quick commerce logistics',
      date: '2025-12-10',
      content: `Blinkit revolutionized the Indian e-commerce landscape with its 10-minute delivery promise. Behind this success lies a meticulously engineered product and logistics strategy.

## The Problem
Traditional e-commerce required 2-3 days for delivery. Consumer expectations shifted toward instant gratification, but delivering in 10 minutes seemed impossible. Blinkit identified this massive gap.

## The Solution
1. **Micro-fulfillment centers**: Instead of large warehouses, Blinkit strategically placed small fulfillment centers (dark stores) across cities.
2. **Local inventory optimization**: Real-time inventory management using AI to predict demand.
3. **Smart routing**: Machine learning optimizes delivery routes for pickup and last-mile efficiency.
4. **User behavior analytics**: Understanding peak hours, popular categories, and customer segments.

## Key Product Features
- **Live tracking**: Users see real-time delivery status
- **Smart recommendations**: AI suggests items to increase basket size
- **Payment flexibility**: Multiple payment options reduce friction

## The Impact
Blinkit's model created a category and achieved product-market fit rapidly, eventually becoming one of India's most valued startups.`
    },
    'disaster-reporting': {
      title: 'Designing better disaster reporting systems',
      date: '2025-11-15',
      content: `India frequently faces natural disasters. Yet, there's no centralized platform for real-time incident reporting and relief coordination. This is where ResQNet comes in.

## The Core Problem
During disasters:
- Citizens can't efficiently report incidents
- Relief coordinators lack real-time visibility
- Duplicate efforts waste resources
- Information asymmetry delays response

## ResQNet's Approach
Building a platform that enables:
1. **Citizen reporting**: Easy incident logging with images and location
2. **Role-based dashboards**: Different views for citizens, coordinators, and authorities
3. **Resource mapping**: Real-time tracking of relief materials and personnel
4. **Weather integration**: Predictive insights using weather APIs

## Key Insights
- Simple UI is critical for disaster scenarios (users are stressed)
- Real-time collaboration tools reduce coordination overhead
- Transparency builds trust in relief systems

## Impact Potential
Such platforms can reduce response time by 40-60%, improve resource allocation, and save lives.`
    },
    'early-stage-metrics': {
      title: 'Metrics every early-stage product should track',
      date: '2025-10-20',
      content: `Early-stage startups drown in metrics. Here are the ones that truly matter:

## The AARRR Framework

**Acquisition**: How are users discovering your product?
- Channels: organic, paid, referral
- Cost per acquisition (CAC)
- Attribution models

**Activation**: What % of users complete first key action?
- Sign-up to first "aha moment"
- Onboarding completion rate

**Retention**: How often do users return?
- Day-1, Day-7, Day-30 retention
- Churn rate by cohort

**Revenue**: Are users paying?
- ARR / MRR
- Customer lifetime value (LTV)

**Referral**: How viral is growth?
- K-factor (viral coefficient)
- Referral conversion rate

## North Star Metric
Pick ONE metric that drives everything. For Uber, it's rides per active user. For Slack, it's messages sent.

## Actionable Tips
1. Track metrics weekly, not daily (reduces noise)
2. Set benchmarks against industry leaders
3. Iterate based on cohort analysis
4. Avoid vanity metrics like total users

Build defensible growth through data-driven iteration.`
    }
  }

  const article = articles[params.slug]
  if (!article) return <div className="section-padding">Article not found</div>

  return (
    <section className="section-padding max-w-3xl mx-auto">
      <h1 className="text-4xl font-heading font-bold">{article.title}</h1>
      <p className="text-slate-400 mt-2">{new Date(article.date).toLocaleDateString()}</p>
      
      <div className="mt-8 prose prose-invert max-w-none">
        {article.content.split('\n\n').map((paragraph: string, idx: number) => {
          if (paragraph.startsWith('#')) {
            const level = paragraph.match(/^#+/)?.[0].length || 2
            const text = paragraph.replace(/^#+\s/, '')
            const Tag = `h${level}` as any
            return (
              <Tag key={idx} className={`mt-6 mb-3 font-semibold ${level === 2 ? 'text-2xl' : 'text-lg'}`}>
                {text}
              </Tag>
            )
          }
          if (paragraph.startsWith('-')) {
            return (
              <ul key={idx} className="list-disc ml-6 text-slate-300 space-y-1">
                {paragraph.split('\n').map((item, i) => (
                  <li key={i}>{item.replace(/^-\s/, '')}</li>
                ))}
              </ul>
            )
          }
          return (
            <p key={idx} className="text-slate-300 leading-relaxed">
              {paragraph}
            </p>
          )
        })}
      </div>
    </section>
  )
}
