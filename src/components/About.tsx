import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { AiOutlineDotNet as DotNetIcon } from 'react-icons/ai';
import { BiLogoTypescript as TypeScriptIcon } from 'react-icons/bi';
import { FaAngular as AngularIcon, FaGitAlt as GitIcon, FaPhp as PhpIcon, FaReact as ReactIcon } from 'react-icons/fa';
import { GrMysql as MySqlIcon } from 'react-icons/gr';
import { RiJavascriptFill as JavaScriptIcon } from 'react-icons/ri';
import { SiMongodb as MongoDbIcon } from 'react-icons/si';
import { TbBrandCSharp as CSharpIcon } from 'react-icons/tb';
import { DescriptionParagraph } from './DescriptionParagraph';

export const About = (): React.JSX.Element => {
	const skills = [
		{ name: 'JavaScript', icon: <JavaScriptIcon size={36} /> },
		{ name: 'TypeScript', icon: <TypeScriptIcon size={36} /> },
		{ name: 'React', icon: <ReactIcon size={36} /> },
		{ name: 'Angular', icon: <AngularIcon size={36} /> },
		{ name: 'C#', icon: <CSharpIcon size={36} /> },
		{ name: '.NET', icon: <DotNetIcon size={36} /> },
		{ name: 'PHP', icon: <PhpIcon size={36} /> },
		{ name: 'MySQL', icon: <MySqlIcon size={36} /> },
		{ name: 'MongoDB', icon: <MongoDbIcon size={36} /> },
		{ name: 'Git', icon: <GitIcon size={36} /> }
	];

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
					'I\'m a passionate and motivated software engineer. I love working on web applications, it\'s a great joy of mine and the reason why I created this portfolio page. You can find some of the personal projects that I have built down below.'
				}
			/>
			<DescriptionParagraph
				text={
					'I\'ve been working in this field for over three years now and have garnered experience in a variety of technologies, including...'
				}
			/>
			<List
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					height: 'auto'
				}}
			>
				{skills.map((skill, index: number) => (
					<ListItem
						key={index}
						sx={{
							width: '50%'
						}}
					>
						<ListItemIcon>{skill.icon}</ListItemIcon>
						<ListItemText primary={skill.name} primaryTypographyProps={{ color: 'primary' }} />
					</ListItem>
				))}
			</List>
			<DescriptionParagraph
				text={'...among others.'}
			/>
		</Box>
	);
};
