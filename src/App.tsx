import { Home } from 'components/Home';
import React, { useEffect } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

export const App = (): React.JSX.Element => {
	const outlet = useOutlet();
	const pathname = useLocation().pathname;

	useEffect(() => {
		// Update favicon and title based on route
		const updateFaviconTitle = (): void => {
			const favicon = document.getElementById('favicon') as HTMLLinkElement;
			const title = document.getElementById('title');

			if (favicon !== null && title !== null) {
				if (pathname.includes('pokemon-directory')) {
					favicon.href = '/pokeball-icon.svg';
					title.textContent = 'Pokémon Directory';
				} else if (pathname.includes('lexicon')) {
					favicon.href = '/dictionary-icon.svg';
					title.textContent = 'Lexicon';
				} else if (pathname.includes('movies-and-shows-archive')) {
					favicon.href = '/vite.png';
					title.textContent = 'Movies and Shows Archive';
				} else {
					favicon.href = '/vite.svg';
					title.textContent = 'Portfolio';
				}
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
