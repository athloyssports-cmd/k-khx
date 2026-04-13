import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_hsl(var(--border))_1px,_transparent_1px),_linear-gradient(to_bottom,_hsl(var(--border))_1px,_transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            School Sports Intelligence Platform
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance">
            India&apos;s School-to-Sport{' '}
            <span className="text-primary">Talent Pathway</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Measure. Understand. Develop. Athlosys transforms school sports into data-driven physical development with AI-powered talent identification.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-lg border border-border text-foreground hover:bg-secondary transition-colors w-full sm:w-auto"
            >
              <Play className="w-4 h-4" />
              See How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { value: '5,000+', label: 'Students Monitored' },
              { value: '12', label: 'Pilot Schools' },
              { value: '15+', label: 'Assessment Metrics' },
              { value: 'Goa', label: 'Launch State' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Coming soon in</span>
            <span className="px-2 py-1 rounded bg-primary/10 text-primary font-medium">Gujarat</span>
            <span>&</span>
            <span className="px-2 py-1 rounded bg-primary/10 text-primary font-medium">Odisha</span>
          </div>
        </div>
      </div>
    </section>
  )
}
