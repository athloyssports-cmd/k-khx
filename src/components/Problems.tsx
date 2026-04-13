import { Search, BarChart3, Database, Eye } from 'lucide-react'

const problems = [
  {
    icon: Search,
    title: 'No Structured Talent Identification',
    description: 'Schools lack systematic methods to identify athletic potential early, leading to missed opportunities for promising athletes.',
  },
  {
    icon: BarChart3,
    title: 'No Measurable PE Programs',
    description: 'Physical education programs operate without data, making it impossible to track progress or demonstrate value.',
  },
  {
    icon: Database,
    title: 'Lack of Data & Benchmarking',
    description: 'Without standardized metrics, schools cannot compare performance or set meaningful improvement goals.',
  },
  {
    icon: Eye,
    title: 'Limited Athlete Visibility',
    description: 'Talented students remain undiscovered due to lack of exposure to scouts, academies, and professional pathways.',
  },
]

export function Problems() {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">The Challenge</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            School sports are broken
          </h2>
          <p className="mt-4 text-lg text-background/60 max-w-2xl mx-auto text-pretty">
            Traditional physical education lacks the tools to identify, track, and nurture athletic talent effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 hover:border-background/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-background mb-2">{problem.title}</h3>
              <p className="text-sm text-background/60 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
