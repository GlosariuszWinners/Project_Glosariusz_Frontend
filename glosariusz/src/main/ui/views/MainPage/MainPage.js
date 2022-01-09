import { Logo, SearchBar, Navbar } from '../..';
import { Box } from '@chakra-ui/react';
import { Pagination } from '../..';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import { logger } from '../../../ducks/middleware/logger';
import reducers from '../../../ducks/reducers/index';
import { useState } from 'react';

const store = createStore(reducers, applyMiddleware(apiMiddleware,thunk, logger));

const MainPage = () => {
	const [elemToShow, setElemToShow] = useState(null);
	return (
		<Provider store={store}>
			<Navbar/>
			<Box d="grid" justifyContent="center" backgroundColor={'#d0e8f2'} position="relative">
				<Logo/>
				<SearchBar elemToShow={elemToShow} setElemToShow={setElemToShow}/>
			</Box>
			<Pagination elemToShow={elemToShow} setElemToShow={setElemToShow}/>
			
		</Provider>
	);
};
export default MainPage;