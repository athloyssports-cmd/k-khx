export function Ecosystem() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">The Peak Athlete Ecosystem</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Discovering Potential Through Data
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every student possesses athletic potential waiting to be scientifically identified and nurtured.
          </p>
        </div>

        {/* Infographic Images */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl overflow-hidden border border-border bg-background shadow-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%284%29.png-SJXXZQpAk1U4s0fCU05F7JHr5N3OMS.jpeg"
              alt="The Peak Athlete Ecosystem: Discovering Potential through Data"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border bg-background shadow-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%281%29.png-ItZ4NoguwgKencanBkwZcSvu0dA7in.jpeg"
              alt="Peak Athlete: Your Journey from School Playground to High-Performance Excellence"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Journey Infographic */}
        <div className="rounded-2xl overflow-hidden border border-border bg-background shadow-lg">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%283%29.png-2doo6YEd2TuHQvjYNIIlYtwT7IvddZ.jpeg"
            alt="Peak Athlete: Bridging the Gap Between Talent and Opportunity"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
