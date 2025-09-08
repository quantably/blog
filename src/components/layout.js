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
    <div className="min-h-screen" style={{ backgroundColor: '#0F182B' }}>
      <div className="max-w-4xl mx-auto px-6 py-2">
      <header className="flex justify-between items-center mb-4 py-2">
        <div className="font-bold text-2xl md:text-3xl text-white">{header}</div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link className="text-gray-300 hover:text-white font-medium transition-colors" to="/blog">Blog</Link>
          <Link className="text-gray-300 hover:text-white font-medium transition-colors" to="/media">Media</Link>
          <a 
            href="https://cal.com/quantably/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
          >
            Book a Call
          </a>
        </nav>

        <button 
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </header>

      {/* Mobile menu */}
      <nav className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute left-4 right-4 bg-slate-800 border border-slate-600 rounded-lg shadow-lg p-4 z-50 transition-all duration-200`}>
        <div className="flex flex-col space-y-2">
          <Link className="text-gray-300 hover:text-white hover:bg-slate-700 font-medium py-3 px-4 rounded-lg transition-colors" to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <Link className="text-gray-300 hover:text-white hover:bg-slate-700 font-medium py-3 px-4 rounded-lg transition-colors" to="/media" onClick={() => setIsMobileMenuOpen(false)}>Media</Link>
          <a 
            href="https://cal.com/quantably/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-medium text-center mt-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Call
          </a>
        </div>
      </nav>

      </div>
      <main>{children}</main>
      <div className="max-w-4xl mx-auto px-6 py-8">
      <footer className="mt-16 pt-8 text-center text-gray-300 text-sm">
        <div className="mb-4">
          <a 
            href="https://linkedin.com/in/peterwooldridge" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
        © {new Date().getFullYear()} Peter Wooldridge
      </footer>
      </div>
    </div>
  )
}

export default Layout
