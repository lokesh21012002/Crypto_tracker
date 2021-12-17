import react,{useState,useEffect} from 'react';
import axios from 'axios'
import Coin from "./Coin"
import Head from "./Head"


import './App.css';

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")
  const handleChange = e => {
    setSearch(e.target.value)
  }
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) 
    )
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => {
        setCoins(res.data)
        console.log(res.data);
      
    }).catch((err)=> console.log(err))
  },[])
  return (
    <div className="coin-app">
           
      <div className="coin-search">
        
        <h1 className="coin-text">Search a <span className="green">Currency</span></h1>
        <form>
          <input type="text" placeholder="Search" required className="coin-input" onChange={handleChange}/>
          
        
        </form>
      </div>
      <Head/>
      {
        filteredCoins.map(coin => {
          return (
            <Coin key={coin.id} name={coin.name} image={coin.image} marketcap={coin.market_cap} symbol={coin.symbol} price={coin.current_price} priceChange={ coin.price_change_percentage_24h } volume={coin.total_volume}/>
          )
        
        })
     }
    </div>
  );
}

export default App;
