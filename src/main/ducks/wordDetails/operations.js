import { createAction } from 'redux-api-middleware';
import { types } from './types';
import { set, clear } from './actions';

const getById = (id) => dispatch => dispatch(createAction({
	endpoint: `${process.env.REACT_APP_API_URL}/words/${id}`,
	method: 'GET',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
	types: [
		types.WORD_DETAILS_REQUEST,
		types.WORD_DETAILS_SUCCESS,
		types.WORD_DETAILS_FAILURE,
	]
}));

export const wordDetailsService = {
	getById,
	set,
	clear
};