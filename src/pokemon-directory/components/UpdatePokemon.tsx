import { Autocomplete, Box, Button, Grid, ListItem, Paper, TextField, Typography, createFilterOptions } from '@mui/material';
import { useFetchAllPokemonNames } from 'pokemon-directory/api/useFetchAllPokemonNames';
import { useFetchAllSprites } from 'pokemon-directory/api/useFetchAllSprites';
import { PokemonListContext } from 'pokemon-directory/contexts/PokemonListContext';
import { formatPokemonName } from 'pokemon-directory/helper/helper';
import { useUpdatePokemonList } from 'pokemon-directory/hooks/useUpdatePokemonList';
import type { PokemonAutocompleteItem } from 'pokemon-directory/models/models';
import React, { useContext, useState } from 'react';

export const UpdatePokemon = (): React.JSX.Element => {
	const { pokemonList } = useContext(PokemonListContext);

	const updatePokemonList = useUpdatePokemonList();

	const [pokemonInput, setPokemonInput] = useState<string[]>([]);
	const [autocompleteKey, setAutocompleteKey] = useState<string>('');

	const names = useFetchAllPokemonNames();
	const sprites = useFetchAllSprites({ names });
	// Add safety to only do names if sprites fail
	const autocompleteOptions: PokemonAutocompleteItem[] = names.map((name, index) => ({
		pokedexNumber: index + 1,
		name,
		sprite: sprites[index]
	}));

	const onAutocompleteChange = (value: string[] | PokemonAutocompleteItem[]): void => {
		if (typeof value[0] === 'string') {
			setPokemonInput(value as string[]);
		} else {
			const names = (value as PokemonAutocompleteItem[]).map((item) => item.name);
			setPokemonInput(names);
		}
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
			<Grid item xs={12} lg={5} mx={3}>
				<Paper elevation={3} sx={{ m: 5, backgroundColor: '#B8D8D8' }}>
					<Autocomplete
						multiple
						disableCloseOnSelect
						filterOptions={filterOptions}
						key={autocompleteKey}
						options={autocompleteOptions}
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
						options={pokemonList}
						isOptionEqualToValue={(option, value) => option === value}
						onChange={(_, value) => { onAutocompleteChange(value); }}
						renderOption={(props, option) => (
							<ListItem {...props}>
								<Typography>{option}</Typography>
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
		</Grid>
	);
};
