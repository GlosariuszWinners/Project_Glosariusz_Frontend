import { types } from './types';

const initialState = {
	loading: true,
	error: null,
	data: {}
};

const wordDetailsReducer = (state = initialState, action) => {
	switch (action.type){
	case types.WORD_DETAILS_REQUEST:
		return { ...state, loading: true, error: null, data: {} };
	case types.WORD_DETAILS_SUCCESS:
		return { ...state, loading: false, error: null, data: { ...action.payload.data } };
	case types.WORD_DETAILS_FAILURE:
		return { ...state, loading: false, error: action.payload, data: {} };
	case types.WORD_DETAILS_SET:
		return { ...state, loading: false, error: null, data: { ...action.payload } };
	case types.WORD_DETAILS_CLEAR:
		return { ...state, data: {} };
	default:
		return state;
	}
};
export default wordDetailsReducer;