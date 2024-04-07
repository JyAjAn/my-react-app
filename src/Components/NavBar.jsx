function NavBar ({pokemonIndex, pokemonList, setpokemonIndex}) {
    return (
        <>
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
    )
}