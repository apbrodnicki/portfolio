import { Autocomplete, Box, Button, Grid, ListItem, Paper, TextField, Typography } from '@mui/material';
import { useFetchAllPokemonNames } from 'pokemon-directory/api/useFetchAllPokemonNames';
import { useFetchAllSprites } from 'pokemon-directory/api/useFetchAllSprites';
import { PokemonListContext } from 'pokemon-directory/contexts/PokemonListContext';
import { useUpdatePokemonList } from 'pokemon-directory/hooks/useUpdatePokemonList';
import type { PokemonAutocompleteItem } from 'pokemon-directory/models/models';
import React, { useContext, useState } from 'react';

export const UpdatePokemon = (): React.JSX.Element => {
	const { pokemonList } = useContext(PokemonListContext);

	const updatePokemonList = useUpdatePokemonList();

	const [pokemonInput, setPokemonInput] = useState<string[]>([]);
	const [autocompleteKey, setAutocompleteKey] = useState<string>('');

	const allPokemonNames = useFetchAllPokemonNames();
	const allSprites = useFetchAllSprites(allPokemonNames);
	// Add safety to only do names if sprites fail
	const autocompleteOptions: PokemonAutocompleteItem[] = allPokemonNames.map((name, index) => ({
		pokedexNumber: index + 1,
		name,
		sprite: allSprites[index]
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

	return (
		<Grid container justifyContent='center'>
			<Grid item xs={12} lg={5} mx={3}>
				<Paper elevation={3} sx={{ m: 5, backgroundColor: '#B8D8D8' }}>
					<Autocomplete
						key={autocompleteKey}
						options={autocompleteOptions}
						multiple
						disableCloseOnSelect
						isOptionEqualToValue={(option, value) => option === value}
						getOptionLabel={(option) => option.name}
						onChange={(_, value) => { onAutocompleteChange(value); }}
						renderOption={(props, option) => (
							<ListItem {...props}>
								<Typography mr={6}>#{option.pokedexNumber}</Typography>
								<Typography flexGrow={1}>{option.name}</Typography>
								<Box component='img' src={option.sprite} alt='sprite' mr={6} />
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
									Submit
								</Button>
							</>
						)}
					/>
				</Paper>
			</Grid>
			<Grid item xs={12} lg={5} mx={3}>
				<Paper elevation={3} sx={{ m: 5, backgroundColor: '#B8D8D8' }}>
					<Autocomplete
						key={autocompleteKey}
						options={pokemonList}
						multiple
						disableCloseOnSelect
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
									Submit
								</Button>
							</>
						)}
					/>
				</Paper>
			</Grid>
		</Grid>
	);
};
