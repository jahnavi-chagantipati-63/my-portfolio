import { profile } from '../../data/profile'
import './Certifications.css'

function Certifications() {
  return (
    <section className="certifications-section" id="certifications" aria-labelledby="certifications-title">
      <div className="container certifications-section__container">
        <div className="certifications-section__heading">
          <div>
            <p className="certifications-section__eyebrow">Continuous growth</p>
            <h2 id="certifications-title">Credentials that<br /><em>keep me curious.</em></h2>
          </div>
          <p className="certifications-section__intro">A few examples of the learning paths that complement my hands-on engineering experience.</p>
        </div>
        <div className="row g-3 g-lg-4">
          {profile.certifications.map(({ name, issuer, date, focus, example }, index) => (
            <div className="col-12 col-lg-6" key={name}>
              <article className="certification-card">
                <div className="certification-card__seal" aria-hidden="true"><span>JC</span><i /></div>
                <div className="certification-card__content">
                  <div className="certification-card__meta"><span>0{index + 1}</span><span>{date}</span></div>
                  <h3>{name}</h3>
                  <p className="certification-card__issuer">{issuer}</p>
                  <p className="certification-card__focus">{focus}</p>
                  {example && <span className="certification-card__example">Example credential</span>}
                </div>
                <span className="certification-card__arrow" aria-hidden="true">↗</span>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
