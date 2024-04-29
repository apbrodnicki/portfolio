import { Box, Card, CardContent, Dialog, DialogTitle, List, ListItem, ListItemButton, ListItemText, Typography, styled } from '@mui/material';
import { capitalizeFirstLetter } from 'helper';
import { useFetchWords } from 'lexicon/api/useFetchWords';
import { ShowOffensiveWordsContext } from 'lexicon/contexts/ShowOffensiveWordsContext';
import { wordsList } from 'lexicon/data';
import type { Word } from 'lexicon/models/models';
import React, { useContext, useState } from 'react';

export const WordsList = (): React.JSX.Element => {
	const { showOffensiveWords } = useContext(ShowOffensiveWordsContext);

	const [openId, setOpenId] = useState<string>('');

	const words = useFetchWords({ wordsList });
	const alphabetizedWords = words.sort((a, b) => a.id.toLowerCase().localeCompare(b.id.toLowerCase()));

	const onClick = (wordId: string): void => {
		setOpenId(wordId);
	};

	const StyledListItemButton = styled(ListItemButton)(() => ({
		'&:hover': {
			boxShadow: `
				0px 3px 3px -2px rgba(0, 0, 0, 0.2),
				0px 3px 4px 0px rgba(0, 0, 0, 0.14),
				0px 1px 8px 0px rgba(0, 0, 0, 0.12)
			`,
			transition: 'box-shadow 0.2s ease'
		}
	}));

	return (
		<Box
			display='flex'
			justifyContent='center'
			flex={1}
		>
			<List>
				{alphabetizedWords.map((word: Word, index: number) => (
					<ListItem key={index} sx={{ filter: showOffensiveWords ? 'none' : word.offensive ? 'blur(3px)' : 'none' }}>
						<StyledListItemButton onClick={() => { onClick(word.id); }}>
							<ListItemText
								primary={`${capitalizeFirstLetter(word.id)} (${word.speechPart})`}
								sx={{ mx: 5 }}
							/>
							<ListItemText
								key={index}
								primary={capitalizeFirstLetter(word.definitions[0])}
								sx={{ mx: 1, textAlign: 'left' }}
							/>
						</StyledListItemButton>
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
							<Card>
								{word.stems.map((stem: string, index: number) => (
									<CardContent key={index}>
										<Typography>
											{stem}
										</Typography>
									</CardContent>
								))}
							</Card>
						</Dialog>
					</ListItem>
				))}
			</List>
		</Box>
	);
};
