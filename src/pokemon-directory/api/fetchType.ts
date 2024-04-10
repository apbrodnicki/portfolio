import type { GenericType } from 'pokemon-directory/models/genericModels';

export const fetchType = async (type: string): Promise<GenericType> => {
	const response = await fetch('https://pokeapi.co/api/v2/type/' + type);
	return await response.json();
};
