import type { GenericWordWrapping } from 'lexicon/models/genericModels';
import type { PartsOfSpeech, Word } from 'lexicon/models/models';

export const filterWordsData = (word: GenericWordWrapping): Word => {
	const innerWord = word[0];
	console.log({ word });
	console.log({ innerWord });
	return {
		id: innerWord.meta.id,
		stems: innerWord.meta.stems,
		offensive: innerWord.meta.offensive,
		speechPart: innerWord.fl as keyof PartsOfSpeech,
		definitions: innerWord.shortdef,
	};
};
