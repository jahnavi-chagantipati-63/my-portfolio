import { profile } from '../../data/profile'
import SocialIcon from '../ui/SocialIcon'
import './Contact.css'

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-section__container">
        <div className="contact-section__copy">
          <p className="contact-section__eyebrow">Let’s talk</p>
          <h2 id="contact-title">Reach out<br /><em>directly.</em></h2>
          <p className="contact-section__subtitle">Choose the channel that works best.</p>
        </div>
        <div className="contact-section__channels">
          {profile.contactChannels.map(({ label, detail, href, icon }, index) => (
            <a className="contact-channel" href={href} key={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
              <span className="contact-channel__number">0{index + 1}</span>
              <span className="contact-channel__icon"><SocialIcon name={icon} /></span>
              <span className="contact-channel__content"><strong>{label}</strong><small>{detail}</small></span>
              <span className="contact-channel__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
