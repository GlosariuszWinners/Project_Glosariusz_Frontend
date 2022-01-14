import { SET_ELEMENT_TO_SHOW, CLEAR_ELEMENT_TO_SHOW } from '../actions/types';

const elemToShowReducer = (state=null, action) => {
	switch (action.type){
	case SET_ELEMENT_TO_SHOW:
		return action.payload;
	case CLEAR_ELEMENT_TO_SHOW:
		return null;
	default:
		return state;
	}
};
export default elemToShowReducer;