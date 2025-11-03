import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <div className="navbar-title">Ludari Minigames</div>
        <div className="nav-buttons">
          <Link to="/">Home</Link>
          <Link to="/games">Games</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>

  );
}
