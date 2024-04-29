import { Box, Button, TextField, Typography } from '@mui/material';
import { fetchWord } from 'lexicon/api/fetchWord';
import { LexiconListContext } from 'lexicon/contexts/LexiconListContext';
import { filterWordDataWrapper } from 'lexicon/helper';
import React, { useContext, useState } from 'react';

export const AddWordInput = (): React.JSX.Element => {
	const { wordsList, setWordsList } = useContext(LexiconListContext);

	const [word, setWord] = useState<string>('');

	const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setWord(event.target.value);
	};

	const onClick = async (): Promise<void> => {
		const genericWordWrapper = await fetchWord(word);
		const wordsToAdd = filterWordDataWrapper(genericWordWrapper);

		setWordsList([...wordsList, ...wordsToAdd]);
	};

	return (
		<Box display='flex' justifyContent='center' my={2}>
			<TextField
				label='Add a word'
				onChange={onChange}
				InputProps={{
					endAdornment: (
						<Button variant='contained' onClick={() => onClick} sx={{ mx: 1 }}>
							<Typography>
								Submit
							</Typography>
						</Button>
					)
				}}
			/>
		</Box>
	);
};
