import { SET_ELEMENT_TO_SHOW, CLEAR_ELEMENT_TO_SHOW, DETAILS_GET_SUCCESS } from '../actions/types';

const elemToShowReducer = (state=null, action) => {
	switch (action.type){
	case SET_ELEMENT_TO_SHOW:
		return action.payload;
	case DETAILS_GET_SUCCESS:
		return action.payload?.data;
	case CLEAR_ELEMENT_TO_SHOW:
		return null;
	default:
		return state;
	}
};
export default elemToShowReducer;