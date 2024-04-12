import { Box, Paper, Typography } from '@mui/material';
import { CustomTooltip } from 'components/custom/CustomTooltip';
import { useFetchSprite } from 'pokemon-directory/api/useFetchSprite';
import { PokemonListContext } from 'pokemon-directory/contexts/PokemonListContext';
import { useUpdatePokemonList, type updatePokemonListProps } from 'pokemon-directory/hooks/useUpdatePokemonList';
import React, { useContext } from 'react';

export const Header = (): React.JSX.Element => {
	const { pokemonList } = useContext(PokemonListContext);

	const updatePokemonList = useUpdatePokemonList();

	const onClick = (name: string): void => {
		let action: updatePokemonListProps['action'] = 'add';
		if (pokemonList.includes(name)) {
			action = 'remove';
		}

		updatePokemonList({ action, pokemonInput: [name], setPokemonInput: () => {} });
	};

	return (
		<Paper elevation={3} sx={{ m: 2, p: 4, backgroundColor: '#7A9E9f' }}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<CustomTooltip
					title='Bastiodon - Click to add or remove.'
					haveCursor
					onClick={() => { onClick('bastiodon'); }}
				>
					<Box
						component='img'
						src={useFetchSprite('bastiodon')}
						alt='aurorus'
						mx={2}
					/>
				</CustomTooltip>
				<Typography
					color='black'
					align='center'
					sx={{
						typography: {
							sm: 'h3',
							xs: 'h6'
						}
					}}
				>
					Pokémon Directory
				</Typography>
				<CustomTooltip
					title='Cradily - Click to add or remove.'
					haveCursor
					onClick={() => { onClick('cradily'); }}
				>
					<Box
						component='img'
						src={useFetchSprite('cradily')}
						alt='cradily'
						mx={2}
					/>
				</CustomTooltip>
			</Box>
		</Paper >
	);
};
