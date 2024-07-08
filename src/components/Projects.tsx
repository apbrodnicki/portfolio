import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Link, Paper, Typography } from '@mui/material';
import React from 'react';

export const Projects = (): React.JSX.Element => {
	return (
		<Paper elevation={3} sx={{ m: 5, backgroundColor: '#888888' }}>
			<Typography variant='h5' px={5} py={3}>
				Projects
			</Typography>
			<Accordion sx={{ backgroundColor: '#CCCCCC', float: 'right', width: '85%' }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography align='center'>
						Pokémon Directory
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography align='center'>
							I built Pokémon Directory so that I could access information about Pokémon in a clear manner.
					</Typography>
					<Typography align='center'>
							It was also really important for me to be able to easily compare two or more Pokémon and save my searches.
					</Typography>
					<Link href="https://pokemon-directory.apbrodnicki.com/">
						<Typography align='center'>
							You can view the project here!
						</Typography>
					</Link>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={{ backgroundColor: '#CCCCCC', float: 'right', width: '85%' }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography align='center'>
						Lexicon
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography align='center'>
							Lexicon was built because I love words.
					</Typography>
					<Link href="https://lexicon.apbrodnicki.com/">
						<Typography align='center'>
							You can view the project here!
						</Typography>
					</Link>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={{ backgroundColor: '#CCCCCC', float: 'right', width: '85%' }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography align='center'>
						Movies and Shows Archive
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Link href="">
						<Typography align='center'>
						You can view the project here!
						</Typography>
					</Link>
				</AccordionDetails>
			</Accordion>
		</Paper>
	);
};
