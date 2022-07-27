import React from 'react';
import './styles/loader.css'

function Loader() {
    return (
        <div>
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    );
};

export default Loader;