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
		<Paper elevation={3} sx={{ m: 5, backgroundColor: '#666666' }}>
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
					<StyledLink to='/pokemon-directory'>
						<Typography align='center'>
							Pokémon Directory
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
					<StyledLink to='/lexicon'>
						<Typography align='center'>
							Lexicon
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
					<StyledLink to='/movies-and-shows-archive'>
						<Typography align='center'>
							Movies and Shows Archive
						</Typography>
					</StyledLink>
				</AccordionDetails>
			</Accordion>
		</Paper>
	);
};
