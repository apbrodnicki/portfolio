import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomTooltip } from './custom/CustomTooltip';

export const Header = (): React.JSX.Element => {
	return (
		<AppBar position='static' color='transparent'>
			<Toolbar>
				<Typography variant='h6' color='white' sx={{ flexGrow: 1 }}>
					Alex Brodnicki
				</Typography>
				<Link href='/Alex-Brodnicki-Resume.pdf' target='_blank' mx={1}>
					<Typography variant='h6'>
						Resume
					</Typography>
				</Link>
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
