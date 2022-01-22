import { types } from './types';
import { createAction } from 'redux-api-middleware';
import { set, clear } from './actions';

export const getByLetter = (letter) => (dispatch) => dispatch(createAction({
	endpoint: `${process.env.REACT_APP_API_URL}/words?polishWord=${letter}`,
	method: 'GET',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
	types: [
		types.WORDS_REQUEST,
		{
			type: types.WORDS_SUCCESS,
			payload: async (action, state, res) => {
				const json = await res.json();
				const response = { ...json, paginationLetter: letter };
				return response;
			}
		},
		types.WORDS_FAILURE
	]
}));

export const getByUrl = (url) => (dispatch) => dispatch(createAction({
	endpoint: url,
	method: 'GET',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
	types: [
		types.WORDS_REQUEST,
		types.WORDS_SUCCESS,
		types.WORDS_FAILURE
	]
}));

export const wordsService = {
	getByLetter,
	getByUrl,
	set,
	clear
};