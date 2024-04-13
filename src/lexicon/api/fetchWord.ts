import type { GenericWordWrapping } from 'lexicon/models/genericModels';

export const fetchWord = async (word: string): Promise<GenericWordWrapping> => {
	const response = await fetch(`api/word?word=${encodeURIComponent(word)}`);
	return await response.json();
};
