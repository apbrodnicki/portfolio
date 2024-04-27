import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Box, Button, Link, Paper, Typography } from '@mui/material';
import React from 'react';

export const Footer = (): React.JSX.Element => {
	const onClick = (): void => {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		});
	};
	return (
		<Paper elevation={3} sx={{ m: 2, p: 4, backgroundColor: '#888888' }}>
			<Box display='flex' alignItems='center' justifyContent='space-between'>
				<Link href='mailto:apbrodnicki@gmail.com' color='#111111'>
					<Typography variant='subtitle2' align='center'>
						Email me!
					</Typography>
				</Link>
				<Button variant='contained' onClick={onClick}>
					<KeyboardDoubleArrowUpIcon />
				</Button>
			</Box>
		</Paper>
	);
};
