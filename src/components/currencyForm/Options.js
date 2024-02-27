import React, { Fragment } from 'react';
import currencies from './currency';

const Options = () => {
	const list = currencies.map((item, index) => {
		return (
			<option key={index} value={item.base_currency_code}>
				{item.currency_name}
			</option>
		);
	});
	return <Fragment>{list}</Fragment>;
};

export default Options;
