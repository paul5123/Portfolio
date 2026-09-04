import { useForm, ValidationError } from "@formspree/react";
import "./Contact.scss";

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;

console.log("VITE_FORMSPREE_FORM_ID:", FORMSPREE_FORM_ID);

function ContactForm({ formId }) {
  const [state, handleSubmit] = useForm(formId);

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" autoComplete="name" required />
        <ValidationError
          prefix="Nom :"
          field="name"
          errors={state.errors}
          className="contact__status contact__status--error"
          role="alert"
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
        />
        <ValidationError
          prefix="Email :"
          field="email"
          errors={state.errors}
          className="contact__status contact__status--error"
          role="alert"
        />
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="6" required></textarea>
        <ValidationError
          prefix="Message :"
          field="message"
          errors={state.errors}
          className="contact__status contact__status--error"
          role="alert"
        />
      </div>

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? "Envoi..." : "Envoyer"}
      </button>

      {state.succeeded === true && (
        <p className="contact__status contact__status--success" role="status">
          Votre message a bien été envoyé. Merci !
        </p>
      )}

      <ValidationError
        prefix="Erreur :"
        errors={state.errors}
        className="contact__status contact__status--error"
        role="alert"
      />
    </form>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h1>Contact</h1>

      <p>
        Vous souhaitez échanger à propos d’un projet ou d’une opportunité ?
        N’hésitez pas à me contacter.
      </p>

      {FORMSPREE_FORM_ID ? (
        <ContactForm formId={FORMSPREE_FORM_ID} />
      ) : (
        <p className="contact__status contact__status--error" role="alert">
          Le formulaire de contact doit être configuré avant de pouvoir envoyer
          un message.
        </p>
      )}

      <div className="contact__links">
        <a
          href="https://github.com/paul5123"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="LIEN_LINKEDIN"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
