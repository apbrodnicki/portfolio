import { Box } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { WordList } from './components/WordList';
import { ShowOffensiveWordsContext } from './contexts/ShowOffensiveWordsContext';



export const App = (): React.JSX.Element => {
	const [showOffensiveWords, setShowOffensiveWords] = useState<boolean>(false);

	return (
		<Box id="lexicon">
			<ShowOffensiveWordsContext.Provider value={{ showOffensiveWords, setShowOffensiveWords }}>
				<Header />
				<WordList />
			</ShowOffensiveWordsContext.Provider>
		</Box>
	);
};
