// import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <>
    <div className="title-container">
        <h4 className="title" id="contact">Contact</h4>
      </div>

    <div className="contact">
      <form action="MAILTO:sachapasco@gmail.com" method="post" encType="text/plain">
        <div>
          <label htmlFor="nom">Votre nom</label>
          <input type="text" id="name" name="nom" placeholder="Alexandra Pasco" required />
        </div>
        <div>
          <label htmlFor="email">Votre e-mail</label>
          <input type="email" id="mail" name="email" placeholder="s.alexandra.pasco@gmail.com" required />
        </div>
        <div>
          <label htmlFor="sujet">Quel est le sujet de votre message ?</label>
          <select defaultValue="sujet" id="sujet" required>
            <option value="" disabled selected hidden>Choisissez le sujet de votre message</option>
            <option value="proposition-stage">Proposition de stage</option>
            <option value="question">Question à mon propos</option>
            <option value="autre">Autre...</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Votre message</label>
          <textarea id="message" name="message" placeholder="Écrivez votre message ici." required></textarea>
        </div>
        <div>
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
    <a className="presentation__linkedin" href="https://www.linkedin.com/in/alexandrapasco/" target="_blank" rel="noopener noreferrer">
          <img className="presentation__linkedin-logo" src="/src/assets/images/logo-linkdedin2.png" alt="Profil LinkedIn d'Alexandra Pasco" />
        </a>
    </>
  );
}

export default Contact;
