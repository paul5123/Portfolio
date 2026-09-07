import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import Seo from "../../components/Seo";
import Error from "../Error";
import "./ProjectDetails.scss";

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [id]);

  if (!project) {
    return <Error />;
  }

  return (
    <article className="project-details">
      <Seo title={project.seoTitle} description={project.seoDescription} />

      <Link className="project-details__back" to="/#projects">
        Retour aux projets
      </Link>

      <header className="project-details__header">
        <h1>{project.title}</h1>
        <p>{project.subtitle}</p>
      </header>

      <img
        className="project-details__image"
        src={project.image}
        alt={project.imageAlt}
      />

      <ul className="project-details__technologies">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <div className="project-details__content">
        <section>
          <h2>Contexte</h2>
          <p>{project.context}</p>
        </section>

        <section>
          <h2>Objectifs</h2>
          <p>{project.objectives}</p>
        </section>

        <section>
          <h2>Compétences développées</h2>
          <ul>
            {project.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Résultats</h2>
          <p>{project.results}</p>
        </section>

        <section>
          <h2>Perspectives d’amélioration</h2>
          <p>{project.improvements}</p>
        </section>
      </div>

      <a
        className="project-details__github"
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le projet sur GitHub
        <span className="visually-hidden">
          {` : ${project.title} (nouvel onglet)`}
        </span>
      </a>
    </article>
  );
}

export default ProjectDetails;
