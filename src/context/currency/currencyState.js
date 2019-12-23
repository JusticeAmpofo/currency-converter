import React, { useReducer } from 'react';
import CurrencyContext from './currencyContext';
import CurrencyReducer from './currencyReducer';
import {
    SET_LOADING,
    CONVERT
}  from '../types';

let apiKey;
let proxyurl;

apiKey = '67eadf0ecce0fd2676ba4351bda7aa3fe44d3b5f';
proxyurl = "https://cors-anywhere.herokuapp.com/";

const CurrencyState = props => {
    const initialState = {
        loading: false,
        conversion: [],
        toCurrState: ''
    }

    const [state, dispatch] = useReducer(CurrencyReducer, initialState);

    // Set Loading
    const setLoading = () => dispatch({type: SET_LOADING });

    // Convert
    const convert = (formCurr, toCurr, amount) => {
        setLoading();

        fetch(`${proxyurl}https://api.getgeoapi.com/api/v2/currency/convert?api_key=${apiKey}&from=${formCurr}&to=${toCurr}&amount=${amount}&format=json`, {
            "method": "GET"
        })
        .then((response) => response.json())
        .then(response => {
            console.log(response);
            console.log(response.rates[toCurr].rate_for_amount);
            dispatch({
                type: CONVERT,
                payload: response,
                payload2: response.rates[toCurr]
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <CurrencyContext.Provider
            value={{
                loading: state.loading,
                conversion: state.conversion,
                toCurrState: state.toCurrState,
                setLoading,
                convert
            }}
        >
            {props.children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyState