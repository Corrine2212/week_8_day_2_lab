import React, {useState} from 'react';
import Item from './Item';
import styled from 'styled-components';


const Items = styled.p`
  text-align: center;

`

const Basket = ({items, basket}) => {
  const basketItems = basket.map((item) => {
    return <Item item={item} key={item.id} />
  });


  return (
    <>

    <Items>{basketItems}</Items>
    </>
  );
}

export default Basket;