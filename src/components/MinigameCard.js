import React from "react";


export default function MinigameCard({ game }) {
return (
<article className="game-card" role="article">
<div className="game-card__media">
<img src={game.image} alt={`${game.title} preview`} />
</div>
<div className="game-card__body">
<h3 className="game-card__title">{game.title}</h3>
<p className="game-card__desc">{game.description}</p>
<p className="game-card__point">
<span className="label">Learning goal:</span> {game.point}
</p>
</div>
<div className="game-card__footer">
<button
type="button"
className="game-card__play"
aria-label={`Play ${game.title}`}
onClick={() => game.onPlay?.(game)}
>
Play
</button>
</div>
</article>
);
}