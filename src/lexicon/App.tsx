import { Box } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { WordsList } from './components/WordsList';
import { ShowOffensiveWordsContext } from './contexts/ShowOffensiveWordsContext';

export const App = (): React.JSX.Element => {
	const [showOffensiveWords, setShowOffensiveWords] = useState<boolean>(false);

	return (
		<Box id="lexicon">
			<ShowOffensiveWordsContext.Provider value={{ showOffensiveWords, setShowOffensiveWords }}>
				<Header />
				<WordsList />
				<Footer />
			</ShowOffensiveWordsContext.Provider>
		</Box>
	);
};
