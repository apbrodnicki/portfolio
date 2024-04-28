import { Box, Card, CardContent, Dialog, DialogTitle, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { capitalizeFirstLetter } from 'helper';
import { useFetchWords } from 'lexicon/api/useFetchWords';
import { wordsList } from 'lexicon/data';
import type { Word } from 'lexicon/models/models';
import React, { useState } from 'react';

export const WordList = (): React.JSX.Element => {
	const [openId, setOpenId] = useState<string>('');
	const words = useFetchWords({ wordsList });

	const onClick = (wordId: string): void => {
		setOpenId(wordId);
	};

	return (
		<Box
			display='flex'
			justifyContent='center'
			flex={1}
		>
			<List>
				{words.map((word: Word, index: number) => (
					<ListItem key={index}>
						<ListItemButton onClick={() => { onClick(word.id); }}>
							<ListItemText
								primary={`${capitalizeFirstLetter(word.id)} (${word.speechPart})`}
								sx={{ mx: 5 }}
							/>
							<ListItemText
								key={index}
								primary={capitalizeFirstLetter(word.definitions[0])}
								sx={{ mx: 1, textAlign: 'left' }}
							/>
						</ListItemButton>
						<Dialog open={openId === word.id} onClose={() => { setOpenId(''); }}>
							<DialogTitle>{capitalizeFirstLetter(word.id)}</DialogTitle>
							<Card>
								{word.definitions.map((definition, index) => {
									if (word.definitions.length > 1) {
										return (
											<CardContent key={index} sx={{ display: 'flex' }}>
												<Box mr={2}>
													<Typography>
														{index + 1}
													</Typography>
												</Box>
												<Typography>
													{definition}
												</Typography>
											</CardContent>
										);
									} else {
										return (
											<CardContent key={index} sx={{ display: 'flex' }}>
												<Typography>
													{definition}
												</Typography>
											</CardContent>
										);
									}
								})}
							</Card>
						</Dialog>
					</ListItem>
				))}
			</List>
		</Box>
	);
};
