import type { GenericWordWrapping } from 'lexicon/models/genericModels';

export const fetchWord = async (word: string): Promise<GenericWordWrapping> => {
	// .env not working in production right now, `${import.meta.env.DICTIONARY_BASE_URL}/${word}?key=${import.meta.env.DICTIONARY_TOKEN}`
	const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=62ae6585-05f1-46c3-8cda-757eca0f6e87`);
	return await response.json();
};
