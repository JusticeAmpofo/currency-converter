import React, { useState, useContext } from 'react';
import Options from './Options';
import Loader from '../layout/Loader';
import CurrencyContext from '../../context/currency/currencyContext';

const CurrencyForm = () => {

    const currencyContext = useContext(CurrencyContext);

    const { loading, convert } = currencyContext;

    // Bring Currency state
    const [amount, setAmount] = useState('');
    const [formCurr, setFromCurrency] = useState('cad');
    const [toCurr, setToCurrency] = useState('cad');

    const onSubmit = e => { 
        e.preventDefault();

        if(isNaN(amount) || amount === '') {
            console.log('Not a valid number bro');
            return false
        }

        console.log(`Convert button now clicked From: ${formCurr}, To: ${toCurr}, Amount: ${amount}`);

        convert();
    };

    const onChange = e => setAmount(e.target.value);


    return (
        <div className="row">
            <div className="col s12 m6 offset-m3">
                <div className="card">
                    <div className="card-content">
                        <div className="row">
                            <form onSubmit={onSubmit} className="col s12" formNoValidate="">
                                <div className="row">
                                    <div className="input-field col s12 m6">
                                        <select name="from-curr" id="from-curr" value={formCurr} onChange={e => setFromCurrency(e.target.value)} className="validate">
                                            <Options/>
                                        </select>
                                        <label htmlFor="from-curr">From</label>
                                    </div>
                                    <div className="input-field col s12 m6">
                                        <select name="to-curr" id="to-curr" value={toCurr} onChange={e => setToCurrency(e.target.value)} className="validate">
                                            <Options/>
                                        </select>
                                        <label htmlFor="to-curr">To</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input type="text" id="amount" value={amount} onChange={onChange} className="validate" />
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyForm