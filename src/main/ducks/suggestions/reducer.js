import { types } from './types';

const initialState = {
	loading: true,
	error: null,
	data: []
};

const suggestionsReducer = (state = initialState, action) => {
	switch (action.type) {
	case types.SUGGESTIONS_REQUEST:
		return { ...state, loading: true, error: null, data: [] };
	case types.SUGGESTIONS_SUCCESS:
		return { ...state, loading: false, error: null, data: [...action.payload.data] };
	case types.SUGGESTIONS_FAILURE:
		return { ...state, loading: false, error: action.payload, data: [] };
	case types.SUGGESTIONS_CLEAR:
		return { ...state, loading: false, error: null, data: [] };
	default:
		return state;
	}
};
export default suggestionsReducer;