import { Zap, TrendingUp, Shield, Gauge } from 'lucide-react'

export function Technology() {
  return (
    <section id="technology" className="py-20 md:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Our Technology</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            AI-powered athlete intelligence
          </h2>
          <p className="mt-4 text-lg text-background/60 max-w-2xl mx-auto text-pretty">
            Proprietary algorithms that turn raw performance data into actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* PPS Card */}
          <div className="relative bg-background/5 border border-background/10 rounded-2xl p-8 md:p-10 overflow-hidden group hover:bg-background/10 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full bg-primary/20 text-primary">
                <Zap className="w-3 h-3" />
                Core Metric
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-background mb-4">
                Physical Profile Score
                <span className="text-primary"> (PPS)</span>
              </h3>
              
              <p className="text-background/70 mb-6 leading-relaxed">
                A comprehensive score that evaluates an athlete&apos;s current physical capabilities across multiple dimensions including speed, strength, endurance, flexibility, and coordination.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Gauge, label: 'Real-time Analysis' },
                  { icon: Shield, label: 'Validated Metrics' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-background/60">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* APR Card */}
          <div className="relative bg-background/5 border border-background/10 rounded-2xl p-8 md:p-10 overflow-hidden group hover:bg-background/10 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400">
                <TrendingUp className="w-3 h-3" />
                Predictive
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-background mb-4">
                Athlete Potential Rating
                <span className="text-blue-400"> (APR)</span>
              </h3>
              
              <p className="text-background/70 mb-6 leading-relaxed">
                Our predictive AI model that forecasts athletic potential based on current performance, growth patterns, and comparative analysis with elite athlete development trajectories.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, label: 'Growth Prediction' },
                  { icon: Shield, label: 'ML-Powered' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-background/60">
                    <item.icon className="w-4 h-4 text-blue-400" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
