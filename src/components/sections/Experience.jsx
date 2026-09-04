import { profile } from '../../data/profile'
import './Experience.css'

function Experience() {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="container experience-section__container">
        <div className="experience-section__heading">
          <p className="experience-section__eyebrow">The path so far</p>
          <h2 id="experience-title">Experience that<br /><em>keeps evolving.</em></h2>
        </div>
        <div className="experience-timeline">
          {profile.experience.map(({ period, role, company, meta, phase, summary, highlights, skills }, index) => (
            <article className="experience-entry" key={`${company}-${role}`}>
              <div className="experience-entry__marker" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
              <div className="experience-entry__period">{period}</div>
              <div className="experience-entry__details">
                <p className="experience-entry__phase">{phase}</p>
                <h3>{role} <span>at</span> {company}</h3>
                <p className="experience-entry__meta">{meta}</p>
                <p className="experience-entry__summary">{summary}</p>
                {highlights.length > 0 && <ul className="experience-entry__highlights">{highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
                <div className="experience-entry__skills" aria-label={`${role} skills`}>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
