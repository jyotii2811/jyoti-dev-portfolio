import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className={`about__mark reveal ${visible ? 'is-visible' : ''}`} ref={ref} aria-hidden="true" />

        <div>
          <h2>Hi, I'm Jyoti.</h2>
          <p className="about__text">
            I'm a 3rd-year BTech Computer Science student passionate about
            building modern digital experiences. I create websites that help
            local businesses present their services, brand and information
            professionally online.
          </p>
          <span className="eyebrow-free-badge">
            <span className="status-dot" aria-hidden="true" />
            Currently available for freelance website projects
          </span>
        </div>
      </div>
    </section>
  )
}
