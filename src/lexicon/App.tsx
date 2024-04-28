import { Box } from '@mui/material';
import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { WordList } from './components/WordList';


export const App = (): React.JSX.Element => {
	return (
		<Box id="lexicon">
			<Header />
			<WordList />
		</Box>
	);
};
