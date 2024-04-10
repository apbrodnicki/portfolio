import type { GenericAbility } from 'pokemon-directory/models/genericModels';


export const fetchAbility = async (name: string): Promise<GenericAbility> => {
	const response = await fetch('https://pokeapi.co/api/v2/ability/' + name);
	return await response.json();
};
