import { App } from 'components/App';
import { ErrorPage } from 'components/ErrorPage';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'pokemon-directory',
				element: <>pokemon-directory</>
			},
			{
				path: 'lexicon',
				element: <>lexicon</>
			},
			{
				path: 'movies-and-shows-archive',
				element: <>movies-and-shows-archive</>
			}
		]
	},
]);

createRoot(document.getElementById('root') as Element).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
