import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomTooltip } from './custom/CustomTooltip';

export const Header = (): React.JSX.Element => {
	return (
		<AppBar position='static' sx={{ backgroundColor: '#222222' }}>
			<Toolbar>
				<Typography variant='h6' sx={{ flexGrow: 1 }}>
						Alex Brodnicki
				</Typography>
				<Link href='https://github.com/apbrodnicki' target='_blank' mx={1}>
					<CustomTooltip title='GitHub'>
						<GitHubIcon fontSize='large' />
					</CustomTooltip>
				</Link>
				<Link href='https://www.linkedin.com/in/alex-brodnicki/' target='_blank' mx={1}>
					<CustomTooltip title='LinkedIn'>
						<LinkedInIcon fontSize='large' />
					</CustomTooltip>
				</Link>
			</Toolbar>
		</AppBar>
	);
};
