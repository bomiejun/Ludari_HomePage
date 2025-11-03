import React from "react";
import Navbar from "src/components/Navbar.js";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="hero">
        <h2>Because learning should be fun</h2>
        <p>
          A collection of fun, accessible minigames designed to support young
          learners while keeping play at the center.
        </p>
        <div className="buttons">
          <button className="primary btn">Get Started</button>
          <button onClick={() => navigate("/games")} className="btn secondary">Learn More</button>
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
          <Link to="/games"> Learn more → </Link>
        </div>
        <div className="feature-card">
          <div className="icon">🌟</div>
          <h3>Kid-Friendly</h3>
          <p>Colorful, simple, and safe designs made for younger players.</p>
          <Link to="/games"> Explore → </Link>
        </div>
      </section>
    </div>
  );
}

export default App;
