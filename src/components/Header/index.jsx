import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Link className="header__brand" to="/">
        PAUL GUILLON
      </Link>

      <nav className="header__nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
        <NavLink to="/experience">Parcours</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
