import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Loader from './component/Loader';
import Search from './component/Search';
import Table from './component/Table';

function App() {
  const [data, setData] = useState();

  useEffect(()=>{
    setInterval(() => {
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d")
      .then((response) => {
        setData(response.data);
      })
    }, 2000);

  },[])
  return (
    <div className="App">
      <div className='container-app'>
        <h1 className='title'>CryptoApp</h1>
        {data ? <Search data={data}/> : null}
        {data ? <Table data={data} /> : <Loader />}
      </div>
    </div>
  );
}

export default App;
