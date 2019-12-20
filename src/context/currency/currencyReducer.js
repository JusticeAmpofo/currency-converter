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

        default:
            return state;
    }
}