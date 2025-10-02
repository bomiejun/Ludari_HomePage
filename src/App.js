import React from "react";
import Navbar from "./components/NavBar";
import "./index.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="hero">
        <h2>Present your app in a whole new way</h2>
        <p>
          A collection of fun, accessible minigames designed to support young
          learners while keeping play at the center.
        </p>
        <div className="buttons">
          <button className="btn primary">Get Started</button>
          <button className="btn secondary">Learn More</button>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="icon">🎮</div>
          <h3>Interactive Games</h3>
          <p>Engaging minigames built to spark curiosity and support learning.</p>
          <a href="#">Try it →</a>
        </div>
        <div className="feature-card">
          <div className="icon">📚</div>
          <h3>Learning Focused</h3>
          <p>
            Each game is designed with skills in mind—memory, reading, and more.
          </p>
          <a href="#">Learn more →</a>
        </div>
        <div className="feature-card">
          <div className="icon">🌟</div>
          <h3>Kid-Friendly</h3>
          <p>Colorful, simple, and safe designs made for younger players.</p>
          <a href="#">Explore →</a>
        </div>
      </section>
    </div>
  );
}

export default App;
