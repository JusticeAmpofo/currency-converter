import React, { useReducer } from 'react';
import CurrencyContext from './currencyContext';
import CurrencyReducer from './currencyReducer';
import {
    SET_LOADING,
    CONVERT,
    CONVERT_ERROR
}  from '../types';

let apiKey;
let proxyurl;

apiKey = process.env.REACT_APP_API_KEY;
proxyurl = process.env.REACT_APP_PROXY_URL;

const CurrencyState = props => {
    const initialState = {
        loading: false,
        conversion: null,
        toCurrState: null,
        convertError: null
    }

    const [state, dispatch] = useReducer(CurrencyReducer, initialState);

    // Set Loading
    const setLoading = () => dispatch({type: SET_LOADING });

    // Convert
    const convert = (fromCurr, toCurr, amount) => {
        setLoading();

        fetch(`${proxyurl}https://api.getgeoapi.com/api/v2/currency/convert?api_key=${apiKey}&from=${fromCurr}&to=${toCurr}&amount=${amount}&format=json`, {
            "method": "GET"
        })
        .then((response) => response.json())
        .then(response => {
            dispatch({
                type: CONVERT,
                payload: response,
                payload2: response.rates[toCurr]
            });
        })
        .catch(err => {
            dispatch({
                type: CONVERT_ERROR,
                payload: err
            })
        });
    }

    return (
        <CurrencyContext.Provider
            value={{
                loading: state.loading,
                conversion: state.conversion,
                toCurrState: state.toCurrState,
                convertError: state.convertError,
                setLoading,
                convert
            }}
        >
            {props.children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyState