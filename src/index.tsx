import { App } from 'App';
import { ErrorPage } from 'components/ErrorPage';
import { App as MoviesAndShowsArchiveApp } from 'movies-and-shows-archive/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/movies-and-shows-archive',
				element: <MoviesAndShowsArchiveApp />
			}
		]
	},
]);

createRoot(document.getElementById('root') as Element).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
