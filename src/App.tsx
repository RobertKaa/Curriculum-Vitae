import {
  Aperture,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Layers3,
  Mail,
  MapPin,
  Network,
  RadioTower,
  Sparkles,
} from 'lucide-react'
import './App.css'
import { cv } from './cv-data'

function resolveAssetUrl(url: string) {
  if (!url || url.startsWith('http') || url.startsWith('data:')) {
    return url
  }

  return `${import.meta.env.BASE_URL}${url.replace(/^\/+/, '')}`
}

function App() {
  return (
    <main className="cv-page">
      <div className="cv-layout">
        <section className="main-content" aria-labelledby="profile-title">
          <header className="profile-header">
            <p className="eyebrow">{cv.role}</p>
            <h1 id="profile-title">{cv.name}</h1>
          </header>

          <section className="content-section" aria-labelledby="profile-heading">
            <h2 id="profile-heading" className="eyebrow section-label">
              Profil
            </h2>
            <p className="profile-text">{cv.profile}</p>
          </section>

          <section className="content-section" aria-labelledby="experience-heading">
            <p className="eyebrow">Parcours</p>
            <h2 id="experience-heading">Expériences</h2>
            <div className="timeline">
              {cv.experiences.map((experience) => (
                <article
                  className="timeline-item"
                  key={`${experience.period}-${experience.company}-${experience.client}-${experience.title}`}
                >
                  <div className="timeline-meta">
                    <span>{experience.period}</span>
                    <strong>
                      {experience.company}
                      {experience.client ? ` - ${experience.client}` : ''}
                    </strong>
                  </div>
                  <div className="timeline-body">
                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>
                    <ul>
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>
                          <CheckCircle2 size={16} aria-hidden="true" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section" aria-labelledby="education-heading">
            <p className="eyebrow">Formation</p>
            <h2 id="education-heading">Étude</h2>
            <div className="education-list">
              {cv.education.map((item) => (
                <article className="education-item" key={item.title}>
                  <div className="education-meta">
                    <span>{item.period}</span>
                    <strong>{item.school}</strong>
                  </div>
                  <div className="education-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>

        <aside className="side-band" aria-label="Informations complémentaires">
          <section className="photo-block" aria-label="Photo de profil">
            {cv.photoUrl ? (
              <img
                className="profile-photo"
                src={resolveAssetUrl(cv.photoUrl)}
                alt={`Portrait de ${cv.name}`}
              />
            ) : (
              <div className="portrait-placeholder" aria-hidden="true">
                <Aperture size={46} />
              </div>
            )}
          </section>

          <section className="side-section" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Coordonnées</h2>
            <ul className="contact-list">
              <li>
                <MapPin size={16} aria-hidden="true" />
                {cv.contact.address}
              </li>
              <li>
                <Building2 size={16} aria-hidden="true" />
                {cv.contact.location}
              </li>
              <li>
                <Mail size={16} aria-hidden="true" />
                <a href={`mailto:${cv.contact.email}`}>{cv.contact.email}</a>
              </li>
              <li>
                <Network size={16} aria-hidden="true" />
                <a href={cv.contact.linkedin}>LinkedIn</a>
              </li>
            </ul>
          </section>

          <section className="side-section" aria-labelledby="stack-heading">
            <h2 id="stack-heading">Stack</h2>
            <div className="tag-list">
              {cv.stack.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>

          <section className="side-section" aria-labelledby="qualities-heading">
            <h2 id="qualities-heading">Qualités</h2>
            <ul className="plain-list">
              {cv.qualities.map((quality) => (
                <li key={quality}>
                  <Sparkles size={15} aria-hidden="true" />
                  {quality}
                </li>
              ))}
            </ul>
          </section>

          <section className="side-section community-note" aria-labelledby="community-heading">
            <h2 id="community-heading">Communauté</h2>
            <div className="community-card">
              <RadioTower size={17} aria-hidden="true" />
              <div>
                <strong>{cv.community.title}</strong>
                <span>{cv.community.role}</span>
                <p>{cv.community.description}</p>
              </div>
            </div>
          </section>

          <section className="side-section" aria-labelledby="projects-heading">
            <h2 id="projects-heading">Mes projets</h2>
            <div className="project-list">
              {cv.projects.map((project) => (
                <a className="project-link" href={project.url} key={project.name}>
                  <span>
                    <strong>{project.name}</strong>
                    {project.description}
                  </span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>

          <section className="side-section" aria-labelledby="hobbies-heading">
            <h2 id="hobbies-heading">Hobbies</h2>
            <ul className="plain-list">
              {cv.hobbies.map((hobby) => (
                <li key={hobby}>
                  <Layers3 size={15} aria-hidden="true" />
                  {hobby}
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </main>
  )
}

export default App
