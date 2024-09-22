import { Box } from '@mui/material';
import { About } from 'components/About';
import { ErrorPage } from 'components/ErrorPage';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Projects } from 'components/Projects';
import React from 'react';
import './App.css';
// TODO: Add custom theme.
export const App = (): React.JSX.Element => {
	const route = window.location.pathname;

	if (route !== '/') {
		return <ErrorPage error='Page not found.' />;
	}

	return (
		<Box id="portfolio">
			<Header />
			<Box
				display='flex'
				flexDirection='column'
				justifyContent='center'
				flex={1}
				mt={3}
			>
				<About />
				<Projects />
			</Box>
			<Footer />
		</Box>
	);
};
