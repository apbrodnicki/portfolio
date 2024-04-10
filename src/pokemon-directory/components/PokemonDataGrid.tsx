import { Box, CardMedia, Paper } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useFetchAbilityDescriptions } from 'pokemon-directory/api/useFetchAbilityDescriptions';
import { useFetchPokemon } from 'pokemon-directory/api/useFetchPokemon';
import { useFetchTypes } from 'pokemon-directory/api/useFetchTypes';
import loader from 'pokemon-directory/assets/loader.webm';
import { PokemonListContext } from 'pokemon-directory/contexts/PokemonListContext';
import { getDataGridColumns } from 'pokemon-directory/helper/getDataGridColumns';
import { reduceArray } from 'pokemon-directory/helper/helper';
import { type Pokemon } from 'pokemon-directory/models/models';
import React, { useContext, useState } from 'react';

export const PokemonDataGrid = (): React.JSX.Element => {
	const { pokemonList } = useContext(PokemonListContext);

	const [isLoadingPokemon, setIsLoadingPokemon] = useState<boolean>(true);
	const [isLoadingAbilityDescriptions, setIsLoadingAbilityDescriptions] = useState<boolean>(true);
	const [isLoadingTypes, setIsLoadingTypes] = useState<boolean>(true);
	const isLoading = isLoadingPokemon || isLoadingAbilityDescriptions || isLoadingTypes;

	const pokemon = useFetchPokemon({ pokemonList, setIsLoadingPokemon });

	const abilities = reduceArray(pokemon.map(mon => mon.abilities));
	const abilitiesWithDescriptions = useFetchAbilityDescriptions({ abilities, setIsLoadingAbilityDescriptions });

	const typesList = reduceArray(pokemon.map(mon => mon.types));
	const types = useFetchTypes({ typesList, setIsLoadingTypes });

	const columns: GridColDef[] = getDataGridColumns({ abilitiesWithDescriptions, types });

	return (
		<>
			{!isLoading ? (
				<Paper elevation={3} sx={{ m: 5, backgroundColor: '#B8D8D8' }}>
					<Box height={700} sx={{
						'& .header': {
							backgroundColor: '#7A9E9f'
						}
					}}>
						<DataGrid
							getRowId={(row: Pokemon) => row.name + row.sprite}
							rows={pokemon}
							columns={columns}
							initialState={{
								pagination: {
									paginationModel: {
										page: 0,
										pageSize: 30,
									},
								},
							}}
							pageSizeOptions={[10, 20, 30, 40, 50]}
							hideFooterSelectedRowCount
							rowHeight={100}
						/>
					</Box>
				</Paper>
			) : (
				<Box display='flex' justifyContent='center' m={3}>
					<CardMedia
						component='video'
						src={loader}
						autoPlay
						loop
						muted
						width='800px'
						height='600px'
					/>
				</Box>
			)}
		</>
	);
};
