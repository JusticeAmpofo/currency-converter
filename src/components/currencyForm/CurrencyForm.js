import React, { useState, useContext } from 'react';
import Currency from './currency';
import Loader from '../layout/Loader';
import Result from '../layout/Result';
import Error from '../layout/Error';
import CurrencyContext from '../../context/currency/currencyContext';
import M from 'materialize-css/dist/js/materialize.min.js';

import Select from 'react-select';

const CurrencyForm = () => {
	const currencyContext = useContext(CurrencyContext);

	const { loading, convert, conversion, convertError } = currencyContext;

	// Bring in Currency states
	const [fromCurr, setFromCurrency] = useState('');
	const [toCurr, setToCurrency] = useState('');
	const [amount, setAmount] = useState('');
	const [errorFromCurr, setFromErrorCurr] = useState(false);
	const [errorToCurr, setToErrorCurr] = useState(false);
	const [error, setError] = useState(false);

	const onChange = (e) => setAmount(e.target.value);

	const handleFromChange = (selectedOption) => {
		setFromCurrency(selectedOption.value);
	};

	const handleToChange = (selectedOption) => {
		setToCurrency(selectedOption.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (fromCurr === '' || toCurr === '') {
			M.toast({ html: 'Please fill in both Currency fields' });
			if (fromCurr === '') {
				setFromErrorCurr(true);
			} else {
				setFromErrorCurr(false);
			}

			if (toCurr === '') {
				setToErrorCurr(true);
			} else {
				setToErrorCurr(false);
			}
			return false;
		} else {
			setFromErrorCurr(false);
			setToErrorCurr(false);
		}

		if (isNaN(amount) || amount === '') {
			setError(true);
			M.toast({ html: 'Please enter a valid number' });
			return false;
		}
		setError(false);
		convert(fromCurr, toCurr, amount);
	};

	const customDropStyles = {
		control: (styles, state) => {
			return {
				...styles,
				'&:hover': { borderColor: '#4CAF50' },
				'&:focus': { borderColor: '#4CAF50' },
				'&:focus-within': { borderColor: '#4CAF50' },
				boxShadow: state.isFocused
					? '0 0 0 0.2rem rgba(120, 194, 173, 0.25)'
					: 0,
			};
		},
		option: (style, state) => {
			return {
				...style,
				background: state.isFocused
					? '#4CAF50'
					: state.isSelected
					? '#388E3C'
					: 'white',
			};
		},
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
										<Select
											onChange={handleFromChange}
											options={Currency}
											placeholder="Select From Currency"
											className={`custom-select custom-select-from ${
												errorFromCurr ? 'drop-down-error' : ''
											}`}
											styles={customDropStyles}
										/>
									</div>
									<div className="input-field col s12">
										<Select
											onChange={handleToChange}
											options={Currency}
											placeholder="Select To Currency"
											className={`custom-select ${
												errorToCurr ? 'drop-down-error' : ''
											}`}
											styles={customDropStyles}
										/>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<input
											type="text"
											id="amount"
											value={amount}
											onChange={onChange}
											className={`validate ${error ? 'amount-error' : ''}`}
										/>
										<label htmlFor="amount">Amount</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<button
											className="btn btn-extend waves-effect waves-light green"
											type="submit"
										>
											Convert
										</button>
									</div>
								</div>
							</form>
						</div>
						<div className="row">
							{loading && <Loader />}
							{conversion && !loading && <Result />}
							{convertError && !loading && <Error />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrencyForm;
