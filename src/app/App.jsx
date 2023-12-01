import { useState, useEffect } from 'react'
import { LoadingIndicator } from '../components/LoadingIndicator.jsx'

import { Header } from '../components/Header'
import { FirstSection } from '../components/FirstSection'
import { SecondSection } from '../components/SecondSection'
import { ThirdSection } from '../components/ThirdSection'
import { Footer } from '../components/Footer'

export function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initialLoad = async () => {
      try {
        setIsLoading(true)

        await new Promise((resolve) => setTimeout(resolve, 2000))

        setIsLoading(false)
      } catch (erro) {
        console.error('Erro ao carregar:', erro)

        setIsLoading(false)
      }
    }

    initialLoad()
  }, [])

  return (
    <div className="bg-black">
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <Header />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <Footer />
        </>
      )}
    </div>
  )
}
