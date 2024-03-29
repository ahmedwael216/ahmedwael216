import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './global.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Linux from './Pages/Linux';
import Writeups from './Pages/Writeups';
import Posts from './Pages/Posts';
import Edit from './Pages/Edit';

import Header from './Components/Header';
import Footer from './Components/Footer';

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
			<Container maxWidth="lg">
				<Header/>
				<HashRouter>
					<div>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/linux" element={<Linux />} />
							<Route path="/writeups" element={<Writeups />} />
							<Route path="/posts" element={<Posts />} />
							<Route path="/edit" element={<Edit />} />
							{/*<Route path="*" element={<NotFound />} />*/}
						</Routes>
					</div>
				</HashRouter>
				<Footer
					title="Footer"
					description="Something here to give the footer a purpose!"
				/>
			</Container>
		</ThemeProvider>
	);
}

export default App;

//TODO https://github.com/bent10/marked-extensions/tree/main/packages/code-format
//TODO search for a slution for the quotes left only problem (https://espadrine.github.io/blog/posts/markdown-quote-styling.html)
