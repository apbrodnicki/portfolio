import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

export const About = (): React.JSX.Element => {
	return (
		<Box display='flex'>
			<Paper elevation={3} sx={{ m: 5, backgroundColor: '#888888', width: { xs:'100%', lg: '60%' } }}>
				<Typography variant='h5' px={5} py={3}>
					About Me
				</Typography>
				<Typography m={2} width='85%' sx={{ float: 'right' }}>
					My name is Alex Brodnicki.
				</Typography>
				<Typography m={2} width='85%' sx={{ float: 'right' }}>
					{'I\'m a passionate and motivated full stack software engineer.'}
				</Typography>
				<Typography m={2} width='85%' sx={{ float: 'right' }}>
					{'I\'m seeking an opportunity to develop and grow my programming skills in a professional, team-based environment.'}
				</Typography>
			</Paper>
			<Box
				component='img'
				src='/Alexander the Great.jpg'
				alt='photo'
				mx={2}
				width='35%'
				display={{ xs: 'none', lg: 'block' }}
			/>
		</Box>
	);
};
