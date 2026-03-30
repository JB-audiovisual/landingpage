import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import PortfolioFeed from '@/components/PortfolioFeed'
import Clients from '@/components/Clients'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <PortfolioFeed />
      <Clients />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
