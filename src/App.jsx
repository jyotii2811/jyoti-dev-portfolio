import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import LuxurySalon from './pages/demos/LuxurySalon.jsx'
import VelvetBrew from './pages/demos/VelvetBrew.jsx'
import IronDistrict from './pages/demos/IronDistrict.jsx'
import RoyalStay from './pages/demos/RoyalStay.jsx'

import './components/Navbar.css'
import './components/Hero.css'
import './components/TrustStrip.css'
import './components/Services.css'
import './components/Projects.css'
import './components/Process.css'
import './components/WhyWorkWithMe.css'
import './components/About.css'
import './components/Pricing.css'
import './components/FAQ.css'
import './components/Contact.css'
import './components/Footer.css'
import './pages/DemoLayout.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demos/luxury-salon" element={<LuxurySalon />} />
      <Route path="/demos/velvet-brew" element={<VelvetBrew />} />
      <Route path="/demos/iron-district" element={<IronDistrict />} />
      <Route path="/demos/royal-stay" element={<RoyalStay />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
