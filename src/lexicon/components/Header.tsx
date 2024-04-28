import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';

export const Header = (): React.JSX.Element => {
	const StyledButton = styled(Button)(() => ({
		textTransform: 'none'
	}));

	return (
		<Box m={2} display='flex' justifyContent='center'>
			<StyledButton variant='text' color='primary'>
				<Typography variant='h3'>
					Lexicon
				</Typography>
			</StyledButton>
		</Box>
	);
};
