import DemoLayout from '../DemoLayout.jsx'
import { WHATSAPP_LINK } from '../../data/config.js'
import { IconPhone, IconPin, IconCalendar, IconCheck } from '../../components/icons.jsx'
import { useReveal } from '../../hooks/useReveal.js'

// REPLACE: swap any loremflickr.com URL below for your own photography once
// you have real shots of the space. The tag-based URLs return real, themed
// stock photos so the layout previews correctly in the meantime.
const HERO_IMAGE = 'https://loremflickr.com/1600/1100/hairsalon,beauty/all'

const SERVICES = [
  { name: 'Signature Cut & Style', price: '₹899' },
  { name: 'Balayage & Colour', price: '₹3,499' },
  { name: 'Keratin Smoothening', price: '₹4,999' },
  { name: 'Bridal Makeup & Hair', price: '₹7,999' },
  { name: 'Classic Manicure & Pedicure', price: '₹1,299' },
  { name: 'Facial & Skin Glow Therapy', price: '₹1,899' },
]

const PACKAGES = [
  {
    name: 'The Essentials',
    description: 'A focused refresh — cut, blow-dry and a express manicure.',
    price: 'From ₹1,999',
  },
  {
    name: 'The Signature',
    description: 'Colour, cut and a facial — our most-booked combination.',
    price: 'From ₹5,499',
    highlight: true,
  },
  {
    name: 'The Bridal Edit',
    description: 'Trial session plus full bridal hair and makeup on the day.',
    price: 'From ₹12,999',
  },
]

const GALLERY = [
  'https://loremflickr.com/500/500/hairstyling,salon/all',
  'https://loremflickr.com/500/500/haircut,style/all',
  'https://loremflickr.com/500/500/manicure,nails/all',
  'https://loremflickr.com/500/500/spa,facial/all',
  'https://loremflickr.com/500/500/salon,chair/all',
  'https://loremflickr.com/500/500/makeup,beauty/all',
]

const HOURS = [
  ['Monday – Friday', '10:00 AM – 8:00 PM'],
  ['Saturday', '9:00 AM – 9:00 PM'],
  ['Sunday', '10:00 AM – 6:00 PM'],
]

function Logo({ onPhoto }) {
  return (
    <div className={`brand-logo brand-logo--salon ${onPhoto ? 'brand-logo--on-photo' : ''}`}>
      <span className="brand-logo__main">Luxury</span>
      <span className="brand-logo__sub">Salon &amp; Beauty</span>
    </div>
  )
}

export default function LuxurySalon() {
  const whatsappText = encodeURIComponent('Hi! I would like to book an appointment at Luxury Salon.')
  const [servicesRef, servicesVisible] = useReveal()
  const [packagesRef, packagesVisible] = useReveal()
  const [galleryRef, galleryVisible] = useReveal()

  return (
    <DemoLayout themeClass="demo-theme--salon" siteName="Luxury Salon" tagline="a concept salon website">
      {/* Hero */}
      <section className="demo-photo-hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="container demo-photo-hero__inner">
          <div className="demo-photo-hero__logo">
            <Logo onPhoto />
          </div>
          <h1 className="demo-photo-hero__title">Where every visit feels like an occasion.</h1>
          <p className="demo-photo-hero__subtitle">
            Hair, skin and nail care in a calm, considered space — book an appointment in seconds over WhatsApp.
          </p>
          <div className="demo-photo-hero__actions">
            <a href={`${WHATSAPP_LINK}?text=${whatsappText}`} className="btn btn-primary" target="_blank" rel="noreferrer">
              <IconPhone size={16} />
              Book appointment
            </a>
            <a href="#services" className="btn btn-ghost-on-photo">
              View services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <div className={`demo-section-head reveal ${servicesVisible ? 'is-visible' : ''}`} ref={servicesRef}>
            <span className="demo-eyebrow">Services</span>
            <h2>Care, done properly</h2>
            <p>A sample of what's on offer — final pricing depends on hair length and condition.</p>
          </div>
          <div className="demo-grid demo-grid--2">
            {SERVICES.map((service) => (
              <div key={service.name} className="demo-card demo-price-row">
                <h3>{service.name}</h3>
                <span className="demo-price-row__price">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing packages */}
      <section className="section section-alt">
        <div className="container">
          <div className={`demo-section-head reveal ${packagesVisible ? 'is-visible' : ''}`} ref={packagesRef}>
            <span className="demo-eyebrow">Packages</span>
            <h2>Curated packages</h2>
          </div>
          <div className="demo-grid demo-grid--3">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className={`demo-card ${pkg.highlight ? 'demo-card--highlight' : ''}`}>
                <h3>{pkg.name}</h3>
                <p style={{ marginBottom: 16 }}>{pkg.description}</p>
                <span className="demo-price-row__price">{pkg.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          <div className={`demo-section-head reveal ${galleryVisible ? 'is-visible' : ''}`} ref={galleryRef}>
            <span className="demo-eyebrow">Gallery</span>
            <h2>Inside the salon</h2>
          </div>
          <div className="demo-gallery">
            {GALLERY.map((src) => (
              <img key={src} src={src} alt="Salon interior and styling" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* About, split layout */}
      <section className="section section-alt">
        <div className="container demo-split">
          <img src="https://loremflickr.com/700/560/salon,interior/all" alt="Luxury Salon interior" loading="lazy" />
          <div>
            <span className="demo-eyebrow">About</span>
            <h2>About Luxury Salon</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: 14, maxWidth: '48ch' }}>
              A concept built around a calm, premium experience — trained stylists, quality products and a
              relaxed space designed for unhurried appointments.
            </p>
          </div>
        </div>
      </section>

      {/* Hours & location */}
      <section className="section">
        <div className="container demo-grid demo-grid--2">
          <div>
            <span className="demo-eyebrow">Hours</span>
            <h2 style={{ marginBottom: 8 }}>Opening hours</h2>
            {HOURS.map(([day, time]) => (
              <div key={day} className="demo-info-row">
                <IconCalendar size={17} />
                <span>
                  {day} — {time}
                </span>
              </div>
            ))}
          </div>
          <div>
            <span className="demo-eyebrow">Location</span>
            <h2 style={{ marginBottom: 8 }}>Find us</h2>
            <div className="demo-info-row">
              <IconPin size={17} />
              <span>MG Road, near City Centre Mall — placeholder address for this concept.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="demo-cta-band demo-cta-band--photo"
        style={{ backgroundImage: `url(${'https://loremflickr.com/1600/700/salon,beauty/all'})` }}
      >
        <div className="container">
          <h2>Ready for your next appointment?</h2>
          <p>Message us on WhatsApp and we'll find a slot that works for you.</p>
          <div className="demo-cta-band__actions">
            <a href={`${WHATSAPP_LINK}?text=${whatsappText}`} className="btn btn-primary" target="_blank" rel="noreferrer">
              <IconCheck size={16} />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <footer className="demo-footer">
        <div className="container">Luxury Salon — Demo Concept, built by Jyoti.dev</div>
      </footer>
    </DemoLayout>
  )
}
