import { createTheme, ThemeProvider } from '@mui/material';
import { App } from 'App';
import { ErrorPage } from 'components/ErrorPage';
import React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root') as Element;

const theme = createTheme({
	palette: {
		primary: {
			main: '#CCCCCC'
		},
		secondary: {
			main: '#222222'
		}
	},
	typography: {
		h6: {
			fontWeight: 'bold'
		},
		subtitle1: {
			fontStyle: 'italic'
		},
		subtitle2: {
			fontSize: '1rem'
		}
	}
});

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
