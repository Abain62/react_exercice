import "./App.css";
import Logements from "./Logements";
import Avis from "./Avis";

function Site() {
  return (
    <>
      <div class="flex w-full h-full flex-col bg-white">
        <header class="flex basis-12 h-10 w-full bg-white p-2 border-1">
          <div class="basis-52 text-start text-xl text-orange-600">
            <h2 class="font-bold">Airbed & Breakfast</h2>
          </div>
          <ul class="flex flex-auto justify-end gap-x-2 text-gray-500 max-md:hidden">
            <li class="basis-20 hover:text-black cursor-pointer">Maisons</li>
            <li class="basis-20 hover:text-black cursor-pointer">
              Appartements
            </li>
            <li class="basis-20 hover:text-black cursor-pointer">Villas</li>
          </ul>
        </header>
        <main class="basis-175 bg-gray-200">
          <section class=" flex flex-col w-full gap-2 bg-gray-200 p-2">
            <div class="text-start px-5 text">
              <h2 class="font-semibold text-2xl">Logements Disponibles</h2>
            </div>
            <Logements />
          </section>
          <section class="flex flex-col flex-wrap w-full content-start items-start gap-2 bg-gray-100">
            <div class="text-start px-5 text">
              <h3 class="font-semibold text-2xl">Avis Clients</h3>
            </div>
            <Avis />
          </section>
        </main>
        <footer class="flex flex-row flex-wrap h-40 content-center items-center bg-gray-800 fixed inset-x-0 bottom-0 ">
          <div class="flex flex-col basis-52 m-auto text-xl">
            <h3 class="text-amber-50 font-bold">À propos</h3>
            <p class="text-amber-50">
              Nous aidons les voyageurs à trouver le logement idéal
            </p>
          </div>
          <div class="flex flex-col basis-52 m-auto text-xl">
            <h3 class="text-amber-50 font-bold">Support</h3>
            <p class="text-amber-50 hover: cursor-pointer">Contact</p>
            <p class=" text-amber-50 hover: cursor-pointer">FAQ</p>
          </div>
          <div class="flex flex-col basis-52 m-auto text-xl">
            <h3 class="text-amber-50 font-bold">Suivez-nous</h3>
            <p class="text-amber-50 hover: cursor-pointer">Facebook</p>
            <p class="text-amber-50 hover: cursor-pointer">Instagram</p>
          </div>
          <div class="flex flex-col basis-52 m-auto text-xl">
            <h3 class="text-amber-50 font-bold">Mentions légales</h3>
            <p class="text-amber-50 hover: cursor-pointer">
              Conditions générales
            </p>
            <p class="text-amber-50 hover: cursor-pointer">
              Politique de confidentialité
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Site;
