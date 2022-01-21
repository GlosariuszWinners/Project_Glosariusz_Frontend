import { applyMiddleware, createStore } from 'redux';
import { logger } from '../ducks/middleware/logger';
import reducers from '../ducks/reducers';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';

const store = createStore(reducers, applyMiddleware(apiMiddleware, thunk, logger));

const ProviderWrapper = ({ children }) => {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

ProviderWrapper.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};

export default ProviderWrapper;