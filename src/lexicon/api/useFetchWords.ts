import { reduceArray } from 'helper';
import { filterWordsDataWrapper } from 'lexicon/helper';
import type { Word } from 'lexicon/models/models';
import { useEffect, useState } from 'react';
import { fetchWord } from './fetchWord';

interface useFetchWordsProps {
	wordsList: string[]
}

export const useFetchWords = ({ wordsList }: useFetchWordsProps): Word[] => {
	const [words, setWords] = useState<Word[]>([]);

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			try {
				const promises = wordsList.map(async (word: string) => await fetchWord(word));
				const wordsData = await Promise.all(promises);
				const filteredWords = wordsData.map(filterWordsDataWrapper);
				setWords(reduceArray(filteredWords) as Word[]);
			} catch (error) {
				console.log('Error fetching words ->', error);
			}
		};

		void fetchData();
	}, [wordsList]);

	return words;
};
