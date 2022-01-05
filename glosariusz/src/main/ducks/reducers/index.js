import { combineReducers } from 'redux';
import elemToShowReducer from './elemToShowReducer';
import paginationElementsReducer from './paginationElementsReducer';
const reducers = combineReducers({
	elemToShow: elemToShowReducer,
	paginationElements: paginationElementsReducer
});
export default reducers;