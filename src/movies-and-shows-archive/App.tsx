import React from 'react';
import { fetchMovie } from './api/fetchMovie';

export const App = (): React.JSX.Element => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	void fetchMovie('Jurassic Park', 1993).then((response: any) => response).then((result) => { console.log(result); });

	return (
		<>
			movies and shows archive
		</>
	);
};
