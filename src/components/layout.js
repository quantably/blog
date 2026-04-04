import React, { useState, useCallback } from "react"
import { Link, navigate } from "gatsby"

const Layout = ({ location, title, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const pathname = location.pathname
  const isHome = pathname === "/" || pathname === ""

  const isActive = (path) => {
    if (path === "/blog") return pathname.startsWith("/blog") || pathname.startsWith("/tags/")
    if (path === "/media") return pathname.startsWith("/media")
    return false
  }

  const handleAnchorClick = useCallback((e, hash) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (isHome) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.assign("/" + hash)
    }
  }, [isHome])

  return (
    <div>
      <nav className="site-nav">
        <Link to="/" className="nav-name">Quantably</Link>

        <div className="nav-right">
          <a href="#services" onClick={(e) => handleAnchorClick(e, '#services')}>Services</a>
          <a href="#case-studies" onClick={(e) => handleAnchorClick(e, '#case-studies')}>Case Studies</a>
          <a href="#about" onClick={(e) => handleAnchorClick(e, '#about')}>About</a>
          <Link to="/blog" className={isActive("/blog") ? "nav-active" : ""}>Blog</Link>
          <Link to="/media" className={isActive("/media") ? "nav-active" : ""}>Media</Link>
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
          <a href="#services" onClick={(e) => handleAnchorClick(e, '#services')}>Services</a>
          <a href="#case-studies" onClick={(e) => handleAnchorClick(e, '#case-studies')}>Case Studies</a>
          <a href="#about" onClick={(e) => handleAnchorClick(e, '#about')}>About</a>
          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <Link to="/media" onClick={() => setIsMobileMenuOpen(false)}>Media</Link>
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
