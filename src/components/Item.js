import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  font-size: 13px;
  padding: 5px;
  margin: 10px;
  border: 2px solid lightblue;
  border-radius: 5px;
`

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;

`

const Item = ({item, addToBasket}) => {

  const onItemAdd = () => {
    addToBasket(item);
  }

  return (
    <ItemContainer>
      <p><b>{item.name}</b>: £{item.price}</p>
      <Button onClick={onItemAdd}>Add to basket</Button>
    </ItemContainer>
  );
}

export default Item;