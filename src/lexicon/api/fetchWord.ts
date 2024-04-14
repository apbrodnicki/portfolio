import type { GenericWordWrapping } from 'lexicon/models/genericModels';

export const fetchWord = async (word: string): Promise<GenericWordWrapping> => {
	// .env not working in production right now
	// const response = await fetch(`//${import.meta.env.VITE_EC2_INSTANCE_IP}:${import.meta.env.VITE_LEXICON_SERVER_PORT}/api/word?word=${encodeURIComponent(word)}`);
	const response = await fetch(`http://3.128.30.11:5000/api/word?word=${encodeURIComponent(word)}`);
	return await response.json();
};
