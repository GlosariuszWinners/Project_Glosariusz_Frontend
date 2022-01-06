import { CLEAR_PAGINATION_ELEMENTS, PAGINATION_GET_SUCCESS, SET_ERROR, SET_LOADING } from './types';
import { createAction } from 'redux-api-middleware';
export const getPaginationPage = (url) => (dispatch) => dispatch(createAction({
	endpoint: url,
	method: 'GET',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
	types: [
		SET_LOADING,
		PAGINATION_GET_SUCCESS,
		SET_ERROR
	]
}));
export const clearPaginationElements = () =>{
	return {
		type: CLEAR_PAGINATION_ELEMENTS
	};
};