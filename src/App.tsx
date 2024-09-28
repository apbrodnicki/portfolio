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

	return (
		<Box id="portfolio" sx={{ width: { xs: 'unset', sm: '600px' } }}>
			<Header />
			{route === '/' ? (
				<Box
					display='flex'
					flexDirection='column'
					justifyContent='flex-start'
					flex={1}
					mx={2}
				>
					<About />
					<Projects />
				</Box>
			) : (
				<ErrorPage error='Page not found.' />
			)}
			<Footer />
		</Box>
	);
};
