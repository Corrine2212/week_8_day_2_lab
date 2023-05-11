import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ShopList from '../components/ShopList';
import NavBar from '../components/NavBar';
import Basket from '../components/Basket';

const ShopContainer = () => {

    const shopContainerItems = [
        { id: 1, name: "Swiftie Tshirt", price: 25, image: 'swiftie-shirt.png' },
        { id: 2, name: "Swiftie Hoodie", price: 45, image: 'swiftie-hoodie.png' },
        { id: 3, name: "Swiftie Beanie", price: 20, image: 'swiftie-hat.png' },
        { id: 4, name: "Swiftie Poster", price: 15, image: 'swiftie-poster.png' },
        { id: 5, name: "Swiftie CD", price: 15, image: 'swiftie-cd.png' },
    ];

    const [basket, setBasket] = useState([]);
    const [basketValue, setBasketValue] = useState(0);

    const addToBasket = (item) => {
        const updatedBasket = [...basket, item];
        let updatedBasketValue = basketValue;
        updatedBasketValue += item.price;
        setBasket(updatedBasket);
        setBasketValue(updatedBasketValue);
    };

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<ShopList items={shopContainerItems} addToBasket={(item) => { addToBasket(item) }} />} />
                <Route path="/basket" element={<Basket items={shopContainerItems} basket={basket} basketValue={basketValue} />} />
            </Routes>
        </Router>
    );
}

export default ShopContainer;