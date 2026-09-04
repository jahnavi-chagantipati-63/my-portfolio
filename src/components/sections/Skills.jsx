import { profile } from '../../data/profile'
import './Skills.css'

function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="container skills-section__container">
        <div className="skills-section__heading">
          <p className="skills-section__eyebrow">What I work with</p>
          <h2 id="skills-title">A toolkit for building<br /><em>what’s next.</em></h2>
          <p className="skills-section__intro">From expressive interfaces to intelligent systems, these are the tools and practices I use to turn complex problems into useful products.</p>
        </div>
        <div className="row g-3 g-lg-4">
          {profile.skillCategories.map(({ name, description, skills }, index) => (
            <div className="col-12 col-md-6 col-xl-4" key={name}>
              <article className={`skill-card skill-card--${(index % 3) + 1}`}>
                <div className="skill-card__topline"><span>0{index + 1}</span><span className="skill-card__line" /></div>
                <h3>{name}</h3>
                <p className="skill-card__description">{description}</p>
                <ul className="skill-card__list" aria-label={`${name} skills`}>
                  {skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
