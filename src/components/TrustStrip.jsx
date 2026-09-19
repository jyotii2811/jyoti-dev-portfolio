import { IconBolt, IconLayers, IconPhone, IconPin, IconCalendar, IconCheck } from './icons.jsx'

const ITEMS = [
  { icon: IconLayers, label: 'Mobile friendly' },
  { icon: IconBolt, label: 'Fast loading' },
  { icon: IconCheck, label: 'Modern UI' },
  { icon: IconPhone, label: 'WhatsApp integration' },
  { icon: IconPin, label: 'Google Maps integration' },
  { icon: IconCalendar, label: 'Easy contact & booking' },
]

export default function TrustStrip() {
  return (
    <section className="trust">
      <div className="container trust__inner">
        <p className="trust__label">Designed for modern businesses</p>
        <ul className="trust__list">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon size={17} className="trust__icon" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
