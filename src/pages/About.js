import React from "react";
import "../styles/about.css";
import ludariImage from "../assets/Ludari_Image.PNG";
import Navbar from "../components/Navbar.js";

export default function About() {
  return (
    <div>
         <Navbar />
         <section className="about">
      <div className="about__container">
        {/* Hero Title */}
        <header className="about__header">
          <h1 className="about__title">About Ludari</h1>
          <p className="about__tagline">
            Where <span>play</span> and <span>learning</span> meet.
          </p>
        </header>

        {/* Two-column layout */}
        <div className="about__content">
          <div className="about__text">
            <h2>Our Mission</h2>
            <p>
              We believe that games can do more than entertain — they can build
              confidence, spark curiosity, and make learning feel exciting.
              Ludari bridges the gap between play and growth, offering
              experiences that feel rewarding for kids and reassuring for
              parents.
            </p>

            <h2>What You’ll Find</h2>
            <div className="about__highlight">
              <ul>
                <li>🎮 Mini-games that are quick and fun to play</li>
                <li>✨ A mix of word, number, and action challenges</li>
                <li>🌍 A safe and colorful space to explore</li>
                <li>🚀 Fresh games added to keep things exciting</li>
              </ul>
            </div>

            <h2>Why Ludari?</h2>
            <p>
              Unlike one-size-fits-all apps, Ludari treats each game as a unique
              adventure. Some focus on focus, others on speed, and some are just
              about having a good laugh. Together, they create a library where
              every player can find something they enjoy.
            </p>
          </div>

          <div className="about__image">
            
            <img src={ludariImage} alt="Ludari illustration" />
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
}
