import React from "react";
import "../styles/Navbar.css"; // optional, for styling

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">Ludari Minigames</div>
      <div className="nav-buttons">
        <button onClick={() => alert("Go to Home section!")}>Home</button>
        <button onClick={() => alert("Go to Games section!")}>Games</button>
        <button onClick={() => alert("Go to About section!")}>About</button>
        <button onClick={() => alert("Go to Contact section!")}>Contact</button>
      </div>
    </nav>
  );
}