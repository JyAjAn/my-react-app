import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./Components/PokemonCard"

function App() {


export default App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  return (
<di>
  <PokemonCard/>
</di>

  )
    <>
      <PokemonCard pokemon={pokemonList[0]} />
    </>
  );
}