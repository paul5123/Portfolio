import "./Experience.scss";

function Experience() {
  return (
    <section className="experience">
      <h1>Mon parcours</h1>

      <div className="experience__timeline">
        <div className="experience__step">
          <h2>Formation initiale</h2>
          <p>
            Après un bac professionnel en mécanique automobile, j’ai commencé
            un BTS Systèmes Numériques, option Informatique et Réseaux, qui
            m’a permis d’avoir une première approche du domaine informatique.
          </p>
        </div>

        <div className="experience__step">
          <h2>Expérience professionnelle</h2>
          <p>
            J’ai travaillé pendant cinq ans dans la fonction publique au sein
            d’un service de propreté. J’ai ensuite choisi de prendre une
            disponibilité afin de préparer ma reconversion professionnelle
            vers le développement web. Durant cette période de transition,
            j’ai également réalisé différentes missions en intérim avant de
            débuter ma formation.
          </p>
        </div>

        <div className="experience__step">
          <h2>Reconversion vers le développement web</h2>
          <p>
            Attiré depuis longtemps par l’informatique et le développement,
            j’ai décidé d’entamer une reconversion professionnelle afin de me
            diriger vers le développement web. J’ai intégré la formation
            Développeur Web d’OpenClassrooms, au cours de laquelle j’ai
            développé mes compétences en HTML, CSS, JavaScript, React et en
            développement back-end.
          </p>
        </div>

        <div className="experience__step">
          <h2>Aujourd’hui</h2>
          <p>
            Je souhaite aujourd’hui débuter ma carrière en tant que développeur
            front-end junior, mettre en pratique les compétences acquises durant
            ma formation et continuer à progresser sur des projets
            professionnels.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
