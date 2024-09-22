import { Paper, Typography } from '@mui/material';
import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

interface ErrorPageProps {
	error: unknown;
}

export const ErrorPage = ({ error }: ErrorPageProps): React.JSX.Element => {
	let errorMessage: string;

	if (error instanceof Error) {
		errorMessage = error.message;
	} else if (typeof error === 'string') {
		errorMessage = error;
	} else {
		errorMessage = 'An unknown error has occurred.';
		console.error(error);
	}

	return (
		<>
			<Header />
			<Paper
				elevation={3}
				sx={{
					mx: 'auto',
					my: 15,
					width: '33%',
					backgroundColor: '#888888',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					flex: 1
				}}>
				<Typography p={5} align='center'>
					{errorMessage}
				</Typography>
			</Paper>
			<Footer />
		</>
	);
};
