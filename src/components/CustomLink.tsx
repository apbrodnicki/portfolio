import { Link } from '@mui/material';
import React from 'react';

interface CustomLinkProps {
	href: string;
	target?: string;
	mx?: number;
	children: React.ReactNode;
}

export const CustomLink = ({ href, target, mx, children }: CustomLinkProps): React.JSX.Element => (
	<Link
		href={href}
		target={target ?? '_blank'}
		display='inline-block'
		mx={mx}
		sx={{
			textDecoration: 'none',
			'& :hover': {
				color: '#4b46e9'
			},
			'& :focus': {
				color: '#4b46e9'
			},
			'& :active': {
				color: '#4b46e9'
			}
		}}>
		{children}
	</Link>
);
