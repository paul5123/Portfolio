import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ project }) {
  const { id, image, title, technologies } = project;

  return (
    <Link className="card" to={`/projects/${id}`}>
      <img className="card__image" src={image} alt={`Aperçu du projet ${title}`} />

      <div className="card__content">
        <h3>{title}</h3>

        <ul className="card__technologies">
          {technologies.slice(0, 3).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export default Card;
