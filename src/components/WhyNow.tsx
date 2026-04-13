import { BookOpen, Target, MapPin, Award, Calendar, TrendingUp, Building } from 'lucide-react'

const policies = [
  {
    icon: BookOpen,
    title: 'NEP 2020 Alignment',
    items: [
      'Emphasis on holistic development',
      'Focus on experiential learning',
      'Physical education as integral',
      'Mandate for measurable outcomes',
    ],
  },
  {
    icon: Target,
    title: 'The Contrarian Insight',
    items: [
      'The problem is NOT infrastructure',
      'It\'s a lack of systems + data',
      '23% of schools lack playgrounds',
      'Yet distribution exists: PE teachers',
    ],
  },
]

const roadmap = [
  {
    phase: 'Phase 1',
    period: '2025 - Early 2026',
    title: 'Foundation',
    items: ['Pilot with 4 schools', 'Validate protocols', 'Build MVP platform'],
    status: 'current',
  },
  {
    phase: 'March 2026',
    period: '',
    title: 'Product Launch',
    items: ['Full platform rollout', 'Student dashboards', 'AI scoring (PPS & APR)'],
    status: 'upcoming',
  },
  {
    phase: 'Phase 2',
    period: 'Mid-Late 2026',
    title: 'Scale',
    items: ['100 schools by July', 'Academy integrations', 'Structured database'],
    status: 'upcoming',
  },
  {
    phase: 'Phase 3',
    period: '2027',
    title: 'Expansion',
    items: ['Gujarat & Odisha', 'National talent network', 'Grassroots ecosystem'],
    status: 'upcoming',
  },
]

export function WhyNow() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Why Now</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            From Regional MVP to National Infrastructure
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Perfect convergence of policy support, market readiness, and technology capability.
          </p>
        </div>

        {/* Policy Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
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

          {/* Blue Ocean Card */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Untapped Blue Ocean</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                EdTech + HealthTech + SportsTech convergence
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                1.5M schools, 250M+ students in India
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Physical development sector un-digitized
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Zero-capex scaling via existing PE teachers
              </li>
            </ul>
          </div>
        </div>

        {/* Roadmap */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Growth Roadmap</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {roadmap.map((phase, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-xl border ${
                  phase.status === 'current' 
                    ? 'bg-primary/10 border-primary/30' 
                    : 'bg-secondary/50 border-border'
                }`}
              >
                {phase.status === 'current' && (
                  <span className="absolute -top-2 left-4 px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    Current
                  </span>
                )}
                <p className="text-xs text-primary font-medium mb-1">{phase.phase}</p>
                {phase.period && <p className="text-xs text-muted-foreground mb-2">{phase.period}</p>}
                <h4 className="font-semibold text-foreground mb-3">{phase.title}</h4>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
