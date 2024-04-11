import { Paper, Typography } from '@mui/material';
import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Header } from './Header';

export const ErrorPage = (): React.JSX.Element => {
	const error = useRouteError();
	let errorMessage: string;

	if (isRouteErrorResponse(error)) {
		errorMessage = error.statusText;
	} else if (error instanceof Error) {
		errorMessage = error.message;
	} else if (typeof error === 'string') {
		errorMessage = error;
	} else {
		console.error(error);
		errorMessage = 'An unknown error has occurred.';
	}

	return (
		<>
			<Header />
			<Paper
				elevation={3}
				sx={{
					mx: 'auto',
					my: 10,
					width: '50%',
					backgroundColor: '#888888',
				}}>
				<Typography p={5} align='center'>
					{errorMessage}
				</Typography>
			</Paper>
		</>
	);
};
