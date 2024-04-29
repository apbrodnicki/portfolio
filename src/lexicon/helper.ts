import type { GenericWord, GenericWordWrapping } from 'lexicon/models/genericModels';
import type { PartsOfSpeech, Word } from 'lexicon/models/models';

export const filterWordsData = (word: GenericWord): Word => {
	return {
		id: word.meta.id,
		stems: word.meta.stems,
		offensive: word.meta.offensive,
		speechPart: word.fl as keyof PartsOfSpeech,
		definitions: word.shortdef,
	};
};

export const filterWordsDataWrapper = (wordWrapping: GenericWordWrapping): Word[] => {
	const words: Word[] = [];

	for (const word of wordWrapping) {
		// Skip words with no definitions (they're just alternate spellings)
		if (word.shortdef.length < 1) {
			continue;
		}

		words.push(filterWordsData(word));
	}

	return words;
};
