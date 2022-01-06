import { CLEAR_PAGINATION_ELEMENTS, PAGINATION_GET_SUCCESS } from '../actions/types';

const paginationElements = (state=[], action) => {
	switch (action.type){
	case PAGINATION_GET_SUCCESS:
		return [...state, ...action.payload.data];
	case CLEAR_PAGINATION_ELEMENTS:
		return [];
	default:
		return state;
	}
};
export default paginationElements;