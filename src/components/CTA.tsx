import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="cta" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-8 md:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Join the future of sports
            </h2>
            <p className="mt-6 text-lg text-background/70 max-w-xl mx-auto text-pretty">
              Be part of the revolution that&apos;s transforming how India discovers and develops athletic talent.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@athlosys.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@athlosys.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl border border-background/20 text-background hover:bg-background/10 transition-colors w-full sm:w-auto"
              >
                Contact Sales
              </a>
            </div>

            <p className="mt-8 text-sm text-background/50">
              No credit card required. Get started in minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
