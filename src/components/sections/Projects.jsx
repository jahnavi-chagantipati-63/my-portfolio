import { profile } from '../../data/profile'
import './Projects.css'

function ProjectLinks({ project }) {
  return (
    <div className="project-card__links">
      {project.repo ? <a href={project.repo} target="_blank" rel="noreferrer">{project.repoLabel} <span aria-hidden="true">↗</span></a> : <span>{project.repoLabel}</span>}
      <span>{project.demoLabel}</span>
    </div>
  )
}

function Projects() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="container projects-section__container">
        <div className="projects-section__heading">
          <div>
            <p className="projects-section__eyebrow">Selected work</p>
            <h2 id="projects-title">Built with curiosity.<br /><em>Proven by practice.</em></h2>
          </div>
          <p className="projects-section__intro">A selection of projects that shaped how I think about products, systems, and the people who use them.</p>
        </div>
        <div className="projects-section__list">
          {profile.projects.map((project, index) => (
            <article className={`project-card project-card--${index === 0 ? 'featured' : 'secondary'}`} key={project.title}>
              <div className="project-card__index">{project.number}</div>
              <div className="project-card__body">
                <p className="project-card__category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-card__type">{project.type}</p>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__stack" aria-label={`${project.title} technology stack`}>
                  {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <ProjectLinks project={project} />
              </div>
              <div className="project-card__highlights">
                <p>What I did</p>
                <ul>
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
