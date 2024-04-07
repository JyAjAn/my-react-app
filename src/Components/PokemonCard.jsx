// import PropTypes from "prop-types";

function PokemonCard() {
    return (
      <figure>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
        alt="bulbasur"></img>
        <figcaption>Bulbasur</figcaption>
      </figure>
    );
  }

function PokemonCard({ pokemon }) {


  return !pokemon.imgSrc ? (
    <>
      {" "}
      <p> ??? </p>{" "}
      <figcaption>
        <h1>{pokemon.name}</h1>
      </figcaption>{" "}
    </>
  ) : (
    <>
      {" "}
      <img src={pokemon.imgSrc} />{" "}
//       <figcaption>
//         <h1>{pokemon.name}</h1>
//       </figcaption>{" "}
//     </>
//   );
// }
// PokemonCard.propTypes = {
//   pokemon: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

// function Pokemon({ pokemonList }) {
//   const pokemon = pokemonList[0];
//   return (
//     <div>
//       {(!pokemon.imgSrc)
//         ? (
//           <>
//             <p> ??? </p>
//             <figcaption>{pokemon.name}</figcaption>
//           </>
//         )
//         : (
//           <>
//             <img src={pokemon.imgSrc} alt={pokemon.name} />
//             <figcaption>{pokemon.name}</figcaption>
//           </>
//         )
//       }
//     </div>
//   );
// }


// pokemon ()
// console.log(pokemon.name);
// console.log(pokemon.imgSrc);

// Solution condition if
// if (!pokemon.imgSrc) {
//   return (
//     <>
//       <p>???</p>
//       <figcaption>{pokemon.name}</figcaption>
//     </>
//   );
// } else {
//   return (
//     <figure>
//       <img src={pokemon.imgSrc} />
//       <figcaption>{pokemon.name}</figcaption>
//     </figure>
//   )};

// // A faire pour la quête condition ternaire
export default PokemonCard;