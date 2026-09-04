import { navigationItems, siteIdentity } from '../../data/navigation'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__container">
        <a className="site-footer__name" href="#home">{siteIdentity.name}</a>
        <p className="site-footer__note">{siteIdentity.footerNote}</p>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          {navigationItems.slice(0, 4).map(({ label, href }) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <p className="site-footer__copyright">© {currentYear} {siteIdentity.name}</p>
      </div>
    </footer>
  )
}

export default Footer
