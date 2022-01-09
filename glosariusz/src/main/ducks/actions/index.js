import { CLEAR_PAGINATION_ELEMENTS, CLEAR_SUGGESTIONS_ELEMENTS, PAGINATION_GET_SUCCESS, SET_ERROR_PAGINATION, SET_ERROR_SUGGESTIONS, SET_LOADING_PAGINATION, SET_LOADING_SUGGESTIONS, SUGGESTIONS_GET_SUCCESS } from './types';
import { createAction } from 'redux-api-middleware';
export const getPaginationPage = (url) => (dispatch) => dispatch(createAction({
	endpoint: url,
	method: 'GET',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
	types: [
		SET_LOADING_PAGINATION,
		PAGINATION_GET_SUCCESS,
		SET_ERROR_PAGINATION
	]
}));
export const clearPaginationElements = () =>{
	return {
		type: CLEAR_PAGINATION_ELEMENTS
	};
};
export const getSuggestions = (polishWord) => (dispatch) => {
	dispatch(createAction({
		endpoint: 'http://localhost:8080/api/words?polishWord=' + polishWord,
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		types: [
			SET_LOADING_SUGGESTIONS,
			SUGGESTIONS_GET_SUCCESS,
			SET_ERROR_SUGGESTIONS
		]
	}));};
export const clearSuggestions = () =>{
	return {
		type: CLEAR_SUGGESTIONS_ELEMENTS
	};
};