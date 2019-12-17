import React from 'react';
// import PropTypes from 'prop-types';

const Navbar = () => {
    return (
        <nav className="nav-bar green">
            <div className="nav-wrapper">
                <a href="index.html" className="brand-logo center">Currency Converter</a>
            </div>
        </nav>
    )
}

// Navbar.propTypes = {
//     addLog: PropTypes.func.isRequired
// }

export default Navbar