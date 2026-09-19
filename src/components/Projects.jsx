import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { useReveal } from '../hooks/useReveal.js'
import { IconArrowUpRight } from './icons.jsx'

export default function Projects() {
  const [ref, visible] = useReveal()

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className={`section-head reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <h2>Selected work</h2>
          <p className="section-lede">
            Concept builds made to show range across different kinds of local
            businesses — not real client work.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__image-wrap">
                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                <span className="project-card__tag">{project.category}</span>
              </div>

              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="project-card__features">
                  {project.features.slice(0, 4).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="project-card__actions">
                  <Link to={project.demoUrl} className="btn btn-ghost">
                    View demo
                    <IconArrowUpRight size={15} />
                  </Link>
                  <Link to={project.demoUrl} className="project-card__details">
                    Project details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
