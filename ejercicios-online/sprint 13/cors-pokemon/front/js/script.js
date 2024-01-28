function getPokemonInfo() {
    const pokemonNameInput = document.getElementById('PokemonName');
    const pokemonInfo = document.getElementById('pokemonInfo');

    const pokemonName = pokemonNameInput.value.toLowerCase();

    fetch(`http://localhost:4000/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            const { name, sprites: { front_default }, height, weight } = data;
            pokemonInfo.innerHTML = `
                <h2>${name}</h2>
                <img src="${front_default}" alt="${name}" />
                <p>${height}</p>
                <p>${weight}</p>
            `;
        })
        .catch(error => pokemonInfo.innerHTML = `<p>Imposible acceder al Pokémon</p>`);
}
