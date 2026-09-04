import Card from "../Card";
import projects from "../../data/projects.json";
import "./Projects.scss";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Mes projets</h2>

      <p>
        Découvrez une sélection des projets réalisés au cours de ma formation.
      </p>

      <div className="projects__grid">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
