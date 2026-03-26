'use client'

export default function ProductThinking(){
  const examples = [
    {title:'Blinkit', problem:'Quick commerce delivery and inventory efficiency', improvement:'Optimize micro-fulfillment and pick routes'},
    {title:'Uber', problem:'Reliable on-demand rides', improvement:'Better ETA predictions and driver incentives'},
    {title:'Instagram', problem:'Content discovery and engagement', improvement:'More contextual recommendations'}
  ]
  return (
    <section id="product-thinking" className="section-padding max-w-6xl mx-auto">
      <h2 className="text-3xl font-heading font-semibold">Product Thinking</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {examples.map(e=> (
          <div key={e.title} className="card-glass p-4 rounded-lg">
            <h4 className="font-semibold">{e.title}</h4>
            <div className="text-sm text-slate-300 mt-2"><strong>Problem:</strong> {e.problem}</div>
            <div className="text-sm text-slate-300 mt-1"><strong>Improvement:</strong> {e.improvement}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
