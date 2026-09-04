import { Link } from "react-router-dom";

function Hero() {
  return (
    <section>
      <p>Bonjour, je suis Paul Guillon</p>

      <h1>Développeur front-end junior</h1>

      <p>
         Je suis développeur front-end junior, axé sur la création d’interfaces web modernes, responsives et accessibles.
      </p>

      <div>
        <a href="#projects">Voir mes projets</a>
        <Link to="/contact">Me contacter</Link>
      </div>
    </section>
  );
}

export default Hero;