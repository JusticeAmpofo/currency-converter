import React, { useState, useContext } from 'react';
import Options from './Options';
import Loader from '../layout/Loader';
import Result from '../layout/Result';
import CurrencyContext from '../../context/currency/currencyContext';
import M from 'materialize-css/dist/js/materialize.min.js';

const CurrencyForm = () => {

    const currencyContext = useContext(CurrencyContext);

    const { loading, convert, conversion } = currencyContext;

    // Bring Currency state
    const [formCurr, setFromCurrency] = useState('AED');
    const [toCurr, setToCurrency] = useState('AED');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState(false);

    const onChange = e => setAmount(e.target.value);

    const onSubmit = e => { 
        e.preventDefault();
        if(isNaN(amount) || amount === '') {
            setError(true);
            M.toast({ html: 'Please enter a valid number' });
            return false
        }
        setError(false);
        console.log(`Convert button now clicked From: ${formCurr}, To: ${toCurr}, Amount: ${amount}`);
        convert(formCurr, toCurr, amount);
    };

    return (
        <div className="row">
            <div className="col s12 m8 offset-m2">
                <div className="card">
                    <div className="card-content">
                        <div className="row">
                            <form onSubmit={onSubmit} className="col s12" formNoValidate="">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <select name="from-curr" id="from-curr" value={formCurr} onChange={e => setFromCurrency(e.target.value)} className="validate">
                                            <Options/>
                                        </select>
                                        <label htmlFor="from-curr">From</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <select name="to-curr" id="to-curr" value={toCurr} onChange={e => setToCurrency(e.target.value)} className="validate">
                                            <Options/>
                                        </select>
                                        <label htmlFor="to-curr">To</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input type="text" id="amount" value={amount} onChange={onChange} className={`validate ${error ? "amount-error" : ""}`} />
                                        <label htmlFor="amount">Amount</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <button className="btn btn-extend waves-effect waves-light green" type="submit">
                                            Convert
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            {loading && <Loader/>}
                            {(conversion.amount && !loading) && (
                                <Result />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyForm