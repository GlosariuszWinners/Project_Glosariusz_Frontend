import { types } from './types';

export const set = (payload) => ({
	type: types.WORD_DETAILS_SET,
	payload
});

export const clear = () => ({
	type: types.WORD_DETAILS_CLEAR
});