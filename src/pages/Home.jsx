import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import TrustStrip from '../components/TrustStrip.jsx'
import Services from '../components/Services.jsx'
import Projects from '../components/Projects.jsx'
import Process from '../components/Process.jsx'
import WhyWorkWithMe from '../components/WhyWorkWithMe.jsx'
import About from '../components/About.jsx'
import Pricing from '../components/Pricing.jsx'
import FAQ from '../components/FAQ.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Projects />
        <Process />
        <WhyWorkWithMe />
        <About />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
