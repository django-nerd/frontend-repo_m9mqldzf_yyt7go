import TopBanner from './components/TopBanner'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Showcase from './components/Showcase'
import Features from './components/Features'
import Performance from './components/Performance'
import Inside from './components/Inside'
import Pricing from './components/Pricing'
import HowToJoin from './components/HowToJoin'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <TopBanner />
      <Hero />
      <HowItWorks />
      <Showcase />
      <Features />
      <Performance />
      <Inside />
      <Pricing />
      <HowToJoin />
      <Footer />
    </div>
  )
}

export default App
