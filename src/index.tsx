import { App } from 'App';
import { ErrorPage } from 'components/ErrorPage';
import { App as LexiconApp } from 'lexicon/App';
import { App as MoviesAndShowsArchiveApp } from 'movies-and-shows-archive/App';
import { App as PokemonDirectoryApp } from 'pokemon-directory/App';
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
				path: '/pokemon-directory',
				element: <PokemonDirectoryApp />
			},
			{
				path: '/lexicon',
				element: <LexiconApp />
			},
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
