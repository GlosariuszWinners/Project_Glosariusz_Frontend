import { combineReducers } from 'redux';
import elemToShowReducer from './elemToShowReducer';
import paginationElementsReducer from './paginationElementsReducer';
import nextPaginationUrlReducer from './nextPaginationUrlReducer';
import apiCallsReducer from './apiCallsReducer';
const reducers = combineReducers({
	apiCalls: apiCallsReducer,
	elemToShow: elemToShowReducer,
	paginationElements: paginationElementsReducer,
	nextPaginationUrl: nextPaginationUrlReducer
});
export default reducers;