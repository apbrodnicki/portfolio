import GitHubIcon from '@mui/icons-material/GitHub';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const Header = (): React.JSX.Element => (
	<AppBar position='sticky' color='transparent'>
		<Toolbar>
			<Box flexGrow={1}>
				<GraphicEqIcon color='primary' />
			</Box>
			<Link href='/Alex-Brodnicki-Resume.pdf' target='_blank' mx={1} sx={{ textDecoration: 'none' }}>
				<Typography variant='h6' color='primary'>
					Resume
				</Typography>
			</Link>
			<Link href='https://github.com/apbrodnicki/' target='_blank' mx={1}>
				<GitHubIcon fontSize='large' />
			</Link>
			<Link href='https://www.linkedin.com/in/alex-brodnicki/' target='_blank' mx={1}>
				<LinkedInIcon fontSize='large' />
			</Link>
		</Toolbar>
	</AppBar>
);
