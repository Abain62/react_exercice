import React from "react";

// on récupère les données de chaque logement ce qui permet de rendre
// l'affichage dynamique
export default function OneLogement({ listing }) {
  return (
    <div className="product-card">
      <img
        src={listing.image}
        alt={listing.title}
        className="product-image"
      />
      <div className="product-info">
        <h2 className="product-name">{listing.title}</h2>
        <p className="product-location">{listing.location}</p>
        <p className="product-price">{listing.price}</p>
      </div>
    </div>
  );
}
