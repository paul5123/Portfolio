import "./Skills.scss";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Mes compétences</h2>

      <div className="skills__grid">
        <div className="skills__card">
          <h3>Front-end</h3>
          <p>HTML, CSS, JavaScript, React, React Router, Sass</p>
        </div>

        <div className="skills__card">
          <h3>Back-end</h3>
          <p>Node.js, Express, MongoDB, Mongoose</p>
        </div>

        <div className="skills__card">
          <h3>Qualité web</h3>
          <p>Responsive design, accessibilité, SEO, performance</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
