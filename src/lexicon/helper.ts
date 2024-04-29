import type { GenericWord, GenericWordWrapper } from 'lexicon/models/genericModels';
import type { PartsOfSpeech, Word } from 'lexicon/models/models';

export const filterWordData = (word: GenericWord): Word => {
	return {
		id: word.meta.id,
		stems: word.meta.stems,
		offensive: word.meta.offensive,
		speechPart: word.fl as keyof PartsOfSpeech,
		definitions: word.shortdef,
	};
};

export const filterWordDataWrapper = (wordWrapper: GenericWordWrapper): Word[] => {
	const words: Word[] = [];

	for (const word of wordWrapper) {
		// Skip words with no definitions (they're just alternate spellings)
		if (word.shortdef.length < 1) {
			continue;
		}

		words.push(filterWordData(word));
	}

	return words;
};
