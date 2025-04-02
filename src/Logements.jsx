import React from "react";
import OneLogement from "./OneLogement";
import { useState } from "react";

export default function Logements({
  userToLogements,
  search,
  AjoutLike,
  addLike,
}) {
  // tableau de données simulant la réponse de notre serveur
  // const listings = [
  //   {
  //     id: 1,
  //     image:
  //       "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Villa de Luxe",
  //     location: "Nice, France",
  //     price: "250",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Chalet Montagne",
  //     location: "Chamonix, France",
  //     price: "180",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Maison Bohème",
  //     location: "Bordeaux, France",
  //     price: "120",
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Loft Design",
  //     location: "Paris, France",
  //     price: "300",
  //   },
  //   {
  //     id: 5,
  //     image:
  //       "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Cabane en forêt",
  //     location: "Lille, France",
  //     price: "90",
  //   },
  //   {
  //     id: 6,
  //     image:
  //       "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Appartement Moderne",
  //     location: "Lyon, France",
  //     price: "200",
  //   },
  //   {
  //     id: 7,
  //     image:
  //       "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Maison Contemporaine",
  //     location: "Marseille, France",
  //     price: "220",
  //   },
  //   {
  //     id: 8,
  //     image:
  //       "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Penthouse Vue",
  //     location: "Paris, France",
  //     price: "400",
  //   },
  //   {
  //     id: 9,
  //     image:
  //       "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Bungalow en Bord de Mer",
  //     location: "Biarritz, France",
  //     price: "270",
  //   },
  //   {
  //     id: 10,
  //     image:
  //       "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     title: "Château Rénové",
  //     location: "Loire Valley, France",
  //     price: "350",
  //   },
  // ];

  const [listings, setListings] = useState([
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Villa de Luxe",
      location: "Nice, France",
      price: "250",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Chalet Montagne",
      location: "Chamonix, France",
      price: "180",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Maison Bohème",
      location: "Bordeaux, France",
      price: "120",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Loft Design",
      location: "Paris, France",
      price: "300",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Cabane en forêt",
      location: "Lille, France",
      price: "90",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Appartement Moderne",
      location: "Lyon, France",
      price: "200",
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Maison Contemporaine",
      location: "Marseille, France",
      price: "220",
    },
    {
      id: 8,
      image:
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Penthouse Vue",
      location: "Paris, France",
      price: "400",
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Bungalow en Bord de Mer",
      location: "Biarritz, France",
      price: "270",
    },
    {
      id: 10,
      image:
        "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Château Rénové",
      location: "Loire Valley, France",
      price: "350",
    },
  ]);

  const newList = {
    id: 11,
    image:
      "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Cottage Charmant",
    location: "Strasbourg, France",
    price: "150",
  };

  function addList() {
    setListings([...listings, newList]);
  }

  function deleteList(idParam) {
    console.log(idParam);
    setListings(listings.filter((listing) => listing.id !== idParam));
  }

  function changePrice() {
    setListings({ ...listings, price: listings.price + 1 });
  }

  return (
    <>
      {userToLogements === true ? (
        <div className="products-flex" class="flex flex-wrap">
          {listings
            .filter((listing) =>
              listing.location.toLowerCase().includes(search.toLowerCase())
            )
            .map((listing) => (
              <OneLogement
                listing={listing}
                key={listing.id}
                AjoutLike={AjoutLike}
                addLike={addLike}
                onDeleteList={deleteList}
                onChangePrice={changePrice}
              />
            ))}

          <button
            className="bg-gray-300 px-4 py-2 h-15 rounded hover:cursor-pointer"
            onClick={addList}
          >
            Nouveau Logement
          </button>
        </div>
      ) : (
        <div className="products-flex" class="flex">
          <p className="text-red-500">Veuillez vous connecter</p>
        </div>
      )}
    </>
  );
}
