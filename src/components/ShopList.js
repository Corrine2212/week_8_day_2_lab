import React from 'react';
import Item from './Item';

const ShopList = ({items, addToBasket}) => {

  const listItems = items.map((item) => {
    return <Item item={item} key={item.id} addToBasket={addToBasket} />
  });

  return (
    <ul>
      {listItems} 
    </ul>
  );
}

export default ShopList;