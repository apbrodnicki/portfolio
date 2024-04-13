import { Link, Paper, Typography } from '@mui/material';
import React from 'react';

export const Footer = (): React.JSX.Element => {
	return (
		<Paper elevation={3} sx={{ m: 2, p: 4, backgroundColor: '#888888' }}>
			<Typography variant='subtitle2' align='center'>
				<Link href='mailto:apbrodnicki@gmail.com' color='#111111'>
					Email me!
				</Link>
			</Typography>
		</Paper>
	);
};
