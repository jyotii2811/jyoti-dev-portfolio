import { IconCheck } from './icons.jsx'
import { useReveal } from '../hooks/useReveal.js'

const POINTS = [
  'Modern design',
  'Mobile-first development',
  'Direct communication',
  'Custom websites',
  'Fast and responsive interfaces',
  'Deployment assistance',
  'Affordable solutions for growing businesses',
]

export default function WhyWorkWithMe() {
  const [ref, visible] = useReveal()

  return (
    <section className="section why">
      <div className="container why__inner">
        <div className={`reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <h2>Why work with me</h2>
          <p className="section-lede">
            No agency overhead — you work directly with the person building your site.
          </p>
        </div>

        <ul className="why__list">
          {POINTS.map((point) => (
            <li key={point}>
              <IconCheck size={16} className="why__icon" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
