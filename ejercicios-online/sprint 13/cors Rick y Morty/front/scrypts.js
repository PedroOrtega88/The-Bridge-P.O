function getCharacterInfo() {
    const CharacterNameInput = document.getElementById('CharacterName');
    const CharactersInfo = document.getElementById('CharactersInfo');

    const CharacterName = CharacterNameInput.value.toLowerCase();

    fetch(`http://localhost:4000/characters/${CharacterName}`)
        .then(response => response.json())
        .then(data => {
            const { name, status, species, gender, origin, image } = data;
            CharactersInfo.innerHTML = `
                <h2>${name}</h2>
                <img src="${image}" alt="${name}" />
                <p>Status: ${status}</p>
                <p>Species: ${species}</p>
                <p>Gender: ${gender}</p>
                <p>Origin: ${origin}</p>
            `;
        })
        .catch(error => CharactersInfo.innerHTML = `<p>Imposible acceder al personaje</p>`);
}
