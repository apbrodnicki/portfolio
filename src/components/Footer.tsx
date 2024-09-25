import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { CustomLink } from './CustomLink';

export const Footer = (): React.JSX.Element => {
	const onClick = (): void => {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<Box pb={3}>
			<Typography variant='h6' color='primary'>
				{'Let\'s get in touch!'}
			</Typography>
			<Typography variant='subtitle2' color='primary'>
				Feel free to email me or send a message on LinkedIn.
			</Typography>
			<Box display='flex' alignItems='center' justifyContent='space-between'>
				<CustomLink href='mailto:apbrodnicki@gmail.com'>
					<Typography variant='subtitle2' color='primary'>
						apbrodnicki@gmail.com
					</Typography>
				</CustomLink>
				<Button variant='contained' onClick={onClick}>
					<KeyboardDoubleArrowUpIcon />
				</Button>
			</Box>
		</Box>
	);
};
