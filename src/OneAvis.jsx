import React from "react";

// on récupère les données de chaque avis ce qui permet de rendre
// l'affichage dynamique
export default function OneAvis({ review }) {
  return (
    <div className="review-card">
      <div className="review-info">
        <h2 className="review-name">{review.name}</h2>
        <p className="review-review">{review.review}</p>
      </div>
    </div>
  );
}
