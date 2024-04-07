// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./Components/PokemonCard"
import { useState } from "./Components/PokemonCard"

function App() {

  const [pokemonIndex, setpokemonIndex] = useState(0);
  const pokemonList = [
    {
      name: "Bulbasaur",
// @@ -12,12 +12,39 @@ function App() {
    },
    {
      name: "Mew",
      imgSrc:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
      imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
  ];
  return (
    <>
      <PokemonCard pokemon={pokemonList[1]} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

      {pokemonIndex > 0 ? (
        <button onClick={() => setpokemonIndex(pokemonIndex - 1)}>
          Précedent
        </button>
      ) : null}

      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={() => setpokemonIndex(pokemonIndex + 1)}>
          Suivant
        </button>
      )}
    </>
  );
}