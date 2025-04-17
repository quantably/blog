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
          <Link to="/blog" style={{ marginRight: '1rem' }}>Blog</Link>
          <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
          <Link to="/projects" style={{ marginRight: '1rem' }}>Projects</Link>
          <Link to="/media">Media</Link>
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
         <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
         <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
         <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
         <Link to="/media" onClick={() => setIsMobileMenuOpen(false)}>Media</Link>
      </nav>

      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Peter Wooldridge
      </footer>
    </div>
  )
}

export default Layout
