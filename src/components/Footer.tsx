import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Box, Button, Link, Typography } from '@mui/material';
import React from 'react';

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
			<Typography variant='subtitle1' color='primary'>
				Feel free to email me or send a message on LinkedIn.
			</Typography>
			<Box display='flex' alignItems='center' justifyContent='space-between'>
				<Link href='mailto:apbrodnicki@gmail.com' sx={{ textDecoration: 'none' }}>
					<Typography variant='subtitle1' color='primary' sx={{ float: 'right' }}>
						apbrodnicki@gmail.com
					</Typography>
				</Link>
				<Button variant='contained' onClick={onClick}>
					<KeyboardDoubleArrowUpIcon />
				</Button>
			</Box>
		</Box>
	);
};
