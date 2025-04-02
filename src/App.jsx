import { useState } from "react";
import "./App.css";
import Logements from "./Logements";
import Header from "./Header";

function App() {
  const [user, setUser] = useState(false);
  const [search, setSearch] = useState("");

  const toggleUser = () => {
    setUser(!user);
  };

  function searchLogement(event) {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  return (
    <div className="flex flex-col">
      <Header
        userToHeader={user}
        toggleUserMethod={toggleUser}
        SearchLogements={searchLogement}
      />
      <Logements
        userToLogements={user}
        search={search}
        RechercheLogement2={searchLogement}
      />
    </div>
  );
}

export default App;
