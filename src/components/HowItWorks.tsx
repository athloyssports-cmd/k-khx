import { Upload, Brain, UserCircle, Search } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Schools Input Data',
    description: 'Schools conduct standardized physical assessments and upload student performance data through our simple interface.',
  },
  {
    number: '02',
    icon: Brain,
    title: 'AI Generates Scores',
    description: 'Our AI engine processes the data to generate PPS (Physical Profile Score) and APR (Athlete Potential Rating) for each student.',
  },
  {
    number: '03',
    icon: UserCircle,
    title: 'Profiles Are Created',
    description: 'Dynamic athlete profiles are automatically created, showcasing each student\'s strengths, potential, and progression.',
  },
  {
    number: '04',
    icon: Search,
    title: 'Scouts Discover Talent',
    description: 'Academies and scouts browse the talent pool, filtering by sport, location, age, and performance metrics to find perfect matches.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">How It Works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            From assessment to discovery
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A seamless journey that transforms raw athletic data into meaningful opportunities.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Step Number Badge */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center mb-6 ring-4 ring-background">
                    {step.number}
                  </div>
                  
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
