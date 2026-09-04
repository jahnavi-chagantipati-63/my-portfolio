import { profile } from '../../data/profile'
import './Education.css'

function Education() {
  return (
    <section className="education-section" id="education" aria-labelledby="education-title">
      <div className="container education-section__container">
        <div className="education-section__heading">
          <p className="education-section__eyebrow">The foundation</p>
          <h2 id="education-title">Learning is a<br /><em>lifelong practice.</em></h2>
          <p className="education-section__intro">The academic experiences that continue to shape how I approach technology, systems, and problem-solving.</p>
        </div>
        <div className="education-list">
          {profile.education.map(({ degree, institution, period, gpa, status }, index) => (
            <article className="education-card" key={institution}>
              <div className="education-card__number">0{index + 1}</div>
              <div className="education-card__content">
                <p className="education-card__period">{period}</p>
                <h3>{degree}</h3>
                <p className="education-card__institution">{institution}</p>
              </div>
              <div className="education-card__metrics">
                <span className="education-card__status">{status}</span>
                <span className="education-card__gpa-label">GPA</span>
                <strong>{gpa}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
