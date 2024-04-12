import { getSprite } from 'pokemon-directory/helper/filterApiData';
import { useEffect, useState } from 'react';
import { fetchPokemon } from './fetchPokemon';

export const useFetchAllSprites = (names: string[]): string[] => {
	const [sprites, setSprites] = useState<string[]>([]);

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			try {
				const promises = names.map(async (name: string) => await fetchPokemon(name));
				const pokemonData = await Promise.all(promises);
				const allSprites = pokemonData.map(getSprite);
				setSprites(allSprites);
			} catch (error) {
				console.log('Error fetching sprites ->', error);
			}
		};

		void fetchData();
	}, [names]);

	return sprites;
};
