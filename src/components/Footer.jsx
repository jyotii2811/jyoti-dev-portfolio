const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <a href="#home" className="footer__logo">
            Jyoti<span className="navbar__logo-dot">.dev</span>
          </a>
          <p className="footer__tag">Modern websites for modern businesses.</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container">
        <p className="footer__copyright">© 2026 Jyoti.dev. All rights reserved.</p>
      </div>
    </footer>
  )
}
