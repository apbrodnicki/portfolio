import { Autocomplete, Box, Button, CardMedia, Grid, ListItem, Paper, TextField, Typography, createFilterOptions } from '@mui/material';
import { useFetchAllPokemonNames } from 'pokemon-directory/api/useFetchAllPokemonNames';
import { useFetchPokemonAutocompleteItems } from 'pokemon-directory/api/useFetchPokemonAutocompleteItems';
import loader from 'pokemon-directory/assets/loader.webm';
import { PokemonListContext } from 'pokemon-directory/contexts/PokemonListContext';
import { formatPokemonName } from 'pokemon-directory/helper/helper';
import { useUpdatePokemonList } from 'pokemon-directory/hooks/useUpdatePokemonList';
import type { PokemonAutocompleteItem } from 'pokemon-directory/models/models';
import React, { useContext, useState } from 'react';

export const UpdatePokemon = (): React.JSX.Element => {
	const { pokemonList } = useContext(PokemonListContext);

	const [pokemonInput, setPokemonInput] = useState<string[]>([]);
	const [autocompleteKey, setAutocompleteKey] = useState<string>('');
	const [isLoadingAddAutocompleteItems, setIsLoadingAddAutocompleteItems] = useState<boolean>(true);
	const [isLoadingRemoveAutocompleteItems, setIsLoadingRemoveAutocompleteItems] = useState<boolean>(true);
	const isLoading = isLoadingAddAutocompleteItems || isLoadingRemoveAutocompleteItems;

	const updatePokemonList = useUpdatePokemonList();

	const names = useFetchAllPokemonNames();

	const addAutocompleteOptions = useFetchPokemonAutocompleteItems({ pokemonList: names, setIsLoadingPokemonAutocompleteItems: setIsLoadingAddAutocompleteItems });
	const removeAutocompleteOptions = useFetchPokemonAutocompleteItems({ pokemonList, setIsLoadingPokemonAutocompleteItems: setIsLoadingRemoveAutocompleteItems });

	const onAutocompleteChange = (value: PokemonAutocompleteItem[]): void => {
		const names = (value).map((item) => item.name);
		setPokemonInput(names);
	};

	const onClick = (action: 'add' | 'remove'): void => {
		updatePokemonList({ action, pokemonInput, setPokemonInput });
	};

	const updateAutocompleteKey = (): void => {
		setAutocompleteKey(`key-${Math.random().toString(36).substring(2, 11)}`);
	};

	const filterOptions = createFilterOptions({
		matchFrom: 'any',
		ignoreCase: true,
		limit: 151,
	});

	return (
		<Grid container justifyContent='center'>
			{!isLoading ? (
				<>
					<Grid item xs={12} lg={5} mx={3}>
						<Paper elevation={3} sx={{ m: 5, backgroundColor: '#B8D8D8' }}>
							<Autocomplete
								multiple
								disableCloseOnSelect
								filterOptions={filterOptions}
								key={autocompleteKey}
								options={addAutocompleteOptions}
								isOptionEqualToValue={(option, value) => (option as PokemonAutocompleteItem).name === (value as PokemonAutocompleteItem).name}
								getOptionLabel={(option) => (option as PokemonAutocompleteItem).name}
								onChange={(_, value) => { onAutocompleteChange((value as PokemonAutocompleteItem[])); }}
								renderOption={(props, option) => (
									<ListItem {...props}>
										<Typography mr={3}>#{(option as PokemonAutocompleteItem).pokedexNumber}</Typography>
										<Typography flexGrow={1}>{formatPokemonName((option as PokemonAutocompleteItem).name)}</Typography>
										<Box
											minWidth={100}
											minHeight={100}
											display='flex'
											alignItems='center'
											justifyContent='center'
										>
											<Box component='img' src={(option as PokemonAutocompleteItem).sprite} loading='lazy' alt='sprite' mr={1} />
										</Box>
									</ListItem>
								)}
								renderInput={(params) => (
									<>
										<TextField
											{...params}
											label='Add Pokémon'
											variant='filled'
										/>
										<Button onClick={() => {
											onClick('add');
											updateAutocompleteKey();
										}}>
											<Typography variant='body1'>
												Submit
											</Typography>
										</Button>
									</>
								)}
							/>
						</Paper>
					</Grid>
					<Grid item xs={12} lg={5} mx={3}>
						<Paper elevation={3} sx={{ m: 5, backgroundColor: '#B8D8D8' }}>
							<Autocomplete
								multiple
								disableCloseOnSelect
								key={autocompleteKey}
								options={removeAutocompleteOptions}
								isOptionEqualToValue={(option, value) => option.name === value.name}
								getOptionLabel={(option) => option.name}
								onChange={(_, value) => { onAutocompleteChange(value); }}
								renderOption={(props, option) => (
									<ListItem {...props}>
										<Typography mr={3}>#{option.pokedexNumber}</Typography>
										<Typography flexGrow={1}>{formatPokemonName(option.name)}</Typography>
										<Box
											minWidth={100}
											minHeight={100}
											display='flex'
											alignItems='center'
											justifyContent='center'
										>
											<Box component='img' src={option.sprite} loading='lazy' alt='sprite' mr={1} />
										</Box>
									</ListItem>
								)}
								renderInput={(params) => (
									<>
										<TextField
											{...params}
											label='Remove Pokémon'
											variant='filled'
										/>
										<Button onClick={() => {
											onClick('remove');
											updateAutocompleteKey();
										}}>
											<Typography variant='body1'>
												Submit
											</Typography>
										</Button>
									</>
								)}
							/>
						</Paper>
					</Grid>
				</>
			) : (
				<Grid item xs={12} mx={3}>
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
				</Grid>
			)}
		</Grid>
	);
};
