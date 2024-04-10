import { type GenericPokemon } from 'pokemon-directory/models/genericModels';

export const fetchPokemon = async (name: string): Promise<GenericPokemon> => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);
	return await response.json();
};
