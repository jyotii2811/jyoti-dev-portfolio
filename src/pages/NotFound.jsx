import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '120px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 16 }}>Page not found</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 28 }}>
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Jyoti.dev
      </Link>
    </div>
  )
}
