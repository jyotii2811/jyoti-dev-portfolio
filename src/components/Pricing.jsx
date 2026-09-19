import { pricingTiers } from '../data/pricing.js'
import { IconCheck } from './icons.jsx'
import { useReveal } from '../hooks/useReveal.js'

export default function Pricing() {
  const [ref, visible] = useReveal()

  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className={`section-head reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <h2>Website solutions</h2>
          <p className="section-lede">
            Starting from ₹4,999. Final pricing depends on features and requirements.
          </p>
        </div>

        <div className="pricing__grid">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className={`pricing-card ${tier.highlight ? 'pricing-card--highlight' : ''}`}>
              <h3>{tier.name}</h3>
              <p className="pricing-card__desc">{tier.description}</p>

              <ul className="pricing-card__features">
                {tier.features.map((feature) => (
                  <li key={feature}>
                    <IconCheck size={15} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`btn btn-block ${tier.highlight ? 'btn-primary' : 'btn-ghost'}`}>
                Enquire about {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
