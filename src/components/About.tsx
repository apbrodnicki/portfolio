import { Paper, Typography } from '@mui/material';
import React from 'react';

export const About = (): React.JSX.Element => {
	return (
		<Paper elevation={3} sx={{ m: 5, backgroundColor: '#888888' }}>
			<Typography variant='h5' px={5} py={3}>
				About yo
			</Typography>
		</Paper>
	);
};
