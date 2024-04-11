import React from 'react';
import { About } from './About';
import { Header } from './Header';
import { Projects } from './Projects';

export const Home = (): React.JSX.Element => {
	return (
		<>
			<Header />
			<About />
			<Projects />
		</>
	);
};
