import { Link } from "react-router-dom";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <p className="hero__intro">Bonjour, je suis Paul Guillon</p>

      <h1>Développeur front-end junior</h1>

      <p className="hero__description">
         Je suis développeur front-end junior, axé sur la création d’interfaces web modernes, responsives et accessibles.
      </p>

      <div className="hero__actions">
        <a className="hero__action hero__action--primary" href="#projects">
          Voir mes projets
        </a>
        <Link className="hero__action hero__action--secondary" to="/contact">
          Me contacter
        </Link>
      </div>
    </section>
  );
}

export default Hero;
