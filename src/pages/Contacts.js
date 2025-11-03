import React from "react";
import Navbar from "/Users/bomiejun/Ludari_HomePage/Ludari_HomePage/src/components/Navbar.js";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="contact">
      <div className="contact__container">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Send us a message below.</p>

        <form className="contact__form">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>

        <p className="contact__alt">
          Or email us directly at <a href="mailto:bomiejun@gmail.com">bomiejun@gmail.com</a>
        </p>
      </div>
    </section>
    </div>
    
  );
}
