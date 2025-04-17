const {http} = require('../plugins');

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get(url);

    /*const res = await fetch(url);
    const pokemon = await res.json();

    throw new Error('Pokemon doesn\'t exist');*/

    return pokemon.name;

    /*return fetch(url)
        .then((res) => res.json())
        /!*.then(() => {
            throw new Error('Pokemon doesnt exist')
        })*!/
        .then((pokemon) => pokemon.name);*/
}

module.exports = getPokemonById;