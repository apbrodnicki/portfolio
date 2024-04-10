import type { GenericAllPokemonResponse } from 'pokemon-directory/models/genericModels';

export const fetchAllPokemon = async (): Promise<GenericAllPokemonResponse> => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9999');
	return await response.json();
};
