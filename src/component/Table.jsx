import { formatterDolar } from './formatterDolar';

const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
            <th> </th>
            <th>Cryptocoin</th>
            <th>Price</th>
            <th>%</th>
          </tr>
          {data.map((x, i) => (
            <tr key={x.id}>
              <td className='table-number'>{i + 1}</td>
              <td>{<img style={{width: 20}} src={x.image} alt="crypto" key={x.symbol}/>}{" " + x.name}
                <br/>
                <span className="symbol">{x.symbol.toUpperCase()}</span>
              </td>
              <td>{x.current_price < 0.85 ? "$" + x.current_price + " USD" : 
              formatterDolar.format(x.current_price) + " USD"}</td>
              <td className='table-percentage'><span className={x.price_change_percentage_1h_in_currency < 0 ? "coin-descent" : "coin-rise"}>
              {x.price_change_percentage_1h_in_currency.toFixed(2) + "%"}<span> 1h</span>
              </span><br/>
              <span className={x.price_change_percentage_24h_in_currency < 0 ? "coin-descent" : "coin-rise"}>
              {x.price_change_percentage_24h_in_currency.toFixed(2) + "%"}<span> 24h</span>
              </span><br/>
              <span className={x.price_change_percentage_7d_in_currency < 0 ? "coin-descent" : "coin-rise"}>
              {x.price_change_percentage_7d_in_currency.toFixed(2) + "%"}<span> 7d</span>
              </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;