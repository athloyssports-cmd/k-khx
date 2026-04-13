import { Check, X } from 'lucide-react'

const comparisons = [
  {
    feature: 'Hardware Required',
    traditional: true,
    athlosys: false,
    athlosysText: 'No hardware needed',
  },
  {
    feature: 'Built for Scale',
    traditional: false,
    athlosys: true,
    athlosysText: 'Designed for 1000s of schools',
  },
  {
    feature: 'Complete Ecosystem',
    traditional: false,
    athlosys: true,
    athlosysText: 'Schools, athletes, academies',
  },
  {
    feature: 'Standardized Scoring',
    traditional: false,
    athlosys: true,
    athlosysText: 'AI-powered, consistent metrics',
  },
  {
    feature: 'Talent Discovery',
    traditional: false,
    athlosys: true,
    athlosysText: 'Built-in scouting platform',
  },
  {
    feature: 'Real-time Analytics',
    traditional: false,
    athlosys: true,
    athlosysText: 'Live dashboards & insights',
  },
]

export function WhyAthlosys() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Not just another sports app
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how Athlosys compares to traditional approaches in school sports management.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <div className="text-sm font-medium text-muted-foreground">Feature</div>
            <div className="text-sm font-medium text-muted-foreground text-center">Traditional</div>
            <div className="text-sm font-medium text-primary text-center">Athlosys</div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-2">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 items-center p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="text-sm font-medium text-foreground">{item.feature}</div>
                
                <div className="flex justify-center">
                  {item.traditional ? (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <Check className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  {item.athlosys ? (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <span className="text-xs text-muted-foreground text-center hidden sm:block">{item.athlosysText}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
