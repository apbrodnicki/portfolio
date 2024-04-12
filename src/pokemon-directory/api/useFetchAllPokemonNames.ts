import { getAllPokemonNames } from 'pokemon-directory/helper/filterApiData';
import type { GenericAllPokemon } from 'pokemon-directory/models/genericModels';
import { useEffect, useState } from 'react';
import { fetchAllPokemon } from './fetchAllPokemon';

export const useFetchAllPokemonNames = (): string[] => {
	const [allPokemonNames, setAllPokemonNames] = useState<string[]>([]);

	useEffect(() => {
		void fetchAllPokemon()
			.then((response: GenericAllPokemon) => response)
			.then((result: GenericAllPokemon) => { setAllPokemonNames(getAllPokemonNames(result)); });
	}, []);

	return allPokemonNames;
};
