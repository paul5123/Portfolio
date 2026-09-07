import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Seo from "../../components/Seo";
import Skills from "../../components/Skills";

function Home() {
  return (
    <>
      <Seo
        title="Paul Guillon | Développeur front-end junior"
        description="Portfolio de Paul Guillon, développeur front-end junior en France. Découvrez ses projets en React, JavaScript, HTML, CSS, Git et développement web."
      />
      <Hero />
      <Projects />
      <Skills />
    </>
  );
}

export default Home;
