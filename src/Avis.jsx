import React from "react";
import OneAvis from "./OneAvis";

export default function Avis() {
  // tableau de données simulant la réponse de notre serveur
  const reviews = [
    {
      id: 1,
      name: "Sophie L.",
      review: "Super séjour ! Maison très propre et bien située.",
    },
    {
      id: 2,
      name: "Thomas B.",
      review: "Hôte très sympathique, je recommande à 100% !",
    },
    { id: 3, name: "Emma D.", review: "Excellente expérience, on reviendra." },
  ];
  return (
    // on va itérer sur chaque avis et passer en props ses données
    <div className="review-flex">
      {reviews.map((review) => (
        <OneAvis review={review} key={review.id} />
      ))}
    </div>
  );
}
