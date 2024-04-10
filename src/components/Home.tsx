import { Box, Grid, Paper, Typography, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const Home = (): React.JSX.Element => {
	const StyledLink = styled(Link)`
		text-decoration: none;

		&:active {
			color: black;
		}
	`;

	return (
		<>
			<Grid container justifyContent='center'>
				<Grid item maxWidth='50%'>
					<Paper
						elevation={3}
						sx={{
							m: 5,
							backgroundColor: '#B8D8D8'
						}}>
						<Box p={5}>
							<StyledLink to='/pokemon-directory'>
								<Typography align='center'>
									Pokémon Directory
								</Typography>
							</StyledLink>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</>
	);
};
