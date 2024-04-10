import { Alert, Snackbar } from '@mui/material';
import { SnackbarContext } from 'pokemon-directory/contexts/SnackbarContext';
import React, { useContext } from 'react';

export const CustomSnackbar = (): React.JSX.Element => {
	const { snackbarOpen, setSnackbarOpen, snackbarMessage, snackbarColor } = useContext(SnackbarContext);

	return (
		<Snackbar
			open={snackbarOpen}
			autoHideDuration={5000}
			onClose={() => { setSnackbarOpen(false); }}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
		>
			<Alert
				severity={snackbarColor}
				variant='filled'
				sx={{ width: '100%' }}
			>
				{snackbarMessage}
			</Alert>
		</Snackbar>
	);
};
