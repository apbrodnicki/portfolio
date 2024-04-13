import type { GenericWordWrapping } from 'lexicon/models/genericModels';

export const fetchWord = async (word: string): Promise<GenericWordWrapping> => {
	const response = await fetch(`//${import.meta.env.VITE_EC2_INSTANCE_IP}:${import.meta.env.VITE_LEXICON_SERVER_PORT}/api/word?word=${encodeURIComponent(word)}`);
	return await response.json();
};
