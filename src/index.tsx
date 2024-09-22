import { App } from 'App';
import { ErrorPage } from 'components/ErrorPage';
import React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root') as Element;

try {
	createRoot(rootElement).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
} catch (error) {
	createRoot(rootElement).render(
		<React.StrictMode>
			<ErrorPage error={error} />
		</React.StrictMode>,
	);
}
