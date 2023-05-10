import React from 'react';
import Item from './Item';
import styled from 'styled-components'

const ListContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  column-gap: 20px;

`

const ShopList = ({items, addToBasket}) => {

  const listItems = items.map((item) => {
    return <Item item={item} key={item.id} addToBasket={addToBasket} />
  });

  return (
    <ListContainer>
      {listItems} 
    </ListContainer>
  );
}

export default ShopList;