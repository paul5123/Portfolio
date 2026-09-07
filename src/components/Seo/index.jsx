import { useEffect } from "react";

function Seo({ title, description, noIndex = false }) {
  useEffect(() => {
    document.title = title;

    let descriptionMeta = document.querySelector('meta[name="description"]');

    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.setAttribute("name", "description");
      document.head.appendChild(descriptionMeta);
    }

    descriptionMeta.setAttribute("content", description);

    let robotsMeta = document.querySelector('meta[name="robots"]');

    if (noIndex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.setAttribute("name", "robots");
        document.head.appendChild(robotsMeta);
      }

      robotsMeta.setAttribute("content", "noindex, follow");
    } else {
      robotsMeta?.remove();
    }
  }, [description, noIndex, title]);

  return null;
}

export default Seo;
