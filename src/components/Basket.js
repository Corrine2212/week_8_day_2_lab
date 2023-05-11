import React, { useState } from 'react';
import Item from './Item';
import styled from 'styled-components';

const BasketHeader = styled.h2`
  text-align: center;
`

const BasketContainer = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* text-align: center; */
  margin: auto;

`
// const ItemsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   border-radius: 30px;
//   margin: 20px 0px 25px 0px;
//   width: 300px;

// `

const Items = styled.p`
  text-align: center;

`

const Basket = ({ basket, basketValue }) => {

  const basketItems = basket.map((item) => {
    const isInBasket = basket.includes(item);
    return <Item item={item} key={item.id} isInBasket={isInBasket} />
  });

  return (
    <>
      <BasketHeader>Your Basket:</BasketHeader>

      <BasketContainer>
          <Items>
            {basketItems}
            <p className='basket-value'>Total Basket: £{basketValue}</p>
          </Items>
      </BasketContainer>

    </>
  );
}


export default Basket;


