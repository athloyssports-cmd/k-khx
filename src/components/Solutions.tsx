import { Activity, LayoutDashboard, UserCircle, Globe } from 'lucide-react'

const solutions = [
  {
    icon: Activity,
    title: 'PPS & APR Scoring',
    description: 'AI-powered Physical Profile Score and Athlete Potential Rating that quantifies athletic ability with precision.',
    color: 'bg-emerald-500',
  },
  {
    icon: LayoutDashboard,
    title: 'School Dashboards',
    description: 'Comprehensive dashboards giving schools real-time visibility into student performance and program effectiveness.',
    color: 'bg-blue-500',
  },
  {
    icon: UserCircle,
    title: 'Athlete Profiles',
    description: 'Dynamic digital profiles showcasing student achievements, scores, and athletic journey over time.',
    color: 'bg-orange-500',
  },
  {
    icon: Globe,
    title: 'Scouting Ecosystem',
    description: 'Connect talented athletes with academies, scouts, and professional opportunities nationwide.',
    color: 'bg-purple-500',
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">The Solution</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            One platform. Complete transformation.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Athlosys brings together AI-powered assessment, data visualization, and talent discovery in one seamless ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${solution.color} flex items-center justify-center mb-6`}>
                <solution.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary/5 to-transparent -z-10 group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
