import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Box } from '@mui/material';
import { CustomTooltip } from 'pokemon-directory/components/custom/CustomTooltip';
import { PokemonListContext } from 'pokemon-directory/contexts/PokemonListContext';
import { SnackbarContext } from 'pokemon-directory/contexts/SnackbarContext';
import React, { useContext } from 'react';

export const RemoveCellHeader = (): React.JSX.Element => {
	const { setSnackbarOpen, setSnackbarMessage, setSnackbarColor } = useContext(SnackbarContext);
	const { setPokemonList } = useContext(PokemonListContext);

	const onIconClick = (): void => {
		setSnackbarMessage('Success: Every Pokémon has been removed.');
		setSnackbarColor('success');
		setSnackbarOpen(true);
		setPokemonList([]);
	};

	return (
		<CustomTooltip title='Remove all Pokémon from list.'>
			<Box display='flex' sx={{ cursor: 'pointer' }}>
				<DeleteTwoToneIcon onClick={onIconClick} />
			</Box>
		</CustomTooltip>
	);
};
