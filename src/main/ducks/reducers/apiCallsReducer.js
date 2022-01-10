import { PAGINATION_GET_SUCCESS, SET_LOADING_PAGINATION, SET_ERROR_PAGINATION, SUGGESTIONS_GET_SUCCESS, SET_LOADING_SUGGESTIONS, SET_ERROR_SUGGESTIONS } from '../actions/types';
const init_state = {
	isLoadingPagination: true,
	isErrorPagination: false,
	isLoadingSuggestions: true,
	isErrorSuggestions: false
};
const apiCallsReducer = (state=init_state, action) => {
	switch (action.type) {
	case PAGINATION_GET_SUCCESS:
		return {
			isLoadingPagination: false,
			isErrorPagination: false,
			isLoadingSuggestions: state.isLoadingSuggestions,
			isErrorSuggestions: state.isErrorSuggestions
		};
	case SUGGESTIONS_GET_SUCCESS:
		return {
			isLoadingSuggestions: false,
			isErrorSuggestions: false,
			isLoadingPagination: state.isLoadingPagination,
			isErrorPagination: state.isErrorPagination,
		};
	case SET_LOADING_PAGINATION:
		return {
			isLoadingPagination: true,
			isErrorPagination: false,
			isLoadingSuggestions: state.isLoadingSuggestions,
			isErrorSuggestions: state.isErrorSuggestions
		};
	case SET_ERROR_PAGINATION:
		return {
			isLoadingPagination: false,
			isErrorPagination: action.payload,
			isLoadingSuggestions: state.isLoadingSuggestions,
			isErrorSuggestions: state.isErrorSuggestions
		};
	case SET_LOADING_SUGGESTIONS:
		return {
			isLoadingSuggestions: true,
			isErrorSuggestions: false,
			isLoadingPagination: state.isLoadingPagination,
			isErrorPagination: state.isErrorPagination,
		};
	case SET_ERROR_SUGGESTIONS:
		return {
			isLoadingSuggestions: false,
			isErrorSuggestions: action.payload,
			isLoadingPagination: state.isLoadingPagination,
			isErrorPagination: state.isErrorPagination,
		};
	default:
		return state;
	}
};
export default apiCallsReducer;