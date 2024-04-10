import { Box, Grid, Paper, Typography } from '@mui/material';
import { Footer } from 'pokemon-directory/components/Footer';
import { Header } from 'pokemon-directory/components/Header';
import { PokemonDataGrid } from 'pokemon-directory/components/PokemonDataGrid';
import { UpdatePokemon } from 'pokemon-directory/components/UpdatePokemon';
import { CustomSnackbar } from 'pokemon-directory/components/custom/CustomSnackbar';
import { PokemonListContext } from 'pokemon-directory/contexts/PokemonListContext';
import { SnackbarContext } from 'pokemon-directory/contexts/SnackbarContext';
import React, { useEffect, useState } from 'react';
import './App.css';
// TODO:
// Add custom theme.
// Add virtualization to autocomplete to improve loading.
// Add sprites and pokedex number into autocomplete and improve styling.
// Add custom row ordering for data grid.
export const App = (): React.JSX.Element => {
	const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
	const [snackbarMessage, setSnackbarMessage] = useState<string>('');
	const [snackbarColor, setSnackbarColor] = useState<'success' | 'info' | 'warning' | 'error'>('success');

	const [pokemonList, setPokemonList] = useState<string[]>(() => {
		const list = localStorage.getItem('pokemon-directory-list');

		return (list !== null) ? JSON.parse(list) : [];
	});

	useEffect(() => {
		localStorage.setItem('pokemon-directory-list', JSON.stringify(pokemonList));
	}, [pokemonList]);

	return (
		<>
			<SnackbarContext.Provider value={{ snackbarOpen, setSnackbarOpen, snackbarMessage, setSnackbarMessage, snackbarColor, setSnackbarColor }}>
				<PokemonListContext.Provider value={{ pokemonList, setPokemonList }}>
					<Header />
					<Box
						display='flex'
						flexDirection='column'
						justifyContent='center'
						flex={1}>
						<UpdatePokemon />
						{pokemonList.length > 0 ? (
							<PokemonDataGrid />
						) : (
							<Grid container justifyContent='center'>
								<Grid item maxWidth='90%'>
									<Paper
										elevation={3}
										sx={{
											m: 5,
											backgroundColor: '#B8D8D8'
										}}>
										<Box p={5}>
											<Typography align='center'>
														Add some Pokémon to learn more about them!
											</Typography>
										</Box>
									</Paper>
								</Grid>
							</Grid>
						)}
					</Box>
					<CustomSnackbar />
					<Footer />
				</PokemonListContext.Provider>
			</SnackbarContext.Provider>
		</>
	);
};
