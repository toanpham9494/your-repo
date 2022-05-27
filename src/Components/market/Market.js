import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Coins from "../coin/Coins"
import Coin from "../coin/routes/Coin";



function Market() {
  const [coins, setcoins] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setcoins(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/market" element={<Coin />}>
            <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default Market;