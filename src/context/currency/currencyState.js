import React, { useReducer } from 'react';
import CurrencyContext from './currencyContext';
import CurrencyReducer from './currencyReducer';
import {
    SET_LOADING,
    CONVERT
}  from '../types';

let apiKey;
let proxyurl = "https://cors-anywhere.herokuapp.com/";

apiKey = '67eadf0ecce0fd2676ba4351bda7aa3fe44d3b5f';

const CurrencyState = props => {
    const initialState = {
        formCurr: [],
        toCurr: [],
        amount: [],
        loading: false
    }

    const [state, dispatch] = useReducer(CurrencyReducer, initialState);

    // Set Loading
    const setLoading = () => dispatch({type: SET_LOADING });

    // Convert
    const convert = () => {
        setLoading();

        fetch(`${proxyurl}https://api.getgeoapi.com/api/v2/currency/convert?api_key=67eadf0ecce0fd2676ba4351bda7aa3fe44d3b5f&from=EUR&to=GBP&amount=10&format=json`, {
            "method": "GET"
        })
        .then((resp) => resp.json())
        .then(response => {
            console.log(response);
            console.log(response.rates.GBP.rate_for_amount);
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <CurrencyContext.Provider
            value={{
                formCurr: state.formCurr,
                toCurr: state.toCurr,
                amount: state.amount,
                loading: state.loading,
                setLoading,
                convert
            }}
        >
            {props.children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyState