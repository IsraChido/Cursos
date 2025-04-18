import { httpClientPlugin as http } from '../plugins/http-client.plugin';
// const {http} = require('../plugins');

export const getPokemonById = async (id: string | number): Promise<string> => {

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await http.get(url);

        return pokemon.name;
    } catch (error) {
        throw `Pokemon not found with id: ${id}`;
    }



    /*const res = await fetch(url);
    const pokemon = await res.json();

    throw new Error('Pokemon doesn\'t exist');*/



    /*return fetch(url)
        .then((res) => res.json())
        /!*.then(() => {
            throw new Error('Pokemon doesnt exist')
        })*!/
        .then((pokemon) => pokemon.name);*/
}
