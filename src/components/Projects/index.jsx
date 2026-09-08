import Card from "../Card";
import projects from "../../data/projects.json";
import "./Projects.scss";

const projectTechnologies = {
  booki: [
    { name: "HTML5", logo: "/icon/logo_html5.webp" },
    { name: "CSS3", logo: "/icon/logo-css3.webp" },
    { name: "Git", logo: "/icon/git-logo.webp" },
  ],
  "sophie-bluel": [
    { name: "HTML5", logo: "/icon/logo_html5.webp" },
    { name: "CSS3", logo: "/icon/logo-css3.webp" },
    { name: "JavaScript", logo: "/icon/logo-javascript.webp" },
  ],
  "nina-carducci": [
    { name: "HTML5", logo: "/icon/logo_html5.webp" },
    { name: "CSS3", logo: "/icon/logo-css3.webp" },
    { name: "JavaScript", logo: "/icon/logo-javascript.webp" },
  ],
  kasa: [
    { name: "React", logo: "/icon/react-logo.webp" },
    { name: "React Router", logo: "/icon/react-router-logo .webp" },
    { name: "Sass", logo: "/icon/sass-logo.webp" },
  ],
  "mon-vieux-grimoire": [
    { name: "Node.js", logo: "/icon/nodejs-logo.webp" },
    { name: "Express", logo: "/icon/express-logo.webp" },
    { name: "MongoDB", logo: "/icon/mongodb-logo.webp" },
  ],
};

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Mes projets</h2>

      <p>
        Découvrez une sélection des projets réalisés au cours de ma formation.
      </p>

      <div className="projects__grid">
        {projects.map((project) => (
          <Card
            key={project.id}
            project={project}
            technologies={projectTechnologies[project.id]}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
