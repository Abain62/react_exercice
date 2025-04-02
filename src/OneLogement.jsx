import React from "react";
import { FaHeart } from "react-icons/fa";

// on récupère les données de chaque logement ce qui permet de rendre
// l'affichage dynamique
export default function OneLogement({
  listing,
  addLike,
  onDeleteList,
  onChangePrice,
}) {
  return (
    <div className="product-card">
      <img src={listing.image} alt={listing.title} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{listing.title}</h2>
        <p className="product-location">{listing.location}</p>
        <p className="product-price">{listing.price}</p>
        <div className="float-right hover:cursor-pointer" onClick={addLike}>
          <FaHeart />
        </div>
        <button
          className="bg-gray-300 px-4 py-2 h-15 rounded hover:cursor-pointer"
          onClick={() => onDeleteList(listing.id)}
        >
          Supprimer Logement
        </button>
        <button
          className="bg-gray-300 px-4 py-2 h-15 rounded hover:cursor-pointer"
          onClick={onChangePrice}
        >
          Ajouter 1€
        </button>
      </div>
    </div>
  );
}
