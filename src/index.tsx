import { ThemeProvider } from '@mui/material';
import { App } from 'components/App';
import { ErrorPage } from 'components/ErrorPage';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { theme } from 'theme';

const rootElement = document.getElementById('root') as Element;

try {
	createRoot(rootElement).render(
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</React.StrictMode>
	);
} catch (error) {
	createRoot(rootElement).render(
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<ErrorPage error={error} />
			</ThemeProvider>
		</React.StrictMode>
	);
}
