import { Link } from '@mui/material';
import React from 'react';

interface CustomLinkProps {
	href: string;
	mx?: number;
	children: React.ReactNode;
}

export const CustomLink = ({ href, mx, children }: CustomLinkProps): React.JSX.Element => (
	<Link
		href={href}
		target='_blank'
		mx={mx}
		sx={{
			textDecoration: 'none',
			'& :hover': {
				color: 'yellow'
			}
		}}>
		{children}
	</Link>
);
