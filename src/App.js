import React, {Fragment, useEffect} from 'react';
import Navbar from './components/layout/Navbar';
import CurrencyForm from './components/currencyForm/CurrencyForm';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import CurrencyState from './context/currency/currencyState';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <CurrencyState>
      <Fragment>
        <Navbar/>
        <section className="section section-currency">
          <div className="container">
            <CurrencyForm/>
          </div>
        </section>
      </Fragment>
    </CurrencyState>
  );
}

export default App;
