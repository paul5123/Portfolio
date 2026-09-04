function Contact() {
  return (
    <section>
      <h1>Contact</h1>

      <p>
        Vous souhaitez échanger à propos d’un projet ou d’une opportunité ?
        N’hésitez pas à me contacter.
      </p>

      <form>
        <div>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6"></textarea>
        </div>

        <button type="submit">Envoyer</button>
      </form>

      <div>
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