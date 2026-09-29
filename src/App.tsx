import Header from './components/Header'
import Hero from './components/Hero'
import Setup from './components/Setup'
import AppSection from './components/AppSection'
import Specs from './components/Specs'
import Calculator from './components/Calculator'
import AsiaMapSection from './components/AsiaMapSection'
import Countries from './components/Countries'
import Features from './components/Features'
import Support from './components/Support'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden max-w-full" style={{ background: '#000' }}>
      <Header />
      <Hero />
      <AsiaMapSection />
      <Countries />
      <Features />
      <Setup />
      <AppSection />
      <Specs />
      <Calculator />
      <Support />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
