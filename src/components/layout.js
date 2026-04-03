import React, { useState } from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const pathname = location.pathname

  const isActive = (path) => {
    if (path === "/blog") return pathname.startsWith("/blog") || pathname.startsWith("/tags/")
    if (path === "/media") return pathname.startsWith("/media")
    return false
  }

  return (
    <div>
      <nav className="site-nav">
        <Link to="/" className="nav-name">Quantably</Link>

        <div className="nav-right">
          <Link to="/blog" className={isActive("/blog") ? "nav-active" : ""}>Blog</Link>
          <Link to="/media" className={isActive("/media") ? "nav-active" : ""}>Media</Link>
          <a href="https://linkedin.com/in/peterwooldridge" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://cal.com/quantably/30min" target="_blank" rel="noopener noreferrer" className="nav-cta">Book a Call</a>
        </div>

        <button
          className="mobile-nav-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <Link to="/media" onClick={() => setIsMobileMenuOpen(false)}>Media</Link>
          <a href="https://linkedin.com/in/peterwooldridge" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>LinkedIn</a>
          <a href="https://cal.com/quantably/30min" target="_blank" rel="noopener noreferrer" className="nav-cta" onClick={() => setIsMobileMenuOpen(false)}>Book a Call</a>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="site-footer">
        <span>&copy; {new Date().getFullYear()} Peter Wooldridge</span>
        <span>Amsterdam, Netherlands</span>
      </footer>
    </div>
  )
}

export default Layout
