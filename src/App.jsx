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
    <div style={{width: '100%'}}>
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
      <a target='blank' href='https://api.whatsapp.com/send?phone=558587988723&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20a%20respeito%20do%20Priv%C3%AA%20Residence%20Club'>
        <img src='img/whatsapp.svg' style={{
          position: 'fixed',
          width: 70,
          height: 'auto',
          bottom: 50,
          right: 30,
          cursor: 'pointer'
        }} />
      </a>
    </div>
  )
}

export default App
