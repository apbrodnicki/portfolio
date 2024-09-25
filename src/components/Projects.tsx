import { Box, Link, Typography } from '@mui/material';
import React from 'react';

export const Projects = (): React.JSX.Element => (
	<Box py={5}>
		<Typography variant='h6' color='primary'>
			Projects
		</Typography>
		<Typography variant='subtitle1' color='primary'>
			Pokémon Directory
		</Typography>
		<Typography variant='subtitle1' color='primary' m={2} width='90%' sx={{ float: 'right' }}>
			This is a directory of Pokémon resources using PokéApi, allowing the user to access information about a Pokémon and, generically, about abilities, items, and moves.
		</Typography>
		<Link href="https://pokemon-directory.apbrodnicki.com/" target='_blank' sx={{ textDecoration: 'none' }}>
			<Typography align='center'>
				You can view the project here!
			</Typography>
		</Link>
		<Typography variant='subtitle1' color='primary'>
			Lexicon
		</Typography>
		<Typography variant='subtitle1' color='primary' m={2} width='90%' sx={{ float: 'right' }}>
			Lexicon fills the void in my life of a perfect word list. I quite enjoy expressing myself through a colorful vernacular and Lexicon helps me maintain and build a word list to strengthen my vocabulary.
		</Typography>
		<Link href="https://lexicon.apbrodnicki.com/" target='_blank' sx={{ textDecoration: 'none' }}>
			<Typography align='center'>
				You can view the project here!
			</Typography>
		</Link>
	</Box>
);
