import { Box, Typography } from '@mui/material';
import React from 'react';

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
		<Box
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			flex={1}
			mx={2}
		>
			<Typography variant='h6' color='primary'>
				{errorMessage}
			</Typography>
		</Box>
	);
};
