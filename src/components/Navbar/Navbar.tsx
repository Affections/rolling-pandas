'use client'

import './Navbar.css'
import { useState } from 'react'

interface NavItem {
  text: string
  link?: string
  openInNewTab?: boolean
}

interface NavbarProps {
  items: NavItem[]
}

export default function Navbar({ items }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      {/* Desktop Navigation */}
      <div className="navbar__desktop">
        {items.map((item, index) => (
          <div key={index} className="navbar__item">
            {item.link ? (
              <a 
                href={item.link} 
                className="navbar__link"
                target={item.openInNewTab ? '_blank' : '_self'}
                rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
              >
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="navbar__menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${isMenuOpen ? 'navbar__mobile--open' : ''}`}>
        {items.map((item, index) => (
          <div key={index} className="navbar__item navbar__item--mobile">
            {item.link ? (
              <a 
                href={item.link} 
                className="navbar__link"
                target={item.openInNewTab ? '_blank' : '_self'}
                rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}
