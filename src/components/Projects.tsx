import { Box, Divider, Typography } from '@mui/material';
import LexiconHomeImage from 'assets/lexicon/lexicon-home.png';
import PokemonDirectoryHomeImage from 'assets/pokemon-directory/pokemon-directory-home.png';
import React from 'react';
import { CustomLink } from './CustomLink';
import { DescriptionParagraph } from './DescriptionParagraph';

export const Projects = (): React.JSX.Element => (
	<Box py={5}>
		<Typography variant='h6' color='primary'>
			Projects
		</Typography>
		<Box width='100%' my={2}>
			<CustomLink href='https://pokemon-directory.apbrodnicki.com/'>
				<Typography variant='subtitle1' color='primary'>
					pokemon-directory.apbrodnicki.com
				</Typography>
			</CustomLink>
			<Box
				component='img'
				src={PokemonDirectoryHomeImage}
				alt='pokemon-directory-home-page'
				width='90%'
				height='auto'
				m={2}
			/>
			<DescriptionParagraph
				text='This is a directory of Pokémon resources, allowing the user to access information about Pokémon and research data relating to moves, typings, and more.'
			/>
			<DescriptionParagraph
				text={
					'I really enjoyed utilizing Material UI (a React component library) to a much fuller potential than I had previously. I fleshed out a Data Grid, built a highly customized Autocomplete input, and a lot more. Additionally, a big challenge I overcame with this project was learning how to call a custom hook in an event based manner, like through a button call. This means that even though the hook is called conditionally, it\'s still not breaking any of the rules of React.'
				}
			/>
		</Box>
		<Divider sx={{ borderColor: '#333333', borderWidth: '1px', width: '100%', margin: 'auto' }} />
		<Box my={2}>
			<CustomLink href='https://lexicon.apbrodnicki.com/'>
				<Typography variant='subtitle1' color='primary'>
					lexicon.apbrodnicki.com
				</Typography>
			</CustomLink>
			<Box
				component='img'
				src={LexiconHomeImage}
				alt='lexicon-home-page'
				width='90%'
				height='auto'
				m={2}
			/>
			<DescriptionParagraph
				text='Lexicon is a word list app in which users can add words and have them saved long term, building their own personal dictionary. My primary motivation for creating Lexicon was to have a user interface that better suits my needs than any existing ones.'
			/>
		</Box>
		<Divider sx={{ borderColor: '#333333', borderWidth: '1px', width: '100%', margin: 'auto' }} />
		<Box my={2}>
			<CustomLink href='https://github.com/apbrodnicki/draft-league-bot/'>
				<Typography variant='subtitle1' color='primary'>
					github.com/apbrodnicki/draft-league-bot
				</Typography>
			</CustomLink>
			<DescriptionParagraph
				text={
					'Draft League Bot is a Discord bot built in discordjs, primarily used to grab reactions from messages and interact with a Google Spreadsheet, performing edits and inserts. It was a great experience working on something outside the scope of a web app.'
				}
			/>
		</Box>
	</Box>
);
