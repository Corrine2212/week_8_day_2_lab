import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState} from 'react';
import ShopList from "./components/ShopList";
import Basket from "./components/Basket";
import NavBar from "./components/NavBar";

function App() {
  const shopContainerItems = [
    { id: 1, name: "Swiftie Tshirt", price: 25 },
    { id: 2, name: "Swiftie Hoodie", price: 45 },
    { id: 3, name: "Swiftie Beanie", price: 20 },
    { id: 4, name: "Swiftie Poster", price: 15 },
    { id: 5, name: "Swiftie CD", price: 15 },
  ];

  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    const updatedBasket = [...basket, item];
    setBasket(updatedBasket);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ShopList items={shopContainerItems} addToBasket={(item) => {addToBasket(item)}} />} />
        <Route path="/basket" element={<Basket items={shopContainerItems} basket={basket} />} />
      </Routes>
    </Router>
  );
}

export default App;
