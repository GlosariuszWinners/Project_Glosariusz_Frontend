import { combineReducers } from 'redux';
import elemToShowReducer from './elemToShowReducer';
import paginationElementsReducer from './paginationElementsReducer';
import nextPaginationUrlReducer from './nextPaginationUrlReducer';
import apiCallsReducer from './apiCallsReducer';
import suggestionsReducer from './suggestionsReducer';
const reducers = combineReducers({
	apiCalls: apiCallsReducer,
	elemToShow: elemToShowReducer,
	paginationElements: paginationElementsReducer,
	nextPaginationUrl: nextPaginationUrlReducer,
	suggestions: suggestionsReducer
});
export default reducers;