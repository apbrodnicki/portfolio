import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { DescriptionParagraph } from './DescriptionParagraph';

export const About = (): React.JSX.Element => {
	const skills: string[] = ['JavaScript', 'TypeScript', 'React', 'Angular', 'C#', '.NET', 'PHP', 'MySQL', 'MongoDB'];

	return (
		<Box pt={5}>
			<Typography variant='h6' color='primary'>
				Alex Brodnicki
			</Typography>
			<Typography variant='h6' color='primary'>
				Software Engineer
			</Typography>
			<DescriptionParagraph
				text={
					'Hi, my name is Alex and I\'m a passionate and motivated software engineer. I love working on web applications, it\'s a passion of mine and the reason why I created this portfolio page. You can find the personal projects that I have built further down the page.'
				}
			/>
			<DescriptionParagraph
				text={'I\'ve been working in this field for over three years now and have garnered experience in a variety of technologies, including...'}
			/>
			<List
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					height: 'auto'
				}}
			>
				{skills.map((skill: string, index: number) => (
					<ListItem
						key={index}
						sx={{
							width: '50%'
						}}
					>
						<ListItemText primary={skill} primaryTypographyProps={{ color: 'primary' }} />
					</ListItem>
				))}
			</List>
			<DescriptionParagraph
				text={'...among others.'}
			/>
		</Box>
	);
};
