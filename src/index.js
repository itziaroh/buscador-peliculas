import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { theme, ThemeProvider, CSSReset } from '@chakra-ui/core';

import './styles/index.css';
import App from './components/App';
import { store } from './redux/store';

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
	...theme,
	breakpoints
};

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<ThemeProvider theme={newTheme}>
				<CSSReset />
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);