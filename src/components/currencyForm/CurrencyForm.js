import React from 'react';
import Options from './Options';

const CurrencyForm = () => {
    return (
        <div className="row">
            <div className="col s12 m6 offset-m3">
                <div className="card">
                    <div className="card-content">
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s12 m6">
                                        <select>
                                            <Options/>
                                        </select>
                                        <label>From</label>
                                    </div>
                                    <div className="input-field col s12 m6">
                                        <select>
                                            <Options/>
                                        </select>
                                        <label>To</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input type="number" id="amount" className="validate"/>
                                        <label htmlFor="amount">Amount</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <button class="btn btn-extend waves-effect waves-light green" type="submit">
                                            Convert
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyForm