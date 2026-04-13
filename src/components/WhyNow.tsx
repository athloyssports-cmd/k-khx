import { BookOpen, Target, MapPin, Award } from 'lucide-react'

const policies = [
  {
    icon: BookOpen,
    title: 'NEP 2020',
    items: [
      'Emphasis on holistic development',
      'Focus on experiential learning',
      'Physical education as integral',
      'Mandate for measurable outcomes',
    ],
  },
  {
    icon: Target,
    title: 'National Sports Policy 2025',
    items: [
      'Grassroots talent identification',
      'Sports in school curriculum',
      'Scientific assessment pathways',
      'Development tracking systems',
    ],
  },
]

const goaFeatures = [
  { icon: Award, label: 'High per capita income' },
  { icon: BookOpen, label: 'High literacy rate' },
  { icon: Target, label: 'Strong sports ecosystem' },
  { icon: MapPin, label: 'Government support' },
]

export function WhyNow() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Why Now</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Perfect Convergence of Policy, Market & Technology
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Government initiatives are creating unprecedented demand for structured physical assessment in schools.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <policy.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{policy.title}</h3>
              <ul className="space-y-3">
                {policy.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Goa Launchpad */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Goa: Perfect Launchpad</h3>
            <div className="grid grid-cols-2 gap-4">
              {goaFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <feature.icon className="w-4 h-4 text-primary shrink-0" />
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['NEP 2020', 'FIT India', 'Khelo India', 'ASSOCHAM Goa'].map((badge) => (
                <span key={badge} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
