import DemoLayout from '../DemoLayout.jsx'
import { WHATSAPP_LINK } from '../../data/config.js'
import { IconPhone, IconPin, IconCalendar } from '../../components/icons.jsx'
import { useReveal } from '../../hooks/useReveal.js'

// REPLACE: swap any loremflickr.com URL below for your own photography.
const HERO_IMAGE = 'https://loremflickr.com/1600/1100/coffeeshop,cafe/all'

const FEATURED = [
  { name: 'Velvet Cold Brew', price: '₹220', note: 'Slow-steeped, served over ice', image: 'https://loremflickr.com/500/400/coldbrew,coffee/all' },
  { name: 'Burnt Basque Cheesecake', price: '₹280', note: 'Baked fresh every morning', image: 'https://loremflickr.com/500/400/cheesecake,dessert/all' },
  { name: 'Pistachio Croissant', price: '₹190', note: 'House-made, flaky, not overly sweet', image: 'https://loremflickr.com/500/400/croissant,bakery/all' },
]

const MENU = {
  Coffee: ['Espresso — ₹140', 'Flat White — ₹190', 'Velvet Cold Brew — ₹220', 'Pour Over — ₹210'],
  'All-Day Brunch': ['Shakshuka — ₹340', 'Avocado Toast — ₹290', 'Mushroom Croissant — ₹310'],
  'Something Sweet': ['Burnt Basque Cheesecake — ₹280', 'Pistachio Croissant — ₹190', 'Affogato — ₹210'],
}

const GALLERY = [
  'https://loremflickr.com/500/500/cafe,interior/all',
  'https://loremflickr.com/500/500/latteart,coffee/all',
  'https://loremflickr.com/500/500/bakery,pastry/all',
  'https://loremflickr.com/500/500/coffeeshop,counter/all',
  'https://loremflickr.com/500/500/espresso,machine/all',
  'https://loremflickr.com/500/500/brunch,food/all',
]

function Logo({ onPhoto }) {
  return (
    <div className={`brand-logo brand-logo--cafe ${onPhoto ? 'brand-logo--on-photo' : ''}`}>
      <span className="brand-logo__main">Velvet</span>
      <span className="brand-logo__sub">Brew &amp; Kitchen</span>
    </div>
  )
}

export default function VelvetBrew() {
  const whatsappText = encodeURIComponent('Hi! I would like to ask about a table at Velvet Brew.')
  const [featuredRef, featuredVisible] = useReveal()
  const [menuRef, menuVisible] = useReveal()
  const [galleryRef, galleryVisible] = useReveal()

  return (
    <DemoLayout themeClass="demo-theme--cafe" siteName="Velvet Brew" tagline="a concept cafe website">
      {/* Hero */}
      <section className="demo-photo-hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="container demo-photo-hero__inner">
          <div className="demo-photo-hero__logo">
            <Logo onPhoto />
          </div>
          <h1 className="demo-photo-hero__title">Slow coffee, made for lingering.</h1>
          <p className="demo-photo-hero__subtitle">
            A neighbourhood cafe serving specialty coffee and an all-day brunch menu in a warm, unhurried space.
          </p>
          <div className="demo-photo-hero__actions">
            <a href="#menu" className="btn btn-primary">
              View menu
            </a>
            <a href={`${WHATSAPP_LINK}?text=${whatsappText}`} className="btn btn-ghost-on-photo" target="_blank" rel="noreferrer">
              <IconPhone size={16} />
              Contact us
            </a>
          </div>
        </div>
      </section>

      {/* Featured items */}
      <section className="section">
        <div className="container">
          <div className={`demo-section-head reveal ${featuredVisible ? 'is-visible' : ''}`} ref={featuredRef}>
            <span className="demo-eyebrow">This week</span>
            <h2>Featured on the counter</h2>
          </div>
          <div className="demo-grid demo-grid--3">
            {FEATURED.map((item) => (
              <div key={item.name} className="demo-card">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="demo-price-row">
                  <h3>{item.name}</h3>
                  <span className="demo-price-row__price">{item.price}</span>
                </div>
                <p>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full menu */}
      <section id="menu" className="section section-alt">
        <div className="container">
          <div className={`demo-section-head reveal ${menuVisible ? 'is-visible' : ''}`} ref={menuRef}>
            <span className="demo-eyebrow">Menu</span>
            <h2>What's on the menu</h2>
            <p>A sample of what's on offer — the full menu changes seasonally.</p>
          </div>
          <div className="demo-grid demo-grid--3">
            {Object.entries(MENU).map(([category, items]) => (
              <div key={category} className="demo-card">
                <h3>{category}</h3>
                <ul className="demo-menu-list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
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
            <h2>Inside Velvet Brew</h2>
          </div>
          <div className="demo-gallery">
            {GALLERY.map((src) => (
              <img key={src} src={src} alt="Cafe interior and food" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* Hours & location */}
      <section className="section section-alt">
        <div className="container demo-grid demo-grid--2">
          <div>
            <span className="demo-eyebrow">Hours</span>
            <h2 style={{ marginBottom: 8 }}>Opening hours</h2>
            <div className="demo-info-row">
              <IconCalendar size={17} />
              <span>Every day — 8:00 AM to 10:00 PM</span>
            </div>
          </div>
          <div>
            <span className="demo-eyebrow">Location</span>
            <h2 style={{ marginBottom: 8 }}>Find us</h2>
            <div className="demo-info-row">
              <IconPin size={17} />
              <span>Church Street, near the corner bookstore — placeholder address for this concept.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="demo-cta-band demo-cta-band--photo"
        style={{ backgroundImage: `url(${'https://loremflickr.com/1600/700/cafe,coffee/all'})` }}
      >
        <div className="container">
          <h2>Planning a visit?</h2>
          <p>Message us on WhatsApp for table availability or large group bookings.</p>
          <div className="demo-cta-band__actions">
            <a href={`${WHATSAPP_LINK}?text=${whatsappText}`} className="btn btn-primary" target="_blank" rel="noreferrer">
              <IconPhone size={16} />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <footer className="demo-footer">
        <div className="container">Velvet Brew — Demo Concept, built by Jyoti.dev</div>
      </footer>
    </DemoLayout>
  )
}
