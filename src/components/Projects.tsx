import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Paper, Typography, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const Projects = (): React.JSX.Element => {
	const StyledLink = styled(Link)`
		text-decoration: none;

		&:active {
			color: black;
		}
	`;

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
					<StyledLink to='/pokemon-directory' target='_blank'>
						<Typography align='center'>
							You can view the project here!
						</Typography>
					</StyledLink>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={{ backgroundColor: '#CCCCCC', float: 'right', width: '85%' }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography align='center'>
						Lexicon
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<StyledLink to='/lexicon' target='_blank'>
						<Typography align='center'>
							Lexicon was built because I love words.
						</Typography>
						<Typography align='center'>

						</Typography>
					</StyledLink>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={{ backgroundColor: '#CCCCCC', float: 'right', width: '85%' }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography align='center'>
						Movies and Shows Archive
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<StyledLink to='/movies-and-shows-archive' target='_blank'>
						<Typography align='center'>
							Movies and Shows Archive
						</Typography>
					</StyledLink>
				</AccordionDetails>
			</Accordion>
		</Paper>
	);
};
