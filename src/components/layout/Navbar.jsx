import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'
import { navigationItems } from '../../data/navigation'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const handleNavigation = () => setIsMenuOpen(false)

  useEffect(() => {
    const sectionIds = navigationItems.map(({ href }) => href.slice(1))
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visibleSection) setActiveSection(visibleSection.target.id)
    }, { rootMargin: '-25% 0px -65% 0px', threshold: [0, .2, .5, 1] })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg" aria-label="Primary navigation">
        <div className="container site-header__container">
          <a className="navbar-brand site-header__brand" href="#home" onClick={handleNavigation}>{profile.name}</a>
          <button className="navbar-toggler site-header__toggle" type="button" aria-controls="primary-navigation" aria-expanded={isMenuOpen} aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setIsMenuOpen((isOpen) => !isOpen)}>
            <span className="site-header__toggle-line" aria-hidden="true" />
            <span className="site-header__toggle-line" aria-hidden="true" />
            <span className="site-header__toggle-line" aria-hidden="true" />
          </button>
          <div className={`collapse navbar-collapse site-header__menu${isMenuOpen ? ' show' : ''}`} id="primary-navigation">
            <ul className="navbar-nav site-header__links">
              {navigationItems.map(({ label, href }) => (
                <li className="nav-item" key={href}>
                  <a className={`nav-link site-header__link${activeSection === href.slice(1) ? ' site-header__link--active' : ''}`} href={href} onClick={handleNavigation} aria-current={activeSection === href.slice(1) ? 'location' : undefined}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        {navigationItems.map(({ label, mobileLabel, href }) => (
          <a className={`mobile-bottom-nav__link${activeSection === href.slice(1) ? ' mobile-bottom-nav__link--active' : ''}`} href={href} key={href} onClick={handleNavigation} aria-label={label} aria-current={activeSection === href.slice(1) ? 'location' : undefined}>
            <span className="mobile-bottom-nav__dot" aria-hidden="true" />
            <span>{mobileLabel}</span>
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
