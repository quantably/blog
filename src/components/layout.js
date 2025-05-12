import React, { useState } from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const header = (
    <Link className="header-link-home" to="/">
      {title}
    </Link>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>{header}</div>
        
        <nav className="desktop-nav">
          <Link className="teal-link" to="/blog" style={{ marginRight: '1rem' }}>Blog</Link>
          <Link className="teal-link" to="/projects" style={{ marginRight: '1rem' }}>Projects</Link>
          <Link className="teal-link" to="/media" style={{ marginRight: '1rem' }}>Media</Link>
          <Link className="teal-link" to="/about" >About</Link>
        </nav>

        <button 
          className="mobile-nav-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          style={{
            background: 'none',
            border: 'none',
            padding: '0.5rem',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <div style={{ width: '20px', height: '2px', backgroundColor: 'var(--color-text)', marginBottom: '4px' }}></div>
          <div style={{ width: '20px', height: '2px', backgroundColor: 'var(--color-text)', marginBottom: '4px' }}></div>
          <div style={{ width: '20px', height: '2px', backgroundColor: 'var(--color-text)' }}></div>
        </button>

      </header>

      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
         <Link className="teal-link" to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
         <Link className="teal-link" to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
         <Link className="teal-link" to="/media" onClick={() => setIsMobileMenuOpen(false)}>Media</Link>
         <Link className="teal-link" to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
      </nav>

      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Peter Wooldridge
      </footer>
    </div>
  )
}

export default Layout
