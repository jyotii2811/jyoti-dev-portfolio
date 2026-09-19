import { useState } from 'react'
import { CONTACT_EMAIL, WHATSAPP_LINK } from '../data/config.js'
import { IconMail, IconPhone } from './icons.jsx'
import { useReveal } from '../hooks/useReveal.js'

const EMPTY_FORM = { name: '', email: '', business: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [ref, visible] = useReveal()

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  // No backend is wired up yet, so the form opens the visitor's email client
  // with the enquiry pre-filled. Swap this for a service like Formspree or
  // EmailJS later if you want enquiries to land directly in an inbox.
  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Website enquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\n\n${form.message}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className={`reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <h2>Have a business website idea?</h2>
          <p className="section-lede">Let's build something professional for your business.</p>

          <div className="contact__info">
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact__info-row">
              <IconMail size={17} />
              <span>{CONTACT_EMAIL}</span>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-primary contact__whatsapp">
              <IconPhone size={16} />
              WhatsApp me
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input id="name" required value={form.name} onChange={handleChange('name')} />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required value={form.email} onChange={handleChange('email')} />
          </div>

          <div className="contact__field">
            <label htmlFor="business">Business name</label>
            <input id="business" value={form.business} onChange={handleChange('business')} />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={4} required value={form.message} onChange={handleChange('message')} />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Send enquiry
          </button>
        </form>
      </div>
    </section>
  )
}
