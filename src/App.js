import React, {Fragment, useEffect} from 'react';
import Navbar from './components/layout/Navbar';
import CurrencyForm from './components/currencyForm/CurrencyForm';
import Loader from './components/layout/Loader';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <Navbar/>
      <section className="section section-currency">
        <div className="container">
          <CurrencyForm/>
        </div>
      </section>
      <Loader />
    </Fragment>
  );
}

export default App;
