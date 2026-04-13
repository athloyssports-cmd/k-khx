import { Quote } from 'lucide-react'

export function Testimonial() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Real-World Traction</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Impact and Adoption
          </h2>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 rounded-2xl bg-background border border-border">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1,000+</div>
            <p className="text-muted-foreground text-sm">Students Monitored</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-background border border-border">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4</div>
            <p className="text-muted-foreground text-sm">Active Pilot Schools</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-background border border-border">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2</div>
            <p className="text-muted-foreground text-sm">Govt Bodies in Discussion</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-background border border-border">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100</div>
            <p className="text-muted-foreground text-sm">Schools Target (July 2026)</p>
          </div>
        </div>

        {/* Pilot Schools */}
        <div className="mb-12">
          <p className="text-center text-sm font-medium text-muted-foreground mb-6">Active Pilot Deployments in Goa</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['Goa Velha', 'Fr Agnel St Lawrence', 'Fr Agnel Central', 'St Andrews'].map((school) => (
              <span
                key={school}
                className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {school}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background rounded-2xl p-8 md:p-12 border border-border">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            <div className="relative">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                &quot;The platform is a game-changer for schools. For the first time, we have a structured, scientific way to track every child&apos;s physical development. The platform makes it incredibly easy for teachers to record assessments, and the reports it generates are professional, clear, and data-backed. Parents love being able to see their child&apos;s wellness journey, while students are motivated by the leaderboards and personalized sport recommendations. More importantly, it aligns perfectly with NEP 2020 and holistic education goals.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">P</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">School Partner</p>
                  <p className="text-sm text-muted-foreground">Early Adopter, Goa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Govt Bodies */}
        <div className="mt-12">
          <p className="text-center text-sm font-medium text-muted-foreground mb-6">In Active Discussions With</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['Sports Authority of Goa', 'Department of Education (DOE)', 'NEP 2020 Aligned', 'National Sports Policy'].map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 text-sm font-medium rounded-full bg-muted text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
