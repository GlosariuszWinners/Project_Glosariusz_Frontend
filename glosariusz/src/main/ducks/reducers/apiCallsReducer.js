import { PAGINATION_GET_SUCCESS, SET_ERROR, SET_LOADING } from '../actions/types';
const init_state = {
	isLoading: false,
	isError: false
};
const apiCallsReducer = (state=init_state, action) => {
	switch (action.type) {
	case PAGINATION_GET_SUCCESS:
		return {
			isLoading: false,
			isError: false
		};
	case SET_LOADING:
		return {
			isLoading: true,
			isError: false
		};
	case SET_ERROR:
		return {
			isLoading: false,
			isError: action.payload
		};
	default:
		return state;
	}
};
export default apiCallsReducer;