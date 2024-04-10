import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AppBar, Box, Grid, Link as MuiLink, Paper, Toolbar, Typography, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { CustomTooltip } from './custom/CustomTooltip';

export const Home = (): React.JSX.Element => {
	const StyledLink = styled(Link)`
		text-decoration: none;

		&:active {
			color: black;
		}
	`;

	return (
		<>
			<AppBar position='static' sx={{ backgroundColor: 'black' }}>
				<Toolbar>
					<Typography sx={{ flexGrow: 1 }}>
						Alex Brodnicki
					</Typography>
					<MuiLink href='https://github.com/apbrodnicki' target='_blank' mx={1}>
						<CustomTooltip title='GitHub'>
							<GitHubIcon fontSize='large' />
						</CustomTooltip>
					</MuiLink>
					<MuiLink href='https://www.linkedin.com/in/alex-brodnicki/' target='_blank' mx={1}>
						<CustomTooltip title='LinkedIn'>
							<LinkedInIcon fontSize='large' />
						</CustomTooltip>
					</MuiLink>
				</Toolbar>
			</AppBar>
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
