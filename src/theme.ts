import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#CCCCCC'
		},
		secondary: {
			main: '#222222'
		}
	},
	typography: {
		h6: {
			fontWeight: 'bold'
		},
		subtitle1: {
			fontStyle: 'italic'
		},
		subtitle2: {
			fontSize: '1rem'
		}
	}
});
