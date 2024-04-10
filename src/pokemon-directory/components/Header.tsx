import { Box, Paper, Typography } from '@mui/material';
import { useFetchSprite } from 'pokemon-directory/api/useFetchSprite';
import { CustomTooltip } from 'pokemon-directory/components/custom/CustomTooltip';
import { PokemonListContext } from 'pokemon-directory/contexts/PokemonListContext';
import { useUpdatePokemon, type updatePokemonProps } from 'pokemon-directory/helper/useUpdatePokemon';
import React, { useContext } from 'react';

export const Header = (): React.JSX.Element => {
	const { pokemonList } = useContext(PokemonListContext);

	const updatePokemon = useUpdatePokemon();

	const onClick = (name: string): void => {
		let action: updatePokemonProps['action'] = 'add';
		if (pokemonList.includes(name)) {
			action = 'remove';
		}

		updatePokemon({ action, pokemonInput: [name], setPokemonInput: () => {} });
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
