import { types } from './types';

const initialState = {
	loading: true,
	error: null,
	nextPaginationUrl: null,
	paginationLetter: 'a',
	words: []
};

const wordsReducer = (state = initialState, action) => {
	switch (action.type) {
	case types.WORDS_REQUEST:
		return { ...state, loading: true, error: null };
	case types.WORDS_SUCCESS:
		return { ...state, loading: false, error: null,
			nextPaginationUrl: action.payload.info ? action.payload.info.next : null,
			paginationLetter: action.payload?.paginationLetter ? action.payload.paginationLetter : state.paginationLetter,
			words: [...state.words, ...action.payload.data] };
	case types.WORDS_FAILURE:
		return { ...state, loading: false, error: action.payload };
	case types.WORDS_LETTER_SET:
		return { ...state, paginationLetter: action.payload, words: [] };
	case types.WORDS_CLEAR:
		return { ...state, nextPaginationUrl: null, paginationLetter: 'a', words: [] };
	default:
		return state;
	}
};

export default wordsReducer;