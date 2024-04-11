import { Home } from 'components/Home';
import React, { useEffect } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import './App.css';

export const App = (): React.JSX.Element => {
	const outlet = useOutlet();
	const pathname = useLocation().pathname;

	useEffect(() => {
		// Update favicon and title based on route
		const updateFaviconTitle = (): void => {
			const favicon = document.getElementById('favicon') as HTMLLinkElement;
			const title = document.getElementById('title') as HTMLTitleElement;

			if (pathname.includes('pokemon-directory')) {
				favicon.href = '/pokeball-icon.svg';
				title.text = 'Pokémon Directory';
			} else if (pathname.includes('lexicon')) {
				favicon.href = '/dictionary-icon.svg';
				title.text = 'Lexicon';
			} else if (pathname.includes('movies-and-shows-archive')) {
				favicon.href = '/popcorn-icon.svg';
				title.text = 'Movies and Shows Archive';
			} else {
				favicon.href = '/code-icon.svg';
				title.text = 'Portfolio';
			}
		};

		updateFaviconTitle();
	}, [pathname]);

	return (
		<>
			{outlet ?? <Home />}
		</>
	);
};
