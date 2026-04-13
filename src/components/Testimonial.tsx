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

        {/* Policy Alignment */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {['NEP 2020 Aligned', 'National Sports Policy', 'FIT India Movement'].map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 text-sm font-medium rounded-full bg-muted text-muted-foreground"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
