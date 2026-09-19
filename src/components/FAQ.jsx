import { useState } from 'react'
import { faqs } from '../data/faq.js'
import { IconChevronDown } from './icons.jsx'
import { useReveal } from '../hooks/useReveal.js'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, visible] = useReveal()

  return (
    <section className="section faq">
      <div className="container">
        <div className={`section-head reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <h2>Frequently asked questions</h2>
        </div>

        <ul className="faq__list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <li key={item.question} className="faq__item">
                <button
                  className="faq__question"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <IconChevronDown size={18} className={`faq__chevron ${isOpen ? 'faq__chevron--open' : ''}`} />
                </button>
                <div className={`faq__answer ${isOpen ? 'faq__answer--open' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
