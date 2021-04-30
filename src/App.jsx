import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Footer } from './components/footer'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import { Contact } from './components/contact'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
    console.log(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services title='Hotéis Próprios' subTitle='Esses são nossos hotéis próprios onde nossos associados tem o acesso com total comodidade' data={landingPageData.Services} />
      <Services title='Possíveis destinos' subTitle='Além de acesso a nossa rede de hoteis próprios e parceiros, você tem acesso a uma agência de viagens totalmente exclusiva para visitar os mais diversos destinos com os melhores valores e acessibilidade' data={landingPageData.ServicesC} />
      <Gallery />
      <Contact />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Footer />
    </div>
  )
}

export default App
