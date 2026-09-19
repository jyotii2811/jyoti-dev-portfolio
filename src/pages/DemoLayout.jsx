import { Link } from 'react-router-dom'

// Wraps every demo site with a consistent, honest "this is a concept" header
// and an easy way back to the real portfolio. Individual demos control their
// own accent color by wrapping their content in a `demo-theme--*` class
// (see each demo's .css file) — everything else (buttons, sections, type
// scale) is inherited from the main site's design tokens.
export default function DemoLayout({ themeClass, siteName, tagline, children }) {
  return (
    <div className={`demo-theme ${themeClass}`}>
      <div className="demo-topbar">
        <div className="container demo-topbar__inner">
          <Link to="/" className="demo-topbar__back">
            ← Back to Jyoti.dev
          </Link>
          <span className="demo-topbar__badge">Demo Concept</span>
        </div>
      </div>

      <div className="demo-context">
        <div className="container">
          <p>
            <strong>{siteName}</strong> is a fictional business built to demonstrate design and
            development work — {tagline}. It is not a real business.
          </p>
        </div>
      </div>

      {children}
    </div>
  )
}
