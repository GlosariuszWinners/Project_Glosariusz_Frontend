import { types } from './types';

export const clear = () => ({
	type: types.WORDS_CLEAR
});

export const set = (letter) => ({
	type: types.WORDS_LETTER_SET,
	payload: letter
});