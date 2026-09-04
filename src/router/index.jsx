import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import ProjectDetails from "../pages/ProjectDetails";
import Error from "../pages/Error";

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;