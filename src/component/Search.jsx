import React from 'react';
import { useState } from 'react';
import Graphic from './Graphic';
import { formatterDolar } from './formatterDolar';

function Search({ data }) {
    const [query, setQuery] = useState();
    return (
        <div>
            <input 
            type="text" 
            placeholder='Search crypto'
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            {query === undefined || query.length >= 3 ?
            data.filter(x => x.id === query || x.symbol === query).map(y => (
                <div className='container' key={y.name}>
                    <div className='container-left'>
                        <img src={y.image} alt={y.symbol}/>
                        <div className='info-crypto'>
                            <h2>{y.name}</h2>
                            <span>{y.symbol.toUpperCase()}</span>
                            <p>{"Cap: " + formatterDolar.format(y.market_cap) + " USD"}</p>
                            <p>{"Vol: " + formatterDolar.format(y.total_volume) + " USD"}</p>
                        </div>
                    </div>
                    <div className='container-right'>
                        <div className='graphic'>
                            <h1>{y.current_price < 0.85 ? "$ " + y.current_price + " USD" :
                            formatterDolar.format(y.current_price) + " USD"}</h1>
                            <Graphic data={y.sparkline_in_7d.price} />
                        </div>
                        <div className='percentage'>
                            <span className={y.price_change_percentage_1h_in_currency < 0 ? "coin-descent" : "coin-rise"}>
                            {y.price_change_percentage_1h_in_currency.toFixed(2) + "%"}<span> 1h</span>
                            </span><br/>
                            <span className={y.price_change_percentage_24h_in_currency < 0 ? "coin-descent" : "coin-rise"}>
                            {y.price_change_percentage_24h_in_currency.toFixed(2) + "%"}<span> 24h</span>
                            </span><br/>
                            <span className={y.price_change_percentage_7d_in_currency < 0 ? "coin-descent" : "coin-rise"}>
                            {y.price_change_percentage_7d_in_currency.toFixed(2) + "%"}<span> 7d</span>
                            </span>
                        </div>
                    </div>
                </div>
            )) : null}
        </div>
    );
}

export default Search;