import React from "react";
import games from "../data/games";
import "../styles/catalog.css";
import Navbar from "../components/Navbar.js";

function GameCard({ game }) {
  return (
    <article className="card">
      <img className="card__thumb" src={game.image}/>
      <div className="card__body">
        <h3 className="card__title">{game.title}</h3>
        <div className="card__meta">{game.point}</div>
        <p className="card__summary">{game.summary}</p>

        {game.links?.length ? (
          <div className="card__links">
            {game.links.map((l) => (
              <a key={l.label} className="chip" href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function MinigamesCatalog() {
    const appGames = [games[0], games[1], games[2], games[3]];
  const otherGames = games.filter((g) => g.category === "other");
  
  

  return (
     <div>
        <Navbar />
        <main className="layout-wide">
       
       {/* <header className="catalog__header">
         <h1 className="catalog__title">Mini-Games</h1>
         <p className="catalog__subtitle">
           A curated list of games I’ve built—some inside the app, some standalone.
         </p>
       </header> */}
 
       <section className="catalog__section">
         <h2 className="section-heading">App Games</h2>
         <div className="stack">
           {appGames.map((g) => (
             <GameCard key={g.id} game={g} />
           ))}
         </div>
       </section>
 
       <section className="catalog__section">
         <h2 className="section-heading">Other Games</h2>
         <div className="stack">
           {otherGames.map((g) => (
             <GameCard key={g.id} game={g} />
           ))}
         </div>
       </section>
     </main>
     </div>
    
  );
}
