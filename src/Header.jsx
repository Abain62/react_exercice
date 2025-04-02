import React from "react";

const Header = ({ userToHeader, toggleUserMethod, SearchLogements }) => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-row justify-between items-center">
      <span className="text-xl font-bold text-red-500">
        Airbread & breakfast
      </span>
      {userToHeader === false ? (
        <nav className="flex space-x-6">
          <a
            href="#"
            className="text-gray-600 hover:text-black"
            onClick={toggleUserMethod}
          >
            Connexion
          </a>
        </nav>
      ) : (
        <nav className="flex space-x-6">
          <input
            type="text"
            className="w-96 outline-1 placeholder:pl-1.5 rounded-lg  focus:outline-[#b20710]"
            placeholder="Rechercher ..."
            onChange={(e) => SearchLogements(e)}
          />
          <a href="#" className="text-gray-600 hover:text-black">
            Maisons
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Logements
          </a>

          <a href="#" className="text-gray-600 hover:text-black">
            Villas
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-black"
            onClick={toggleUserMethod}
          >
            Déconnexion
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
