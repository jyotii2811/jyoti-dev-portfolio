import DemoLayout from '../DemoLayout.jsx'
import { WHATSAPP_LINK } from '../../data/config.js'
import { IconPhone, IconPin, IconCalendar, IconCheck } from '../../components/icons.jsx'
import { useReveal } from '../../hooks/useReveal.js'

// REPLACE: swap any loremflickr.com URL below for your own photography.
const HERO_IMAGE = 'https://loremflickr.com/1600/1100/luxuryhotel,lobby/all'

const ROOMS = [
  { name: 'Deluxe Room', price: '₹4,500/night', image: 'https://loremflickr.com/500/380/hotelroom,deluxe/all', notes: 'City view, king bed, work desk' },
  { name: 'Executive Suite', price: '₹7,200/night', image: 'https://loremflickr.com/500/380/hotelsuite,luxury/all', notes: 'Separate living area, premium linens' },
  { name: 'Royal Suite', price: '₹11,500/night', image: 'https://loremflickr.com/500/380/hotelroom,balcony/all', notes: 'Private balcony, butler service on request' },
]

const AMENITIES = ['Free Wi-Fi', 'Rooftop pool', 'In-house restaurant', 'Airport pickup', '24/7 front desk', 'Fitness centre']

const GALLERY = [
  'https://loremflickr.com/500/500/hotellobby,luxury/all',
  'https://loremflickr.com/500/500/hotelroom,bed/all',
  'https://loremflickr.com/500/500/hotelpool,rooftop/all',
  'https://loremflickr.com/500/500/hotelrestaurant,dining/all',
  'https://loremflickr.com/500/500/hotel,exterior/all',
  'https://loremflickr.com/500/500/hotelbathroom,luxury/all',
]

function Logo({ onPhoto }) {
  return (
    <div className={`brand-logo brand-logo--hotel ${onPhoto ? 'brand-logo--on-photo' : ''}`}>
      <span className="brand-logo__main">Royal Stay</span>
      <span className="brand-logo__sub">Boutique Hotel</span>
    </div>
  )
}

export default function RoyalStay() {
  const whatsappText = encodeURIComponent('Hi! I would like to enquire about booking a room at Royal Stay.')
  const [roomsRef, roomsVisible] = useReveal()
  const [amenitiesRef, amenitiesVisible] = useReveal()
  const [galleryRef, galleryVisible] = useReveal()

  return (
    <DemoLayout themeClass="demo-theme--hotel" siteName="Royal Stay" tagline="a concept hotel website">
      {/* Hero */}
      <section className="demo-photo-hero demo-photo-hero--navy" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="container demo-photo-hero__inner">
          <div className="demo-photo-hero__logo">
            <Logo onPhoto />
          </div>
          <h1 className="demo-photo-hero__title">A quiet, well-kept stay in the heart of the city.</h1>
          <p className="demo-photo-hero__subtitle">
            Comfortable rooms, attentive service and a location close to everything worth seeing.
          </p>
          <div className="demo-photo-hero__actions">
            <a href="#rooms" className="btn btn-primary">
              View rooms
            </a>
            <a href={`${WHATSAPP_LINK}?text=${whatsappText}`} className="btn btn-ghost-on-photo" target="_blank" rel="noreferrer">
              <IconPhone size={16} />
              Booking enquiry
            </a>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="section">
        <div className="container">
          <div className={`demo-section-head reveal ${roomsVisible ? 'is-visible' : ''}`} ref={roomsRef}>
            <span className="demo-eyebrow">Stay</span>
            <h2>Rooms</h2>
          </div>
          <div className="demo-grid demo-grid--3">
            {ROOMS.map((room) => (
              <div key={room.name} className="demo-card">
                <img src={room.image} alt={room.name} loading="lazy" />
                <h3>{room.name}</h3>
                <p className="demo-price-row__price" style={{ display: 'block', margin: '6px 0 10px' }}>
                  {room.price}
                </p>
                <p>{room.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section section-alt">
        <div className="container">
          <div className={`demo-section-head reveal ${amenitiesVisible ? 'is-visible' : ''}`} ref={amenitiesRef}>
            <span className="demo-eyebrow">Amenities</span>
            <h2>Everything you need, on site</h2>
          </div>
          <div className="demo-grid demo-grid--3">
            {AMENITIES.map((item) => (
              <div key={item} className="demo-info-row demo-info-row--plain">
                <IconCheck size={17} />
                <span>{item}</span>
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
            <h2>Around the hotel</h2>
          </div>
          <div className="demo-gallery">
            {GALLERY.map((src) => (
              <img key={src} src={src} alt="Hotel interior and rooms" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* Hotel info & location */}
      <section className="section section-alt">
        <div className="container demo-grid demo-grid--2">
          <div>
            <span className="demo-eyebrow">Good to know</span>
            <h2 style={{ marginBottom: 8 }}>Hotel information</h2>
            <div className="demo-info-row">
              <IconCalendar size={17} />
              <span>Check-in 1:00 PM — Check-out 11:00 AM</span>
            </div>
          </div>
          <div>
            <span className="demo-eyebrow">Location</span>
            <h2 style={{ marginBottom: 8 }}>Find us</h2>
            <div className="demo-info-row">
              <IconPin size={17} />
              <span>Lakeview Road, near the old town square — placeholder address for this concept.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="demo-cta-band demo-cta-band--photo"
        style={{ backgroundImage: `url(${'https://loremflickr.com/1600/700/luxuryhotel,room/all'})` }}
      >
        <div className="container">
          <h2>Planning your stay?</h2>
          <p>Send a booking enquiry on WhatsApp with your dates and we'll check availability.</p>
          <div className="demo-cta-band__actions">
            <a href={`${WHATSAPP_LINK}?text=${whatsappText}`} className="btn btn-primary" target="_blank" rel="noreferrer">
              <IconPhone size={16} />
              Booking enquiry
            </a>
          </div>
        </div>
      </section>

      <footer className="demo-footer">
        <div className="container">Royal Stay — Demo Concept, built by Jyoti.dev</div>
      </footer>
    </DemoLayout>
  )
}
