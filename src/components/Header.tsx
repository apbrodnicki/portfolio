import GitHubIcon from '@mui/icons-material/GitHub';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomLink } from './CustomLink';

export const Header = (): React.JSX.Element => (
	<AppBar position='sticky' color='secondary'>
		<Toolbar>
			<Box flexGrow={1}>
				<GraphicEqIcon color='primary' />
			</Box>
			<CustomLink href='/Alex-Brodnicki-Resume.pdf'mx={1}>
				<Typography variant='h6' color='primary'>
					Resume
				</Typography>
			</CustomLink>
			<CustomLink href='https://github.com/apbrodnicki/'mx={1}>
				<GitHubIcon fontSize='large' />
			</CustomLink>
			<CustomLink href='https://www.linkedin.com/in/alex-brodnicki/'mx={1}>
				<LinkedInIcon fontSize='large' />
			</CustomLink>
		</Toolbar>
	</AppBar>
);
