import { Box, Typography } from '@mui/material';
import React from 'react';

export const About = (): React.JSX.Element => (
	<Box py={5}>
		<Typography variant='h6' color='primary'>
			Alex Brodnicki
		</Typography>
		<Typography variant='h6' color='primary'>
			Software Engineer
		</Typography>
		<Typography variant='subtitle1' color='primary' m={2} width='90%' sx={{ float: 'right' }}>
			{'I\'m a passionate and motivated full stack software engineer.'}
		</Typography>
		<Typography variant='subtitle1' color='primary' m={2} width='90%' sx={{ float: 'right' }}>
			{'I\'m seeking an opportunity to develop and grow my programming skills in a professional, team-based environment.'}
		</Typography>
	</Box>
);
