import { Typography } from '@mui/material';
import React from 'react';

interface DescriptionParagraphProps {
	text: string;
}

export const DescriptionParagraph = ({ text }: DescriptionParagraphProps): React.JSX.Element => (
	<Typography
		variant='subtitle2'
		color='primary'
		margin={2}
		width='90%'
	>
		{text}
	</Typography>
);
