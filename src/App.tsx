import { Home } from 'components/Home';
import React from 'react';
import { useOutlet } from 'react-router-dom';
import './App.css';
// TODO:
// Add custom theme.
export const App = (): React.JSX.Element => {
	const outlet = useOutlet();

	return (
		<>
			{outlet ?? <Home />}
		</>
	);
};
