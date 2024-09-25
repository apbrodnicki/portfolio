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
				color: '#8E8E8E'
			},
			'& :focus': {
				color: '#8E8E8E'
			},
			'& :active': {
				color: '#8E8E8E'
			}
		}}>
		{children}
	</Link>
);
