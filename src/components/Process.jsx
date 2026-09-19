import { useReveal } from '../hooks/useReveal.js'

const STEPS = [
  { number: '01', title: 'Understand', description: 'I learn about your business, services and goals.' },
  { number: '02', title: 'Design', description: 'I create a modern website structure and visual direction.' },
  { number: '03', title: 'Build', description: 'I develop and make the website responsive across devices.' },
  { number: '04', title: 'Launch', description: 'I deploy the website and connect the domain when required.' },
]

export default function Process() {
  const [ref, visible] = useReveal()

  return (
    <section id="process" className="section process">
      <div className="container">
        <div className={`section-head reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <h2>Simple process. Clear communication.</h2>
        </div>

        <ol className="process__list">
          {STEPS.map((step) => (
            <li key={step.number} className="process__step">
              <span className="process__number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="process__note">Domain ownership remains with the business owner.</p>
      </div>
    </section>
  )
}
