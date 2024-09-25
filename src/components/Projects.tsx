import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import { DescriptionParagraph } from './DescriptionParagraph';

export const Projects = (): React.JSX.Element => (
	<Box py={5}>
		<Typography variant='h6' color='primary'>
			Projects
		</Typography>
		<Typography variant='subtitle1' color='primary'>
			Pokémon Directory
		</Typography>
		<DescriptionParagraph
			text='This is a directory of Pokémon resources using PokéApi, allowing the user to access information about a Pokémon and, generically, about abilities, items, and moves.'
		/>
		<Typography align='center'>
			<Link href="https://pokemon-directory.apbrodnicki.com/" target='_blank' sx={{ textDecoration: 'none' }}>
				pokemon-directory.apbrodnicki.com
			</Link>
		</Typography>
		<Typography variant='subtitle1' color='primary'>
			Lexicon
		</Typography>
		<DescriptionParagraph
			text='Lexicon fills the void in my life of a perfect word list. I quite enjoy expressing myself through a colorful vernacular and Lexicon helps me maintain and build a word list to strengthen my vocabulary.'
		/>
		<Typography align='center'>
			<Link href="https://lexicon.apbrodnicki.com/" target='_blank' sx={{ textDecoration: 'none' }}>
				lexicon.apbrodnicki.com
			</Link>
		</Typography>
		<Typography variant='subtitle1' color='primary'>
			Draft League Bot
		</Typography>
		<DescriptionParagraph
			text={
				'This project was a great change of pace in what I\'m comfortable with. It\'s a Discord bot built in discordjs, primarily used to grab reactions from messages and interact with a Google Spreadsheet, performing edits and inserts.'
			}
		/>
		<Typography align='center'>
			<Link href="https://github.com/apbrodnicki/draft-league-bot/" target='_blank' sx={{ textDecoration: 'none' }}>
				github.com/apbrodnicki/draft-league-bot
			</Link>
		</Typography>
	</Box>
);
