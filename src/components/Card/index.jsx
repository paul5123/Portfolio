import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ project, technologies }) {
  const { id, image, imageAlt, title } = project;

  return (
    <Link className="card" to={`/projects/${id}`}>
      <img className="card__image" src={image} alt={imageAlt} />

      <div className="card__content">
        <h3>{title}</h3>

        <ul
          className="card__technologies"
          aria-label={`Technologies utilisées pour ${title}`}
        >
          {technologies.map((technology) => (
            <li key={technology.name}>
              <img src={technology.logo} alt={technology.name} />
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export default Card;
