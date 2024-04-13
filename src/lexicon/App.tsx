import { Box, CardMedia } from '@mui/material';
import loader from 'lexicon/assets/loader.webm';
import React, { useState } from 'react';
import { useFetchWords } from './api/useFetchWords';
import { wordsList } from './data';
import type { Word } from './models/models';


export const App = (): React.JSX.Element => {
	const [isLoading, setIsLoadingWords] = useState<boolean>(true);
	const words = useFetchWords({ wordsList, setIsLoadingWords });

	return (
		<>
			{!isLoading && words.length > 0 && (
				words.map((word: Word, index: number) => (
					<Box key={index}>
						{word.id} ||
						{word.speechPart}
					</Box>
				))
			)}
			{!isLoading && words.length < 1 && (
				<Box>No words fetched.</Box>
			)}
			{isLoading && (
				<Box display='flex' justifyContent='center' m={3}>
					<CardMedia
						component='video'
						src={loader}
						autoPlay
						loop
						muted
						width='800px'
						height='600px'
					/>
				</Box>
			)}
		</>
	);
};
