import { filterAllPokemonData } from 'pokemon-directory/helper/filterApiData';
import type { GenericAllPokemonResponse } from 'pokemon-directory/models/genericModels';
import { useEffect, useState } from 'react';
import { fetchAllPokemon } from './fetchAllPokemon';

export const useFetchAllPokemon = (): string[] => {
	const [allPokemon, setAllPokemon] = useState<string[]>([]);

	useEffect(() => {
		void fetchAllPokemon()
			.then((response: GenericAllPokemonResponse) => response)
			.then((result: GenericAllPokemonResponse) => { setAllPokemon(filterAllPokemonData(result)); });
	}, []);

	return allPokemon;
};
