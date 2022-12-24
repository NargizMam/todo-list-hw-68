import React from 'react';
import './ButtonSpinner.css';

const ButtonSpinner = () => {
    return (
        <>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </>
    );
};

export default ButtonSpinner;