import {
    SET_LOADING,
    CONVERT
}  from '../types';

export default (state, action) => {
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case  CONVERT:
            return {
                ...state,
                conversion: action.payload,
                toCurrState: action.payload2,
                loading: false
            }

        default:
            return state;
    }
}