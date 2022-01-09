import { SUGGESTIONS_GET_SUCCESS, CLEAR_SUGGESTIONS_ELEMENTS } from '../actions/types';
const suggestionsReducer = (state=[], action) => {
	switch (action.type){
	case SUGGESTIONS_GET_SUCCESS:
		return [...action.payload.data];
	case CLEAR_SUGGESTIONS_ELEMENTS:
		return [];
	default:
		return state;
	}
};
export default suggestionsReducer;