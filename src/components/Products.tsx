import { School, User, Trophy, ClipboardCheck, LineChart, Target, Users, Database as DatabaseIcon } from 'lucide-react'

const products = [
  {
    title: 'For Schools',
    description: 'Transform your PE program with data-driven insights',
    icon: School,
    features: [
      { icon: ClipboardCheck, text: 'Standardized Assessments' },
      { icon: LineChart, text: 'Performance Dashboards' },
      { icon: Target, text: 'Benchmarking Tools' },
    ],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'For Athletes',
    description: 'Showcase your potential and track your growth',
    icon: User,
    features: [
      { icon: User, text: 'Digital Athlete Profiles' },
      { icon: LineChart, text: 'Performance Tracking' },
      { icon: Target, text: 'Progress Analytics' },
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'For Academies',
    description: 'Discover and recruit top talent efficiently',
    icon: Trophy,
    features: [
      { icon: Users, text: 'Scouting Tools' },
      { icon: DatabaseIcon, text: 'Athlete Database' },
      { icon: Target, text: 'Talent Matching' },
    ],
    gradient: 'from-orange-500 to-amber-500',
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Products</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Built for everyone in the ecosystem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Whether you&apos;re a school administrator, young athlete, or sports academy, Athlosys has the tools you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl p-8 border border-border hover:border-transparent transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6`}>
                <product.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">{product.title}</h3>
              <p className="text-muted-foreground mb-6">{product.description}</p>

              <ul className="space-y-3">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-foreground/80">
                    <feature.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
