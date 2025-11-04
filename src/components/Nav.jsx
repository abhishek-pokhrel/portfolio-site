import React, { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleClick = (e, id) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={(e)=>handleClick(e,'home')}>AP</a>
          <ul className="nav-menu">
            <li><a href="#projects" className="nav-link" onClick={(e)=>handleClick(e,'projects')}>Projects</a></li>
            <li><a href="#skills" className="nav-link" onClick={(e)=>handleClick(e,'skills')}>Skills</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e)=>handleClick(e,'contact')}>Contact</a></li>
          </ul>
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </nav>
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <a href="#home" className="mobile-menu-logo" onClick={(e)=>handleClick(e,'home')}>AP</a>
          <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <ul className="mobile-menu-list">
          <li><a href="#projects" className="mobile-menu-link" onClick={(e)=>handleClick(e,'projects')}>Projects</a></li>
          <li><a href="#skills" className="mobile-menu-link" onClick={(e)=>handleClick(e,'skills')}>Skills</a></li>
          <li><a href="#contact" className="mobile-menu-link" onClick={(e)=>handleClick(e,'contact')}>Contact</a></li>
        </ul>
      </div>
    </>
  )
}

