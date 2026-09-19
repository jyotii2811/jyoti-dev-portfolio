import DemoLayout from '../DemoLayout.jsx'
import { WHATSAPP_LINK } from '../../data/config.js'
import { IconPhone, IconPin, IconBolt, IconCheck } from '../../components/icons.jsx'
import { useReveal } from '../../hooks/useReveal.js'

// REPLACE: swap any loremflickr.com URL below for your own photography.
const HERO_IMAGE = 'https://loremflickr.com/1600/1100/gym,weightlifting/all'

const PLANS = [
  { name: 'Basic', price: '₹1,499/mo', features: ['Gym floor access', 'Locker room', 'Free fitness assessment'] },
  { name: 'Pro', price: '₹2,499/mo', features: ['Everything in Basic', 'Group classes', '2 trainer sessions/month'], highlight: true },
  { name: 'Elite', price: '₹3,999/mo', features: ['Everything in Pro', 'Unlimited trainer sessions', 'Nutrition guidance'] },
]

const PROGRAMS = [
  { name: 'Strength Training', image: 'https://loremflickr.com/500/400/deadlift,gym/all' },
  { name: 'HIIT & Conditioning', image: 'https://loremflickr.com/500/400/hiit,fitness/all' },
  { name: 'Functional Fitness', image: 'https://loremflickr.com/500/400/crossfit,training/all' },
  { name: 'Mobility & Recovery', image: 'https://loremflickr.com/500/400/stretching,fitness/all' },
]

const TRAINERS = [
  { name: 'Coach Arjun', focus: 'Strength & powerlifting', initials: 'CA' },
  { name: 'Coach Meera', focus: 'HIIT & conditioning', initials: 'CM' },
  { name: 'Coach Dev', focus: 'Mobility & recovery', initials: 'CD' },
]

const WHY = ['Certified trainers', 'Modern equipment', 'Flexible class timings', 'Clean, well-maintained space']

function Logo({ onPhoto }) {
  return (
    <div className={`brand-logo brand-logo--gym ${onPhoto ? 'brand-logo--on-photo' : ''}`}>
      <span className="brand-logo__main">Iron</span>
      <span className="brand-logo__sub">District</span>
    </div>
  )
}

export default function IronDistrict() {
  const whatsappText = encodeURIComponent('Hi! I would like to know more about membership at Iron District.')
  const [plansRef, plansVisible] = useReveal()
  const [programsRef, programsVisible] = useReveal()
  const [trainersRef, trainersVisible] = useReveal()

  return (
    <DemoLayout themeClass="demo-theme--gym" siteName="Iron District" tagline="a concept gym website">
      {/* Hero */}
      <section className="demo-photo-hero demo-photo-hero--gym" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="container demo-photo-hero__inner">
          <div className="demo-photo-hero__logo">
            <Logo onPhoto />
          </div>
          <h1 className="demo-photo-hero__title">Train harder. Recover smarter.</h1>
          <p className="demo-photo-hero__subtitle">
            A strength and conditioning gym with certified coaches, modern equipment and programs for every level.
          </p>
          <div className="demo-photo-hero__actions">
            <a href={`${WHATSAPP_LINK}?text=${whatsappText}`} className="btn btn-primary" target="_blank" rel="noreferrer">
              <IconBolt size={16} />
              Enquire now
            </a>
            <a href="#plans" className="btn btn-ghost-on-photo">
              See membership plans
            </a>
          </div>
        </div>
      </section>

      {/* Membership plans */}
      <section id="plans" className="section">
        <div className="container">
          <div className={`demo-section-head reveal ${plansVisible ? 'is-visible' : ''}`} ref={plansRef}>
            <span className="demo-eyebrow">Membership</span>
            <h2>Plans built around how often you train</h2>
          </div>
          <div className="demo-grid demo-grid--3">
            {PLANS.map((plan) => (
              <div key={plan.name} className={`demo-card ${plan.highlight ? 'demo-card--highlight' : ''}`}>
                <h3>{plan.name}</h3>
                <p className="demo-price-row__price" style={{ display: 'block', marginBottom: 14 }}>
                  {plan.price}
                </p>
                <ul className="demo-menu-list">
                  {plan.features.map((f) => (
                    <li key={f} className="demo-menu-list__feature">
                      <IconCheck size={14} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section section-alt">
        <div className="container">
          <div className={`demo-section-head reveal ${programsVisible ? 'is-visible' : ''}`} ref={programsRef}>
            <span className="demo-eyebrow">Programs</span>
            <h2>Training programs</h2>
          </div>
          <div className="demo-grid demo-grid--4">
            {PROGRAMS.map((program) => (
              <div key={program.name} className="demo-card">
                <img src={program.image} alt={program.name} loading="lazy" />
                <h3>{program.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="section">
        <div className="container">
          <div className={`demo-section-head reveal ${trainersVisible ? 'is-visible' : ''}`} ref={trainersRef}>
            <span className="demo-eyebrow">Coaches</span>
            <h2>Trainers</h2>
          </div>
          <div className="demo-grid demo-grid--3">
            {TRAINERS.map((trainer) => (
              <div key={trainer.name} className="demo-card">
                <div className="demo-avatar">
                  <span>{trainer.initials}</span>
                </div>
                <h3>{trainer.name}</h3>
                <p>{trainer.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose this gym */}
      <section className="section section-alt">
        <div className="container">
          <div className="demo-section-head">
            <span className="demo-eyebrow">Why us</span>
            <h2>Why train here</h2>
          </div>
          <div className="demo-grid demo-grid--2">
            {WHY.map((point) => (
              <div key={point} className="demo-info-row demo-info-row--plain">
                <IconCheck size={17} />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section">
        <div className="container">
          <div className="demo-section-head">
            <span className="demo-eyebrow">Location</span>
            <h2>Find us</h2>
          </div>
          <div className="demo-info-row">
            <IconPin size={17} />
            <span>Industrial Area Phase 2 — placeholder address for this concept.</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="demo-cta-band demo-cta-band--photo"
        style={{ backgroundImage: `url(${'https://loremflickr.com/1600/700/gym,fitness/all'})` }}
      >
        <div className="container">
          <h2>Ready to start?</h2>
          <p>Send an enquiry and a coach will get back to you about plans and timings.</p>
          <div className="demo-cta-band__actions">
            <a href={`${WHATSAPP_LINK}?text=${whatsappText}`} className="btn btn-primary" target="_blank" rel="noreferrer">
              <IconPhone size={16} />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="demo-footer">
        <div className="container">Iron District — Demo Concept, built by Jyoti.dev</div>
      </footer>
    </DemoLayout>
  )
}
