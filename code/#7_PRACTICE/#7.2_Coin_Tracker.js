import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coinInfo, setCoinInfo] = useState([]);
  const [coinPrice, setCoinPrice] = useState(0);
  const [budget, setBudget] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoinInfo(json);
        setLoading(false);
      });
  }, []);

  const handleCoin = (event) => {
    setCoinPrice(event.target.value);
    Clear();
  };
  
  const onChange = (event) => {
    setBudget(parseInt(event.target.value));
    if (event.target.value === "") {
      setBudget(0);
    }
  };
  
  const Clear = () => {
    setBudget(0);
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coinInfo.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
        ) : (
        <select onInput={handleCoin}>
          {coinInfo.map((coin) => <option key={coin.id} value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>)}
        </select>
      )}      
      <hr/>
      
      <label htmlFor="budget">Budget: </label>
      <input id="budget" value={budget} onChange={onChange}></input>
      <br/>
      
      <label htmlFor="coin">Coins: </label>
      <input id="coin" value={budget/coinPrice}></input>
      <br/>

      <button onClick={Clear}>Clear</button>
    </div>
  );
};

export default App;
