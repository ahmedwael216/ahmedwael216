import React from 'react';
import Blog from './Blog/Blog';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './global.css'; // Import the global CSS file

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: "#101418",
			paper: "#15191f",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Blog />
		</ThemeProvider>
	);
}

export default App;

//TODO https://github.com/bent10/marked-extensions/tree/main/packages/code-format
//TODO search for a slution for the quotes left only problem (https://espadrine.github.io/blog/posts/markdown-quote-styling.html)
