import { SET_PAGINATION_LETTER } from '../actions/types';

const paginationLetterReducer = (state='a', action) => {
	switch (action.type){
	case SET_PAGINATION_LETTER:
		return action.payload;
	default:
		return state;
	}
};
export default paginationLetterReducer;