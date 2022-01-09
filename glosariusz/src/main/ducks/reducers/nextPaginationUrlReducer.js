import { PAGINATION_GET_SUCCESS } from '../actions/types';

const nextPaginationUrlReducer = (state=false, action) => {
	switch (action.type){
	case PAGINATION_GET_SUCCESS:
		return action.payload.info ? action.payload.info.next : false;
	default:
		return state;
	}
};
export default nextPaginationUrlReducer;