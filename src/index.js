import { ChakraProvider, ThemeProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import theme from './main/ui/static/chakraConfig';

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<ThemeProvider theme={theme}>
				<React.Suspense fallback={<p>Loading..</p>}>
					<Router>
						<App />
					</Router>
				</React.Suspense>
			</ThemeProvider>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
