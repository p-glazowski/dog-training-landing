import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { About } from './components/sections/About'
import { FaqContact } from './components/sections/FaqContact'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Testimonials } from './components/sections/Testimonials'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <FaqContact />
      </main>
      <Footer />
    </>
  )
}
