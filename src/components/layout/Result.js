import React, { Fragment, useContext } from 'react';
import CurrencyContext from '../../context/currency/currencyContext';

const Result = () => {

    const currencyContext = useContext(CurrencyContext);

    const { conversion, toCurrState } = currencyContext;

    const { rate, currency_name, rate_for_amount } = toCurrState;

    const round = (x) => {
        x = parseFloat(x);
        x = x.toFixed(2);
        return x
    }

    return (
        <Fragment>
            <p className="flow-text">1 {conversion.base_currency_name} = {round(rate)} {currency_name}</p>
            <p className="flow-text">Rate for Amount: <span className="green-text">{round(rate_for_amount)}</span></p>
        </Fragment>
    )
}

export default Result