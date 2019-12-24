import React, { Fragment } from 'react';

const Error = () => {

    return (
        <Fragment>
            <p className="flow-text red-text">
                Sorry, either the max number of API calls have been reached or something has went wrong. Please try again or come back later.
            </p>
        </Fragment>
    )
}

export default Error
