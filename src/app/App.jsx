import { Header } from '../components/Header'
import { FirstSection } from '../components/FirstSection'
import { SecondeSection } from '../components/SecondeSection'
import { ThirdSection } from '../components/ThirdSection'
import { Footer } from '../components/Footer'

export function App() {
  return (
    <div className="bg-black">
      <Header />
      <FirstSection />
      <SecondeSection />
      <ThirdSection />
      <Footer />
    </div>
  )
}
