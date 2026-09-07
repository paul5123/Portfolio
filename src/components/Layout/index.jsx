import { Outlet } from "react-router-dom";
import Header from "../Header";

function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Aller au contenu principal
      </a>

      <Header />

      <main id="main-content">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
