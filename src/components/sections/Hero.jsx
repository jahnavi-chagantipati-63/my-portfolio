import { profile } from '../../data/profile'
import SocialIcon from '../ui/SocialIcon'
import './Hero.css'

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="container hero-section__container">
        <div className="hero-section__content">
          <p className="hero-section__eyebrow">{profile.role}</p>
          <h1 id="hero-title" className="hero-section__title">{profile.name}</h1>
          <p className="hero-section__tagline">{profile.tagline}</p>
          <p className="hero-section__introduction">{profile.introduction}</p>
          <div className="hero-section__actions">
            <a className="hero-section__primary-action" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
            <a className="hero-section__secondary-action" href="#contact">Let’s connect <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-section__socials" aria-label="Connect with Jahnavi">
            {profile.socialLinks.map(({ label, href, icon }) => (
              <a className="hero-section__social-link" href={href} key={label} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                <SocialIcon name={icon} />
              </a>
            ))}
          </div>
        </div>
        <div className="hero-section__visual" aria-hidden="true">
          <div className="hero-section__orb hero-section__orb--large" />
          <div className="hero-section__orb hero-section__orb--small" />
          <div className="hero-section__code-card">
            <span className="hero-section__code-dot" /><span className="hero-section__code-dot" /><span className="hero-section__code-dot" />
            <div className="hero-section__code-lines"><i /><i /><i /><i /><i /></div>
            <div className="hero-section__code-status"><span /> Building ideas into impact</div>
          </div>
          <span className="hero-section__visual-label">01 / create&nbsp; • &nbsp;build&nbsp; • &nbsp;evolve</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
