import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { CustomLink } from './CustomLink';
import { DescriptionParagraph } from './DescriptionParagraph';

export const Projects = (): React.JSX.Element => (
	<Box py={5}>
		<Typography variant='h6' color='primary'>
			Projects
		</Typography>
		<Box my={2}>
			<CustomLink href='https://pokemon-directory.apbrodnicki.com/'>
				<Typography variant='subtitle1' color='primary'>
					pokemon-directory.apbrodnicki.com
				</Typography>
			</CustomLink>
			<DescriptionParagraph
				text='This is a directory of Pokémon resources using PokéApi, allowing the user to access information about a Pokémon and, generically, about abilities, items, and moves.'
			/>
		</Box>
		<Divider sx={{ borderColor: '#333333', borderWidth: '1px', width: '100%', margin: 'auto' }} />
		<Box my={2}>
			<CustomLink href='https://lexicon.apbrodnicki.com/'>
				<Typography variant='subtitle1' color='primary'>
					lexicon.apbrodnicki.com
				</Typography>
			</CustomLink>
			<DescriptionParagraph
				text='Lexicon fills the void in my life of a perfect word list. I quite enjoy expressing myself through a colorful vernacular and Lexicon helps me maintain and build a word list to strengthen my vocabulary.'
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
					'This project was a great change of pace in what I\'m comfortable working on. It\'s a Discord bot built in discordjs, primarily used to grab reactions from messages and interact with a Google Spreadsheet, performing edits and inserts. It was a great experience working on something outside the scope of a web app.'
				}
			/>
		</Box>
	</Box>
);
