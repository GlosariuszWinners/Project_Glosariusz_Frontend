import { createAction } from 'redux-api-middleware';
import { types } from './types';
import { clear } from './actions';

export const get = (polishWord) => (dispatch) => dispatch(createAction({
	endpoint: `${process.env.REACT_APP_API_URL}/words?polishWord=${polishWord}`,
	method: 'GET',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
	types: [
		types.SUGGESTIONS_REQUEST,
		types.SUGGESTIONS_SUCCESS,
		types.SUGGESTIONS_FAILURE
	]
}));

export const suggestionsService = {
	get,
	clear
};