export function Vision() {
  return (
    <section id="vision" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-6">Our Vision</p>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Schools Are the First Place Where Athletic Potential Appears
          </h2>
          
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Peak Athlete connects schools, data analytics, and the sports ecosystem to help every student discover their athletic potential. We&apos;re building the initial &apos;Talent Watch&apos; zones across India.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 'Goa', label: 'Launch State' },
              { value: '28', label: 'States Target' },
              { value: '1M+', label: 'Athletes Goal' },
              { value: 'Rs 10', label: 'Per Student/Month' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
