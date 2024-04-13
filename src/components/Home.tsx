import { Box } from '@mui/material';
import React from 'react';
import { About } from './About';
import { Footer } from './Footer';
import { Header } from './Header';
import { Projects } from './Projects';

export const Home = (): React.JSX.Element => {
	return (
		<Box id="home">
			<Header />
			<Box
				display='flex'
				flexDirection='column'
				justifyContent='center'
				flex={1}
				mt={3}
			>
				<About />
				<Box>
					START{import.meta.env.VITE_EC2_INSTANCE_IP}END
				</Box>
				<Box>
					START{import.meta.env.VITE_LEXICON_SERVER_PORT}END
				</Box>
				<Projects />
			</Box>
			<Footer />
		</Box>
	);
};
