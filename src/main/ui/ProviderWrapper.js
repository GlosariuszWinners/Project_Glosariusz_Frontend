import { applyMiddleware, createStore } from 'redux';
import reducers from '../ducks/index';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';

const store = createStore(reducers, applyMiddleware(apiMiddleware, thunk));

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