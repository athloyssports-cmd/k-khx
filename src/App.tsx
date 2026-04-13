import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Problems } from './components/Problems'
import { Solutions } from './components/Solutions'
import { Products } from './components/Products'
import { HowItWorks } from './components/HowItWorks'
import { Technology } from './components/Technology'
import { WhyAthlosys } from './components/WhyAthlosys'
import { Testimonial } from './components/Testimonial'
import { Vision } from './components/Vision'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Products />
        <HowItWorks />
        <Technology />
        <WhyAthlosys />
        <Testimonial />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
