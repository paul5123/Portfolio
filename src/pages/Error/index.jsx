import { Link } from "react-router-dom";
import Seo from "../../components/Seo";
import "./Error.scss";

function Error() {
  return (
    <section className="error-page">
      <Seo
        title="Page introuvable | Paul Guillon"
        description="La page demandée est introuvable. Retrouvez le portfolio de Paul Guillon depuis la page d’accueil."
        noIndex
      />

      <h1>Page introuvable</h1>
      <p>La page que vous recherchez n’existe pas ou n’est plus disponible.</p>
      <Link to="/">Retour à l’accueil</Link>
    </section>
  );
}

export default Error;
