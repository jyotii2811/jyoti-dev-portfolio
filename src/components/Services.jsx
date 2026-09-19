import { services } from '../data/services.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Services() {
  const [ref, visible] = useReveal()

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className={`section-head reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <h2>What I can build for your business</h2>
          <p className="section-lede">
            A focused set of website types, each shaped around how that kind of
            business actually gets contacted and visited.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <p className="services__note">
          Admin dashboards and CMS functionality can be added when a project needs them.
        </p>
      </div>
    </section>
  )
}
