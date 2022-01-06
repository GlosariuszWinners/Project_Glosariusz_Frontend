import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import App from './App';
import { logger } from './main/ducks/middleware/logger';
import reducers from './main/ducks/reducers/index';
const store = createStore(reducers, applyMiddleware(apiMiddleware,thunk, logger));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ChakraProvider>
				<Router>
					<App />
				</Router>
			</ChakraProvider>
		</Provider>
		
	</React.StrictMode>,
	document.getElementById('root')
);
