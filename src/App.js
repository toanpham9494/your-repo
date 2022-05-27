import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/hero/Hero";
import Market from "./Components/market/Market";
import Navbar from "./Components/navbar/Navbar";
import Coin from "./Components/coin/routes/Coin";
import Subscribe from "./Components/subscribe/Subscribe";
import Developer from "./Components/developer/Developer";
import About from "./Components/about/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/market/*" element={<Market />} />
          <Route path="/coin" element={<Coin />}>
            <Route path=":coinId" element={<Coin />} />  
        </Route>
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
