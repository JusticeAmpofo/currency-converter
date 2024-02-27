import { SET_LOADING, CONVERT, CONVERT_ERROR } from '../types';

const currencyReducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};

		case CONVERT:
			return {
				...state,
				conversion: action.payload,
				toCurrState: action.payload2,
				loading: false,
			};

		case CONVERT_ERROR:
			console.log(action.payload);
			return {
				...state,
				convertError: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};

export default currencyReducer;
