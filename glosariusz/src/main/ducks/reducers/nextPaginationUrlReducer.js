import { PAGINATION_GET_SUCCESS } from '../actions/types';

const nextPaginationUrlReducer = (state=false, action) => {
	switch (action.type){
	case PAGINATION_GET_SUCCESS:
		console.log('PAGINATION SUCCESS INFO: ', action.payload.info.next);
		return action.payload.info.next;
	default:
		return state;
	}
};
export default nextPaginationUrlReducer;