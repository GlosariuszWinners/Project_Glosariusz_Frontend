import { combineReducers } from 'redux';
import wordsReducer from './words/reducer';
import wordDetailsReducer from './wordDetails/reducer';
import suggestionsReducer from './suggestions/reducer';

const reducers = combineReducers({
	words: wordsReducer,
	wordDetails: wordDetailsReducer,
	suggestions: suggestionsReducer,
});

export default reducers;