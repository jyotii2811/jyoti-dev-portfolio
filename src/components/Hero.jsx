export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow-free-badge">
            <span className="status-dot" aria-hidden="true" />
            Available for freelance projects
          </span>

          <h1 className="hero__title">
            Modern websites that help local businesses stand out.
          </h1>

          <p className="hero__subtitle">
            I design and develop fast, modern and mobile-friendly websites for
            salons, cafes, gyms, restaurants and growing local businesses.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let's work together
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <img
            src="/profile.jpeg"
            alt="Jyoti Singh"
            className="hero__profile"
            />
        </div>
      </div>
    </section>
  )
}

// An abstract, subject-grounded illustration: a browser window being
// assembled from content blocks, rather than a generic gradient orb.
function BrowserAssembly() {
  return (
    <svg viewBox="0 0 460 400" className="browser-assembly">
      <defs>
        <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d2027" />
          <stop offset="100%" stopColor="#16181d" />
        </linearGradient>
      </defs>

      {/* back panel, offset */}
      <rect x="60" y="46" width="330" height="230" rx="14" fill="url(#panelGrad)" stroke="#2a2d33" />

      {/* floating content chips being assembled into the panel */}
      <g className="chip chip--1">
        <rect x="10" y="10" width="120" height="34" rx="8" fill="#1b1e24" stroke="#2a2d33" />
        <rect x="22" y="21" width="60" height="6" rx="3" fill="#c9a15a" />
        <rect x="22" y="31" width="90" height="5" rx="2.5" fill="#3a3d42" />
      </g>

      <g className="chip chip--2">
        <rect x="330" y="300" width="110" height="70" rx="10" fill="#1b1e24" stroke="#2a2d33" />
        <circle cx="360" cy="325" r="10" fill="#c9a15a" opacity="0.85" />
        <rect x="380" y="320" width="46" height="6" rx="3" fill="#f5f3ee" opacity="0.85" />
        <rect x="345" y="345" width="80" height="5" rx="2.5" fill="#3a3d42" />
      </g>

      {/* main window */}
      <g>
        <rect x="45" y="60" width="330" height="230" rx="14" fill="#0e0f12" stroke="#2a2d33" strokeWidth="1.4" />
        <rect x="45" y="60" width="330" height="34" rx="14" fill="#16181d" stroke="#2a2d33" />
        <circle cx="66" cy="77" r="4.5" fill="#3a3d42" />
        <circle cx="82" cy="77" r="4.5" fill="#3a3d42" />
        <circle cx="98" cy="77" r="4.5" fill="#3a3d42" />

        <rect x="66" y="112" width="180" height="16" rx="4" fill="#f5f3ee" opacity="0.92" />
        <rect x="66" y="138" width="230" height="8" rx="4" fill="#6c6d69" />
        <rect x="66" y="154" width="200" height="8" rx="4" fill="#6c6d69" />

        <rect x="66" y="182" width="120" height="38" rx="8" fill="#c9a15a" />
        <rect x="198" y="182" width="110" height="38" rx="8" fill="none" stroke="#2a2d33" />

        <rect x="66" y="244" width="86" height="60" rx="8" fill="#1b1e24" stroke="#2a2d33" />
        <rect x="160" y="244" width="86" height="60" rx="8" fill="#1b1e24" stroke="#2a2d33" />
        <rect x="254" y="244" width="86" height="60" rx="8" fill="#1b1e24" stroke="#2a2d33" />
      </g>
    </svg>
  )
}
